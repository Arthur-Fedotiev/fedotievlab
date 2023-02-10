import {
  StaticGenerateHandler,
  loader$,
  DocumentHead,
} from "@builder.io/qwik-city";
import { renderMarkdown } from "~/modules/blog/utils";
import { component$ } from "@builder.io/qwik";
import { BlogPostFeature } from "~/modules/blog/blog-post-feature";
import BlogService from "~/modules/blog/domain/application/blog.service";

export default component$(() => {
  const articleResource = loadArticles.use();

  return <BlogPostFeature article={articleResource} />;
});

export const loadArticles = loader$(async ({ params: { slug } }) => {
  const { content, data } = BlogService.getBySlug(slug);
  const renderedHTML = await renderMarkdown(content);

  return {
    content: renderedHTML,
    data,
  };
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: BlogService.getAllSlugs(),
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
        property: "og:title",
        content: title,
      },
      {
        property: "og:image",
        content: shareImage,
      },
      {
        property: "og:image:width",
        content: "560",
      },
      {
        property: "og:image:height",
        content: "300",
      },
      {
        property: "og:description",
        content: description,
      },
    ],
  };
};
