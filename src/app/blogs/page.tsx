import { Blogs } from '../../components/Blogs';
import { getAllBlogs } from '@/src/services/blogActions';

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <div className="pb-[200px]">
      <h1 className="max-md:text-9xl text-[200px] pt-8 font-title">Blog</h1>
      <p className="text-4xl max-md:text-3xl w-full sfpro-font mb-60 mt-5 max-md:mb-40 ">
        Follow along our journey as we build your partner for care.
      </p>
      <p className="text-6xl font-title max-md:text-5xl w-full sfpro-font mb-12">
        Explore our blogs!
      </p>
      <Blogs blogs={blogs} />
    </div>
  );
}
