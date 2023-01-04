import { component$ } from "@builder.io/qwik";
import { Progress } from "./progress";

interface SkillProps {
  readonly data: {
    readonly title: string;
    readonly type: string;
    readonly subskills: {
      readonly name: string;
      readonly percent?: number;
    }[];
  }[];
}

export const Skills = component$(({ data }: SkillProps) => (
  <section>
    <h1 class="section-header">Skills</h1>
    {data.map((skill) => (
      <div key={skill.title} class="my-5">
        <h2 class="item-header font-semibold text-lg text-center mb-2">
          {skill.title}
        </h2>
        {skill.subskills.map((subskill) => (
          <span key={subskill.name}>
            {subskill.percent ? (
              <Progress label={subskill.name} percent={subskill.percent} />
            ) : null}
            {skill.type === "tag" ? (
              <span key={subskill.name} class="tag">
                {subskill.name}
              </span>
            ) : null}
          </span>
        ))}
      </div>
    ))}
  </section>
));
