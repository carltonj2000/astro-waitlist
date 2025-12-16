import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db.ts";
import type { NewSubscriber } from "./schema.ts";
import * as schema from "./schema.ts";

export const insertSubscriber = async (
  d1Database: D1Database,
  newSubscriber: NewSubscriber,
) => {
  const db = getDb(d1Database);
  const [result] = await db
    .insert(schema.subscribers)
    .values(newSubscriber)
    .returning();
  return result;
};
