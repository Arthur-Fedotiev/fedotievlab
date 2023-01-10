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

export const Skills = component$(({ data }: SkillProps) => {
  useStylesScoped$(skillsStyles);

  const skillsStore = useStore<{ data: SkillProps["data"] }>({ data: [] });

  const tagRefs = useInView$((entry) =>
    toggleClasses(entry, ["animate-slide-in", "skill2"])
  );
  const progressRefs = useInView$(updateElementWidth);

  const removeAll$ = $(
    () =>
      (skillsStore.data = skillsStore.data.map((data) => ({
        ...data,
        subskills: [],
      })))
  );

  const restoreAll$ = $(() => {
    skillsStore.data = data;
  });

  useTask$(() => {
    const tagsLength = data
      .filter((skill) => skill.type === "tag")
      .reduce((acc, { subskills }) => acc + subskills.length, 0);

    const progressLength = data
      .filter((skill) => skill.type === "percent")
      .reduce((acc, { subskills }) => acc + subskills.length, 0);

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
      <button
        onClick$={restoreAll$}
        type="button"
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        RESTORE ALL
      </button>
      <button
        onClick$={removeAll$}
        type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        REMOVE ALL
      </button>

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
