import 'dotenv/config';
import { drizzle } from 'drizzle-orm/connect';

export async function getDB() {
  // You can specify any property from the libsql connection options
  return await drizzle('turso', {
    connection: {
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    },
  });
}
