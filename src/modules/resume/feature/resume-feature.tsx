import { component$ } from "@builder.io/qwik";
import { ResumeModel } from "../domain/entities/resume.model";
import { Bio } from "../ui/bio";
import { Education } from "../ui/educations";
import { Experience } from "../ui/expirience/experience";
import { Hobbies } from "../ui/hobbies";
import { Skills } from "../ui/skills/skills";
import { Summary } from "../ui/summary";

interface ResumeFeatureProps {
  resume: ResumeModel;
}

export const ResumeFeature = component$(({ resume }: ResumeFeatureProps) => (
  <>
    <Bio contact={resume.contact} name={resume.fullname} role={resume.role} />

    <Summary summary={resume.summary} />
    <div class="pb-2 my-5 lg:flex">
      <div class="lg:w-2/3 lg:pr-8">
        <Experience data={resume.experience} />
      </div>
      <div class="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-700 ">
        <Skills data={resume.skills} />
        <Education data={resume.education} />
        <Hobbies hobbies={resume.hobbies} />
      </div>
    </div>
  </>
));
