import { PostSlug } from "../entities/post-slug.model";
import fs from "fs";
import { POSTS_PATH } from "./constants";

export const getPostSlugs = async (): Promise<PostSlug[]> => {
  const slugs = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ slug }));

  return slugs;
};
