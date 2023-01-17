import {
  component$,
  Signal,
  useClientEffect$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import { BlogPostModel } from "../domain/application/models";

import styles from "./blog-post-feature.css?inline";
import theme from "prismjs/themes/prism-tomorrow.css?inline";
import lineNumbers from "prismjs/plugins/line-numbers/prism-line-numbers.css?inline";

export interface BlogPostFeatureProps {
  article: Signal<BlogPostModel>;
}

export const BlogPostFeature = component$(
  ({ article: articleResource }: BlogPostFeatureProps) => {
    useStyles$(styles + theme + lineNumbers);

    const rootRef = useSignal<Element>();

    useClientEffect$(() => {
      const allPres = rootRef.value!.querySelectorAll("pre");
      const handlers = new Map<HTMLButtonElement, () => void>();
      const cleanup = () => {
        for (const [btn, handler] of handlers) {
          console.log("cleanup");

          btn.removeEventListener("click", handler);
        }
      };

      for (const pre of allPres) {
        const code = pre.firstElementChild;
        if (!code || !/code/i.test(code.tagName)) {
          continue;
        }

        const btn = createCopyButton();

        handlers.set(btn, setClickHandler(btn, code));

        pre.appendChild(btn);
      }

      return cleanup;
    });

    return (
      <div
        dangerouslySetInnerHTML={articleResource.value.content}
        ref={rootRef}
        class="w-full prose prose-headings:font-['Titan-One'] prose-code:text-lime-600 prose-headings:font-extrabold prose-img:rounded-xl text-gray-300 prose-code:text- prose-blockquote:text-white prose-headings:text-center prose-headings:text-yellow-500 prose-a:text-yellow-400 prose-a:no-underline"
      />
    );
  }
);

export function createCopyButton() {
  const button = document.createElement("button");
  button.classList.add("prism-copy-button");
  button.append("Copy");
  button.prepend(createCopySvg());
  return button;
}

export function setClickHandler(
  button: HTMLButtonElement,
  codeEl: Element
): () => void {
  const clickHandler = () => {
    if (button.lastChild && button.lastChild.textContent === "Copied") return;

    navigator.clipboard.writeText(codeEl.textContent || "");

    button.lastChild!.textContent = "Copied";
    button.disabled = true;
    setTimeout(() => {
      button.lastChild!.textContent = "Copy";
      button.disabled = false;
    }, 3000);
  };

  button.addEventListener("click", clickHandler);

  return clickHandler;
}

export function createCopySvg() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "w-4 h-4 mr-2");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("viewBox", "0 0 24 24");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-width", "2");
  path.setAttribute(
    "d",
    "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
  );

  svg.appendChild(path);

  return svg;
}
