export interface ResumeResponse {
  contact: Contact;
  skills: Skill[];
  summary: string;
  education: Education[];
  experience: Experience[];
  social: Social[];
  role: string;
  hobbies: string[];
  fullname: string;
}

export interface Social {
  service: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  start: string;
  end: string;
  responsibilities: string[];
  secondaryResponsibilities?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
}

export interface Skill {
  title: string;
  type: string;
  subskills: Subskill[];
}

export interface Subskill {
  name: string;
  percent?: number;
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
  location: string;
}
