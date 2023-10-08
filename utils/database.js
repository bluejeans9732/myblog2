import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;
const options = {}; 

const connectDB = async () => {
  try {
    const client = new MongoClient(url, options);
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export { connectDB };
