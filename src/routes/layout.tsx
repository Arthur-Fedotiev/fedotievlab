import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Footer, Sidebar } from "~/modules/layout";
import { NavBar } from "~/modules/layout/navigation/nav-bar";

export default component$(() => {
  const location = useLocation();
  const isResume = location.pathname.includes("/resume");
  return (
    <div class="p-3 h-full bg-stone-800 overflow-hidden">
      <main class="flex flex-col gap-2 md:flex-row md:justify-between min-h-screen mt-16 sm:px-10 md:gap-12">
        <NavBar />
        <aside
          class={`
           ${isResume ? "hidden" : " "}
          w-full self-start p-2 border rounded-lg shadow-md border-gray-700 bg-gray-800 md:sticky md:top-28 md:flex-grow-0 md:flex-shrink-0 md:basis-72`}
        >
          <Sidebar />
        </aside>

        <section class="w-full py-4 px-2 md:p-0">
          <article class="flex justify-center w-full">
            <Slot />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
});
