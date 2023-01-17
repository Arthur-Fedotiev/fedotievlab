import { PostSlug } from "../entities/post-slug.model";
import fs from "fs";
import { POSTS_PATH } from "./constants";
import db from "~/modules/shared/domain/infrastructure";

const BLOG_POST_COLLECTION = "blog-posts";

export const getPostSlugs = async (): Promise<PostSlug[]> => {
  const blogPosts = await db.collection(BLOG_POST_COLLECTION).get();

  return blogPosts.docs.map((doc) => ({ slug: doc.id }));
};

export const getPostSlugsDesired = async (): Promise<PostSlug[]> => {
  const slugs = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ slug }));

  return slugs;
};
