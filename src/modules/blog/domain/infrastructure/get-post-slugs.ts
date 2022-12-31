import db from "~/shared/db";
import { PostSlug } from "../entities/post-slug.model";

export const getPostSlugs = async (): Promise<PostSlug[]> => {
  const blogPosts = await db.collection("blog-posts").get();

  return blogPosts.docs.map((doc) => ({ slug: doc.id }));
};
