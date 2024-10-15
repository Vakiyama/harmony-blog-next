'use client';

import { useState } from 'react';
import { BlogButton } from '../../../components/BlogButton';
import { DeleteBlogButton } from './delete-blog-button';
import { Blog } from '@/src/db/schema/blog';
import { handleLogin } from '@/src/services/authActions';

export function DeleteBlogList(props: { allBlogs: Blog[] }) {
  const { allBlogs } = props;
  const [password, setPassword] = useState<string | null>(null);
  const [passwordFormInput, setPasswordFormInput] = useState('');

  const [invalidPassword, setInvalidPassword] = useState<null | string>(null);

  return password ? (
    <div className="min-h-screen">
      {allBlogs &&
        allBlogs.map((blog) => (
          <div key={blog.title}>
            <h1>Delete blog {blog.title}?</h1>
            <p className="dark:text-white text-black opacity-55">
              <i>This action cannot be undone</i>
            </p>
            <DeleteBlogButton id={blog.id!} password={password} />
            <BlogButton blog={blog} disabled />
          </div>
        ))}
    </div>
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
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(passwordFormInput).then((result) => {
            if (result) setPassword(passwordFormInput);
            else setInvalidPassword('Invalid password.');
          });
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
        {invalidPassword && <p className="text-red-800">{invalidPassword}</p>}
        <button
          type="submit"
          className="bg-gray-600 rounded-lg hover:opacity-75 py-2"
        >
          <b>Submit</b>
        </button>
      </form>
    </div>
  );
}
