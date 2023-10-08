import { connectDB } from '@/utils/database';

export const fetchPosts = async () => {
  const client = await connectDB();
  const db = client.db('practsx');
  const result = await db.collection('post').find().toArray();
  return result;
};