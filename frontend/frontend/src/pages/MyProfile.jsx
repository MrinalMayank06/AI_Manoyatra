import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mayank Krishnan",
    image: assets.profile_pic,
    email: 'mayankrishna08@gmail.com',
    phone: '+91 6205773037',
    address: {
      line1: "Manoyatra Corporate Office Level 12,",
      line2: "One BKC, G Block, Bandra Kurla Complex",
      line3: "Bandra (East), Mumbai - 400051, Maharashtra, India"
    },
    gender: 'Male',
    dob: '2005-02-06'
  })

  const [isEdit, setIsEdit] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("manoyatra_user")
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        setUserData(prev => ({
          ...prev,
          ...parsed,
          image: parsed.image || assets.profile_pic,
          address: parsed.address || prev.address
        }))
      } catch (e) {
        console.error("Failed to parse stored user data")
      }
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem("manoyatra_user", JSON.stringify(userData))
    setIsEdit(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUserData(prev => ({ ...prev, image: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Profile
          </h1>
          <p className="text-sm md:text-base text-gray-600">Manage your personal information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center sticky top-4">
              <div className="relative inline-block mb-4">
                <img
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-100 shadow-md mx-auto"
                  src={userData.image}
                  alt="Profile"
                />
                {isEdit && (
                  <label className="absolute bottom-0 right-0 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              
              {isEdit ? (
                <input
                  className="text-xl font-bold text-center border-b-2 border-blue-300 focus:outline-none focus:border-blue-600 w-full py-1 transition-colors"
                  type="text"
                  value={userData.name}
                  onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                />
              ) : (
                <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
              )}
              
              <p className="text-sm text-gray-500 mt-1">{userData.email}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">Member since January 2024</p>
              </div>

              {!isEdit && (
                <button
                  onClick={() => setIsEdit(true)}
                  className="mt-4 w-full py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
              
              {saved && (
                <div className="mb-5 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Profile updated successfully.
                </div>
              )}

              <div className="space-y-8">
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={userData.email}
                        disabled
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 text-sm cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      {isEdit ? (
                        <input
                          type="text"
                          value={userData.phone}
                          onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="+91 9876543210"
                        />
                      ) : (
                        <p className="text-sm text-gray-700 py-2.5">{userData.phone || 'Not provided'}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </h3>
                  
                  {isEdit ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={userData.address.line1}
                        onChange={e => setUserData(prev => ({
                          ...prev, address: { ...prev.address, line1: e.target.value }
                        }))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Address line 1"
                      />
                      <input
                        type="text"
                        value={userData.address.line2}
                        onChange={e => setUserData(prev => ({
                          ...prev, address: { ...prev.address, line2: e.target.value }
                        }))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Address line 2"
                      />
                      <input
                        type="text"
                        value={userData.address.line3}
                        onChange={e => setUserData(prev => ({
                          ...prev, address: { ...prev.address, line3: e.target.value }
                        }))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="City, State, PIN"
                      />
                    </div>
                  ) : (
                    <div className="text-sm text-gray-700 leading-relaxed space-y-1">
                      <p>{userData.address.line1}</p>
                      <p>{userData.address.line2}</p>
                      <p>{userData.address.line3}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender</label>
                      {isEdit ? (
                        <select
                          value={userData.gender}
                          onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      ) : (
                        <p className="text-sm text-gray-700 py-2.5">{userData.gender || 'Not provided'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                      {isEdit ? (
                        <input
                          type="date"
                          value={userData.dob}
                          onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      ) : (
                        <p className="text-sm text-gray-700 py-2.5">
                          {userData.dob 
                            ? new Date(userData.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                            : 'Not provided'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {isEdit && (
                  <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => setIsEdit(false)}
                      className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:shadow-lg font-medium text-sm transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => window.location.href = '/myappointments'}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">My Appointments</p>
                    <p className="text-xs text-gray-500">View upcoming sessions</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => window.location.href = '/manoai'}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Talk to Mano AI</p>
                    <p className="text-xs text-gray-500">AI mental wellness assistant</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile