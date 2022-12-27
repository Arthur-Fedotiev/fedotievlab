import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import markdown from "~/markdown.css?inline";

export default component$(() => {
  useStyles$(markdown);
  return (
    <article class="prose prose-h1:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400">
      <Slot />
    </article>
  );
});
