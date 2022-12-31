export interface BlogPost {
  readonly content: string;
  readonly data: BlogPostData;
}

export interface BlogPostData {
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly shareImage: string;
  readonly author: string;
  readonly slug: string;
  readonly tags?: string[];
}
