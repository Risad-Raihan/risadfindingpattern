import type { Document } from '@contentful/rich-text-types';
import type { Asset, Entry, EntrySkeletonType, EntrySys } from 'contentful';

export interface AuthorFields extends EntrySkeletonType {
  name: string;
  bio: string;
  avatar: Asset;
  socialLinks: string[];
  contentTypeId: 'author';
}

export interface BlogPostFields {
  title: string;
  slug: string;
  author?: {
    fields: {
      name: string;
      bio: string;
      avatar?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  excerpt: string;
  content?: any;
  categories?: string[];
  tags?: string[];
  publishedDate?: string;
  readingTime?: number;
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
  return entry?.sys?.contentType?.sys?.id === 'blogPost';
}

export interface ProjectFields extends EntrySkeletonType {
  title: string;
  slug: string;
  description: string;
  longDescription: Document;
  technologies: string[];
  projectType: string;
  thumbnail: Asset;
  images: Asset[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  contentTypeId: 'project';
}

export interface Project extends Entry<ProjectFields> {
  sys: EntrySys & {
    contentType: {
      sys: {
        id: 'project';
      };
    };
  };
}

// Type guard for Project
export function isProject(entry: any): entry is Project {
  return entry.sys.contentType.sys.id === 'project';
} 