import {
  component$,
  useStylesScoped$,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { Progress } from "../progress";
import skillsStyles from "./skill.css?inline";
import {
  updateElementWidth,
  isTag,
  isProgress,
  getIndexOfProgress,
  getIndexOfTag,
} from "./utils";
import { $ } from "@builder.io/qwik";
import { SkillProps } from "./models";
import { useInView$ } from "~/modules/shared/ui/hooks/use-in-view";
import { toggleClasses } from "~/modules/shared/animations/utils";
import { ResumeSkillType } from "../../domain/entities/resume.model";

export const Skills = component$(({ data }: SkillProps) => {
  useStylesScoped$(skillsStyles);

  const skillsStore = useStore<{ data: SkillProps["data"] }>({ data: [] });

  const tagRefs = useInView$((entry) =>
    toggleClasses(entry, ["animate-slide-in", "skill2"])
  );
  const progressRefs = useInView$(updateElementWidth);

  useTask$(() => {
    const countOf = (type: ResumeSkillType) =>
      data
        .filter((skill) => skill.type === type)
        .reduce((acc, { subskills }) => acc + subskills.length, 0);

    const tagsLength = countOf(ResumeSkillType.Tag);
    const progressLength = countOf(ResumeSkillType.Percent);

    skillsStore.data = data;
    tagRefs.refs = new Array(tagsLength).fill(null);
    progressRefs.refs = new Array(progressLength).fill(null);
  });

  const addProgressRef = (idx: number) =>
    $((el: Element | null) => {
      progressRefs.refs = [...progressRefs.refs].map((ref, i) =>
        idx === i ? el : ref
      );
    });

  const addTagRef = (idx: number, skillType: string) =>
    $((el: Element | null) => {
      if (skillType !== "tag") return;
      tagRefs.refs = [...tagRefs.refs].map((ref, i) => (idx === i ? el : ref));
    });

  return (
    <section>
      <h1 class="section-header mb-8">Skills</h1>
      {skillsStore.data.map((skill, skillIdx) => (
        <div key={skill.title} class="my-5">
          <h2 class="item-header font-semibold text-lg text-center mb-2">
            {skill.title}
          </h2>

          {skill.subskills.map((subskill, subskillIdx) => (
            <span
              class={`${isTag(skill) ? "staggered animate-hidden-left" : ""}`}
              key={subskill.name}
              ref={addTagRef(
                getIndexOfTag(data, skillIdx, subskillIdx),
                skill.type
              )}
            >
              {isProgress(subskill) ? (
                <Progress
                  label={subskill.name}
                  percent={subskill.percent}
                  ref$={addProgressRef(
                    getIndexOfProgress(data, skillIdx, subskillIdx)
                  )}
                />
              ) : null}
              {isTag(skill) ? (
                <span key={subskill.name} class="tag ">
                  {subskill.name}
                </span>
              ) : null}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
});
