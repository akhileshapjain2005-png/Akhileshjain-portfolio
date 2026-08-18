// ============================================================================
// PORTFOLIO DATA — edit this file to update portfolio content.
// ============================================================================

export const portfolioData = {
  personal: {
    name: 'Akhilesh Jain',
    title: 'Computer Science & Engineering Student',
    tagline:
      'Building practical software solutions and turning ideas into useful real-world applications.',
    email: 'akhileshapjain2005@gmail.com',
    phone: '7899109103',
    linkedin: 'https://www.linkedin.com/in/akhilesh-jain-97b3a72a6/',
    github: '',
    location: 'Shravanabelagola, Hassan, Karnataka',
    resumeUrl: '/assets/resume.pdf',
    profileImage: '/assets/profile.jpg',
  },

  seo: {
    pageTitle: 'Akhilesh Jain | CSE Student | Developer',
    description:
      'Portfolio of Akhilesh Jain, a Computer Science & Engineering student at Bahubali College of Engineering, VTU.',
    keywords: [
      'Computer Science',
      'Python',
      'Java',
      'C',
      'SQL',
      'HTML',
      'MySQL',
      'MongoDB',
      'Git',
      'GitHub',
      'Portfolio',
    ],
  },

  about: {
    paragraphs: [
      'Computer Science & Engineering student passionate about building practical software solutions and exploring modern technologies.',
      'I enjoy solving problems, developing applications, and turning ideas into useful real-world projects.',
      'Currently focused on strengthening my programming, development, and problem-solving skills through projects, internships, hackathons, and continuous learning.',
    ],
    stats: [
      { label: 'Projects Completed', value: '4' },
      { label: 'Core Skills', value: '9' },
      { label: 'Internship', value: '1' },
      { label: 'Achievements', value: '5' },
    ],
  },

  skills: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C' },
        { name: 'SQL' },
      ],
    },
    {
      category: 'Web Development',
      items: [{ name: 'HTML' }],
    },
    {
      category: 'Databases',
      items: [{ name: 'MySQL' }, { name: 'MongoDB' }],
    },
    {
      category: 'Developer Tools',
      items: [{ name: 'Git' }, { name: 'GitHub' }],
    },
  ],

  projects: [
    {
      title: 'AI Skincare Routine Recommendation System',
      description:
        'Designed an AI-powered skincare recommendation system that generates personalized skincare suggestions based on user inputs and AI-based decision logic.',
      problem:
        'Provide personalized skincare recommendations based on user-provided information.',
      technologies: ['Python', 'Artificial Intelligence'],
      features: [
        'AI-powered skincare recommendations',
        'Personalized suggestions based on user inputs',
        'Decision-based recommendation logic',
      ],
      github: '',
      liveDemo: '',
      category: 'AI/ML',
      date: 'Aug 2025',
    },
    {
      title: 'Ball Tracking System',
      description:
        'Developed a computer vision application to detect and track a moving ball in video streams using image processing techniques.',
      problem:
        'Accurately detect and track a moving ball in real-time video streams.',
      technologies: ['Python', 'OpenCV', 'Computer Vision'],
      features: [
        'Moving-ball detection',
        'Video stream processing',
        'Real-time object tracking',
      ],
      github: '',
      liveDemo: '',
      category: 'Other',
      date: 'Dec 2025',
    },
    {
      title: 'Traffic Prediction and Route Optimization',
      description:
        "Developed a traffic prediction and route optimization system using Dijkstra's Algorithm to identify efficient travel paths.",
      problem:
        'Improve route selection by analyzing traffic conditions and identifying the shortest travel path.',
      technologies: ['Python', "Dijkstra's Algorithm", 'AI'],
      features: [
        'Traffic condition analysis',
        'Shortest-path route selection',
        "Dijkstra's Algorithm",
      ],
      github: '',
      liveDemo: '',
      category: 'AI/ML',
      date: 'Mar 2026',
    },
    {
      title: 'RAG-Powered Document Question Answering System',
      description:
        'Developed an AI-powered document question answering system using Retrieval-Augmented Generation for context-aware answers from uploaded PDF documents.',
      problem:
        'Help users retrieve relevant information and generate accurate answers from uploaded PDF documents.',
      technologies: ['Python', 'AI', 'LangChain', 'RAG'],
      features: [
        'PDF document retrieval',
        'Context-aware response generation',
        'Retrieval-Augmented Generation',
      ],
      github: '',
      liveDemo: '',
      category: 'AI/ML',
      date: 'Jun 2026',
    },
  ],

  featuredProject: {
    title: 'RAG-Powered Document Question Answering System',
    description:
      'An AI-powered document question answering system that uses Retrieval-Augmented Generation to retrieve relevant information and generate context-aware answers from uploaded PDF documents.',
    problem:
      'Users need a simple way to ask questions about information contained in their PDF documents.',
    solution:
      'Use document retrieval and RAG-based response generation to provide relevant, context-aware answers.',
    technologies: ['Python', 'AI', 'LangChain', 'RAG'],
    features: [
      'PDF document retrieval',
      'Context-aware responses',
      'Retrieval-Augmented Generation',
    ],
    github: '',
    liveDemo: '',
    category: 'AI/ML',
  },

  certificates: [
    {
      title: 'Certificate of Appreciation – NeuroNex Hackathon',
      issuer: 'Rajeev Institute of Technology',
      date: '2025',
      description:
        'Received a Certificate of Appreciation for outstanding performance in the hackathon organized by Rajeev Institute of Technology.',
      image: '/assets/certificates/rajeev-hackathon-appreciation.jpg',
      link: '',
    },
    {
      title: 'Frontend Development Internship',
      issuer: 'Codeveda Technologies',
      date: 'Aug 25 – Sep 25, 2025',
      description:
        'Completed a Frontend Development Internship at Codeveda Technologies, effective 25 August 2025 to 25 September 2025.',
      image: '/assets/certificates/codeveda-frontend-internship.jpg',
      link: '',
    },
    {
      title: 'Pravrutti National-Level Tech Fest',
      issuer: 'M S Ramaiah University of Applied Sciences',
      date: 'Oct 15–17, 2025',
      description:
        'Certificate of Participation for the National Level Tech Fest "Pravrutti", organized by M S Ramaiah University of Applied Sciences, Bengaluru.',
      image: '/assets/certificates/pravrutti-tech-fest.jpg',
      link: '',
    },
    {
      title: 'Food Planet Health Webinar',
      issuer: 'Food Planet Health / Vegan Outreach',
      date: 'Mar 6, 2026',
      description:
        'Certificate of Completion for the Food Planet Health webinar.',
      image: '/assets/certificates/food-planet-health-webinar.jpg',
      link: '',
    },
    {
      title: 'Career Orientation Workshop',
      issuer: 'ABC Technology Training & Upskilling',
      date: 'May 12, 2025',
      description:
        'Certificate of Participation for the Career Orientation Workshop, conducted by ABC Technology Training & Upskilling in collaboration with Bahubali College of Engineering.',
      image: '/assets/certificates/career-orientation-workshop.jpg',
      link: '',
    },
    {
      title: 'Hackmitten 2.0',
      issuer: 'Maharaja Institute of Technology, Thandavapura',
      date: 'Sep 12–13, 2025',
      description:
        'Certificate of Participation for Hackmitten 2.0, a national-level hackathon organized by the Department of Computer Science & Engineering at Maharaja Institute of Technology Thandavapura.',
      image: '/assets/certificates/hackmitten-2.0.jpg',
      link: '',
    },
    {
  title: 'CSR Placement Drive – 2027',
  issuer: 'Vstand4U Technologies Pvt. Ltd.',
  date: '08/08/2026',
  description:
    'Selected for the Vstand4U Technologies CSR Placement Drive – 2027 and eligible to join the CSR Training & Placement Program.',
  image: '/assets/certificates/vstand4u-csr-placement-drive-2027.jpg',
  link: '',
},
  ],

  achievements: [
    {
      title: 'Team Lead – National-Level Hackathon (Hackmitten 2.0)',
      event: 'Maharaja Institute of Technology, Thandavapura',
      date: '',
      description:
        'Served as Team Lead in the National-Level Hackathon Hackmitten 2.0.',
    },
    {
      title: 'Pravrutti National-Level Tech Fest',
      event: 'Ramaiah University of Applied Sciences',
      date: '',
      description:
        'Participated in the Pravrutti National-Level Tech Fest.',
    },
    {
      title: 'VTU Badminton Team Captain',
      event: 'Bahubali College of Engineering',
      date: '',
      description:
        'Represented Bahubali College of Engineering as VTU Badminton Team Captain.',
    },
    {
      title: 'Sports Secretary',
      event: 'Bahubali College of Engineering',
      date: '',
      description:
        'Served as Sports Secretary at Bahubali College of Engineering.',
    },
    {
      title: 'Technical Events, Hackathons & College Sports',
      event: 'Bahubali College of Engineering',
      date: '',
      description:
        'Actively participated in technical events, hackathons, and college sports activities.',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'Bahubali College of Engineering (BCE)',
      university: 'Visvesvaraya Technological University (VTU)',
      year: '2023 — 2027',
      score: '8.6 CGPA',
      semester: '7th Semester',
      location: 'Shravanabelagola, Hassan, Karnataka',
      coursework: [
        'Data Structures',
        'Computer Vision',
        'Database Management Systems',
        'Machine Learning',
      ],
    },
  ],

  experience: [
    {
      role: 'Frontend Development Intern',
      organization: 'Codeveda Technologies',
      location: 'Virtual',
      startDate: '',
      endDate: '',
      description:
        'Developed responsive web pages using HTML during a virtual frontend development internship.',
      technologies: ['HTML'],
    },
  ],

  social: {
    github: '',
    linkedin: 'https://www.linkedin.com/in/akhilesh-jain-97b3a72a6/',
    email: 'akhileshapjain2005@gmail.com',
  },
};

export default portfolioData;
