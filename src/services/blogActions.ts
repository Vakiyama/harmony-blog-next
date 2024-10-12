'use server';
import { revalidatePath } from 'next/cache';
import { getDB } from '../db';
import { Blog, blogsTable } from '../db/schema/blog';
import { eq } from 'drizzle-orm';
import { handleLogin } from './authActions';

export async function addBlogToDb(blog: Blog, password: string) {
  if (!(await handleLogin(password))) return;
  const db = await getDB();
  await db.insert(blogsTable).values(blog);
  revalidatePath('/');
  revalidatePath('/admin/delete');
  revalidatePath('/blogs');
}

export async function deletedBlogById(id: number, password: string) {
  if (!(await handleLogin(password))) return;
  const db = await getDB();
  await db.delete(blogsTable).where(eq(blogsTable.id, id));
  revalidatePath('/');
  revalidatePath('/admin/delete');
  revalidatePath('/blogs');
}
