import { component$, Resource, Signal, useStyles$ } from "@builder.io/qwik";
import { BlogPostModel } from "../domain/application/models";
import theme from "prismjs/themes/prism-tomorrow.css?inline";
import lineNumbers from "prismjs/plugins/line-numbers/prism-line-numbers.css?inline";

export interface BlogPostFeatureProps {
  articleResource: Signal<BlogPostModel>;
}

export const BlogPostFeature = component$(
  ({ articleResource }: BlogPostFeatureProps) => {
    useStyles$(theme + lineNumbers);
    return (
      <>
        <Resource
          value={articleResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Failed to load article</div>}
          onResolved={(article) => {
            return (
              <>
                <div
                  dangerouslySetInnerHTML={article.content}
                  class="w-full prose prose-headings:font-['Titan-One'] prose-code:text-lime-600 prose-headings:font-extrabold prose-img:rounded-xl text-gray-300 prose-code:text- prose-blockquote:text-white prose-headings:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400 prose-a:no-underline"
                />
              </>
            );
          }}
        />
      </>
    );
  }
);
