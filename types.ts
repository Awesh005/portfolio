
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools' | 'languages' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  percentage: string;
  year: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export type Theme = 'light' | 'dark';
