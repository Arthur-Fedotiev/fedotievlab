import { component$ } from "@builder.io/qwik";

interface EducationProps {
  readonly data: {
    readonly institution: string;
    readonly degree: string;
    readonly start: string;
    readonly end: string;
  }[];
}

export const Education = component$(({ data }: EducationProps) => (
  <section class="mb-5">
    <h1 class="section-header mb-5">Education</h1>
    {data &&
      data.map((item) => (
        <div class="my-2" key={item.degree}>
          <h2 class="item-header text-lg">{item.degree}</h2>
          <h3 class="item-sub">{item.institution}</h3>
          <p class="text-sm text-charcoal-400 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
));
