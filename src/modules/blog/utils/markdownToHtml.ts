import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

import { VFileCompatible } from "vfile";

export async function markdownToHtml(markdown: VFileCompatible) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(remarkPrism, { plugins: ["line-numbers"] })
    .process(markdown);

  return result.toString();
}
