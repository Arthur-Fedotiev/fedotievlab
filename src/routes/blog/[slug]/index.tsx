import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { component$, Resource } from "@builder.io/qwik";
import { getParsedFileContentBySlug } from "~/components/blog/utils/getParsedFileContentBySlug";
import { renderMarkdown } from "~/components/blog/utils/markdown";

interface Article {
  slug: string;
  description: string;
  content: string;
}

export const onGet: RequestHandler<Article> = async ({ params: { slug } }) => {
  const { content, data } = getParsedFileContentBySlug({ slug });
  const renderedHTML = await renderMarkdown(content);

  return {
    slug: slug,
    description: `Description for ${slug}`,
    content: renderedHTML,
    data,
  };
};

export default component$(() => {
  const articleResource = useEndpoint<Article>();

  return (
    <>
      <h1>Blog Post</h1>
      Resource:
      <Resource
        value={articleResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to load article</div>}
        onResolved={(article) => {
          return (
            <article
              dangerouslySetInnerHTML={article.content}
              class="prose prose-h1:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400"
            />
          );
        }}
      />
    </>
  );
});

export const head: DocumentHead<Article> = ({ data: { slug } }) => {
  return {
    title: `Article - ` + slug,
    description: `Description for ` + slug,
  };
};
