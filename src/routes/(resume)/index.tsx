import { component$ } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";

import { getResume } from "~/modules/resume/domain";
import { ResumeFeature } from "~/modules/resume/feature";

export const loadResume = loader$(async () => getResume());

export default component$(() => {
  const resume = loadResume.use();
  return <ResumeFeature resume={resume.value} />;
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "About me",
    },
    {
      name: "keywords",
      content: "CV, Resume, About",
    },
  ],
};
