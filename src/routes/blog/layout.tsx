import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <Slot />
  </div>
));
