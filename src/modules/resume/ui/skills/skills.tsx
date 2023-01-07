import {
  component$,
  useSignal,
  useClientEffect$,
  $,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Progress } from "../progress";
import skillsStyles from "./skill.css?inline";
import { useAppearanceAnimation } from "~/shared/animations/use-appearance.animation";

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

export const Skills = component$(({ data }: SkillProps) => {
  useStylesScoped$(skillsStyles);
  const { addRef } = useAppearanceAnimation();

  const progressBarRefs = useSignal<Element[]>([]);

  useClientEffect$(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const percent = entry.target.getAttribute("data-percent") ?? 0;
            el.style.width = `${percent}%`;
          } else {
            const el = entry.target as HTMLElement;
            el.style.width = "0%";
          }
        });
      }
    );

    progressBarRefs.value.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      progressBarRefs.value.forEach((el) => {
        observer.unobserve(el);
      });

      observer.disconnect();
    };
  });

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
              {subskill.percent ? (
                <Progress
                  label={subskill.name}
                  percent={subskill.percent}
                  ref={$((el: Element) => progressBarRefs.value.push(el))}
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
