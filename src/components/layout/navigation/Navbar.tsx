import { component$, useStore, $ } from "@builder.io/qwik";
import NavLink from "./Navlink";
import HamburgerIcon from "./HamburgerIcon";

export default component$(() => {
  const state = useStore({ expanded: false });

  const toggle = $(() => {
    state.expanded = !state.expanded;
  });

  return (
    <>
      <nav class="px-2 sm:px-4 py-2.5 bg-neutral-700 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class=" flex items-center">
            <img
              src=""
              class="h-6 mr-3 sm:h-9 hidden"
              alt="FEDOTIEV LAB Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-yellow-500">
              FEDOTIEV LAB
            </span>
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={state.expanded}
              onClick$={toggle}
            >
              <span class="sr-only">Open main menu</span>
              <HamburgerIcon />
            </button>
          </div>
          <div
            id="navbar-sticky"
            class={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              !state.expanded ? "hidden" : ""
            }`}
          >
            <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-neutral-800 border-gray-700">
              <li>
                <NavLink href={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink href={"/resume"}>Resume</NavLink>
              </li>
              <li>
                <NavLink href={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink href={"/blog"}>Blog</NavLink>
              </li>
              <NavLink href={"/contact"}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});
