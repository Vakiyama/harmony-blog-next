import { blogs } from "./blogs";
// this will be a build step!
export const allBlogs = blogs;

export type Blog = {
  title: string;
  thumbnailSrc: string;
  content: string; // markdown
  author: string | { name: string; profilePictureSrc: string };
};

export function getBlogByTitle(title: string) {
  return allBlogs.find((blog) => encodeURI(blog.title) === encodeURI(title));
}

export function getAllBlogs() {
  return allBlogs;
}
