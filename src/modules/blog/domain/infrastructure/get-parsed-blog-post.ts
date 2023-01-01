import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { BlogPost } from "../entities/blog-post.model";
import { POSTS_PATH } from "./constants";

export const getParsedBlogPost = ({
  slug,
  postsPath = POSTS_PATH,
  format = "mdx",
}: {
  slug: string;
  postsPath?: string;
  format?: string;
}): BlogPost => {
  const postFilePath = join(postsPath, `${slug}.${format}`);
  const fileContents = fs.readFileSync(postFilePath);
  const { data, content } = matter(fileContents);

  return { data, content } as BlogPost;
};
