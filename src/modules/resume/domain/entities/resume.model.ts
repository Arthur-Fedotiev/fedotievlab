import { ResumeResponse } from "./resume.response";

export enum ResumeSkillType {
  Tag = "tag",
  Percent = "percent",
}

export type ResumeModel = ResumeResponse & {
  readonly skills: ResumeResponse["skills"] & {
    type: ResumeSkillType;
  };
};
