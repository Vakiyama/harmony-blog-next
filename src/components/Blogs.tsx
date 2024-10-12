import { BlogButton } from './BlogButton';
import type { Blog } from '../db/schema/blog';
import { getAuthorById } from '../services/authorActions';

export async function Blogs(props: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1 w-full ">
      {props.blogs.length > 0 ? (
        props.blogs.map(async (blog) => (
          <div className="h-full flex justify-center">
            <BlogButton
              blog={blog}
              author={await getAuthorById(blog.authorId)}
              key={blog.id}
            />
          </div>
        ))
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
}
