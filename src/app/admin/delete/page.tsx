import { getAllBlogs } from '@/src/services/blogActions';
import { DeleteBlogList } from './blog-list';

export default async function DeleteBlog() {
  const allBlogs = await getAllBlogs();

  return <DeleteBlogList allBlogs={allBlogs} />;
}
