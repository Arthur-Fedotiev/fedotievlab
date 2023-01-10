export interface SkillProps {
  readonly data: {
    readonly title: string;
    readonly type: string;
    readonly subskills: {
      readonly name: string;
      readonly percent?: number;
    }[];
  }[];
}
