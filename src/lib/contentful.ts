import { createClient } from 'contentful';
import type { BlogPost, Project } from '@/types/contentful';
import { isBlogPost } from '@/types/contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!,
  host: 'preview.contentful.com',
});

export const getClient = (preview: boolean) => (preview ? previewClient : client);

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
    });

    const posts = response.items.map(item => item as unknown as BlogPost);
    return posts.filter(isBlogPost);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    const post = response.items[0] as unknown as BlogPost;
    return isBlogPost(post) ? post : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getRecentBlogPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
      limit,
    });

    const posts = response.items.map(item => item as unknown as BlogPost);
    return posts.filter(isBlogPost);
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
}

export async function getAllProjects() {
  const response = await client.getEntries({
    content_type: 'project',
    order: ['-fields.completionDate'],
  });

  return response.items as Project[];
}

export async function getFeaturedProjects() {
  const response = await client.getEntries({
    content_type: 'project',
    'fields.featured': true,
    order: ['-fields.completionDate'],
  });

  return response.items as Project[];
}

export async function getProjectBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as Project;
}

export async function getProjectsByType(type: string) {
  const response = await client.getEntries({
    content_type: 'project',
    'fields.projectType': type,
    order: ['-fields.completionDate'],
  });

  return response.items as Project[];
} 