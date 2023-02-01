import { component$ } from "@builder.io/qwik";
import { Contact } from "./contact";
import { DownloadBtn } from "./download-btn";
import { Avatar } from "./avatar";

interface BioProps {
  readonly contact: {
    readonly phone: string;
    readonly email: string;
    readonly website: string;
    readonly location: string;
  };
  readonly name: string;
  readonly role: string;
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
        <h2 class="font-light text-lg lg:text-2xl text-primary-600 tracking-widest">
          {role}
        </h2>
        <div class="hidden md:block">
          <DownloadBtn link="/cv.pdf" />
        </div>
      </div>
      <div class="mt-5 md:mt-0  md:border-neutral-700 md:pl-4">
        {contact &&
          Object.keys(contact).map((key) => (
            <Contact
              key={key}
              field={key as keyof BioProps["contact"]}
              value={contact[key as keyof BioProps["contact"]]}
            />
          ))}
      </div>
      <div class="md:hidden">
        <DownloadBtn link="/cv.pdf" />
      </div>
    </header>
  );
});
