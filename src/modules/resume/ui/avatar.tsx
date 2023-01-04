import { component$ } from "@builder.io/qwik";

export const Avatar = component$(() => (
  <img
    class="rounded-full mx-auto w-32"
    src="/images/avatar.jpeg"
    alt="Profile Avatar"
  />
));
