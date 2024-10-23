// app/api/contact/route.ts
import { connectToDatabase } from '../../../lib/mongodb';

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const { client } = await connectToDatabase();

    const db =  client.db('contactus');
    // Insert data into the MongoDB collection
    const result = await db.collection('clients').insertOne({
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Respond with the inserted document ID
    return new Response(JSON.stringify({ postId: result.insertedId }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error inserting document:', error);
    return new Response(JSON.stringify({ message: 'Error inserting document' }), {
      status: 500,
    });
  }
}
