import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => (
  <div class="md:py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </div>
));

export const Card = component$(() => {
  return (
    <a
      href="/blog/angular-concepts"
      tabIndex={0}
      class="max-w-sm h-auto mx-auto rounded overflow-hidden shadow-lg"
    >
      <Slot name="image" />
      <div class="px-6 py-4 ">
        <h1 class="font-bold text-xl mb-2 hover:text-orange-500 hover:cursor-pointer">
          <Slot name="title" />
        </h1>
        <p class="text-base">
          <Slot name="description" />
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Slot name="footer" />
      </div>
    </a>
  );
});

export const BlogPost = component$(() => (
  <div class="bg-stone-300 w-96">
    <Card>
      <img
        q:slot="image"
        class="object-cover h-48 w-96"
        src="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg"
        alt="Volcano"
      />
      <span q:slot="title" class="text-charcoal-900 hover:text-yellow-600">
        Volcano
      </span>
      <span q:slot="description" class="text-charcoal-800">
        The picturesque lake, nestled between the DRC and Rwanda, has the
        potential to explosively release these gases in a rare phenomenon known
        as a limnic eruption.
      </span>

      <span q:slot="footer">
        <span class="inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #congo
        </span>
      </span>
    </Card>
  </div>
));
