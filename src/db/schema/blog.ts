import { InferInsertModel } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { authorTable } from './author';

export const blogsTable = sqliteTable('blogs_table', {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  thumbnailSrc: text().notNull(),
  content: text().notNull(),
  authorId: int('authorId')
    .references(() => authorTable.id, { onDelete: 'cascade' })
    .notNull(),
});

export type Blog = InferInsertModel<typeof blogsTable>;
