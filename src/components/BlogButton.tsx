import Link from 'next/link';
import { Blog } from '../db/schema/blog';
import { Author } from '../db/schema/author';

export function BlogButton(props: {
  blog: Blog;
  author?: Author;
  disabled?: boolean;
}) {
  console.log(`/blog/${props.blog.id}`, 'blog path');
  return (
    <Link
      key={props.blog.title}
      className="block w-full"
      href={`/blog/${props.blog.id}`}
    >
      <div className="flex flex-col justify-center">
        <img
          src={`${props.blog.thumbnailSrc}`}
          alt={``}
          className="w-full object-cover max-md:max-h-[300px] aspect-[4/3] rounded-[24px] border border-[#d9d9d9]"
        />
        <div className="text-white text-[2.3rem] max-md:text-[1.3rem] font-normal mt-5 sfpro-font ">
          {props.blog.title}
        </div>
        {props.author && (
          <div className="text-[#9c9c9c] text-[1.3rem] max-md:text-[1rem] font-normal sfpro-font">
            {props.author.name}
          </div>
        )}
      </div>
    </Link>
  );
}
