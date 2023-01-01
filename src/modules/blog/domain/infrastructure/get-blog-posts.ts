import matter from "gray-matter";
import path from "path";
import { readingTime } from "../../utils/reading-time";
import { POSTS_PATH } from "./constants";
import fs from "fs";
import { BlogPostPreview } from "../entities/blog-post.model";

export function getBlogPosts(): BlogPostPreview[] {
  const blogPosts = fs.readdirSync(POSTS_PATH);

  return blogPosts.reduce((allArticles, slug) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, slug), "utf-8");
    const { data } = matter(source) as unknown as { data: BlogPostPreview };

    return [
      {
        ...data,
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, [] as BlogPostPreview[]);
}
