import { component$, useSignal, useClientEffect$, $ } from "@builder.io/qwik";
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

export const Skills = component$(({ data }: SkillProps) => {
  const refsStore = useSignal<Element[]>([]);

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

    refsStore.value.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      refsStore.value.forEach((el) => {
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
            <span key={subskill.name}>
              {subskill.percent ? (
                <Progress
                  label={subskill.name}
                  percent={subskill.percent}
                  ref={$((el: Element) => refsStore.value.push(el))}
                />
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
  );
});
