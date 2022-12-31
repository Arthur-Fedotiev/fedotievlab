import {
  RequestHandler,
  StaticGenerateHandler,
  useEndpoint,
  DocumentHead,
} from "@builder.io/qwik-city";
import { BlogPostFeature } from "@fl/blog-post-feature";
import { getParsedBlogPost, renderMarkdown } from "~/modules/blog/utils";
import { component$ } from "@builder.io/qwik";
import { getPostSlugs } from "~/modules/blog/domain/infrastructure/get-post-slugs";
import { BlogPostModel } from "~/modules/blog/domain/application/models";

export default component$(() => {
  const articleResource = useEndpoint<BlogPostModel>();

  return <BlogPostFeature articleResource={articleResource} />;
});

export const onGet: RequestHandler<BlogPostModel> = async ({
  params: { slug },
}) => {
  const { content, data } = getParsedBlogPost({ slug });
  const renderedHTML = await renderMarkdown(content);

  return {
    content: renderedHTML,
    data,
  };
};

export const head: DocumentHead<BlogPostModel> = ({
  data: {
    data: { title, description, shareImage, tags },
  },
}) => {
  return {
    title,
    description,
    meta: [
      {
        name: "keywords",
        content: tags?.join(", "),
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "og:image",
        content: shareImage,
      },
      {
        name: "og:description",
        content: description,
      },
    ],
  };
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: await getPostSlugs(),
  };
};
