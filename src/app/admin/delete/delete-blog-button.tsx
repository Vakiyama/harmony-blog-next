'use client';
import { deletedBlogById } from '@/src/services/blogActions';
import { useState } from 'react';

export function DeleteBlogButton(props: { id: number; password: string }) {
  const [numAttempts, setNumAttempts] = useState(0);

  return (
    <button
      className="bg-white rounded-md text-black p-2 my-4"
      onClick={async () => {
        if (numAttempts === 0) return setNumAttempts(1);
        await deletedBlogById(props.id, props.password);
      }}
    >
      {numAttempts === 0 ? 'Delete' : 'Are you sure?'}
    </button>
  );
}
