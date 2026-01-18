// Utility functions to read blog markdown files
import type { MarkdownInstance } from 'astro';

export interface BlogContent {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}

// Get all blog posts for a specific language
export async function getBlogPosts(lang: 'en' | 'zh') {
  try {
    const posts = await import(`../content/blog/${lang}/*.md`);
    return Object.values(posts) as MarkdownInstance<BlogContent>[];
  } catch (error) {
    console.error(`Error loading blog posts for ${lang}:`, error);
    return [];
  }
}

// Get single blog post content
export async function getBlogPost(lang: 'en' | 'zh', id: string) {
  try {
    const post = await import(`../content/blog/${lang}/${id}.md`);
    return post as MarkdownInstance<BlogContent>;
  } catch (error) {
    console.error(`Error loading blog post ${lang}/${id}:`, error);
    return null;
  }
}
