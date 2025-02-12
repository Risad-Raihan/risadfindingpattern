import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry } from 'contentful';

interface AuthorFields {
  name: string;
  bio: string;
  avatar: Asset;
  socialLinks: string[];
}

interface BlogPostFields {
  title: string;
  slug: string;
  author: Entry<AuthorFields>;
  featuredImage: Asset;
  excerpt: string;
  content: Document;
  categories: string[];
  tags: string[];
  publishedDate: string;
  readingTime: number;
}

export type Author = Entry<AuthorFields>
export type BlogPost = Entry<BlogPostFields>

// Type guard to check if an entry is a BlogPost
export function isBlogPost(entry: any): entry is BlogPost {
  return entry.sys.contentType.sys.id === 'blogPost';
} 