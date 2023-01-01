import { component$, Slot } from "@builder.io/qwik";
import { Sidebar } from "~/components/layout";
import { NavBar } from "~/components/layout/navigation/nav-bar";

export default component$(() => {
  return (
    <div class="p-3 h-full bg-stone-800">
      <main class="flex flex-col gap-2 md:flex-row md:justify-between h-full mt-16 sm:px-10 md:px-14 lg:px-24 xl:px-32 2xl:px-40 md:gap-12">
        <NavBar />
        <aside class="w-full self-start p-4 border rounded-lg shadow-md border-gray-700 bg-gray-800 md:sticky md:top-20 md:flex-grow-0 md:flex-shrink-0 md:basis-72 xl:top-28">
          <Sidebar />
        </aside>

        <section class="w-full py-4 px-2 md:p-0">
          <article class="flex justify-center w-full">
            <Slot />
          </article>
        </section>
      </main>
    </div>
  );
});
