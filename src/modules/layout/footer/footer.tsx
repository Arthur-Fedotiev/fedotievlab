import { component$ } from "@builder.io/qwik";
import { MailIcon } from "../../shared/ui/icons/mail-icon";

export const social = [
  {
    service: "linkedin",
    url: "https://www.linkedin.com/in/barancezayirli",
  },
  {
    service: "github",
    url: "https://github.com/barancezayirli",
  },
] as const;

export const Footer = component$(() => (
  <footer class="py-6 mx-auto items-center justify-between md:flex">
    <div class="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span class="inline-block mr-1">
        © {new Date().getFullYear()} | Developed with
      </span>
      <span class="inline-block mr-1">
        <MailIcon width={32} height={32} />
      </span>
      <span class="inline-block mr-1">by</span>
      <a
        class="text-primary-500 hover:text-primary-700 font-bold"
        href="https://barancezayirli.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Artur Fedotiev
      </a>
    </div>

    <div class="flex items-center justify-center ml-2">
      {social.map((item) => (
        <a
          key={item.service}
          class="footer-social-link"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.service}
        >
          <MailIcon width={32} height={32} />
        </a>
      ))}
    </div>
  </footer>
));
