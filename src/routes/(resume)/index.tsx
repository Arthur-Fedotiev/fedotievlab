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
  title: "Artur Fedotiev | Software Engineer",
  meta: [
    {
      name: "author",
      content: "Artur Fedotiev",
    },
    {
      name: "application-name",
      content: "Artur Fedotiev Resume",
    },
    {
      name: "description",
      content:
        "Artur Fedotiev is a software engineer with over 6 years of experience in developing web applications using HTML + CSS, SASS, JavaScript, TypeScript. He has deep knowledge in developing enterprise SPA's using Angular and is experienced in making client side architectural solutions and working with micro front-ends. He is also a skilled leader, having led up to 10 FE developers in his career.",
    },
    {
      name: "keywords",
      content:
        "Software Engineer, Web Development, HTML + CSS, SASS, JavaScript, TypeScript, Angular, Enterprise SPA, Client Side Architecture, Micro Front-Ends, Code Quality, SOLID principles, Test Coverage, Meetups, Mentoring",
    },
    {
      property: "og:title",
      content: "Artur Fedotiev | Software Engineer",
    },
    {
      property: "og:description",
      content:
        "Artur Fedotiev is a software engineer with over 6 years of experience in developing web applications using HTML + CSS, SASS, JavaScript, TypeScript. He has deep knowledge in developing enterprise SPA's using Angular and is experienced in making client side architectural solutions and working with micro front-ends. He is also a skilled leader, having led up to 10 FE developers in his career.",
    },
    {
      property: "og:url",
      content: "https://fedotievlab.vercel.app",
    },
    {
      name: "image",
      property: "og:image",
      content: "https://fedotievlab.vercel.app/images/framework-heroes.jpeg",
    },
    {
      name: "image",
      property: "og:image:secure_url",
      content: "https://fedotievlab.vercel.app/images/framework-heroes.jpeg",
    },
    {
      property: "og:image:width",
      content: "1116",
    },
    {
      property: "og:image:height",
      content: "667",
    },
  ],
};
