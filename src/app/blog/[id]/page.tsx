// import type { Blog } from "../../lib";
import Markdown from 'react-markdown';
import './markdown.css';
import { BlogAuthor } from '../../../components/BlogAuthor';
import { getAuthorById } from '@/src/services/authorActions';
import { getBlogById } from '../../page';
// import { getBlogsFromTitle } from "../../services/addBlog";

export default async function Blog(props: { params: { id: string } }) {
  if (!props.params.id) return 404;
  if (isNaN(parseInt(props.params.id))) throw new Error('404');
  const blog = await getBlogById(parseInt(props.params.id));
  return (
    <div className="w-full flex justify-center">
      <div className="pb-[200px] w-[50vw] max-md:w-full">
        <h1 className="ESRG-TRIAL-font max-md:text-4xl text-6xl font-bold opacity-95">
          {blog.title}
        </h1>
        <div className="my-3">
          <BlogAuthor blog={blog} author={await getAuthorById(blog.authorId)} />
        </div>
        <img
          src={blog.thumbnailSrc}
          className="w-full h-auto aspect-[5/3] rounded-[25px] border border-white object-cover mb-10"
        />
        <div className="markdown">
          <Markdown>{blog.content}</Markdown>
        </div>
      </div>
    </div>
  );
}
