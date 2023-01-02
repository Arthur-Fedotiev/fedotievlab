export interface ResumeModel {
  contact: ContactModel;
  skills: SkillModel[];
  summary: string;
  education: EducationModel[];
  experience: ExperienceModel[];
  social: SocialModel[];
  role: string;
  projects: ProjectModel[];
  fullname: string;
}

export interface ProjectModel {
  name: string;
  company: string;
  description: string;
  link: string;
}

export interface SocialModel {
  service: string;
  url: string;
}

export interface ExperienceModel {
  role: string;
  company: string;
  start: string;
  end: string;
  responsibilities: string[];
  secondaryResponsibilities?: string[];
}

export interface EducationModel {
  institution: string;
  degree: string;
  start: string;
  end: string;
}

export interface SkillModel {
  title: string;
  type: string;
  subskills: SubskillModel[];
}

export interface SubskillModel {
  name: string;
  percent?: number;
}

export interface ContactModel {
  phone: string;
  email: string;
  website: string;
  location: string;
}
