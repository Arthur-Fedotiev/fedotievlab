import db from "~/shared/db";
import { PostSlug } from "../entities/post-slug.model";

const BLOG_POST_COLLECTION = "blog-posts";

export const getPostSlugs = async (): Promise<PostSlug[]> => {
  const blogPosts = await db.collection(BLOG_POST_COLLECTION).get();

  return blogPosts.docs.map((doc) => ({ slug: doc.id }));
};
