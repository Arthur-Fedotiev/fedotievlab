import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_PATH = join(process.cwd(), "_posts");

export const getParsedFileContentBySlug = ({
  slug,
  postsPath = POSTS_PATH,
  format = "mdx",
}: {
  slug: string;
  postsPath?: string;
  format?: string;
}): {
  data: Record<string, any>;
  content: string;
} => {
  const postFilePath = join(postsPath, `${slug}.${format}`);
  const fileContents = fs.readFileSync(postFilePath);
  const { data, content } = matter(fileContents);

  return { data, content };
};
