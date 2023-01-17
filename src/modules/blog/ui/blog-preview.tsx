import { component$, Slot } from "@builder.io/qwik";

export const BlogPreview = component$(() => (
  <figure>
    <Slot name="image" />

    <figcaption class="p-4">
      <h1 class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
        <Slot name="title" />
      </h1>

      <small class="leading-5 text-gray-500 dark:text-gray-800">
        <Slot name="description" />
      </small>
      <div class="pt-4 pb-2 mt-auto ">
        <Slot name="footer" />
      </div>
    </figcaption>
  </figure>
));
