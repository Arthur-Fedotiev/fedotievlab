import { component$, $, useStylesScoped$ } from "@builder.io/qwik";
import { Progress } from "../progress";
import skillsStyles from "./skill.css?inline";
import { useAppearanceAnimation } from "~/modules/shared/animations/use-appearance.animation";
import { useInView } from "~/modules/shared/ui/use-in-view";

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

export const isTag = ({ type }: { type: string }) => type === "tag";
export const isProgress = <
  T extends Readonly<{ type?: string; percent?: number }>
>(
  param: T
): param is Required<T> =>
  param.type === "progress" || typeof param.percent === "number";

export const updateElementWidth$ = $((entry: IntersectionObserverEntry) => {
  const el = entry.target as HTMLElement;
  const percent = el.dataset.percent ?? 0;

  el.style.width = entry.isIntersecting ? `${percent}%` : "0%";
});

export const Skills = component$(({ data }: SkillProps) => {
  useStylesScoped$(skillsStyles);

  const { addRef } = useAppearanceAnimation();
  const { addRef$: addProgressBarRef$ } = useInView(updateElementWidth$);

  return (
    <section>
      <h1 class="section-header">Skills</h1>
      {data.map((skill) => (
        <div key={skill.title} class="my-5">
          <h2 class="item-header font-semibold text-lg text-center mb-2">
            {skill.title}
          </h2>
          {skill.subskills.map((subskill) => (
            <span
              class={`${isTag(skill) ? "staggered" : ""} animate-hidden-left`}
              key={subskill.name}
              ref={addRef}
            >
              {isProgress(subskill) ? (
                <Progress
                  label={subskill.name}
                  percent={subskill.percent}
                  ref$={addProgressBarRef$}
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
