import { component$, Slot } from "@builder.io/qwik";
import Navbar from "~/components/layout/navigation/Navbar";
import Sidebar from "~/components/layout/sidebar";

export default component$(() => {
  return (
    <>
      <main class="flex flex-col md:flex-row h-full bg-orange-200 min-h-max">
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
    </>
  );
});
