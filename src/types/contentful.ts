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
  content: Document;
  categories: string[];
  tags: string[];
  publishedDate: string;
  readingTime: number;
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

export interface BlogPost {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: 'blogPost';
      };
    };
  };
  fields: BlogPostFields;
}

// Type guard to check if an entry is a BlogPost
export function isBlogPost(entry: any): entry is BlogPost {
  return (
    entry?.sys?.contentType?.sys?.id === 'blogPost' &&
    typeof entry.fields?.title === 'string' &&
    typeof entry.fields?.slug === 'string' &&
    typeof entry.fields?.excerpt === 'string' &&
    Array.isArray(entry.fields?.categories) &&
    Array.isArray(entry.fields?.tags)
  );
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