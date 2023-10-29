import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://omarsolano.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog', '/projects'].map(
    (route) => ({
      url: `https://omarsolano.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
