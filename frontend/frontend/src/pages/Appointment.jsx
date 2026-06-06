import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { APPContext } from '../context/APPContext'
import { assets } from '../assets/assets'
import RelatedMentors from '../components/RelatedMentors'

const Appointment = () => {
  const { mentorId } = useParams()
  const navigate = useNavigate()
  const { mentors, currencySymbol } = useContext(APPContext)
  const [mentorInfo, setMentorInfo] = useState(null)
  const [mentorSlots, setMentorSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [bookingStep, setBookingStep] = useState(1)
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    email: '',
    phone: '',
    concerns: '',
    sessionType: 'Video Call'
  })
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  useEffect(() => {
    const mentor = mentors.find(m => m._id === mentorId)
    setMentorInfo(mentor)
  }, [mentors, mentorId])

  useEffect(() => {
    if (mentorInfo) {
      generateTimeSlots()
    }
  }, [mentorInfo])

  const generateTimeSlots = () => {
    const today = new Date()
    const slots = []
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      const daySlots = []
      const startHour = 9
      const endHour = 18
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute of [0, 30]) {
          const time = new Date(date)
          time.setHours(hour, minute, 0)
          
          if (time > new Date()) {
            daySlots.push({
              datetime: time,
              time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            })
          }
        }
      }
      
      slots.push(daySlots)
    }
    
    setMentorSlots(slots)
  }

  const handleBooking = () => {
    if (bookingStep === 1 && slotTime) {
      setBookingStep(2)
    } else if (bookingStep === 2) {
      if (!patientDetails.name || !patientDetails.email || !patientDetails.phone) {
        alert('Please fill in all required fields marked with asterisk.')
        return
      }
      setShowPaymentInfo(true)
    }
  }

  const handleConfirmBooking = () => {
    alert('Appointment booked successfully. A confirmation has been sent to your email.')
    navigate('/myappointments')
  }

  const formatDate = (date) => {
    if (!date) return ''
    return `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${monthsOfYear[date.getMonth()]}`
  }

  if (!mentorInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50/30 to-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading mentor details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        <button
          onClick={() => navigate('/mentors')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 md:mb-8 group transition-colors"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Mentors</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  
                  <div className="md:w-2/5 lg:w-1/3 flex-shrink-0">
                    <img
                      src={mentorInfo.image}
                      alt={mentorInfo.name}
                      className="w-full rounded-2xl object-cover h-56 md:h-72 lg:h-80 shadow-md"
                    />
                    
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-xl md:text-2xl font-bold text-blue-700">{mentorInfo.rating || '4.8'}</p>
                        <p className="text-xs text-gray-600 mt-0.5">Rating</p>
                      </div>
                      <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                        <p className="text-xl md:text-2xl font-bold text-emerald-700">{mentorInfo.experience || '10+'}</p>
                        <p className="text-xs text-gray-600 mt-0.5">Years Exp.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 lg:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{mentorInfo.name}</h1>
                          <img className="w-5 h-5 md:w-6 md:h-6" src={assets.verified_icon} alt="Verified" />
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 text-xs md:text-sm font-semibold rounded-full">
                            {mentorInfo.speciality}
                          </span>
                          <span className="text-sm text-gray-500">{mentorInfo.degree}</span>
                        </div>
                      </div>
                      
                      <div className="sm:text-right">
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                          {currencySymbol}{mentorInfo.fees}
                          <span className="text-sm font-normal text-gray-500"> / session</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">45-60 minutes duration</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          About {mentorInfo.name.split(' ')[0]}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{mentorInfo.about}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Available Days</p>
                            <p className="text-xs text-gray-600">{mentorInfo.available_days?.join(', ') || 'Monday - Saturday'}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Languages</p>
                            <p className="text-xs text-gray-600">{mentorInfo.languages?.join(', ') || 'English, Hindi'}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Specialization Areas</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg border border-blue-100">Anxiety Disorders</span>
                          <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-lg border border-purple-100">Depression</span>
                          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs rounded-lg border border-emerald-100">Stress Management</span>
                          <span className="px-3 py-1.5 bg-amber-50 text-amber-700 text-xs rounded-lg border border-amber-100">CBT</span>
                          <span className="px-3 py-1.5 bg-rose-50 text-rose-700 text-xs rounded-lg border border-rose-100">Trauma Recovery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!showPaymentInfo ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 sm:justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                      bookingStep >= 1 ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-400'
                    }`}>1</div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Select Time Slot</p>
                      <p className="text-xs text-gray-500">Choose your preferred date and time</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block h-px flex-1 bg-gray-200 mx-4"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                      bookingStep >= 2 ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-400'
                    }`}>2</div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Confirm Details</p>
                      <p className="text-xs text-gray-500">Enter your personal information</p>
                    </div>
                  </div>
                </div>

                {bookingStep === 1 ? (
                  <>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5">Available Time Slots</h3>
                    
                    <div className="mb-6">
                      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-3">
                        {mentorSlots.map((daySlots, index) => {
                          if (daySlots.length === 0) return null
                          const date = daySlots[0].datetime
                          return (
                            <button
                              key={index}
                              onClick={() => { setSlotIndex(index); setSlotTime('') }}
                              className={`flex-shrink-0 w-20 md:w-24 p-3 md:p-4 rounded-xl border-2 transition-all ${
                                slotIndex === index 
                                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-md' 
                                  : 'border-gray-200 hover:border-blue-300 bg-white'
                              }`}
                            >
                              <p className="text-xs md:text-sm font-medium">{daysOfWeek[date.getDay()]}</p>
                              <p className="text-xl md:text-2xl font-bold my-0.5">{date.getDate()}</p>
                              <p className="text-[10px] md:text-xs">{monthsOfYear[date.getMonth()]}</p>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        {mentorSlots[slotIndex]?.length > 0 
                          ? `${mentorSlots[slotIndex].length} slots available` 
                          : 'No slots available for this date'}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
                        {mentorSlots[slotIndex]?.map((slot, index) => (
                          <button
                            key={index}
                            onClick={() => setSlotTime(slot.time)}
                            className={`p-2.5 md:p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                              slot.time === slotTime 
                                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-md' 
                                : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700'
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Your Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={patientDetails.name}
                          onChange={(e) => setPatientDetails({...patientDetails, name: e.target.value})}
                          className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={patientDetails.email}
                          onChange={(e) => setPatientDetails({...patientDetails, email: e.target.value})}
                          className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={patientDetails.phone}
                          onChange={(e) => setPatientDetails({...patientDetails, phone: e.target.value})}
                          className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Session Type
                        </label>
                        <select
                          value={patientDetails.sessionType}
                          onChange={(e) => setPatientDetails({...patientDetails, sessionType: e.target.value})}
                          className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                        >
                          <option value="Video Call">Video Call</option>
                          <option value="Audio Call">Audio Call</option>
                          <option value="In-Person">In-Person</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Primary Concerns
                      </label>
                      <textarea
                        value={patientDetails.concerns}
                        onChange={(e) => setPatientDetails({...patientDetails, concerns: e.target.value})}
                        className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                        rows="3"
                        placeholder="Briefly describe what you would like to discuss in the session..."
                      />
                      <p className="text-xs text-gray-400 mt-1">This helps the mentor prepare for your session.</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {bookingStep > 1 && (
                    <button
                      onClick={() => setBookingStep(1)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors order-2 sm:order-1"
                    >
                      Back to Slots
                    </button>
                  )}
                  
                  <button
                    onClick={handleBooking}
                    disabled={bookingStep === 1 && !slotTime}
                    className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all order-1 sm:order-2 ${
                      bookingStep === 1 && !slotTime
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg hover:scale-[1.02]'
                    }`}
                  >
                    {bookingStep === 1 ? 'Continue to Details' : 'Review and Confirm'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Integration Pending</h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                    The payment gateway, banking integration, and account processing systems are currently under development. This feature will be available once regulatory compliance and security protocols are fully implemented.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-amber-800 text-sm">Important Notice</p>
                      <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                        We apologize for the inconvenience. Payment processing, banking, and fund transfer capabilities are not yet accessible in this version. Our team is working to integrate secure payment gateways compliant with Indian financial regulations. Until then, appointments are processed as reservations without financial transactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mentor</span>
                      <span className="font-medium">{mentorInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date and Time</span>
                      <span className="font-medium">{formatDate(mentorSlots[slotIndex]?.[0]?.datetime)} at {slotTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Session Type</span>
                      <span className="font-medium">{patientDetails.sessionType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">60 minutes</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="font-semibold">Amount</span>
                      <span className="font-bold text-gray-900">{currencySymbol}{mentorInfo.fees}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowPaymentInfo(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all text-sm"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>
            )}

            <RelatedMentors mentorId={mentorId} speciality={mentorInfo.speciality} />
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 sticky top-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <img
                    src={mentorInfo.image}
                    alt={mentorInfo.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover flex-shrink-0 shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base truncate">{mentorInfo.name}</p>
                    <p className="text-xs md:text-sm text-gray-500 truncate">{mentorInfo.speciality}</p>
                  </div>
                </div>
                
                {slotTime ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Date and Time</span>
                        <span className="font-medium text-right">
                          {formatDate(mentorSlots[slotIndex]?.[0]?.datetime)}
                          <span className="text-gray-400"> at </span>
                          {slotTime}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Session Type</span>
                        <span className="font-medium">{patientDetails.sessionType}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">60 minutes</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-semibold">Total Amount</span>
                        <span className="text-xl font-bold text-gray-900">{currencySymbol}{mentorInfo.fees}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Payment pending integration</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-gray-500">Select a time slot to view booking details</p>
                  </div>
                )}
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free cancellation up to 24 hours before</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>End-to-end encrypted sessions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HIPAA compliant platform</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-5 sm:p-6 border border-blue-100">
              <h4 className="font-bold text-gray-800 mb-2">Need Immediate Help?</h4>
              <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                If you are experiencing a mental health crisis, please reach out to emergency services or a crisis helpline immediately.
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700">24/7 Helplines:</p>
                <p className="text-xs text-gray-600">Kiran Mental Health: 1800-599-0019</p>
                <p className="text-xs text-gray-600">AASRA: +91 9820466726</p>
                <p className="text-xs text-gray-600">Emergency: 108 (Ambulance)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment