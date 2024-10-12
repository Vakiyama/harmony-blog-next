import { BlogAuthor } from '@/src/components/BlogAuthor';
import { Blog } from '@/src/db/schema/blog';
import { Author } from '@/src/types/authors';
import Markdown from 'react-markdown';
import '../../blog/[id]/markdown.css';
import { revalidatePath } from 'next/cache';

export function BlogPreview(props: { blog: Blog; author: Author }) {
  const { blog } = props;

  return (
    <div className="w-full flex justify-center">
      <div className="pb-[200px] w-[50vw] max-md:w-full">
        <h1 className="ESRG-TRIAL-font max-md:text-4xl text-6xl font-bold opacity-95">
          {blog.title}
        </h1>
        <div className="my-3">
          <BlogAuthor blog={blog} author={props.author} />
        </div>
        {blog.thumbnailSrc &&<img
          src={blog.thumbnailSrc}
          className="w-full h-auto aspect-[5/3] rounded-[25px] border border-white object-cover mb-10"
        />}
        <div className="markdown">
          <Markdown>{blog.content}</Markdown>
        </div>
      </div>
    </div>
  );
}
