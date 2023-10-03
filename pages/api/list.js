import { connectDB } from '@/utils/database'

export default async function handler(요청, 응답){

    const client = await connectDB;
    const db = client.db('practsx');
    let result = await db.collection('post').find().toArray();

    응답.status(200).json(result)
}