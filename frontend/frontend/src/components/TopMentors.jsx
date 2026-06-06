import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const TopMentors = () => {
  const navigate = useNavigate();
  const { mentors, currencySymbol } = useContext(AppContext);

  const ratingStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}.0</span>
      </div>
    );
  };

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-emerald-50/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
            Featured Expert Mentors
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Connect with our most trusted mental health professionals, carefully selected 
            for their expertise, empathy, and proven track record of transforming lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mentors.slice(0, 8).map((mentor, index) => (
            <div
              key={mentor._id}
              onClick={() => {navigate(`/appointment/${mentor._id}`); scrollTo(0, 0)}}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  TOP RATED
                </div>
              </div>
              
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={mentor.image}
                  alt={mentor.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Available Today</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-gray-600">{mentor.speciality}</p>
                  </div>
                  <img className="w-6 h-6" src={assets.verified_icon} alt="Verified" />
                </div>

                <div className="mb-4">
                  {ratingStars(mentor.rating || 4.5)}
                  <p className="text-xs text-gray-500 mt-1">{mentor.experience}+ Years Experience</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>{mentor.degree}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">{currencySymbol}{mentor.fees}/session</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold py-3 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group">
                  Book Appointment
                  <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => { navigate('/mentors'); scrollTo(0, 0) }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-blue-100 hover:scale-105 transition-all duration-300"
          >
            Explore All 100+ Mentors
            <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="text-gray-500 text-sm mt-6">
            ✅ All mentors are verified professionals | 🔒 100% secure & confidential | ⏰ 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopMentors;
