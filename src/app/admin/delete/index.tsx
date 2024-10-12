import { createFileRoute, Router, useRouter } from '@tanstack/react-router';
import { deleteBlog, getBlogsFromJSON } from '../../../services/addBlog';
import { BlogButton } from '../../../components/BlogButton';

export const Route = createFileRoute('/admin/delete/')({
  component: DeleteBlog,
  loader: async () => await getBlogsFromJSON(),
});

function DeleteBlog() {
  const allBlogs = Route.useLoaderData();
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {allBlogs &&
        allBlogs.map((blog) => (
          <div key={blog.title}>
            <h1>Delete the following blog?</h1>
            <button
              className="bg-white rounded-md text-black p-2 my-4"
              onClick={() => {
                deleteBlog(blog.id);
                router.invalidate();
              }}
            >
              Delete
            </button>
            <BlogButton blog={blog} disabled />
          </div>
        ))}
    </div>
  );
}
