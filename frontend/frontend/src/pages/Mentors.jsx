import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { APPContext } from '../context/APPContext'

const Mentors = () => {
  const { speciality } = useParams()
  const [filterMentors, setFilterMentors] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { mentors } = useContext(APPContext)

  const specialties = [
    'Psychiatrist',
    'Neuropsychologist',
    'Neurologist',
    'Rehabilitation Psychologist',
    'Addiction Psychiatrist',
    'Trauma Specialist'
  ]

  useEffect(() => {
    let filtered = mentors
    
    if (speciality) {
      const clean = decodeURIComponent(speciality)
      filtered = filtered.filter(mentor => mentor.speciality === clean)
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(mentor => 
        mentor.name.toLowerCase().includes(query) ||
        mentor.speciality.toLowerCase().includes(query)
      )
    }
    
    setFilterMentors(filtered)
  }, [mentors, speciality, searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Mentors</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our verified mental health professionals and find the right mentor for your wellness journey.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mentors by name or specialty..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 lg:sticky lg:top-4">
              <h3 className="font-bold text-gray-800 mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by Specialty
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => navigate('/mentors')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    !speciality 
                      ? 'bg-blue-50 text-blue-700 font-semibold' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  All Mentors
                </button>
                {specialties.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => navigate(`/mentors/${encodeURIComponent(spec)}`)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      decodeURIComponent(speciality || '') === spec
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Need help choosing?</p>
                  <p className="text-xs text-gray-500 mb-3">
                    Not sure which specialist is right for you? Try our AI assistant for guidance.
                  </p>
                  <button
                    onClick={() => navigate('/manoai')}
                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-lg hover:shadow-md transition-all"
                  >
                    Ask Mano AI
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {filterMentors.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-700 mb-1">No Mentors Found</h3>
                <p className="text-sm text-gray-500">
                  {searchQuery 
                    ? 'Try adjusting your search terms.' 
                    : 'No mentors available for this specialty yet.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filterMentors.map((item, index) => (
                  <div
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                    key={index}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6">
                      <img
                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover mx-auto shadow-md group-hover:scale-105 transition-transform duration-300"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-green-600 font-medium">Available</span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 mb-3">{item.speciality}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{item.experience || '10+'} years exp.</span>
                        <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Book Now
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentors