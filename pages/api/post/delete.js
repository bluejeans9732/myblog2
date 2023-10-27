import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

export default async function Delete(요청, 응답) {
    const postID = JSON.parse(요청.body).postId;
    const client = await connectDB();
    const db = client.db('practsx');
    
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(postID) })

    return 응답.status(200).json('삭제완료')
}