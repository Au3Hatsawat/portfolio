export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string; 
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

export interface Profile {
  name: string;
  role: string;
  email: string;  
  phone: string;   
  github: string;  
  linkedin: string;
  location: string; 
  bio: string;
}

export interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  education: Education[]; 
  skills: Skills;         
  projects: Project[];
}