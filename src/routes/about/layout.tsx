import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="prose prose-h1:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400">
      <Slot />
    </article>
  );
});
