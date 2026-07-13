export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Project {
  name: string;
  period?: string;
  description?: string;
  link?: string;
  achievements: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects?: Project[];
  achievements?: string[];
}

export interface Education {
  title: string;
  institution: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface BestPractice {
  title: string;
  description: string;
  icon?: string;
}

export interface AboutMe {
  description: string;
  highlights: {
    text: string;
    icon: 'learn' | 'tech' | 'gym';
  }[];
}

export interface CVData {
  name: string;
  role: string;
  location: string;
  contact: Contact;
  summary: string;
  aboutMe?: AboutMe;
  experience: Experience[];
  projects: Project[];
  skills: Record<string, string>;
  education: Education[];
  languages?: Language[];
  bestPractices?: BestPractice[];
}
