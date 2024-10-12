import {
  createFileRoute,
  useNavigate,
  useRouter,
} from '@tanstack/react-router';
import { useState } from 'react';
import { authors } from '../../../blog/authors';
import type { Author } from '../../../blog/authors';
import { BlogButton } from '../../../components/BlogButton';
import { Blog } from '../../../blog';
import { BlogAuthor } from '../../../components/BlogAuthor';
import Markdown from 'react-markdown';
import { addBlog } from '../../../services/addBlog';

export const Route = createFileRoute('/admin/add/')({
  component: AddBlog,
});

function BlogPreview(props: { blog: Blog }) {
  const { blog } = props;
  return (
    <div className="pb-[200px]">
      <h1 className="text-2xl font-bold opacity-95">{blog.title}</h1>
      <div className="my-3">
        <BlogAuthor blog={blog} />
      </div>
      <img src={blog.thumbnailSrc} className="border" />
      <div className="markdown">
        <Markdown>{blog.content}</Markdown>
      </div>
    </div>
  );
}

// form needs:
// markdown upload
// title  (string)
// author (select)
// thumbnail
// description

function AddBlog() {
  const [markdown, setMarkdown] = useState('# Example title /n Contents');
  const [thumbnailSrc, setThumbnailSrc] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState<Author>(authors[0]);

  const navigate = useNavigate();

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="h-full flex flex-row items-center justify-center">
          <form
            className="flex flex-col gap-4 w-[400px] text-black"
            onSubmit={async (e) => {
              e.preventDefault();
              await addBlog({
                id: Math.floor(Math.random() * 9999999999).toString(),
                title,
                thumbnailSrc,
                author,
                content: markdown,
              });
              navigate({
                to: '/blog/$blogTitle',
                params: { blogTitle: title },
              });
            }}
          >
            <label className="text-white text-2xl">Title</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-1 rounded-md"
              placeholder="Title for blog..."
            />

            <label className="text-white text-2xl">Author</label>
            <select
              onChange={(e) =>
                setAuthor(
                  authors.find((author) => author.name === e.target.value)!
                )
              }
              value={author.name}
              className="p-1 rounded-md"
            >
              {authors.map((author) => (
                <option key={author.name}>{author.name}</option>
              ))}
            </select>

            <label className="text-white text-2xl">Thumbnail SRC</label>
            <input
              onChange={(e) => setThumbnailSrc(e.target.value)}
              name="description"
              type="text"
              className="p-1 rounded-md"
              placeholder="Image link here..."
            />

            {thumbnailSrc !== '' && <img src={thumbnailSrc} />}

            <label className="text-white text-2xl">Markdown</label>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="h-[400px] px-1"
            />

            <button
              className="bg-white text-black p-2 text-2xl rounded-lg"
              type="submit"
            >
              Post Blog
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">Blog Preview:</h2>
          <div className="border-t py-4 my-2">
            <h3 className="text-2xl">Thumbnail Preview:</h3>
          </div>
          <BlogButton
            disabled={true}
            blog={{
              id: '',
              title,
              thumbnailSrc,
              author,
              content: markdown,
            }}
          />
          <div className="border-t py-4 my-2">
            <h3 className="text-2xl">Full Page Preview:</h3>
          </div>
          <BlogPreview
            blog={{
              id: '',
              title,
              thumbnailSrc,
              author,
              content: markdown,
            }}
          />
        </div>
      </div>
    </>
  );
}
