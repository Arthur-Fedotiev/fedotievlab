import { ResumeResponse } from "../entities/resume.response";
import fs from "fs";
import { join } from "path";

const RESUME_PATH = join(process.cwd(), "_data", "resume.json");
const RESUME_FORMAT = "utf8";

export const loadResume = (): ResumeResponse =>
  JSON.parse(fs.readFileSync(RESUME_PATH, RESUME_FORMAT));
