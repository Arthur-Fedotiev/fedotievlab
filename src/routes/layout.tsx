import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Footer, Sidebar } from "~/modules/layout";
import { NavBar } from "~/modules/layout/navigation/nav-bar";

export default component$(() => {
  const location = useLocation();
  const isContact = location.pathname.includes("/contact");
  return (
    <div class="p-3 h-full bg-stone-800 overflow-hidden">
      <main class="flex flex-col gap-2 lg:flex-row md:justify-between min-h-screen mt-16 sm:px-10 md:gap-12">
        <NavBar />
        <aside
          class={`
           ${isContact ? "" : "hidden"}
          w-full self-start p-2 border rounded-lg shadow-md border-gray-700 bg-gray-800 lg:sticky lg:top-28 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-72`}
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
