"use server";
import { eq } from "drizzle-orm";
import { getDB } from "../db";
import { authorTable } from "../db/schema/author";

export async function getAuthorInfo() {
  const db = await getDB();
  const authors = await db.select().from(authorTable);
  return authors;
}

export async function getAuthorById(id: number) {
  const db = await getDB();
  const author = (
    await db.select().from(authorTable).where(eq(authorTable.id, id))
  )[0];

  return author;
}
