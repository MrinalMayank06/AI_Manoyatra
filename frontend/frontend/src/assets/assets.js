import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import Depression from './Depressio.svg'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Depression_Mentor',
        image: Depression
    },
    {
        speciality: 'Subconscious_Mentor',
        image: Gynecologist
    },
    {
        speciality: 'Trauma_Specialist',
        image: Dermatologist
    },
    {
        speciality: 'Addiction_Mentor',
        image: Pediatricians
    },
    {
        speciality: 'Anxiety_Stress_Mentor',
        image: Neurologist
    },
    {
        speciality: 'Depression_Specialist',
        image: Gastroenterologist
    },
]

export const mentors = [
    {
        _id: 'doc1',
        name: 'Dr. Mayank Krishnan',
        image: doc1,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '12 Years',
        about: 'Dr. Arjun Mehta is a renowned psychiatrist specializing in mood disorders, anxiety, and trauma-related conditions. With a holistic approach, he integrates evidence-based medication management with psychotherapy for long-term recovery.',
        fees: 2500,
        address: {
            line1: 'Fort Area',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Meera Sharma',
        image: doc2,
        speciality: 'Clinical Psychologist',
        degree: 'PhD (Clinical Psychology)',
        experience: '10 Years',
        about: 'Dr. Meera Sharma works extensively with individuals battling depression, PTSD, and grief. She uses CBT, DBT, and mindfulness-based interventions to create impactful healing journeys for her patients.',
        fees: 2200,
        address: {
            line1: 'Greater Kailash',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rohan Iyer',
        image: doc3,
        speciality: 'Neuropsychologist',
        degree: 'PhD (Neuropsychology)',
        experience: '9 Years',
        about: 'Dr. Rohan Iyer is an expert in brain-behavior relationships, focusing on cognitive rehabilitation, dementia assessments, and recovery strategies for neurological trauma.',
        fees: 2800,
        address: {
            line1: 'Indiranagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Mrinal',
        image: doc4,
        speciality: 'Trauma Specialist',
        degree: 'MD Psychiatry, Fellowship in Trauma Therapy',
        experience: '15 Years',
        about: 'Dr. Mrinal has dedicated her career to trauma recovery, specializing in survivors of accidents, abuse, and war-related PTSD. She incorporates EMDR and somatic therapies.',
        fees: 3000,
        address: {
            line1: 'Pune Cantonment',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kaison Kirtiwardhan',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '14 Years',
        about: 'Dr. Kaison Kirtiwardhan is a senior neurologist with expertise in epilepsy, stroke care, and Parkinson’s management. He bridges neurology and psychiatry for comprehensive patient well-being.',
        fees: 3200,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. K Menon',
        image: doc6,
        speciality: 'Mindfulness & Integrative Therapist',
        degree: 'MA Psychology, Certified MBSR Practitioner',
        experience: '11 Years',
        about: 'Dr. K Menon blends psychology with mindfulness, yoga therapy, and holistic stress reduction. She helps clients with burnout, depression, and anxiety management.',
        fees: 2000,
        address: {
            line1: 'Jubilee Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Sameer Khanna',
        image: doc7,
        speciality: 'Addiction Psychiatrist',
        degree: 'MD Psychiatry, Fellowship in Addiction Medicine',
        experience: '13 Years',
        about: 'Dr. Sameer Khanna is a leading addiction specialist who focuses on alcohol, substance abuse, and digital addictions. His recovery programs integrate detox, counseling, and relapse prevention.',
        fees: 2800,
        address: {
            line1: 'Sector 18',
            line2: 'Gurugram, Haryana'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Anshuman Kapoor',
        image: doc8,
        speciality: 'Child & Adolescent Psychiatrist',
        degree: 'MD Psychiatry, Fellowship in Child Psychiatry',
        experience: '8 Years',
        about: 'Dr. Anshuman Kapoor specializes in child and teen mental health. She works with ADHD, autism spectrum, exam stress, and early trauma through play therapy and CBT.',
        fees: 2300,
        address: {
            line1: 'Connaught Place',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Lisa Reddy',
        image: doc9,
        speciality: 'Addiction Psychiatrist',
        degree: 'MBBS, MD Psychiatry, DM Neuropsychiatry',
        experience: '16 Years',
        about: 'Dr. Nikhil Reddy addresses late-life depression, Alzheimer’s, dementia, and neurological decline with compassionate elderly care models.',
        fees: 3100,
        address: {
            line1: 'Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Vikram Joshi',
        image: doc10,
        speciality: 'Rehabilitation Psychologist',
        degree: 'MPhil (Rehabilitation Psychology)',
        experience: '7 Years',
        about: 'Dr. Vikram Joshi assists patients adjusting to brain injuries, spinal cord trauma, and chronic illness. She emphasizes resilience and long-term coping strategies.',
        fees: 1900,
        address: {
            line1: 'MG Road',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Manish Gupta',
        image: doc11,
        speciality: 'Neuropsychiatrist',
        degree: 'MBBS, MD Psychiatry, DM Neurology',
        experience: '18 Years',
        about: 'Dr. Manish Gupta is known for blending psychiatric expertise with neurology, treating complex disorders like psychogenic seizures and neurocognitive decline.',
        fees: 3500,
        address: {
            line1: 'Civil Lines',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Sneha Banerjee',
        image: doc12,
        speciality: 'Behavioral Therapist',
        degree: 'MA Applied Psychology, CBT Specialist',
        experience: '9 Years',
        about: 'Dr. Sneha Banerjee empowers patients with practical coping mechanisms for depression, phobias, and stress. She uses evidence-based CBT and REBT techniques.',
        fees: 1800,
        address: {
            line1: 'Salt Lake Sector V',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Rajesh Nair',
        image: doc13,
        speciality: 'Sleep Medicine Specialist',
        degree: 'MBBS, MD (Psychiatry), Fellowship in Sleep Disorders',
        experience: '12 Years',
        about: 'Dr. Rajesh Nair treats insomnia, sleep apnea, and sleep-related anxiety. His approach combines medical interventions with behavioral therapy for deep rest.',
        fees: 2700,
        address: {
            line1: 'Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Aditi Verma',
        image: doc14,
        speciality: 'Holistic Wellness Psychologist',
        degree: 'PhD (Counseling Psychology)',
        experience: '8 Years',
        about: 'Dr. Aditi Verma promotes emotional balance through counseling, mindfulness, and resilience training. She has worked extensively with corporate professionals battling burnout.',
        fees: 2100,
        address: {
            line1: 'Sector 62',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Parthi Chandran',
        image: doc15,
        speciality: 'Addiction Psychiatrist',
        degree: 'MPhil (Sports & Performance Psychology)',
        experience: '6 Years',
        about: 'Dr. Karan Malhotra specializes in performance psychology, helping athletes and high-stress professionals overcome anxiety, pressure, and self-doubt.',
        fees: 2000,
        address: {
            line1: 'Koregaon Park',
            line2: 'Pune, Maharashtra'
        }
    },
];
