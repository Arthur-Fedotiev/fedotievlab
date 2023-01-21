import { component$, Slot } from "@builder.io/qwik";
export default component$(() => (
  <div class="p-4 rounded-2xl bg-neutral-900 border border-neutral-700 text-charcoal-300  min-h-screen sm:p-5 antialiased">
    <div class="container mx-auto shadow ">
      <Slot />
    </div>
  </div>
));
