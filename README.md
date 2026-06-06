# Manoyatra: AI-Powered Mental Wellness and Digital Mentorship Platform

## Overview

Manoyatra is a full-stack AI-powered mental wellness platform developed to improve accessibility to mental health support through a combination of intelligent conversational agents and mentor discovery services.

The platform integrates a specialized multi-agent AI architecture with a mentor consultation ecosystem to create a digital environment where users can seek guidance, receive educational support regarding mental wellness, and connect with professionals when required.

The system combines React-based frontend technologies, a Flask-powered backend API layer, and Groq's ultra-fast inference infrastructure powered by Llama 3.3 70B.

The primary objective of the project is to reduce barriers associated with mental health awareness, accessibility, stigma, and consultation delays while providing a scalable and extensible digital architecture suitable for future healthcare applications.

---

# Problem Statement

Mental health services remain inaccessible for a large portion of the population due to several challenges:

* Limited availability of specialists
* High consultation costs
* Long waiting periods
* Lack of awareness
* Social stigma surrounding mental health
* Insufficient immediate support systems
* Geographical limitations

Many users require immediate guidance but are unable to access professional help at the moment they need it.

Traditional healthcare systems are appointment-driven and often unable to provide instant assistance.

The challenge is to design a platform capable of:

1. Providing immediate conversational support.
2. Offering specialized guidance through domain-specific AI agents.
3. Assisting users in discovering relevant professionals.
4. Maintaining scalability and responsiveness.
5. Creating an architecture suitable for future healthcare integrations.

---

# Proposed Solution

Manoyatra addresses these challenges through a hybrid architecture consisting of:

* Multi-Agent AI Support System
* Mentor Discovery Platform
* Appointment Booking Workflow
* Authentication System
* Personalized User Dashboard
* AI-Assisted Wellness Guidance

Instead of using a generic chatbot, Manoyatra introduces specialist-oriented AI agents designed for specific mental health domains.

This approach enables more contextual and focused responses while maintaining safety guardrails.

---

# System Objectives

The platform aims to:

* Provide instant mental wellness guidance
* Improve awareness regarding mental health conditions
* Reduce consultation barriers
* Enable professional discovery
* Demonstrate practical AI integration
* Showcase scalable software architecture
* Serve as a deployable healthcare technology prototype

---

# Key Features

## AI-Powered Mental Wellness Assistant

The Mano AI system provides real-time conversational support through multiple specialist agents.

### Available Agents

1. Psychiatrist
2. Neuropsychologist
3. Neurologist
4. Rehabilitation Psychologist
5. Addiction Psychiatrist
6. Trauma Specialist

Each agent possesses:

* Dedicated system instructions
* Specialized behavioral boundaries
* Domain-specific response patterns
* Professional communication style
* Safety restrictions

---

## Mentor Discovery System

Users can:

* Browse mentors
* Filter by specialization
* View mentor profiles
* Explore expertise
* Access appointment scheduling

The mentor directory acts as a bridge between AI support and human consultation.

---

## Appointment Booking System

The appointment workflow includes:

* Mentor selection
* Time slot selection
* Appointment summary
* Confirmation workflow

The architecture is designed to support future payment gateway integrations.

---

## Authentication System

The platform includes:

* Login functionality
* Protected routes
* Session persistence
* Profile management
* Secure navigation

---

## Real-Time Streaming Responses

Instead of waiting for complete responses, users receive AI-generated output token by token.

Benefits include:

* Improved user experience
* Reduced perceived latency
* Conversational realism
* Faster interaction cycles

---

# System Architecture

## High-Level Architecture

```text
+--------------------------------------------------+
|                    CLIENT                        |
|--------------------------------------------------|
| Home                                             |
| Mentors                                          |
| Mano AI                                          |
| Appointment                                      |
| Profile                                          |
+------------------------+-------------------------+
                         |
                         |
                         v
+--------------------------------------------------+
|                 REACT FRONTEND                   |
|--------------------------------------------------|
| React                                             |
| Vite                                              |
| Tailwind CSS                                      |
| Context API                                       |
| React Router                                      |
+------------------------+-------------------------+
                         |
                         |
                         v
+--------------------------------------------------+
|                  FLASK BACKEND                   |
|--------------------------------------------------|
| REST APIs                                         |
| Agent Router                                      |
| Stream Manager                                    |
| Prompt Controller                                 |
| Session Layer                                     |
+------------------------+-------------------------+
                         |
                         |
                         v
+--------------------------------------------------+
|                    GROQ CLOUD                    |
|--------------------------------------------------|
| Llama 3.3 70B                                     |
| High-Speed Inference                              |
| Streaming Output                                  |
+--------------------------------------------------+
```

---

# Detailed Request Lifecycle

```text
User Message
      |
      v
Frontend UI
      |
      v
API Request
      |
      v
Flask Backend
      |
      v
Agent Selection
      |
      v
Prompt Injection
      |
      v
Groq API
      |
      v
Llama 3.3 Processing
      |
      v
Streaming Response
      |
      v
Frontend Rendering
      |
      v
User Interface Update
```

---

# Multi-Agent Architecture

The core innovation of Manoyatra lies in its multi-agent design.

Instead of using a single prompt, the backend dynamically selects specialist instructions depending on the user-selected agent.

## Agent Router

```text
User Query
     |
     v
Agent Selection
     |
     v
+----------------------+
| Agent Router         |
+----------------------+
      |
      |
      +---------------------------+
      |                           |
      v                           v

Psychiatrist              Neuropsychologist

Neurologist               Trauma Specialist

Rehabilitation            Addiction Psychiatrist

```

Each agent contains:

* Specialized instructions
* Domain constraints
* Safety boundaries
* Communication policies

---

# AI Safety Architecture

Healthcare applications require strong safety mechanisms.

The platform implements several safeguards.

## Restricted Actions

The AI cannot:

* Diagnose diseases
* Prescribe medications
* Recommend dosages
* Replace licensed professionals
* Provide emergency treatment

## Required Behaviors

The AI must:

* Encourage professional consultation
* Provide educational information
* Maintain respectful communication
* Avoid harmful recommendations
* Operate within specialist boundaries

---

# Frontend Architecture

The frontend is built using React and follows a component-driven architecture.

## Core Technologies

### React

Used for:

* Component management
* UI rendering
* State updates

### Vite

Provides:

* Fast development builds
* Optimized production bundles
* Modern tooling support

### Tailwind CSS

Used for:

* Utility-first styling
* Responsive design
* Rapid UI development

---

# Frontend Component Structure

```text
src
|
+-- assets
|
+-- components
|   |
|   +-- Navbar
|   +-- Footer
|   +-- Header
|   +-- AIChatbot
|   +-- Banner
|   +-- ProtectedRoute
|
+-- context
|   |
|   +-- AIContext
|   +-- AppContext
|
+-- pages
|   |
|   +-- Home
|   +-- Login
|   +-- ManoAI
|   +-- Mentors
|   +-- Appointment
|   +-- Contact
|   +-- MyProfile
|   +-- MyAppointments
|
+-- services
|   |
|   +-- groqAIService
```

---

# Backend Architecture

The backend acts as an orchestration layer.

Responsibilities include:

* API management
* Agent routing
* Prompt injection
* Streaming responses
* Session handling

---

## Backend Workflow

```text
Client Request
      |
      v
Flask Endpoint
      |
      v
Agent Resolution
      |
      v
Prompt Selection
      |
      v
Groq API Call
      |
      v
Response Streaming
      |
      v
Client Delivery
```

---

# Technology Stack

## Frontend

| Technology     | Purpose           |
| -------------- | ----------------- |
| React          | UI Development    |
| Vite           | Build Tool        |
| Tailwind CSS   | Styling           |
| React Router   | Routing           |
| Axios          | API Communication |
| React Toastify | Notifications     |

---

## Backend

| Technology | Purpose               |
| ---------- | --------------------- |
| Python     | Core Language         |
| Flask      | API Layer             |
| Flask-CORS | Cross-Origin Handling |
| Groq SDK   | AI Integration        |
| dotenv     | Environment Variables |

---

## AI Infrastructure

| Technology    | Purpose              |
| ------------- | -------------------- |
| Groq Cloud    | Inference Provider   |
| Llama 3.3 70B | Large Language Model |

---

## Deployment

| Service | Role             |
| ------- | ---------------- |
| GitHub  | Source Control   |
| Vercel  | Frontend Hosting |
| Render  | Backend Hosting  |

---

# API Documentation

## Health Endpoint

### Request

```http
GET /
```

### Response

```text
Manoyatra AI Backend is Running!
```

---

## Chat Endpoint

### Request

```http
POST /api/chat
```

### Payload

```json
{
  "message":"I feel anxious",
  "agent":"Psychiatrist"
}
```

### Response

```text
Streaming Text Response
```

---

# Authentication Flow

```text
User Login
     |
     v
Credential Validation
     |
     v
Token Creation
     |
     v
Local Storage
     |
     v
Protected Routes Enabled
```

---

# Deployment Architecture

```text
GitHub Repository
        |
        |
        +-------------------+
        |                   |
        v                   v

Vercel              Render

Frontend            Backend

React               Flask

        \           /
         \         /
          \       /
           \     /
            \   /
             \ /
              v

          Groq Cloud
```

---

# Security Considerations

The project follows standard security practices.

## API Security

* Environment variables for secrets
* API key isolation
* Backend-only AI access

## Client Security

* Protected routes
* Controlled state management
* Session persistence

## Future Security Enhancements

* JWT Authentication
* OAuth Integration
* Rate Limiting
* RBAC
* End-to-End Encryption
* Audit Logging

---

# Performance Optimization

Several optimizations have been implemented.

## Frontend

* Vite optimized builds
* Component reuse
* Lazy rendering
* Context separation

## Backend

* Streaming architecture
* Lightweight Flask APIs
* Prompt routing
* Reduced response latency

## AI Layer

* Groq low-latency inference
* Efficient token streaming
* Reduced waiting times

---

# Future Scope

## Phase 1

* MongoDB Integration
* User Registration
* Persistent Chat History
* Appointment Database

## Phase 2

* Payment Gateway
* Razorpay
* Stripe
* Subscription Plans

## Phase 3

* Video Consultation
* WebRTC Integration
* Live Sessions

## Phase 4

* Mobile Applications
* Android
* iOS
* React Native

## Phase 5

* Hindi Support
* Regional Languages
* Voice Interaction
* Speech-to-Text

## Phase 6

* Emotion Detection
* Mood Tracking
* Sentiment Analytics
* Personalized Wellness Plans

---

# Business Model

## Revenue Streams

### Consultation Commission

15%–20% commission on appointments.

### Premium Membership

Features:

* Unlimited AI usage
* Session history
* Personalized recommendations

### Corporate Wellness

Enterprise wellness solutions.

### Institutional Licensing

Universities and educational institutions.

### Insurance Partnerships

Mental healthcare coverage integrations.

---

# SWOT Analysis

## Strengths

* Multi-agent architecture
* Fast AI responses
* Modern UI
* Scalable design

## Weaknesses

* Dependency on external AI APIs
* Limited production healthcare compliance

## Opportunities

* Growing mental health market
* Enterprise wellness adoption
* AI healthcare expansion

## Threats

* Regulatory changes
* Competition
* AI governance policies

---

# Academic Relevance

This project demonstrates:

* Full Stack Development
* AI Integration
* Prompt Engineering
* Cloud Deployment
* REST API Development
* React Architecture
* Python Backend Engineering
* Software Design Principles
* Human-Centered Computing

The project is suitable for:

* Final Year Project Demonstration
* Research Showcase
* Placement Portfolio
* Software Engineering Evaluation
* AI Product Development Case Study

---

# Conclusion

Manoyatra represents a scalable and modern approach toward digital mental wellness. By combining multi-agent artificial intelligence, mentor discovery workflows, appointment management systems, and cloud-native deployment architecture, the platform demonstrates how emerging AI technologies can be integrated into healthcare-adjacent applications responsibly.

The architecture has been intentionally designed for extensibility, enabling future additions such as persistent databases, payment processing, multilingual support, video consultations, enterprise wellness programs, and advanced analytics.

This project serves as both a practical engineering solution and a demonstration of modern full-stack AI application development.

## Author

Mayank Krishnan

Bachelor of Technology (Computer Science and Engineering)

Final Year Major Project

## License

Educational and Academic Use Only.

All rights reserved.
