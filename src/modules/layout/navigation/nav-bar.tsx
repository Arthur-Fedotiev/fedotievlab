import { component$, useStore, $ } from "@builder.io/qwik";
import { NavLink } from "./nav-link";
import { HamburgerIcon } from "./hamburger-icon";

export const NavBar = component$(() => {
  const state = useStore({ expanded: false });

  const toggle = $(() => {
    state.expanded = !state.expanded;
  });

  return (
    <>
      <nav class="px-2 sm:px-4 py-2.5 bg-neutral-700 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class=" flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap text-primary-500">
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
            class={`items-center justify-between w-full md:flex md:w-auto md:order-1 overflow-hidden transition-max-h duration-700 md:max-h-8 ${
              state.expanded ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul class="flex flex-col p-4 mt-4 border rounded-lg  bg-neutral-800 border-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <NavLink href={"/#"}>About</NavLink>
              </li>
              <li>
                <NavLink href={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink href={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});
