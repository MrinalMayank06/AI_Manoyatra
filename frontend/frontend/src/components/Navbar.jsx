import React, { useState, useEffect } from 'react'
import { assets } from "../assets/assets"
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("manoyatra_token");
    const storedUser = localStorage.getItem("manoyatra_user");
    
    if (storedToken) {
      setToken(true);
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("manoyatra_token");
    localStorage.removeItem("manoyatra_user");
    setToken(false);
    setUser(null);
    setShowDropdown(false);
    navigate('/login');
  };

  if (location.pathname === '/login') return null;

  return (
    <div className="flex items-center justify-between text-sm py-4 md:py-6 mb-5 border-b border-gray-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <img 
        onClick={() => navigate('/')} 
        className="w-36 md:w-48 cursor-pointer transition-transform hover:scale-105" 
        src={assets.logo} 
        alt="Manoyatra Logo" 
      />
      
      {token && (
        <ul className="hidden md:flex items-center gap-3 lg:gap-4 font-medium">
          <NavLink to="/manoai" className={({ isActive }) => 
            `relative py-2.5 px-5 rounded-full transition-all duration-300 text-sm font-bold ${
              isActive 
                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-200 scale-105' 
                : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-blue-200 hover:scale-105'
            }`}>
            <li className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              MANO AI
            </li>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-[10px] font-bold text-gray-900">AI</span>
            </span>
          </NavLink>
          <NavLink to="/" className={({ isActive }) => 
            `py-2 px-3 rounded-lg transition-all text-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
            <li>HOME</li>
          </NavLink>
          <NavLink to="/mentors" className={({ isActive }) => 
            `py-2 px-3 rounded-lg transition-all text-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
            <li>MENTORS</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `py-2 px-3 rounded-lg transition-all text-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
            <li>ABOUT</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `py-2 px-3 rounded-lg transition-all text-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
            <li>CONTACT</li>
          </NavLink>
        </ul>
      )}
      
      <div className="flex items-center gap-3 md:gap-4">
        {token ? (
          <div className='relative'>
            <div 
              onClick={() => setShowDropdown(!showDropdown)}
              className='flex items-center gap-2 cursor-pointer group hover:bg-blue-50 px-3 py-2 rounded-xl transition-all'
            >
              <img className='w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-blue-100' src={user?.image || assets.profile_pic} alt="Profile" />
              <img className='w-2.5 transition-transform hidden sm:block' src={assets.dropdown_icon} alt="" />
            </div>
            
            {showDropdown && (
              <div className='absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-52 py-3 z-50'>
                <div className='px-4 py-2 border-b border-gray-100'>
                  <p className='font-semibold text-gray-800 text-sm'>{user?.name || 'User'}</p>
                  <p className='text-xs text-gray-500 truncate'>{user?.email || 'user@example.com'}</p>
                </div>
                <div className='py-1'>
                  <p 
                    onClick={() => {navigate('/myprofile'); setShowDropdown(false);}} 
                    className='px-4 py-2.5 hover:bg-blue-50 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-3 text-sm'
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </p>
                  <p 
                    onClick={() => {navigate('/myappointments'); setShowDropdown(false);}} 
                    className='px-4 py-2.5 hover:bg-blue-50 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-3 text-sm'
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    My Appointments
                  </p>
                  <div className='px-4 pt-2 mt-1 border-t border-gray-100'>
                    <p 
                      onClick={handleLogout}
                      className='text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg cursor-pointer transition-colors flex items-center gap-3 text-sm'
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className='bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300'
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar