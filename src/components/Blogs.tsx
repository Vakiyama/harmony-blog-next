import { Blog } from '../app/lib';
import { BlogButton } from './BlogButton';

export function Blogs(props: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1 w-full ">
      {props.blogs.length > 0 ? (
        props.blogs.map((blog) => (
          <div className="h-full flex justify-center">
            <BlogButton blog={blog} />
          </div>
        ))
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
}
