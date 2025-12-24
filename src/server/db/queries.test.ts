import { it, expect, mock, beforeEach } from "bun:test";
import type { D1Database } from "@cloudflare/workers-types";
import { reset } from "drizzle-seed";

import { insertSubscriber } from "./queries";
import type { NewSubscriber } from "./schema";
import * as schema from "./schema";
import { getTestDb } from "../../../test/get-test-db";

mock.module("./db.ts", () => {
  return { getDb: () => getTestDb() };
});

beforeEach(async () => {
  const db = getTestDb();
  await reset(db, schema);
});

it("insert a new subscriber in the db", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  const subscriber = await insertSubscriber({} as D1Database, newSub);
  expect(subscriber.email).toBe(newSub.email);
  expect(subscriber.id).toBeDefined();
  expect(subscriber.createdAt).toBeDefined();
});

it("throws error for duplicate email", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  await insertSubscriber({} as D1Database, newSub);
  expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});

it("throws error for invalid email", async () => {
  const newSub: NewSubscriber = { email: "testtest.com" };
  expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});
