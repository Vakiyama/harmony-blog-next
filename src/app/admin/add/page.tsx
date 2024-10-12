'use client';

import { useEffect, useState } from 'react';
import type { Author } from '@/src/db/schema/author';
import { BlogButton } from '../../../components/BlogButton';
import { addBlogToDb } from '@/src/services/blogActions';
import { getAuthorInfo } from '@/src/services/authorActions';
import { BlogPreview } from './blog-preview';
import { handleLogin } from '@/src/services/authActions';

export default function AddBlog() {
  const [markdown, setMarkdown] = useState('# Example title /n Contents');
  const [thumbnailSrc, setThumbnailSrc] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState<Author>();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [password, setPassword] = useState<string | null>(null);
  const [passwordFormInput, setPasswordFormInput] = useState('');

  const [invalidPassword, setInvalidPassword] = useState<null | string>(null);

  function refetchBlogs() {
    getAuthorInfo().then(setAuthors);
  }

  useEffect(() => {
    refetchBlogs();
  }, []);

  useEffect(() => {
    authors.length > 0 && setAuthor(authors[0]);
  }, [authors]);

  return (
    <>
      <div className="h-full flex flex-col">
        {password ? (
          <>
            <div className="h-full flex flex-row items-center justify-center">
              <form
                className="flex flex-col gap-4 w-[400px] text-black"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!author) return;
                  await addBlogToDb(
                    {
                      title,
                      thumbnailSrc,
                      authorId: author.id!,
                      content: markdown,
                    },
                    password
                  );
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
                  value={author?.name ? author.name : ''}
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
              {author && (
                <BlogButton
                  disabled={true}
                  blog={{
                    id: 0,
                    title,
                    thumbnailSrc,
                    authorId: 0,
                    content: markdown,
                  }}
                  author={author}
                />
              )}
              <div className="border-t py-4 my-2">
                <h3 className="text-2xl">Full Page Preview:</h3>
              </div>
              {author && (
                <BlogPreview
                  blog={{
                    id: 0,
                    title,
                    thumbnailSrc,
                    authorId: 0,
                    content: markdown,
                  }}
                  author={author}
                />
              )}
            </div>
          </>
        ) : (
          <div
            className="w-full 
            flex
            flex-row
          justify-center
          items-center
          "
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const result = await handleLogin(passwordFormInput);
                if (result) setPassword(passwordFormInput);
                else setInvalidPassword('Invalid password.');
              }}
              className="w-fit flex flex-col gap-4"
            >
              <label className="text-xl font-semibold">
                Please input the password.
              </label>
              <input
                className="p-1 px-4 rounded-md text-black"
                type="password"
                value={passwordFormInput}
                minLength={3}
                placeholder="Ultra secret password..."
                onChange={(e) => setPasswordFormInput(e.target.value)}
              />
              {invalidPassword && (
                <p className="text-red-800">{invalidPassword}</p>
              )}
              <button
                type="submit"
                className="bg-gray-600 rounded-lg hover:opacity-75 py-2"
              >
                <b>Submit</b>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
