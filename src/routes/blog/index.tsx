import { Slot, component$, Resource } from "@builder.io/qwik";
import { getBlogPosts } from "../../modules/blog/domain/infrastructure/get-blog-posts";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { BlogPostPreview } from "~/modules/blog/domain/entities/blog-post.model";

export const onGet: RequestHandler<BlogPostPreview[]> = async () =>
  getBlogPosts();

export default component$(() => {
  const blogPostsResource = useEndpoint<BlogPostPreview[]>();

  return (
    <div class="md:py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
      <Resource
        value={blogPostsResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(blogPosts) => (
          <>
            {blogPosts.map((blogPost) => (
              <div
                class="flex flex-col bg-stone-300 w-96 md:w-96 lg:w-80 xl:w-96"
                key={blogPost.slug}
              >
                <BlogPost blogPostPreview={blogPost} />
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
});

export interface BlogPostProps {
  blogPostPreview: BlogPostPreview;
}

export const BlogPost = component$(
  ({
    blogPostPreview: { title, description, tags, slug, image },
  }: BlogPostProps) => (
    <a href={`/blog/${slug}`} tabIndex={0} class="flex flex-col flex-1">
      <Card containerClasses={["flex-1"]}>
        <img
          q:slot="image"
          class="object-cover h-48 w-96 md:w-96 lg:w-80 xl:w-96"
          src={image}
          alt={`Image for ${title}`}
        />
        <span q:slot="title" class="text-charcoal-900 hover:text-yellow-600">
          {title}
        </span>
        <span q:slot="description" class="text-charcoal-800">
          {description}
        </span>

        {tags ? (
          <div q:slot="footer">
            {tags.map((tag) => (
              <span
                key={tag}
                class="inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </Card>
    </a>
  )
);

export const Card = component$(
  ({ containerClasses = [] }: { containerClasses: string[] }) => {
    return (
      <section
        class={`flex flex-col max-w-sm h-auto mx-auto rounded overflow-hidden shadow-lg ${containerClasses.join()}`}
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
        <div class="px-6 pt-4 pb-2 mt-auto">
          <Slot name="footer" />
        </div>
      </section>
    );
  }
);
