import { PostSlug } from "../entities/post-slug.model";
import fs from "fs";
import { join } from "path";
const BLOG_POST_PATH = "_posts";

export const getPostSlugs = async (): Promise<PostSlug[]> => {
  const slugs = fs
    .readdirSync(join(process.cwd(), BLOG_POST_PATH))
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ slug }));

  return slugs;
};
