import { Project, Skill, Experience, Education } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "erp-exam",
    title: "ERP System: Examination Module",
    description:
      "A comprehensive module for seamless exam creation, scheduling, and result management. Features role-based access control for admins, faculty, and students with automated grading.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["MongoDB", "Express", "React.js", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    id: "atm-system",
    title: "Python-based ATM System",
    description:
      "A command-line interface application supporting core banking transactions including withdrawals, deposits, and history. Built using OOP principles with a modular class structure.",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OOPs"],
    link: "#",
    github: "https://github.com/Awesh005/OctaNet-Python-developer-intern",
  },
  {
    id: "secure-login",
    title: "Secure Login System",
    description:
      "A web application featuring Firebase Authentication for secure user registration and login. Includes real-time form validation and a responsive modern UI.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    tags: ["Firebase", "JavaScript", "HTML/CSS"],
    link: "#",
    github: "https://github.com/Awesh005/SecureLogin",
  },
  {
    id: "Gem-Auto-Refresh",
    title: "Gem Auto Refresh",
    description:
      "Gem Auto Refresh is a browser extension that automatically refreshes the GEM (Government e-Marketplace) portal at fixed intervals to prevent session timeouts and auto-logout. It helps users work continuously without manual refresh, providing a simple and practical automation solution.",
    image:
      "./image.png",
    tags: ["Extension", "JavaScript", "HTML/CSS"],
    link: "#",
    github: "https://github.com/Awesh005/Gem-Auto-Refresh",
  },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Python", icon: "🐍", category: "languages" },
  { name: "Java", icon: "☕", category: "languages" },
  { name: "SQL", icon: "🗄️", category: "languages" },

  // Frontend
  { name: "React.js", icon: "⚛️", category: "frontend" },
  { name: "JavaScript", icon: "JS", category: "frontend" },
  { name: "HTML", icon: "🌐", category: "frontend" },
  { name: "CSS", icon: "🎨", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express", icon: "🚀", category: "backend" },

  // Databases
  { name: "MySQL", icon: "🐬", category: "databases" },
  { name: "MongoDB", icon: "🍃", category: "databases" },
  { name: "Firebase", icon: "🔥", category: "databases" },

  // Tools & Others
  { name: "Git", icon: "📊", category: "tools" },
  { name: "Power BI", icon: "📈", category: "tools" },
  { name: "Excel", icon: "📅", category: "tools" },
  { name: "GCP", icon: "☁️", category: "tools" },
  { name: "Jupyter", icon: "📓", category: "tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Vikash TechSec Pvt Ltd.",
    role: "Bidding Executive",
    period: "Oct 2025 - Present",
    description: [
      "Identified suitable tenders and bids on the Government e-Marketplace (GeM) portal.",
      "Prepared and submitted comprehensive technical and financial documentation for bids.",
      "Coordinated cross-departmentally with vendors to ensure accurate and timely submissions.",
      "Maintained precise records of all bid submissions and compliance history.",
    ],
  },
  {
    company: "Swevex Tech Solution",
    role: "Account Manager – Amazon Services",
    period: "July 2025 - Sept 2025",
    description: [
      "Optimized product listings for 5,000+ catalog items to improve visibility and sales.",
      "Enhanced search rankings through keyword optimization and attractive content creation.",
      "Managed Amazon Sponsored Ads (PPC) campaigns, analyzing ROI for performance optimization.",
      "Coordinated with internal teams to monitor sales trends and ad performance.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech. CSE",
    institution: "Jharkhand Rai University, Ranchi",
    percentage: "79%",
    year: "2025",
  },
  {
    degree: "Senior Secondary",
    institution: "DAV Public School/CBSE",
    percentage: "68.8%",
    year: "2021",
  },
  {
    degree: "Secondary",
    institution: "O.P. Jindal School/CBSE",
    percentage: "65.6%",
    year: "2019",
  },
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for MD Awesh, a Full Stack Developer and B.Tech CSE student.
Your role is to represent MD Awesh professionally to recruiters and collaborators.

Key Details:
- Name: MD Awesh
- Role: Full Stack Developer / Software Engineer
- Education: B.Tech CSE from Jharkhand Rai University (79% CGPA).
- Top Projects: ERP Examination Module (MERN), Python ATM System, Firebase Secure Login.
- Technical Skills: React, Node.js, Python, Java, SQL, MongoDB, Firebase.
- Experience: Bidding Executive at Vikash TechSec, Account Manager at Swevex Tech.
- Soft Skills: Teamwork, Problem-solving, Creativity.

Tone: Professional, confident, and helpful. 
Keep answers concise and focus on his technical capabilities.
`;
