import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopMentors from '../components/TopMentors'
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopMentors />
      <Banner />
      
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Confidential and Secure</h3>
              <p className="text-blue-200 leading-relaxed text-sm">
                Your privacy is our highest priority. All conversations are encrypted and never shared with third parties. We follow strict healthcare data protection standards.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg className="w-7 h-7 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Available 24/7</h3>
              <p className="text-blue-200 leading-relaxed text-sm">
                Access mental wellness support anytime you need it. Our AI assistant and booking system are available round the clock, with flexible scheduling for mentor sessions.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Professionals</h3>
              <p className="text-blue-200 leading-relaxed text-sm">
                Every mentor on our platform undergoes rigorous verification including credential checks, background screening, and ongoing quality assessments for your safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Begin Your Wellness Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step toward better mental health. Our platform connects you with the right support system tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Choose Specialist</h4>
              <p className="text-sm text-gray-600">Select from our range of mental health professionals</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Book Session</h4>
              <p className="text-sm text-gray-600">Schedule at your convenience with flexible timing</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Attend Consultation</h4>
              <p className="text-sm text-gray-600">Connect via video, audio, or in-person session</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 text-center border border-rose-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Track Progress</h4>
              <p className="text-sm text-gray-600">Monitor your wellness journey with regular follow-ups</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/manoai')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Try Mano AI Assistant
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home