import React from 'react'
import { specialityData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SpecialityMenu = () => {
    const navigate = useNavigate()

    const specialityColors = {
        'Psychiatrist': 'from-purple-500 to-purple-600',
        'Neurologist': 'from-blue-500 to-cyan-500',
        'Psychologist': 'from-emerald-500 to-green-500',
        'Counselor': 'from-amber-500 to-orange-500',
        'Therapist': 'from-pink-500 to-rose-500',
        'Neuropsychologist': 'from-indigo-500 to-blue-500',
        'Addiction Specialist': 'from-red-500 to-orange-500',
        'Trauma Specialist': 'from-gray-700 to-gray-800'
    }

    return (
        <div className='relative py-16 md:py-24 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-emerald-50/20'></div>
            
            <div className='relative max-w-7xl mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent'>
                        Find Support by Specialization
                    </h1>
                    <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
                        Connect with experts who specialize in your specific needs. Each mentor brings 
                        unique expertise to support your mental wellness journey.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
                    {specialityData.map((item, index) => (
                        <div
                            onClick={() => {navigate(`/mentors/${item.speciality}`); scrollTo(0, 0)}}
                            className={`group relative bg-gradient-to-br ${specialityColors[item.speciality] || 'from-blue-500 to-emerald-500'} rounded-2xl p-6 text-white cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                            key={index}
                        >
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors'></div>
                            <div className='absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
                            
                            <div className='relative z-10'>
                                <div className='w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <img className='w-10 h-10 filter brightness-0 invert' src={item.image} alt="" />
                                </div>
                                
                                <p className='text-center font-semibold text-lg mb-2'>{item.speciality}</p>
                                <p className='text-white/80 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    {index * 12 + 15}+ Experts
                                </p>
                            </div>
                            
                            <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <div className='inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg'>
                        <div className='text-left'>
                            <p className='text-sm text-gray-600'>Need help choosing?</p>
                            <p className='font-semibold text-gray-800'>Take our 2-minute assessment</p>
                        </div>
                        <button className='bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all'>
                            Start Assessment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialityMenu