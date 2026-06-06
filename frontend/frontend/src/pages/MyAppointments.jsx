import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const MyAppointments = () => {
  const { mentors, currencySymbol } = useContext(AppContext)
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      mentorId: '1',
      date: '2024-03-15',
      time: '10:30 AM',
      status: 'Confirmed',
      type: 'Video Call',
      notes: 'Initial consultation for anxiety management'
    },
    {
      id: 2,
      mentorId: '3',
      date: '2024-03-18',
      time: '2:00 PM',
      status: 'Pending',
      type: 'In-Person',
      notes: 'Follow-up session for cognitive behavioral therapy'
    },
    {
      id: 3,
      mentorId: '5',
      date: '2024-03-20',
      time: '4:45 PM',
      status: 'Completed',
      type: 'Audio Call',
      notes: 'Stress management techniques discussion'
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Video Call': return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
      case 'In-Person': return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
      case 'Audio Call': return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
      default: return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  }

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'Cancelled' } : app
    ))
  }

  const activeAppointments = appointments.filter(a => a.status !== 'Completed' && a.status !== 'Cancelled')
  const completedAppointments = appointments.filter(a => a.status === 'Completed')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Appointments
          </h1>
          <p className="text-sm md:text-base text-gray-600">Manage and track your scheduled wellness sessions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            {activeAppointments.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">Active Sessions</h2>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {activeAppointments.length} active
                  </span>
                </div>

                <div className="divide-y divide-gray-50">
                  {activeAppointments.map((appointment) => {
                    const mentor = mentors.find(m => m._id === appointment.mentorId) || mentors[0]
                    
                    return (
                      <div key={appointment.id} className="p-5 sm:p-6 hover:bg-blue-50/20 transition-colors">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover border-2 border-blue-100 flex-shrink-0 shadow-sm"
                          />
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <div>
                                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{mentor.name}</h3>
                                <p className="text-xs md:text-sm text-gray-500">{mentor.speciality}</p>
                              </div>
                              
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                                {appointment.status}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{new Date(appointment.date).toLocaleDateString('en-US', { 
                                  weekday: 'short', month: 'short', day: 'numeric' 
                                })}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{appointment.time}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                {getTypeIcon(appointment.type)}
                                <span>{appointment.type}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="truncate">{appointment.notes}</span>
                            </div>
                            
                            <div className="mt-4 flex flex-wrap gap-2">
                              {appointment.status === 'Confirmed' && (
                                <>
                                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-lg hover:shadow-md transition-all">
                                    Join Session
                                  </button>
                                  <button 
                                    onClick={() => handleCancelAppointment(appointment.id)}
                                    className="px-4 py-2 border border-red-200 text-red-600 text-xs font-medium rounded-lg hover:bg-red-50 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </>
                              )}
                              {appointment.status === 'Pending' && (
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-lg hover:shadow-md transition-all">
                                  Confirm Appointment
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {completedAppointments.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-800">Past Sessions</h2>
                </div>

                <div className="divide-y divide-gray-50">
                  {completedAppointments.map((appointment) => {
                    const mentor = mentors.find(m => m._id === appointment.mentorId) || mentors[0]
                    
                    return (
                      <div key={appointment.id} className="p-5 sm:p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover border-2 border-gray-100 flex-shrink-0 opacity-75"
                          />
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <div>
                                <h3 className="font-semibold text-gray-600 text-sm md:text-base">{mentor.name}</h3>
                                <p className="text-xs md:text-sm text-gray-400">{mentor.speciality}</p>
                              </div>
                              
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                                Completed
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-3">
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{new Date(appointment.date).toLocaleDateString('en-US', { 
                                  weekday: 'short', month: 'short', day: 'numeric' 
                                })}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{appointment.time}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                                {getTypeIcon(appointment.type)}
                                <span>{appointment.type}</span>
                              </div>
                            </div>
                            
                            <button className="px-4 py-2 border border-blue-200 text-blue-600 text-xs font-medium rounded-lg hover:bg-blue-50 transition-colors">
                              View Summary
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {appointments.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-700 mb-2">No Appointments Yet</h3>
                <p className="text-sm text-gray-500 mb-5">Schedule your first session with a mentor.</p>
                <button
                  onClick={() => navigate('/mentors')}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-medium rounded-xl hover:shadow-md transition-all"
                >
                  Browse Mentors
                </button>
              </div>
            )}
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-bold mb-4">Session Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Total Sessions</span>
                  <span className="text-xl font-bold">{appointments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Active</span>
                  <span className="text-xl font-bold">{activeAppointments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Completed</span>
                  <span className="text-xl font-bold">{completedAppointments.length}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2.5">
                <button 
                  onClick={() => navigate('/mentors')}
                  className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                >
                  <span>Schedule New Session</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                  <span>Download Reports</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button 
                  onClick={() => navigate('/manoai')}
                  className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm"
                >
                  <span>Talk to Mano AI</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-amber-700 leading-relaxed">
                  <span className="font-semibold">Payment Notice:</span> Payment processing and banking integrations are currently under development. Appointments are processed as reservations without financial transactions at this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAppointments
