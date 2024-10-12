'use client';
import { deletedBlogById } from '@/src/services/blogActions';

export function DeleteBlogButton(props: { id: number; password: string }) {
  return (
    <button
      className="bg-white rounded-md text-black p-2 my-4"
      onClick={() => {
        deletedBlogById(props.id, props.password);
      }}
    >
      Delete
    </button>
  );
}
