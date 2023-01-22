import { component$ } from "@builder.io/qwik";
import { SOCIAL_LINKS } from "~/modules/contact/feature/contact";

export const Footer = component$(() => (
  <footer class="flex justify-around items-center w-full md:py-5 lg:py-6 rounded-lg md:justify-between md:p-10">
    <div>
      <a
        href="https://www.linkedin.com/in/arthurfedotiev/"
        target="_blank"
        class="flex items-center"
      >
        <span class="self-center text-md md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-primary-400 dark:hover:text-secondary-400">
          Fedotiev Lab
        </span>
      </a>
    </div>

    <div class="flex space-x-6 justify-center">
      {SOCIAL_LINKS.map(({ href, icon }) => (
        <a
          href={href}
          target="_blank"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-primary-400"
        >
          {icon}
          <span class="sr-only">Facebook page</span>
        </a>
      ))}
    </div>
  </footer>
));
