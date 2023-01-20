import { component$ } from "@builder.io/qwik";
import { BlogPostPreviewModel } from "../domain/entities/blog-post.model";
import { BlogPreview } from "../ui/blog-preview";

export interface BlogProps {
  blogPostPreview: BlogPostPreviewModel;
}

export const Blog = component$(
  ({
    blogPostPreview: { title, description, tags, slug, image },
  }: BlogProps) => (
    <a href={`/blog/${slug}`} tabIndex={-1} class="flex flex-col flex-1 h-full">
      <BlogPreview>
        <img
          q:slot="image"
          class="rounded-t h-72 w-full object-cover"
          src={image}
          alt={`Image for ${title}`}
        />
        <span q:slot="title" class="text-charcoal-900 hover:text-yellow-600">
          {title}
        </span>
        <span q:slot="description">{description}</span>

        {tags ? (
          <div q:slot="footer">
            {tags.map((tag) => (
              <span
                key={tag}
                class="inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer hover:text-secondary-500 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </BlogPreview>
    </a>
  )
);
