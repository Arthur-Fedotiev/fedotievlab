import { component$ } from "@builder.io/qwik";
import { MailIcon } from "~/components/icons";

interface ContactProps {
  readonly field: string;
  readonly value: string;
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
