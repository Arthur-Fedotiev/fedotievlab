import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Responsibilities } from "../responsibilities/responsibilities";
import experienceStyles from "./experience.styles.css?inline";
import { useAppearanceAnimation } from "~/modules/shared/animations/use-appearance.animation";

interface ExperienceProps {
  readonly data: {
    readonly role: string;
    readonly company: string;
    readonly start: string;
    readonly end: string;
    readonly responsibilities: string[];
    readonly secondaryResponsibilities?: string[];
  }[];
}

export const Experience = component$(({ data }: ExperienceProps) => {
  useStylesScoped$(experienceStyles);

  const { addRef } = useAppearanceAnimation();

  return (
    <section>
      <h1 class="section-header">Experience</h1>
      {data &&
        data.map((item, i) => (
          <article class="my-5" key={`${item.company}-${i}`}>
            <h2 ref={addRef} class="item-header animate-hidden-left">
              {item.role}
            </h2>
            <h3 ref={addRef} class="item-sub animate-hidden-right">
              {item.company} | {item.start} - {item.end || "PRESENT"}
            </h3>
            {item.secondaryResponsibilities ? <h4>Main:</h4> : null}
            <Responsibilities data={item.responsibilities} />
            {item.secondaryResponsibilities ? (
              <>
                <h4>Secondary:</h4>
                <Responsibilities data={item.responsibilities} />
              </>
            ) : null}
          </article>
        ))}
    </section>
  );
});
