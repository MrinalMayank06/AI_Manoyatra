import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Us</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We are here to help you on your mental wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          
          <div className="space-y-6">
            <img 
              className="w-full rounded-2xl shadow-lg object-cover h-64 md:h-80" 
              src={assets.contact_image} 
              alt="Contact Manoyatra" 
            />
            
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-6 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Office
                </h3>
                <div className="space-y-1 text-sm text-gray-600 leading-relaxed">
                  <p>Suite 1103, Aurum Heights</p>
                  <p>Embassy Tech Square, Outer Ring Road</p>
                  <p>Bengaluru, Karnataka - 560103</p>
                  <p className="text-xs text-gray-400 mt-1">India</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Details
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Phone:</span> +91 620-577-3037
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Email:</span> support@manoyatra.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Hours:</span> Monday - Saturday, 9:00 AM - 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your Wellness Partner</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Team Manoyatra is dedicated to providing compassionate mental health support. Every interaction is handled with care, confidentiality, and respect for your journey.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <button className="w-full border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all text-sm">
                  Explore Career Opportunities
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8 sticky top-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
              <p className="text-sm text-gray-500 mb-6">We typically respond within 24 hours.</p>

              {submitted && (
                <div className="mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 md:py-3.5 rounded-xl hover:shadow-lg hover:scale-[1.01] transition-all duration-300 text-sm"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                Your information is kept confidential and is never shared with third parties.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Quick Response</h4>
            <p className="text-xs text-gray-500 mt-1">Within 24 hours</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Confidential</h4>
            <p className="text-xs text-gray-500 mt-1">Your privacy is protected</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Dedicated Support</h4>
            <p className="text-xs text-gray-500 mt-1">Personalized assistance</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Compassionate Care</h4>
            <p className="text-xs text-gray-500 mt-1">We genuinely care</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact