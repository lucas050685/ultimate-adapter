import { MongoClient, Db } from 'mongodb';
const url = 'mongodb://localhost:27017';
const databaseName = 'ultimate-adapter';

const databaseRef: { current: Db | undefined } = {
  current: undefined
}

export async function getDatabase() {
  if (databaseRef.current) return databaseRef.current;

  console.log('Connecting database');
  const client = new MongoClient(url);

  client.on("connectionClosed", async () => {
    console.log('Database disconnected');
    console.log('Reconnecting');
    databaseRef.current = undefined;
    databaseRef.current = await getDatabase();
  });

  await client.connect();
  const db = client.db(databaseName);
  return db
}


