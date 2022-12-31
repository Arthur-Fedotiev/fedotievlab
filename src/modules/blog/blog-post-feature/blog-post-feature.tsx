import { component$, Resource, ResourceReturn } from "@builder.io/qwik";
import { BlogPostModel } from "../domain/application/models";

export interface BlogPostFeatureProps {
  articleResource: ResourceReturn<BlogPostModel>;
}

export const BlogPostFeature = component$(
  ({ articleResource }: BlogPostFeatureProps) => {
    return (
      <>
        <Resource
          value={articleResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Failed to load article</div>}
          onResolved={(article) => {
            return (
              <>
                <article
                  dangerouslySetInnerHTML={article.content}
                  class="prose prose-h1:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400"
                />
              </>
            );
          }}
        />
      </>
    );
  }
);
