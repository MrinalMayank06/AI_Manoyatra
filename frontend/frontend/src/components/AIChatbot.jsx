import React, { useState, useRef, useEffect } from 'react';
import { useAI } from '../context/AIContext';
import { assets } from '../assets/assets';

const AIChatbot = () => {
  const { 
    aiMessages, 
    isLoading, 
    isChatOpen, 
    setIsChatOpen, 
    sendMessage, 
    clearChat,
    streamingResponse,
    agentType
  } = useAI();
  
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiMessages, streamingResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const quickReplies = [
    "Feeling anxious today",
    "Need stress management tips",
    "How to improve sleep?",
    "Coping with loneliness",
    "Mindfulness exercises",
    "When to seek professional help"
  ];

  const handleQuickReply = (reply) => {
    sendMessage(reply);
  };

  const getAgentInitial = (type) => {
    const initials = {
      Psychiatrist: 'P',
      Neuropsychologist: 'Np',
      Neurologist: 'N',
      'Rehabilitation Psychologist': 'RP',
      'Addiction Psychiatrist': 'AP',
      'Trauma Specialist': 'TS'
    };
    return initials[type] || 'M';
  };

  const getAgentName = (type) => {
    if (type === 'Psychiatrist') return 'Dr. Sharma';
    if (type === 'Neuropsychologist') return 'Dr. Patel';
    if (type === 'Neurologist') return 'Dr. Verma';
    if (type === 'Rehabilitation Psychologist') return 'Dr. Reddy';
    if (type === 'Addiction Psychiatrist') return 'Dr. Kapoor';
    if (type === 'Trauma Specialist') return 'Dr. Gupta';
    return 'Mano AI';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isChatOpen && !event.target.closest('.ai-chat-container') && 
          !event.target.closest('.chat-toggle-button')) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isChatOpen]);

  if (!isChatOpen) {
    return (
      <button
        onClick={() => setIsChatOpen(true)}
        className="chat-toggle-button fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group animate-bounce-slow"
        aria-label="Open AI Chat Assistant"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-emerald-400/30 rounded-full animate-ping-slow"></div>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse-subtle">
          AI
        </span>
      </button>
    );
  }

  return (
    <div className="ai-chat-container fixed bottom-6 right-6 z-50 w-96 max-w-[90vw]">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up hover-lift">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4 text-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-full animate-pulse-slow"></div>
                <div className="relative w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{getAgentInitial(agentType)}</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {getAgentName(agentType)}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Powered by Groq</span>
                </h3>
                <p className="text-xs text-blue-200">24/7 Mental Wellness Support</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors glass-effect"
                title="Clear conversation"
                aria-label="Clear chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors glass-effect"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-blue-50/30 to-emerald-50/30 grid-pattern">
          {aiMessages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 animate-fadeIn ${message.isAI ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block max-w-[85%] rounded-2xl p-4 transition-all duration-300 ${
                  message.isAI
                    ? 'bg-white border border-gray-100 shadow-sm rounded-tl-none hover:shadow-md'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none hover:shadow-lg'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                <p className="text-xs opacity-70 mt-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {streamingResponse && (
            <div className="mb-4 text-left animate-fadeIn">
              <div className="inline-block max-w-[85%] bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-none p-4">
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{streamingResponse}</p>
                <div className="flex gap-1 mt-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          {isLoading && !streamingResponse && (
            <div className="flex items-center gap-3 text-gray-600 mb-4 animate-fadeIn">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm font-medium">Thinking...</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-emerald-50/50">
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-600 mb-2 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  disabled={isLoading}
                  className="px-3 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 text-xs rounded-xl hover:from-blue-100 hover:to-emerald-100 hover:scale-105 transition-all duration-300 border border-blue-100 hover:border-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 bg-white/80 backdrop-blur-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-full hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="loading-spinner w-5 h-5"></div>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              AI responses are for support only. For emergencies, contact helplines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;