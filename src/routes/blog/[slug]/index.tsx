import {
  StaticGenerateHandler,
  loader$,
  DocumentHead,
} from "@builder.io/qwik-city";
import { getParsedBlogPost, renderMarkdown } from "~/modules/blog/utils";
import { component$ } from "@builder.io/qwik";
import { getPostSlugs } from "~/modules/blog/domain/infrastructure/get-post-slugs";
import { BlogPostFeature } from "~/modules/blog/blog-post-feature";

export default component$(() => {
  const articleResource = loadArticles.use();

  return <BlogPostFeature article={articleResource} />;
});

export const loadArticles = loader$(async ({ params: { slug } }) => {
  const { content, data } = getParsedBlogPost({ slug });
  const renderedHTML = await renderMarkdown(content);

  return {
    content: renderedHTML,
    data,
  };
});

export const head: DocumentHead = ({ getData }) => {
  const {
    data: { title, description, shareImage, tags },
  } = getData(loadArticles);

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
