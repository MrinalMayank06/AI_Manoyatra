import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-700 shadow-2xl my-20'>
            <div className='absolute inset-0'>
                <div className='absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full translate-x-1/3 translate-y-1/3'></div>
            </div>
            
            <div className='relative flex flex-col md:flex-row items-center px-8 md:px-16 py-12'>
                <div className='md:w-1/2 text-white'>
                    <div className='mb-6'>
                        <span className='inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4'>
                            🚀 Limited Time Offer
                        </span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            Your First Session <span className='text-emerald-300'>50% Off</span>
                        </h1>
                    </div>
                    
                    <p className='text-blue-100 text-lg mb-8 max-w-xl'>
                        Begin your mental wellness journey today. Book your first appointment with 
                        any of our 100+ certified mentors at half the price. No commitment required.
                    </p>
                    
                    <div className='flex flex-wrap gap-4 items-center'>
                        <button 
                            onClick={() => {navigate('/mentors'); scrollTo(0,0)}}
                            className='bg-white text-blue-900 font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group'
                        >
                            <span>Claim Your 50% Discount</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={() => {navigate('/login'); scrollTo(0,0)}}
                            className='border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300'
                        >
                            Create Free Account
                        </button>
                    </div>
                    
                    <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-6'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>100% Secure</p>
                                <p className='text-sm text-blue-200'>End-to-end encryption</p>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>Verified</p>
                                <p className='text-sm text-blue-200'>Background checked experts</p>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>24/7 Support</p>
                                <p className='text-sm text-blue-200'>Always here to help</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='md:w-1/2 mt-12 md:mt-0 relative'>
                    <div className='relative max-w-md mx-auto'>
                        <img 
                            className='w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500' 
                            src={assets.appointment_img} 
                            alt="Appointment" 
                        />
                        
                        <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl max-w-xs'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-semibold text-gray-800'>500+ Sessions Daily</p>
                                    <p className='text-xs text-gray-600'>Trusted by thousands worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner