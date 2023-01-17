import matter from "gray-matter";
import path from "path";
import { readingTime } from "../../utils/reading-time";
import { POSTS_PATH } from "./constants";
import fs from "fs";
import { BlogPostPreviewModel } from "../entities/blog-post.model";

export function getBlogPosts(): BlogPostPreviewModel[] {
  const blogPosts = fs.readdirSync(POSTS_PATH);

  return blogPosts.reduce((allArticles, slug) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, slug), "utf-8");
    const { data } = matter(source) as unknown as {
      data: BlogPostPreviewModel;
    };

    return [
      {
        ...data,
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, [] as BlogPostPreviewModel[]);
}
