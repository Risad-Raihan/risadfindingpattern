import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry } from 'contentful';

export interface AuthorSkeleton {
  contentTypeId: 'author'
  fields: {
    name: string;
    bio: string;
    avatar: Asset;
    socialLinks: string[];
  }
}

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost'
  fields: {
    title: string;
    slug: string;
    author: Entry<AuthorSkeleton>;
    featuredImage: Asset;
    excerpt: string;
    content: Document;
    categories: string[];
    tags: string[];
    publishedDate: string;
    readingTime: number;
  }
}

export type Author = Entry<AuthorSkeleton>
export type BlogPost = Entry<BlogPostSkeleton>

// Type guard to check if an entry is a BlogPost
export function isBlogPost(entry: any): entry is BlogPost {
  return entry.sys.contentType.sys.id === 'blogPost';
} 