import { createClient } from 'contentful';
import type { BlogPost } from '@/types/contentful';

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

export async function getAllBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
  });

  return response.items as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as BlogPost;
}

export async function getRecentBlogPosts(limit = 3) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
    limit,
  });

  return response.items as BlogPost[];
} 