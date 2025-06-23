import { createClient } from 'contentful';
import type { BlogPost, Project } from '@/types/contentful';
import { isBlogPost } from '@/types/contentful';

// Check for required environment variables
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN;

// Create clients only if environment variables are available
export const client = spaceId && accessToken ? createClient({
  space: spaceId,
  accessToken: accessToken,
  host: 'cdn.contentful.com',
  headers: {
    'Cache-Control': 'no-cache',
  },
}) : null;

export const previewClient = spaceId && previewToken ? createClient({
  space: spaceId,
  accessToken: previewToken,
  host: 'preview.contentful.com',
}) : null;

export const getClient = (preview: boolean) => (preview ? previewClient : client);

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!client) {
      console.warn('Contentful client not configured - returning empty blog posts');
      return [];
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
      include: 2,
      limit: 100,
    });

    console.log('Contentful Response:', {
      total: response.total,
      items: response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        publishedDate: item.fields.publishedDate
      }))
    });

    const posts = response.items.map(item => item as unknown as BlogPost);
    const filteredPosts = posts.filter(isBlogPost);
    
    console.log('Filtered Posts:', {
      total: filteredPosts.length,
      posts: filteredPosts.map(post => ({
        id: post.sys.id,
        title: post.fields.title,
        slug: post.fields.slug,
        publishedDate: post.fields.publishedDate
      }))
    });

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!client) {
      console.warn('Contentful client not configured - returning null for blog post');
      return null;
    }

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
    if (!client) {
      console.warn('Contentful client not configured - returning empty recent blog posts');
      return [];
    }

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
  if (!client) {
    console.warn('Contentful client not configured - returning empty projects');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'project',
      order: ['-fields.completionDate'],
    });

    return response.items as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getFeaturedProjects() {
  if (!client) {
    console.warn('Contentful client not configured - returning empty featured projects');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'project',
      'fields.featured': true,
      order: ['-fields.completionDate'],
    });

    return response.items as Project[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  if (!client) {
    console.warn('Contentful client not configured - returning null for project');
    return null;
  }

  try {
    const response = await client.getEntries({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
    });

    return response.items[0] as Project;
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

export async function getProjectsByType(type: string) {
  if (!client) {
    console.warn('Contentful client not configured - returning empty projects by type');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'project',
      'fields.projectType': type,
      order: ['-fields.completionDate'],
    });

    return response.items as Project[];
  } catch (error) {
    console.error('Error fetching projects by type:', error);
    return [];
  }
} 