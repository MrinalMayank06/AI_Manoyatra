import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'All Mentors', path: '/mentors' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Privacy Policy', path: '#' },
        { label: 'Terms of Service', path: '#' }
    ]

    const resources = [
        'Mental Health Resources',
        'Self-Care Guides',
        'Meditation Library',
        'Crisis Support',
        'Community Forum',
        'Blog & Articles'
    ]

    return (
        <footer className="relative bg-gradient-to-b from-gray-50 to-white mt-40">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"></div>
            
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <img className="w-48" src={assets.logo} alt="Manoyatra" />
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 text-sm font-semibold rounded-full">
                                🌱 Growing Together
                            </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
                            Manoyatra is a comprehensive digital platform seamlessly connecting individuals with 
                            specialized mental health professionals. We foster accessible, trusted, and personalized 
                            guidance to support your wellness journey every step of the way.
                        </p>
                        
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => navigate('/mentors')}
                                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
                            >
                                Book First Session
                            </button>
                            <button 
                                onClick={() => navigate('/login')}
                                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                            >
                                Join Community
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => link.path !== '#' && navigate(link.path)}
                                        className="text-gray-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Contact */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {resources.map((resource, index) => (
                                    <li key={index} className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">
                                        {resource}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 620-566-3037</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>support@manoyatra.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social & Newsletter */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6">
                            <span className="text-gray-700 font-medium">Follow our journey:</span>
                            <div className="flex gap-4">
                                {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                                    <button
                                        key={platform}
                                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 flex items-center justify-center text-gray-600 hover:from-blue-100 hover:to-emerald-100 hover:text-blue-600 transition-all"
                                    >
                                        {platform === 'Twitter' && '𝕏'}
                                        {platform === 'LinkedIn' && 'in'}
                                        {platform === 'Instagram' && 'IG'}
                                        {platform === 'YouTube' && '▶'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Subscribe to wellness tips"
                                className="pl-5 pr-32 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="absolute right-1 top-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500">
                        © 2024 Manoyatra Wellness Platform. All rights reserved. | 
                        <span className="text-blue-600"> HIPAA Compliant</span> | 
                        <span className="text-emerald-600"> ISO 27001 Certified</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Empowering minds, one conversation at a time. You are not alone. 💚
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer