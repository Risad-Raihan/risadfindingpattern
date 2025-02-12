import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntrySkeletonType, EntrySys } from 'contentful';

export interface AuthorFields extends EntrySkeletonType {
  name: string;
  bio: string;
  avatar: Asset;
  socialLinks: string[];
  contentTypeId: 'author';
}

export interface BlogPostFields extends EntrySkeletonType {
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
  contentTypeId: 'blogPost';
}

export interface Author extends Entry<AuthorFields> {
  sys: EntrySys & {
    contentType: {
      sys: {
        id: 'author';
      };
    };
  };
}

export interface BlogPost extends Entry<BlogPostFields> {
  sys: EntrySys & {
    contentType: {
      sys: {
        id: 'blogPost';
      };
    };
  };
}

// Type guard to check if an entry is a BlogPost
export function isBlogPost(entry: any): entry is BlogPost {
  return entry.sys.contentType.sys.id === 'blogPost';
} 