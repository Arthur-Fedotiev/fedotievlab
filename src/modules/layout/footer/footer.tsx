import { component$ } from "@builder.io/qwik";
import { SOCIAL_LINKS } from "~/modules/contact/feature/contact";

export const Footer = component$(() => (
  <footer class="flex justify-around items-center w-full rounded-lg md:justify-between md:p-10">
    <div>
      <a
        href="https://www.linkedin.com/in/arthurfedotiev/"
        target="_blank"
        class="flex items-center"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="FlowBite Logo"
        />
        <span class="self-center text-md md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:hover:text-primary-600">
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
