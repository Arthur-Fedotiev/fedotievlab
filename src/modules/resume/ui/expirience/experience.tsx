import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
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

  const headersRefsStore = useAppearanceAnimation();
  const subHeadersRefsStore = useAppearanceAnimation();

  const addRef = (
    idx: number,
    store: ReturnType<typeof useAppearanceAnimation>
  ) => $((el: Element) => store.refs.splice(idx, 1, el));

  return (
    <section>
      <h1 class="section-header">Experience</h1>
      {data &&
        data.map((item, i) => (
          <article class="my-5" key={`${item.company}-${i}`}>
            <h2
              ref={addRef(i, headersRefsStore)}
              class="item-header animate-hidden-left"
            >
              {item.role}
            </h2>
            <h3
              ref={addRef(i, subHeadersRefsStore)}
              class="item-sub animate-hidden-right"
            >
              {item.company} | {item.start} - {item.end || "PRESENT"}
            </h3>
            {item.secondaryResponsibilities ? <h4>Main:</h4> : null}
            <Responsibilities data={item.responsibilities} />
            {item.secondaryResponsibilities ? (
              <>
                <h4>Secondary:</h4>
                <Responsibilities data={item.secondaryResponsibilities} />
              </>
            ) : null}
          </article>
        ))}
    </section>
  );
});
