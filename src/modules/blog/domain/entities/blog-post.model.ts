export interface BlogPost {
  readonly content: string;
  readonly data: BlogPostData;
}

export interface BlogPostData {
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly shareImage: string;
  readonly image: string;
  readonly author: string;
  readonly slug: string;
  readonly medium: string;
  readonly tags?: string[];
}

export interface BlogPostPreviewModel extends BlogPostData {
  readonly readingTime: string;
}
