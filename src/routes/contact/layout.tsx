import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => (
  <section class="mb-32 text-gray-800">
    <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg h-[500px] bg-center bg-[url('/images/framework-heroes.jpeg')] "></div>
    <div class="container text-gray-800 px-4 md:px-12">
      <div
        class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 bg-neutral-800 backdrop-blur-[30px]"
        style="margin-top: -200px"
      >
        <div class="flex flex-wrap ">
          <Slot />
        </div>
      </div>
    </div>
  </section>
));
