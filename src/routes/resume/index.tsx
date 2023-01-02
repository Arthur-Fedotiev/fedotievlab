import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

import { MailIcon } from "~/components/icons";
import { SkillModel, EducationModel } from "./resume.model";
import {
  ResumeModel,
  ContactModel,
  ExperienceModel,
  ProjectModel,
} from "./resume.model";

export const onGet: RequestHandler<ResumeModel> = async () => {
  return import("./resume.json");
};

export default component$(() => {
  const resumeResource = useEndpoint<typeof onGet>();

  return (
    <div class="p-4 rounded-2xl bg-neutral-900 border border-neutral-700 text-charcoal-400  min-h-screen sm:p-5 antialiased">
      <div class="container mx-auto shadow ">
        <Resource
          value={resumeResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Failed to load resume</div>}
          onResolved={(resume) => {
            return (
              <>
                <Bio
                  contact={resume.contact}
                  name={resume.fullname}
                  role={resume.role}
                />

                <Summary summary={resume.summary} />
                <div class="border-b border-neutral-700 pb-2 my-5 lg:flex">
                  <div class="lg:w-2/3 lg:pr-8">
                    <Experience data={resume.experience} />
                    {/* <Projects data={resume.projects} /> */}
                  </div>
                  <div class="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-700 ">
                    <Skills data={resume.skills} />
                    <Education data={resume.education} />
                  </div>
                </div>
                {/* <Footer social={resume.social} /> */}
              </>
            );
          }}
        />
      </div>
    </div>
  );
});

export interface BioProps {
  contact: ContactModel;
  name: string;
  role: string;
}

export const Bio = component$(({ name, role, contact }: BioProps) => {
  return (
    <header class="relative border-b border-neutral-700 pb-2 md:flex items-center justify-between gap-10">
      <div class={`hidden md:block `}>
        <Avatar />
      </div>
      <div>
        <h1 class="text-primary-500 text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
          {name}
        </h1>
        <h2 class="font-light text-lg lg:text-2xl text-primary-900 tracking-widest">
          {role}
        </h2>
        <div class="hidden md:block">
          <DownloadBtn link="/resume.pdf" />
        </div>
      </div>
      <div class="mt-5 md:mt-0  md:border-neutral-700 md:pl-4">
        {contact &&
          Object.keys(contact).map((key) => (
            <Contact
              key={key}
              field={key}
              value={contact[key as keyof BioProps["contact"]]}
            />
          ))}
      </div>
      <div class="md:hidden">
        <DownloadBtn link="/resume.pdf" />
      </div>
    </header>
  );
});

export const DownloadBtn = component$(({ link }: { link: string }) => (
  <a
    href={link}
    download="Artur_Fedotiev_CV_SoftwareDeveloper.pdf"
    class={`inline-flex items-center bg-primary-300 hover:bg-secondary-400 text-gray-800 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2 mr-2 my-4 focus:outline-none animate-pulse`}
  >
    <svg
      class="fill-current w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
    Download
  </a>
));

export interface ContactProps {
  field: string;
  value: string;
}

export const Contact = component$(({ field, value }: ContactProps) => (
  <span class="flex my-2 text-primary-900 tracking-widest items-center">
    {field === "email" && (
      <>
        <MailIcon width={32} height={32} />
        <a class="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === "phone" && (
      <>
        <MailIcon width={32} height={32} />
        <a class="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === "website" && (
      <>
        <MailIcon width={32} height={32} />
        <a
          class="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === "location" && (
      <>
        <MailIcon width={32} height={32} />
        <span class="contact-link">{value}</span>
      </>
    )}
  </span>
));

export interface SummaryProps {
  summary: ResumeModel["summary"];
}

export const Summary = component$(({ summary }: SummaryProps) => (
  <section class="py-5 border-b border-neutral-700 lg:flex items-center ">
    <div class={`md:hidden my-5`}>
      <Avatar />
    </div>
    <p
      class="text-justify tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg"
      dangerouslySetInnerHTML={summary}
    />
  </section>
));

export const Avatar = component$(() => (
  <img
    class="rounded-full mx-auto w-32"
    src="/images/avatar.jpeg"
    alt="Profile Avatar"
  />
));

export interface ExperienceProps {
  data: ExperienceModel[];
}

export const Experience = component$(({ data }: ExperienceProps) => (
  <section>
    <h1 class="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article class="my-5" key={`${item.company}-${i}`}>
          <h2 class="item-header">{item.role}</h2>
          <h3 class="item-sub">
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
));

export interface ResponsibilitiesProps {
  data: string[];
}

export const Responsibilities = component$(
  ({ data }: ResponsibilitiesProps) => (
    <>
      <ul class="list-disc list-outside">
        {data.map((item) => (
          <li class="ml-4 mt-2" key={item} dangerouslySetInnerHTML={item}>
            {/* {item} */}
          </li>
          // <li class="ml-4 mt-2" key={item} dangerouslySetInnerHTML={item} />
        ))}
      </ul>
    </>
  )
);

export interface ProjectsProps {
  data: ProjectModel[];
}

export const Projects = component$(({ data }: ProjectsProps) => (
  <section>
    <h1 class="section-header">Projects</h1>
    {data.map((item) => (
      <article class="my-5" key={item.name}>
        <h2 class="item-header">{item.name}</h2>
        <h3 class="item-sub">{item.company}</h3>
        <p class="py-4">{item.description}</p>
        <div class="flex justify-end">
          <a
            class="btn btn-secondary"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </article>
    ))}
  </section>
));

export interface SkillProps {
  data: SkillModel[];
}

export const Skills = component$(({ data }: SkillProps) => (
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
              <Progress label={subskill.name} percent={subskill.percent} />
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
));

export interface ListItemProps {
  text: string;
}

export interface ProgressProps {
  label: string;
  percent: number;
}

export const Progress = component$(({ percent, label }: ProgressProps) => (
  <>
    <span class="pl-2 text-charcoal-200">{label}</span>
    <div class="shadow w-full bg-transparent rounded overflow-hidden mb-2">
      <div class="w-full h-6 bg-white rounded-full">
        <div
          class="h-6 bg-primary-500 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  </>
));

export interface EducationProps {
  data: EducationModel[];
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

// export interface ListProps {
//   data: { title: string; items: string[] };
// }

// export const List = component$(({ data }: ListProps) => (
//   <section>
//     <h1 class="section-header">{data.title}</h1>
//     <div class="py-3">
//       {data.items.map((item) => (
//         <ListItem key={`${item}-li`} text={item} />
//       ))}
//     </div>
//   </section>
// ));

{
  /* <div>
      <h1>
        I'm Arthur <span class="lightning">⚡️</span>
      </h1>
      <h2>Education</h2>
      <Resource
        value={educationResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(educations) => (
          <>
            {educations.map((education) => (
              <div key={education.id}>
                <h3>{education.name}</h3>
              </div>
            ))}
          </>
        )}
      />
    </div> */
}

// <div class="max-w-3xl text-charcoal-800 p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
//   <header class="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
//     <div class="block">
//       <h1 class="mb-0 text-5xl font-bold text-gray-750">Artur Fedotiev</h1>
//       <h2 class="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
//         Full Stack Web Development
//       </h2>

//       <h3 class="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish">
//         San Francisco, California
//       </h3>
//     </div>
//     <div
//       class="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black"
//       style="padding-bottom: 1.5rem; padding-top: 1.5rem;"
//     >
//       <div class="text-center initial">T</div>
//       <div class="text-center initial">L</div>
//       <div class="text-center initial">H</div>
//     </div>
//   </header>

//   <div class="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
//     <section class="pb-4 mt-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <section class="pb-2 mb-2 border-b-2 break-inside-avoid">
//           <ul class="list-inside pr-7">
//             <li class="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
//               <a href="https://thomasleonhighbaugh.me" class="group">
//                 <span class="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
//                   Portfolio:
//                 </span>
//                 thomasleonhighbaugh.me
//                 <span class="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
//                   ↗
//                 </span>
//               </a>
//             </li>
//             <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//               <a href="https://github.com/Thomashighbaugh" class="group">
//                 <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                   Github:
//                 </span>
//                 Thomashighbaugh
//                 <span class="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
//                   ↗
//                 </span>
//               </a>
//             </li>

//             <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//               <a href="mailto:thighbaugh@zoho.com" class="group">
//                 <span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
//                   Email:
//                 </span>
//                 thighbaugh@zoho.com
//                 <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                   ↗
//                 </span>
//               </a>
//             </li>
//             <li class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//               <a href="tel:+15103095128">
//                 <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                   Phone:
//                 </span>
//                 +1(510)309-5128
//               </a>
//             </li>
//           </ul>
//         </section>
//       </div>
//     </section>
//     <section class="pb-4 mt-4 border-b-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//           PROFILE
//         </h2>

//         <section class="mb-2 break-inside-avoid">
//           <p class="mt-2 leading-normal text-gray-700 text-md">
//             Around 6 years of experience in developing Web applications using
//             HTML + CSS, SASS, JavaScript, TypeScript. Deep knowledge in
//             developing huge enterprise SPA's using Angular 6-13 and associated
//             tools. Experience making client side architectural solutions,
//             working with mono-repository architecture, DDD methodology, and
//             lately micro front-ends with Module Federation approach. Experience
//             in developing Browser agnostic Web extensions. Experience with
//             leading up to 10 FE developers and taking part in mentoring, and
//             onboarding processes. Participation in projects with distributed
//             teams with a size of up to 100 persons, with the different SDLC,
//             staff models and business domains. As a result, I have a strong
//             understanding of developing products from scratch by a huge and
//             small teams with a high focus on code quality, compliance to SOLID
//             principles and test coverage. Also, I like to share my knowledge
//             during lectures and mentoring programs. Designing software is my
//             passion which is supported by curiosity and dedication to
//             self-improvement. Therefore, I am looking for the enterprise
//             projects environment which has a strong development culture and is
//             focused on the highest standards.
//           </p>
//         </section>
//       </div>
//     </section>
//     <section class="pb-4 mt-4 border-b-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//           EMPLOYMENT HISTORY
//         </h2>
//         <section class="mb-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-650 leading-snugish">
//               Senior software developer at Ciklum
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               August 2021 — October 2022
//             </p>
//           </header>
//           <h4>Main</h4>
//           <ul class="text-gray-700 leading-normal">
//             <li>
//               <span class="transform -translate-y-px select-none text-gray-550">
//                 &rsaquo;
//               </span>
//               Leading a FE sub-domain team
//             </li>
//             <li>
//               <span class="transform -translate-y-px select-none text-gray-550">
//                 &rsaquo;
//               </span>
//               Participating and ensuring proper client-side architectural
//               solutions to enable autarkic teams, independent deployments
//               possibilities, accelerated on-boarding processes, quality and
//               speed of product delivery.
//             </li>
//             <li>
//               <span class="transform -translate-y-px select-none text-gray-550">
//                 &rsaquo;
//               </span>
//               Use of NX-workspace tools for building a product with mono-repo
//               architecture.
//             </li>
//             <li>
//               <span class="transform -translate-y-px select-none text-gray-550">
//                 &rsaquo;
//               </span>
//               Ensuring code quality and decoupling between domain, which with a
//               use of nx speeds-up CI/CD process, and decreases team dependencies
//               inside repository.
//             </li>
//             <li>
//               <span class="transform -translate-y-px select-none text-gray-550">
//                 &rsaquo;
//               </span>
//               Lately, extensive studying and analysis of different approaches,
//               drawbacks and benefits of introducing micro front-end
//               architecture, mainly with Module Federation approach.
//             </li>
//             <li>Continuously working with documentation.</li>
//           </ul>
//           <h4>Secondary</h4>
//         </section>
//       </div>
//     </section>
//     <section class="pb-4 mt-4 border-b-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//           EDUCATION
//         </h2>
//         <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//           <header>
//             <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//               California State University East Bay
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               2009 &ndash; 2014 | Bachelor of Arts
//             </p>
//           </header>
//           <p class="mt-1 leading-normal text-md text-gray-650">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               Major:
//             </span>
//             Political Science
//           </p>
//           <p class="mt-1 leading-normal text-md text-gray-650">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               Minor:
//             </span>
//             Economics
//           </p>
//           <p class="leading-normal text-gray-700 text-md">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               GPA:
//             </span>
//             3.9
//           </p>
//         </section>
//         <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//           <header>
//             <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//               Las Positas Community College
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               2018 &ndash; Present | Associate of Science/Continuing Education
//             </p>
//           </header>
//           <p class="mt-1 leading-normal text-md text-gray-650">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               Major:
//             </span>
//             Computer Science
//           </p>
//           <p class="mt-1 leading-normal text-md text-gray-650"></p>
//           <p class="leading-normal text-gray-700 text-md">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               GPA:
//             </span>
//             4.0
//           </p>
//         </section>

//         <section class="pb-4 mt-4 mb-4 break-inside-avoid">
//           <header>
//             <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//               Codify Academy
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               2018 | Certificate
//             </p>
//           </header>
//           <p class="mt-1 leading-normal text-md text-gray-650">
//             <span class="font-semibold text-gray-700 text-md leading-snugish">
//               Subject:
//             </span>
//             Front End Development
//           </p>
//         </section>
//       </div>
//     </section>
//     <section class="pb-4 mt-4 border-b-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//           PROJECTS
//         </h2>
//         <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//               <a
//                 href="https://github.com/WebPraktikos/universal-resume"
//                 class="group"
//               >
//                 Portfolio Website
//                 <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                   ↗
//                 </span>
//               </a>
//               <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                 <a href="https://github.com/Thomashighbaugh/ThomasLeonHighbaugh-Personal-Site">
//                   <i class="fab fa-github"></i>
//                 </a>
//               </span>
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               Since 2019 | JSX, React, Next.js, SCSS
//             </p>
//           </header>
//           <p class="mt-2.1 text-md text-gray-700 leading-normal">
//             A unique and streamlined developer portfolio site that combines the
//             useful aspect of development portfolios with a blog using Next.js.
//             Interface is clean and features graphics designed personally for use
//             within the site.
//           </p>
//         </section>
//         <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//               <a
//                 href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
//                 class="group"
//               >
//                 Keeper CRM
//                 <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                   ↗
//                 </span>
//               </a>
//               <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                 <a href="https://github.com/Thomashighbaugh/mern-contact-keeper">
//                   <i class="fab fa-github"></i>
//                 </a>
//               </span>
//             </h3>
//             <p class="leading-normal text-md text-gray-550">2021 | MERN</p>
//           </header>
//           <p class="mt-2.1 text-md text-gray-700 leading-normal">
//             Written as part of the process of learning the MERN stack, this
//             application stores contacts for registered users and saves the
//             information they input between sessions.
//           </p>
//         </section>
//         <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//               <a href="https://g5-blog-ccl-ife.vercel.app/" class="group">
//                 Crazy-Wise Gatsby Starter
//                 <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                   ↗
//                 </span>
//               </a>
//               <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                 <a href="https://github.com/Thomashighbaugh/crazy-wise-gatsby-starter">
//                   <i class="fab fa-github"></i>
//                 </a>
//               </span>
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               2020 | React, Styled Components, Gatsby.js
//             </p>
//           </header>
//           <p class="mt-2.1 text-md text-gray-700 leading-normal">
//             A starter blog for Gatsby.js that has tinaCMS integrated into
//             development server to ease the production of content and a very
//             distinct appearance that is both modern and functional. All graphics
//             used in the page heroes are custom pieces made for the site.
//           </p>
//         </section>
//         <section class="mb-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//               <a
//                 href="https://github.com/Thomashighbaugh/Opitx/releases"
//                 class="group"
//               >
//                 Opitx Markdown Editor
//                 <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                   ↗
//                 </span>
//               </a>
//               <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                 <a href="https://github.com/Thomashighbaugh/Opitx/releases">
//                   <i class="fab fa-github"></i>
//                 </a>
//               </span>
//             </h3>
//             <p class="leading-normal text-md text-gray-550">
//               2019 | Electron, React, SCSS
//             </p>
//           </header>
//           <p class="mt-2.1 text-md text-gray-700 leading-normal">
//             An answer to a personal problem with Markdown editors avalable on
//             Linux which provided a less than transparent process of saving in
//             user defined locations that evolved into a Markdown editor written
//             using electron and packaged for all major Linux distributions.
//           </p>
//         </section>
//       </div>
//     </section>
//     <section class="pb-4 mt-4 first:mt-0">
//       <div class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//           SKILLS
//         </h2>
//         <section class="mb-2 break-inside-avoid">
//           <header>
//             <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//               Full Stack Web Development
//             </h3>
//           </header>

//           <div class="my-1 last:pb-1">
//             <ul class="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 HTML5
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 CSS3
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 SCSS
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Tailwind.css
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 LESS
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Javascript
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Typescript
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Node.js
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 JSX
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 React
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 React-Router
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Next.js
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Redux
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Vue
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Express.js
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 NoSQL
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 MongoDB
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 MERN
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 PHP
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 LAMP
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section class="mb-2 break-inside-avoid">
//           <header>
//             <h3 class="font-semibold text-gray-700 text-m leading-snugish">
//               DevOps
//             </h3>
//           </header>
//           <div class="my-1 last:pb-1">
//             <ul class="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Docker
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Docker-Compose
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Version Control
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Git
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 CI/CD
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 GitLab Pipelines
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Github Actions
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Jenkins
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 AWS
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Google Cloud
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Firebase
//               </li>
//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Serverless Hosting
//               </li>

//               <li class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                 Linux
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </section>
//   </div>
// </div>;
