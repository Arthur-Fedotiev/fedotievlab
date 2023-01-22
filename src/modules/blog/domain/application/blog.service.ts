import matter from "gray-matter";
import { BlogPost, BlogPostPreviewModel } from "../entities/blog-post.model";
import { PostSlug } from "../entities/post-slug.model";
import BlogPostRepository from "../infrastructure/blog-post.repository";
import { readingTime } from "../../utils/reading-time";
import { objOf, pick, pipe } from "ramda";

const getBySlug = (slug: string): BlogPost =>
  pipe(BlogPostRepository.getOne, parseBlogPost)(slug);

const getAllPreviews = (): BlogPostPreviewModel[] =>
  BlogPostRepository.getMany().map(
    pipe(parseBlogPost, enrichWithReadingTime, normalizeBlogPostPreviewModel)
  );

const getAllSlugs = (): PostSlug[] =>
  BlogPostRepository.getPostTitles().map(objOf("slug"));

export default {
  getBySlug,
  getAllSlugs,
  getAllPreviews,
};

function parseBlogPost(post: string | Buffer): BlogPost {
  return pipe(matter, pick(["data", "content"]))(post) as BlogPost;
}

function enrichWithReadingTime(post: BlogPost) {
  return {
    ...post,
    readingTime: readingTime(post.content).text,
  };
}

function normalizeBlogPostPreviewModel({
  data,
  readingTime,
}: BlogPost & { readingTime: string }) {
  return {
    ...data,
    readingTime,
  };
}
