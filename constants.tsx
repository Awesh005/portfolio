
import { Project, Skill, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'erp-exam',
    title: 'ERP System: Examination Module',
    description: 'A comprehensive module for seamless exam creation, scheduling, and result management. Features role-based access control for admins, faculty, and students with automated grading.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    id: 'atm-system',
    title: 'Python-based ATM System',
    description: 'A command-line interface application supporting core banking transactions including withdrawals, deposits, and history. Built using OOP principles with a modular class structure.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'OOPs'],
    link: '#',
    github: '#'
  },
  {
    id: 'secure-login',
    title: 'Secure Login System',
    description: 'A web application featuring Firebase Authentication for secure user registration and login. Includes real-time form validation and a responsive modern UI.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    tags: ['Firebase', 'JavaScript', 'HTML/CSS'],
    link: '#',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Java', icon: '☕', category: 'languages' },
  { name: 'JavaScript', icon: 'JS', category: 'languages' },
  { name: 'HTML5', icon: '🌐', category: 'languages' },
  { name: 'CSS3', icon: '🎨', category: 'languages' },
  { name: 'SQL', icon: '🗄️', category: 'languages' },
  { name: 'NoSQL', icon: '📊', category: 'languages' },
  
  // Frontend
  { name: 'React.js', icon: '⚛️', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },
  { name: 'REST API', icon: '🔌', category: 'backend' },
  
  // Databases
  { name: 'MongoDB', icon: '🍃', category: 'databases' },
  
  // Tools & Others
  { name: 'Git/GitHub', icon: '📊', category: 'tools' },
  { name: 'VS Code', icon: '💻', category: 'tools' },
  { name: 'MERN Stack', icon: '🏗️', category: 'tools' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'BN IntelHub Pvt Ltd, STPI Ranchi',
    role: 'Full Stack Developer',
    period: 'Feb 26 – Present',
    description: [
      'Developed and deployed multiple responsive websites using React.js, JavaScript, HTML, CSS and Node.js.',
      'Built and maintained the company service platform for showcasing IT services and solutions.',
      'Designed and developed the official BN IntelHub company website with modern UI and optimized performance.',
      'Developed and deployed educational websites including Astro OM Education & Research and American Junior International School.',
      'Implemented responsive design and smooth UI animations to enhance user experience.',
      'Managed project deployment using GitHub and Vercel and maintained version control.',
      'Collaborated on frontend design, layout structure, and website optimization.'
    ]
  },
  {
    company: 'Vikash TechSec Pvt Ltd, Ranchi',
    role: 'GeM Bidding Executive',
    period: 'Oct 25 – Jan 26',
    description: [
      'Identified suitable tenders and bids on the Government e-Marketplace (GeM) portal.',
      'Prepared and submitted comprehensive technical and financial documentation for bids.',
      'Coordinated cross-departmentally with vendors to ensure accurate and timely submissions.',
      'Maintained precise records of all bid submissions and compliance history.'
    ]
  },
  {
    company: 'Swevex Tech Solution',
    role: 'Account Manager – Amazon Services',
    period: 'July 2025 - Sept 2025',
    description: [
      'Optimized product listings for 5,000+ catalog items to improve visibility and sales.',
      'Enhanced search rankings through keyword optimization and attractive content creation.',
      'Managed Amazon Sponsored Ads (PPC) campaigns, analyzing ROI for performance optimization.',
      'Coordinated with internal teams to monitor sales trends and ad performance.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech. CSE',
    institution: 'Jharkhand Rai University, Ranchi',
    percentage: '79%',
    year: '2025'
  },
  {
    degree: 'Senior Secondary',
    institution: 'DAV Public School/CBSE',
    percentage: '68.8%',
    year: '2021'
  },
  {
    degree: 'Secondary',
    institution: 'O.P. Jindal School/CBSE',
    percentage: '65.6%',
    year: '2019'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for MD Awesh, a Full Stack Developer and B.Tech CSE student.
Your role is to represent MD Awesh professionally to recruiters and collaborators.

Key Details:
- Name: MD Awesh
- Role: Full Stack Developer / Software Engineer
- Education: B.Tech CSE from Jharkhand Rai University (79% CGPA).
- Top Projects: ERP Examination Module (MERN), Python ATM System, Firebase Secure Login.
- Technical Skills: Java, JavaScript, HTML5, CSS3, SQL, NoSQL, React.js, Tailwind CSS, Node.js, Express.js, REST API, MongoDB, Git/GitHub, VS Code, MERN Stack.
- Experience: Full Stack Developer at BN IntelHub, GeM Bidding Executive at Vikash TechSec, Account Manager at Swevex Tech.
- Soft Skills: Teamwork, Problem-solving, Creativity.

Tone: Professional, confident, and helpful. 
Keep answers concise and focus on his technical capabilities.
`;
