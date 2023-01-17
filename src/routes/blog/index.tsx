import { component$ } from "@builder.io/qwik";
import { getBlogPosts } from "../../modules/blog/domain/infrastructure/get-blog-posts";
import { loader$ } from "@builder.io/qwik-city";
import { Blog } from "~/modules/blog/blog-feature/blog";

export const loadBlogPosts = loader$(async () => getBlogPosts());

export default component$(() => {
  const blogPosts = loadBlogPosts.use();

  return (
    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogPosts.value.map((blogPost) => (
        <div
          class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-stone-300 duration-300 hover:-translate-y-1"
          key={blogPost.slug}
        >
          <Blog blogPostPreview={blogPost} />
        </div>
      ))}
    </div>
  );
});
