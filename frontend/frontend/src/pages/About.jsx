import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">We Are</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding our mission, our values, and the people behind your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div>
            <img 
              className="w-full rounded-2xl shadow-lg object-cover h-72 md:h-96" 
              src={assets.about_image} 
              alt="About Manoyatra" 
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                A Space Where Science Meets Compassion
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Welcome to Manoyatra, a platform built on the belief that mental wellness deserves the same attention and care as physical health. We understand that sometimes life feels overwhelming, and all you need is someone who truly listens, someone who connects with your silence as deeply as your words.
              </p>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At Manoyatra, every mentor is selected not only for their clinical expertise but for their ability to provide genuine compassionate care. Each professional on our platform undergoes rigorous verification including credential checks, background screening, and ongoing quality assessments.
            </p>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We are committed to delivering the highest standard of mental health guidance by blending evidence-based practices with authentic human connection. Your well-being is at the center of everything we do, and we walk with you step by step on your journey toward clarity, strength, and inner peace.
            </p>

            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 italic">
                Margdarshan
              </h3>
              <p className="text-sm text-gray-500 mt-1">Guidance for the soul</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-3">
                When life feels heavy and words remain unspoken, we provide a safe space where your thoughts are heard, your pain is acknowledged, and your journey is respected. Every mentor walks beside you, not ahead of you, helping you rediscover strength, hope, and inner peace.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Manoyatra</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">What sets us apart in your wellness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Seamless Convenience</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Quick booking in under two minutes with smart slot suggestions and instant confirmations. Manoyatra delivers a smooth, concierge-like experience from browsing to booking your session.
            </p>
          </div>

          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Clinical-Grade Mentors</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Carefully vetted experts with verified credentials, evidence-based guidance, and deep empathy. Every conversation is built on trust, professionalism, and measurable progress toward your goals.
            </p>
          </div>

          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Effortless Efficiency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Timely reminders, secure digital records, and friction-free follow-ups ensure your time and energy are preserved. Focus entirely on what matters most: your mental wellness journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed text-sm md:text-base">
              To make quality mental health support accessible, affordable, and stigma-free for every individual. We believe that mental wellness is a fundamental right, not a privilege, and we are committed to breaking barriers that prevent people from seeking the help they deserve.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-emerald-100 leading-relaxed text-sm md:text-base">
              A world where seeking mental health support is as natural and accepted as visiting a doctor for physical ailments. We envision a society where emotional well-being is prioritized, conversations about mental health are open and honest, and everyone has access to the care they need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">5000+</p>
            <p className="text-sm text-gray-600">Sessions Completed</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">50+</p>
            <p className="text-sm text-gray-600">Verified Mentors</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">98%</p>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-rose-600 mb-1">24/7</p>
            <p className="text-sm text-gray-600">Support Available</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-10 border border-blue-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Begin Your Journey Today</h3>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Take the first step toward better mental health. Our platform is designed to connect you with the right support system tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/mentors')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm"
            >
              Find a Mentor
            </button>
            <button
              onClick={() => navigate('/manoai')}
              className="px-6 py-3 border-2 border-blue-300 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all text-sm"
            >
              Try Mano AI Assistant
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About