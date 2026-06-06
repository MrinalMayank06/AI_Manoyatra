import { createContext, useState } from "react";
import { assets, mentors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currencySymbol = '₹'; // Indian Rupee
    
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('manoyatra_user');
        const storedToken = localStorage.getItem('manoyatra_token');
        
        if (storedUser && storedToken) {
            return JSON.parse(storedUser);
        }
        return null;
    });

    const [appointments, setAppointments] = useState([
        {
            id: 1,
            mentorId: 'doc1',
            mentorName: 'Dr. Mayank Krishnan',
            date: '2024-03-15',
            time: '10:30 AM',
            status: 'Confirmed',
            type: 'Video Call',
            notes: 'Initial consultation for anxiety management',
            fees: 2500
        },
        {
            id: 2,
            mentorId: 'doc3',
            mentorName: 'Dr. Rohan Iyer',
            date: '2024-03-18',
            time: '2:00 PM',
            status: 'Pending',
            type: 'In-Person',
            notes: 'Follow-up session for cognitive behavioral therapy',
            fees: 2800
        },
        {
            id: 3,
            mentorId: 'doc5',
            mentorName: 'Dr. Kaison Kirtiwardhan',
            date: '2024-03-20',
            time: '4:45 PM',
            status: 'Completed',
            type: 'Audio Call',
            notes: 'Stress management techniques discussion',
            fees: 3200
        }
    ]);

    const login = (userData) => {
        const userWithDefaults = {
            ...userData,
            image: userData.image || assets.profile_pic,
            phone: userData.phone || '+91 9876543210',
            address: userData.address || {
                line1: "Manoyatra Corporate Office Level 12,",
                line2: "One BKC, G Block, Bandra Kurla Complex",
                line3: "Bandra (East), Mumbai – 400051, Maharashtra, India"
            },
            gender: userData.gender || 'Male',
            dob: userData.dob || '2005-02-06'
        };
        
        localStorage.setItem('manoyatra_user', JSON.stringify(userWithDefaults));
        localStorage.setItem('manoyatra_token', 'demo_token_' + Date.now());
        setUser(userWithDefaults);
        return userWithDefaults;
    };

    const logout = () => {
        localStorage.removeItem('manoyatra_user');
        localStorage.removeItem('manoyatra_token');
        setUser(null);
    };

    const updateProfile = (updatedData) => {
        const updatedUser = { ...user, ...updatedData };
        localStorage.setItem('manoyatra_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        return updatedUser;
    };

    const bookAppointment = (appointmentData) => {
        const mentor = mentors.find(m => m._id === appointmentData.mentorId);
        
        const newAppointment = {
            id: appointments.length + 1,
            mentorId: appointmentData.mentorId,
            mentorName: mentor?.name || 'Unknown Mentor',
            date: appointmentData.date,
            time: appointmentData.time,
            status: 'Confirmed',
            type: appointmentData.type || 'Video Call',
            notes: appointmentData.notes || '',
            fees: mentor?.fees || 2000
        };
        
        setAppointments([...appointments, newAppointment]);
        return newAppointment;
    };

    const cancelAppointment = (appointmentId) => {
        setAppointments(appointments.filter(app => app.id !== appointmentId));
    };

    const value = {
        mentors,
        currencySymbol,
        user,
        appointments,
        login,
        logout,
        updateProfile,
        bookAppointment,
        cancelAppointment,
        assets
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
