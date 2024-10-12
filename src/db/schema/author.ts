import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { InferInsertModel } from 'drizzle-orm';

export const authorTable = sqliteTable('authors_table', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  profileIconSrc: text().notNull(),
  role: text().notNull(),
  description: text().notNull(),
});

export type Author = InferInsertModel<typeof authorTable>;
