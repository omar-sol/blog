// import { allBlogs } from 'contentlayer/generated';
import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {

  const blogs = getBlogPosts().map((post) => ({
    url: `https://omarsolano.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // const routes = ['', '/blog', '/projects'].map(
  // const routes = ['', '/blog'].map(
  const routes = [''].map(
    (route) => ({
      url: `https://omarsolano.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
