// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = { appName: "devrel.template.nextjs" };

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to avoid creating multiple clients
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, create a new client for each request
  client = new MongoClient(uri, options);
}

/**
 * Connect to the database and check the connection status.
 * @returns Promise<{ client: MongoClient; db: Db }> - The MongoDB client and database object.
 */
export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  try {
    await client.connect(); // Connect if not already connected
    const db = client.db(); // Specify the database name if needed

    // Execute a simple command to verify the connection
    await db.command({ ping: 1 }); // This checks the connection status
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // Rethrow error to handle it in your application
  }
}

// Export the client for use in other modules
export default client;
