import React, { createContext, useState, useContext, useCallback } from 'react';
import { groqAIService } from '../services/groqAIService';

export const AIContext = createContext();

const WELCOME_MESSAGES = {
  Psychiatrist: "Hello, I am your Psychiatrist. I specialize in mood disorders, anxiety, depression, and overall mental health conditions. How can I help you today?",
  Neuropsychologist: "Hello, I am your Neuropsychologist. I specialize in brain-behavior relationships, cognitive function, memory, and learning. What brings you here?",
  Neurologist: "Hello, I am your Neurologist. I handle nervous system disorders, headaches, migraines, seizures, and neurological symptoms. How can I assist you?",
  "Rehabilitation Psychologist": "Hello, I am your Rehabilitation Psychologist. I help with recovery from injuries, addiction, and lifestyle changes. How can I support you?",
  "Addiction Psychiatrist": "Hello, I am your Addiction Psychiatrist. I specialize in substance abuse, behavioral addictions, and recovery support. How can I help?",
  "Trauma Specialist": "Hello, I am your Trauma Specialist. I provide support for PTSD, emotional trauma, and recovery. You are in a safe space."
};

export const AIContextProvider = ({ children }) => {
  const [agentType, setAgentType] = useState('Psychiatrist');
  const [aiMessages, setAiMessages] = useState([
    {
      id: 1,
      text: WELCOME_MESSAGES.Psychiatrist,
      isAI: true,
      timestamp: new Date().toISOString()
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const getAIResponseOptimized = async (userMessage, currentAgent) => {
    setIsLoading(true);
    
    const aiMessageId = Date.now() + 1;
    
    setAiMessages(prev => [
      ...prev,
      {
        id: aiMessageId,
        text: "",
        isAI: true,
        timestamp: new Date().toISOString()
      }
    ]);

    try {
      let fullText = "";
      
      await groqAIService.mentalHealthAssistant(userMessage, currentAgent, (newChunk) => {
        fullText += newChunk;
        
        setAiMessages(prevMessages => 
          prevMessages.map(msg => 
            msg.id === aiMessageId 
              ? { ...msg, text: fullText }
              : msg
          )
        );
      });

    } catch (error) {
      console.error("Stream Error:", error);
      setAiMessages(prev => {
        const withoutEmpty = prev.filter(msg => msg.id !== aiMessageId);
        return [
          ...withoutEmpty,
          { 
            id: Date.now(), 
            text: "Connection error. Please try again.", 
            isAI: true, 
            timestamp: new Date().toISOString() 
          }
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = useCallback(async (message) => {
    if (!message.trim() || isLoading) return;

    const newUserMessage = {
      id: Date.now(),
      text: message,
      isAI: false,
      timestamp: new Date().toISOString()
    };

    setAiMessages(prev => [...prev, newUserMessage]);
    await getAIResponseOptimized(message, agentType);
  }, [agentType, isLoading]);

  const changeAgent = useCallback((newAgent) => {
    setAgentType(newAgent);
    setAiMessages([
      {
        id: Date.now(),
        text: WELCOME_MESSAGES[newAgent] || WELCOME_MESSAGES.Psychiatrist,
        isAI: true,
        timestamp: new Date().toISOString()
      }
    ]);
  }, []);

  const clearChat = useCallback(() => {
    setAiMessages([
      {
        id: Date.now(),
        text: WELCOME_MESSAGES[agentType],
        isAI: true,
        timestamp: new Date().toISOString()
      }
    ]);
  }, [agentType]);

  const value = {
    agentType,
    setAgentType: changeAgent,
    aiMessages,
    isLoading,
    isChatOpen,
    setIsChatOpen,
    sendMessage,
    clearChat,
  };

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIContextProvider');
  }
  return context;
};