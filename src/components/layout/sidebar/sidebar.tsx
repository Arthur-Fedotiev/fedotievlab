import { component$, useStore, $ } from "@builder.io/qwik";
import { AccordionTriggerIcon } from "../../icons/accordion-trigger";
import { ProfileDetails } from "./prodile-details-list";

export const Sidebar = component$(() => {
  const store = useStore({ show: false });
  const toggle$ = $(() => {
    store.show = !store.show;
  });

  return (
    <>
      <div class="flex flex-row justify-between items-center md:flex-col md:max-w-xl  ">
        <img
          class="object-cover w-32 h-32 rounded-full rounded-t-lg  md:h-auto md:w-48"
          src="/images/avatar.webp"
          alt="Avatar of Artur Fedotiev"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artur Fedotiev
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Software Engineer
            <span class="block"> at Dash Financial Technologies</span>
          </p>
        </div>
        <button
          type="button"
          class={`${
            store.show ? "rotate-180" : ""
          } flex flex-0 self-start basis items-center justify-between w-full font-medium text-left  
            rounded-t-xl text-gray-400  hover:bg-gray-800 md:hidden`}
          aria-expanded={store.show ? "true" : "false"}
          aria-controls="profile-details"
          aria-label="Toggle profile details"
          onClick$={toggle$}
        >
          <AccordionTriggerIcon />
        </button>
      </div>
      <ProfileDetails show={store.show} />
    </>
  );
});
