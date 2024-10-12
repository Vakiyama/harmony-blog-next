import { getAllBlogs } from '../../page';
import { DeleteBlogList } from './blog-list';

export default async function DeleteBlog() {
  const allBlogs = await getAllBlogs();

  return <DeleteBlogList allBlogs={allBlogs} />;
}
