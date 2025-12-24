import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const createTestDb = async () => {
  const dbFile = "test.sqlite";
  const testDb = Bun.file(dbFile);
  if (await testDb.exists()) await testDb.delete();
  const sqlite = new Database(dbFile);
  const db = drizzle(sqlite);
  migrate(db, { migrationsFolder: "./src/server/db/migrations" });
  console.log("Test database created and migrated");
};

createTestDb();
