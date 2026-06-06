import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <div className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 rounded-3xl overflow-hidden shadow-2xl'>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative flex flex-col md:flex-row px-6 md:px-12 lg:px-20 py-12 md:py-16'>
        <div className='md:w-1/2 flex flex-col justify-center gap-6 z-10'>
          <div>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
              Your Journey to <span className='text-emerald-300'>Mental Wellness</span> Starts Here
            </p>
            <p className='text-blue-100 text-lg mt-4 max-w-xl'>
              Connect with certified mental health professionals who understand, 
              support, and guide you towards inner peace and clarity.
            </p>
          </div>
          
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <div className='flex items-center gap-3'>
              <div className='flex -space-x-3'>
                {[1,2,3,4].map((i) => (
                  <img 
                    key={i}
                    className='w-10 h-10 rounded-full border-2 border-white' 
                    src={assets.group_profiles} 
                    alt="User"
                  />
                ))}
              </div>
              <div className='text-white'>
                <p className='font-semibold'>500+ Active Users</p>
                <p className='text-sm text-blue-200'>Trusted by thousands worldwide</p>
              </div>
            </div>
          </div>
          
          <div className='flex flex-wrap gap-4 mt-4'>
            <button 
              onClick={() => navigate('/mentors')}
              className='flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group'
            >
              Find Your Mentor
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => navigate('/about')}
              className='border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300'
            >
              Learn More
            </button>
          </div>
          
          <div className='mt-8 grid grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
              <p className='text-2xl font-bold text-white'>100+</p>
              <p className='text-sm text-blue-200'>Expert Mentors</p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
              <p className='text-2xl font-bold text-white'>24/7</p>
              <p className='text-sm text-blue-200'>Support Available</p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
              <p className='text-2xl font-bold text-white'>98%</p>
              <p className='text-sm text-blue-200'>Satisfaction Rate</p>
            </div>
          </div>
        </div>
        
        <div className='md:w-1/2 relative mt-12 md:mt-0'>
          <div className='absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl'></div>
          
          <img 
            className='relative w-full max-w-2xl mx-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500' 
            src={assets.header_img} 
            alt="Mental Wellness" 
          />
          
          <div className='absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl max-w-xs'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className='font-semibold text-gray-800'>Verified Experts</p>
                <p className='text-sm text-gray-600'>All mentors are certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header