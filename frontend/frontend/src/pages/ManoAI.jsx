import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAI } from '../context/AIContext';

const SPECIALISTS = [
  {
    key: 'Psychiatrist',
    name: 'Psychiatrist',
    specialty: 'Mental Health and Mood Disorders',
    description: 'Specialist in depression, anxiety, bipolar disorder, schizophrenia, OCD, and overall mental wellness. Provides evidence-based guidance on medication management and psychotherapy options.',
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    hoverBorder: 'hover:border-blue-400',
    shadow: 'hover:shadow-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    key: 'Neuropsychologist',
    name: 'Neuropsychologist',
    specialty: 'Brain-Behavior and Cognition',
    description: 'Expert in cognitive function, memory disorders, attention issues, learning disabilities, and brain-behavior relationships. Helps with cognitive exercises and rehabilitation strategies.',
    color: 'from-purple-500 to-pink-600',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    hoverBorder: 'hover:border-purple-400',
    shadow: 'hover:shadow-purple-100',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    key: 'Neurologist',
    name: 'Neurologist',
    specialty: 'Nervous System Disorders',
    description: 'Specialist in headaches, migraines, seizures, dizziness, numbness, sleep disorders, and movement disorders. Explains neurological symptoms and diagnostic procedures.',
    color: 'from-cyan-500 to-blue-600',
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-700',
    hoverBorder: 'hover:border-cyan-400',
    shadow: 'hover:shadow-cyan-100',
    badge: 'bg-cyan-100 text-cyan-700',
  },
  {
    key: 'Rehabilitation Psychologist',
    name: 'Rehabilitation Psychologist',
    specialty: 'Recovery and Rehabilitation',
    description: 'Expert in recovery from physical injury, addiction, disability adjustment, chronic illness coping, and lifestyle modification. Provides motivation and practical coping strategies.',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    hoverBorder: 'hover:border-emerald-400',
    shadow: 'hover:shadow-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    key: 'Addiction Psychiatrist',
    name: 'Addiction Psychiatrist',
    specialty: 'Addiction and Substance Use',
    description: 'Specialist in substance abuse, alcohol addiction, behavioral addictions including gambling and gaming, withdrawal management, and relapse prevention strategies.',
    color: 'from-orange-500 to-red-600',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    hoverBorder: 'hover:border-orange-400',
    shadow: 'hover:shadow-orange-100',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    key: 'Trauma Specialist',
    name: 'Trauma Specialist',
    specialty: 'PTSD and Emotional Trauma',
    description: 'Expert in PTSD, childhood trauma, abuse recovery, accident trauma, grief counseling, and emotional regulation. Uses trauma-informed approaches and grounding techniques.',
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-700',
    hoverBorder: 'hover:border-rose-400',
    shadow: 'hover:shadow-rose-100',
    badge: 'bg-rose-100 text-rose-700',
  },
];

const ManoAI = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  
  const { 
    agentType, 
    setAgentType, 
    aiMessages, 
    isLoading, 
    sendMessage, 
    clearChat 
  } = useAI();

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [aiMessages, scrollToBottom]);

  const handleSelectAgent = (agentKey) => {
    setSelectedAgent(agentKey);
    setAgentType(agentKey);
  };

  const handleBack = () => {
    setSelectedAgent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading) {
      sendMessage(inputMessage.trim());
      setInputMessage('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const selectedSpecialist = SPECIALISTS.find(s => s.key === selectedAgent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {!selectedAgent ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl shadow-lg mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Mano AI
              <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mt-2">
                Mental Wellness Assistant
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Select a specialist below to begin a confidential conversation. 
              Each specialist is trained to provide supportive guidance in their area of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {SPECIALISTS.map((specialist) => (
              <div
                key={specialist.key}
                onClick={() => handleSelectAgent(specialist.key)}
                className={`group cursor-pointer bg-white rounded-2xl shadow-sm border-2 ${specialist.borderColor} ${specialist.hoverBorder} ${specialist.shadow} p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${specialist.bgLight} rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <span className={`text-xl sm:text-2xl font-bold ${specialist.textColor}`}>
                    {specialist.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-gray-700 transition-colors">
                  {specialist.name}
                </h3>
                <span className={`inline-block text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${specialist.badge} uppercase tracking-wider`}>
                  {specialist.specialty}
                </span>
                <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 leading-relaxed line-clamp-4">
                  {specialist.description}
                </p>

                <div className={`w-full py-2.5 sm:py-3 bg-gradient-to-r ${specialist.color} text-white rounded-xl font-medium text-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02] flex items-center justify-center gap-2`}>
                  <span>Start Conversation</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100 px-5 sm:px-6 py-4">
                <h3 className="text-sm font-semibold text-amber-800 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Information
                </h3>
              </div>
              <div className="px-5 sm:px-6 py-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">AI Limitation:</span> This assistant uses artificial intelligence that predicts responses based on patterns. It does not truly understand your situation and cannot provide accurate medical diagnoses.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Not a Substitute:</span> The responses generated by this system are not a replacement for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Verify Information:</span> If you have any doubt about the information provided, please verify it with a human doctor or licensed mental health professional. Your health and safety are paramount.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">4</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-800">Machine Assistance:</span> I am a machine learning model designed to assist, not replace human care. If you feel uncertain or need clarity, please schedule an appointment with a qualified doctor.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-red-700">Emergency:</span> If you are in crisis or having thoughts of self-harm, please call emergency services immediately. India Helpline: 108 (Ambulance), Kiran Mental Health: 1800-599-0019.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 md:py-6 lg:py-8">
          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-gray-700 hover:text-gray-900 text-sm w-full sm:w-auto justify-center sm:justify-start"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Specialists</span>
            </button>

            {selectedSpecialist && (
              <div className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm border border-gray-200 w-full sm:w-auto justify-center sm:justify-start">
                <div className={`w-8 h-8 sm:w-9 sm:h-9 ${selectedSpecialist.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className={`font-bold text-sm sm:text-base ${selectedSpecialist.textColor}`}>
                    {selectedSpecialist.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{selectedSpecialist.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">{selectedSpecialist.specialty}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className={`bg-gradient-to-r ${selectedSpecialist?.color || 'from-blue-600 to-emerald-600'} px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between`}>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {selectedSpecialist?.name?.charAt(0) || 'P'}
                  </span>
                </div>
                <div className="min-w-0">
                  <h2 className="text-white font-bold text-sm sm:text-lg truncate">{selectedSpecialist?.name || 'Specialist'}</h2>
                  <p className="text-white/70 text-[10px] sm:text-xs">Online - AI Assistant</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                title="Clear Chat"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div 
              ref={chatContainerRef}
              className="h-[400px] sm:h-[450px] md:h-[500px] overflow-y-auto px-3 sm:px-4 md:px-5 py-4 sm:py-5 bg-gradient-to-b from-gray-50 to-white scroll-smooth"
            >
              {aiMessages.length === 1 && aiMessages[0].isAI && (
                <div className="text-center py-8 sm:py-12">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${selectedSpecialist?.bgLight || 'bg-blue-50'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl sm:text-3xl font-bold ${selectedSpecialist?.textColor || 'text-blue-700'}`}>
                      {selectedSpecialist?.name?.charAt(0) || 'P'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Start the conversation by typing a message below.</p>
                </div>
              )}

              {aiMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 sm:mb-4 ${message.isAI ? 'text-left' : 'text-right'}`}
                >
                  <div
                    className={`inline-block max-w-[85%] sm:max-w-[80%] md:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 ${
                      message.isAI
                        ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed break-words">
                      {message.text || '...'}
                    </p>
                    <p className="text-[10px] sm:text-xs opacity-50 mt-1.5 sm:mt-2">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-2 sm:gap-3 text-gray-600 mb-3 sm:mb-4">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Typing...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 px-3 sm:px-4 md:px-5 py-3 sm:py-4 bg-white">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3">
                AI responses are for informational support only. This is not a substitute for professional medical advice.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-amber-50 border border-amber-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                <span className="font-semibold">Disclaimer:</span> This AI assistant predicts responses based on data patterns and may not always be accurate. It does not provide medical diagnoses. Please consult a qualified human doctor for professional advice. If you have any doubts about the information provided, verify it independently.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManoAI;