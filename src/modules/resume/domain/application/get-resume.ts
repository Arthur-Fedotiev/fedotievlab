import { ResumeModel } from "../entities/resume.model";
import { loadResume } from "../infrastructure/load-resume";

export const getResume = (): ResumeModel => loadResume();
