import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Mentors from './pages/Mentors'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import ManoAI from './pages/ManoAI'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import ProtectedRoute from './components/ProtectedRoute'
import { AppContextProvider } from './context/AppContext'
import { AIContextProvider } from './context/AIContext'

const App = () => {
  return (
    <AppContextProvider>
      <AIContextProvider>
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-emerald-50/20">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={
              <ProtectedRoute><Home /></ProtectedRoute>
            } />
            <Route path="/mentors" element={
              <ProtectedRoute><Mentors /></ProtectedRoute>
            } />
            <Route path="/mentors/:speciality" element={
              <ProtectedRoute><Mentors /></ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute><About /></ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute><Contact /></ProtectedRoute>
            } />
            <Route path="/myprofile" element={
              <ProtectedRoute><MyProfile /></ProtectedRoute>
            } />
            <Route path="/myappointments" element={
              <ProtectedRoute><MyAppointments /></ProtectedRoute>
            } />
            <Route path="/appointment/:mentorId" element={
              <ProtectedRoute><Appointment /></ProtectedRoute>
            } />
            <Route path="/manoai" element={
              <ProtectedRoute><ManoAI /></ProtectedRoute>
            } />
          </Routes>
          <Footer />
          <AIChatbot />
        </div>
      </AIContextProvider>
    </AppContextProvider>
  )
}

export default App