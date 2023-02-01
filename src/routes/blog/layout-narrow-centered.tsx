import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div
    class="w-full text-justify prose prose-code:text-red-500 prose-code:bg-slate-800 
    prose-code:p-1 prose-headings:font-extrabold prose-img:rounded-xl text-gray-300 md:text-lg
    prose-blockquote:text-white 
    prose-h1:text-center prose-h1:border-0 prose-headings:border-b-[1px] prose-headings:border-b-primary-800 prose-headings:pb-1 prose-headings:text-yellow-500
    prose-a:text-yellow-400 prose-strong:text-secondary-500 prose-strong:font-bold"
  >
    <Slot />
  </div>
));
