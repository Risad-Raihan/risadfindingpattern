import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry } from 'contentful';

export interface Author {
  fields: {
    name: string;
    bio: string;
    avatar: Asset;
    socialLinks: string[];
  };
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
}

export interface BlogPost {
  fields: {
    title: string;
    slug: string;
    author: Author;
    featuredImage: Asset;
    excerpt: string;
    content: Document;
    categories: string[];
    tags: string[];
    publishedDate: string;
    readingTime: number;
  };
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
} 