import { component$, Slot } from "@builder.io/qwik";
import { Navbar, Sidebar } from "~/components/layout";

export default component$(() => {
  return (
    <div class="p-3 h-full">
      <main class="flex flex-col gap-2 md:flex-row h-full mt-16 md:max-w-5xl sm:px-10 md:px-14 lg:px-24 xl:px-32 2xl:px-40">
        <aside class="w-full self-start p-4 border rounded-lg shadow-md border-gray-700 bg-gray-800 md:sticky md:top-20 md:flex-grow-0 md:flex-shrink-0 md:basis-72 xl:top-28">
          <Sidebar />
        </aside>

        <section>
          <Navbar />
        </section>
        <section class="w-full main-content">
          <article class="">
            <Slot />
          </article>
        </section>
      </main>
    </div>
  );
});
