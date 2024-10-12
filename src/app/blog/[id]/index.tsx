// import type { Blog } from "../../lib";
import Markdown from 'react-markdown';
import './markdown.css';
import { BlogAuthor } from '../../../components/BlogAuthor';
// import { getBlogsFromTitle } from "../../services/addBlog";

export default function Blog() {
  const blog: any = {};
  return (
    <div className="w-full flex justify-center">
      <div className="pb-[200px] w-[50vw] max-md:w-full">
        <h1 className="ESRG-TRIAL-font max-md:text-4xl text-6xl font-bold opacity-95">
          {blog.title}
        </h1>
        <div className="my-3">
          <BlogAuthor blog={blog} />
        </div>
        <img
          src={blog.thumbnailSrc}
          className="w-full h-auto aspect-[5/3] rounded-[25px] border border-white object-cover"
        />
        <div className="markdown">
          <Markdown>{blog.content}</Markdown>
        </div>
      </div>
    </div>
  );
}
