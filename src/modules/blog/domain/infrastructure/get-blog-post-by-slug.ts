import { RequestHandler } from "@builder.io/qwik-city";

import { BlogPost } from "../entities/blog-post.model";
import { getParsedBlogPost } from "./get-parsed-blog-post";
import { renderMarkdown } from "../../utils";

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
