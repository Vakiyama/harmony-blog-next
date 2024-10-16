'use server';
import { revalidatePath } from 'next/cache';
import { getDB } from '../db';
import { Blog, blogsTable } from '../db/schema/blog';
import { eq } from 'drizzle-orm';
import { handleLogin } from './authActions';

export async function addBlogToDb(blog: Blog, password: string) {
  if (!(await handleLogin(password))) return;
  const db = await getDB();
  const { id } = (await db.insert(blogsTable).values(blog).returning())[0];
  revalidatePath('/');
  revalidatePath('/admin/delete');
  revalidatePath('/blogs');
  return id;
}

export async function deletedBlogById(id: number, password: string) {
  if (!(await handleLogin(password))) return;
  const db = await getDB();
  await db.delete(blogsTable).where(eq(blogsTable.id, id));
  revalidatePath('/');
  revalidatePath('/admin/delete');
  revalidatePath('/blogs');
}

export async function getAllBlogs() {
  try {
    const db = await getDB();
    const allBlogs = await db.select().from(blogsTable);
    return allBlogs;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getBlogById(id: number) {
  const db = await getDB();
  const allBlogs = (
    await db.select().from(blogsTable).where(eq(blogsTable.id, id))
  )[0];
  return allBlogs;
}
