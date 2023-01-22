import { BlogPost } from "./blog-post.model";

export type BlogPostModel = BlogPost;

export interface BlogPostMArkdown {
  data: BlogPostModel;
  content: string;
}
