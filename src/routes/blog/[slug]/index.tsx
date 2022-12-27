import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { component$, Resource } from "@builder.io/qwik";

interface Article {
  slug: string;
  description: string;
}

export const onGet: RequestHandler<Article> = async ({ params }) => {
  return {
    slug: params.slug,
    description: `Description for ${params.slug}`,
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
          return <div>Temperature: {article.slug}</div>;
        }}
      />
    </>
  );
});
