import { component$, Slot } from "@builder.io/qwik";
import Navbar from "~/components/layout/navigation/Navbar";
import Sidebar from "~/components/layout/sidebar";

export default component$(() => {
  return (
    <div class="p-3 h-full">
      <main class="flex flex-col gap-2 md:flex-row h-full mt-16">
        <section class="md:basis-2/5 bg-slate-400">
          <Sidebar />
        </section>

        <section>
          <Navbar />
        </section>
        <section class="w-full main-content bg-lime-200 ">
          <article class="">
            <Slot />
          </article>
        </section>
      </main>
    </div>
  );
});
