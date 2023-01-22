import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div class="w-full prose prose-headings:font-['Titan-One'] prose-code:text-lime-600 prose-headings:font-extrabold prose-img:rounded-xl text-gray-300 prose-code:text- prose-blockquote:text-white prose-headings:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400 prose-a:no-underline">
    <Slot />
  </div>
));
