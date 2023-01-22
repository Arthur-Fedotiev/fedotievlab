import { component$ } from "@builder.io/qwik";
import BlogService from "~/modules/blog/domain/application/blog.service";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";
import { Blog } from "~/modules/blog/blog-feature/blog";

export const loadBlogPosts = loader$(async () => BlogService.getAllPreviews());

export default component$(() => {
  const blogPosts = loadBlogPosts.use();

  return (
    // <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <>
      {blogPosts.value.map((blogPost) => (
        <div
          class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-charcoal-700 bg-white dark:bg-stone-300 hover:duration-300 hover:-translate-y-4 hover:animate-pulse"
          key={blogPost.slug}
        >
          <Blog blogPostPreview={blogPost} />
        </div>
      ))}
    </>
    // </div>
  );
});

export const head: DocumentHead = {
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Blog",
    },
    {
      name: "keywords",
      content: "Blog",
    },
  ],
};
