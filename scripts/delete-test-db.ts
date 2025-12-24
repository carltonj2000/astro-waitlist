const deleteTestDb = async () => {
  const dbFile = "test.sqlite";
  const testDb = Bun.file(dbFile);
  if (await testDb.exists()) await testDb.delete();
  console.log("Test database deleted");
};

deleteTestDb();
