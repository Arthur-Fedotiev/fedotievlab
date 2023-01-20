import { component$ } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";

import { getResume } from "~/modules/resume/domain";
import { ResumeFeature } from "~/modules/resume/feature";

export const loadResume = loader$(async () => getResume());

export default component$(() => {
  const resume = loadResume.use();
  return (
    <div class="p-4 rounded-2xl bg-neutral-900 border border-neutral-700 text-charcoal-400  min-h-screen sm:p-5 antialiased">
      <div class="container mx-auto shadow ">
        <ResumeFeature resume={resume.value} />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About",
};
