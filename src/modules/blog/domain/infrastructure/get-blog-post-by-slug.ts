import { RequestHandler } from "@builder.io/qwik-city";
import { getParsedBlogPost, renderMarkdown } from "@fl/blog-utils";
import { BlogPost } from "../entities/blog-post.model";

export const getBlogPostBySlug: RequestHandler<BlogPost> = async ({
  params: { slug },
}) => {
  const { content, data } = getParsedBlogPost({ slug });
  const renderedHTML = await renderMarkdown(content);

  return {
    content: renderedHTML,
    data,
  };
};
