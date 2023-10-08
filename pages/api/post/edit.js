import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

export default async function Edit(요청, 응답) {
    let 바꿀거 = {title : 요청.body.title, content : 요청.body.content}
    
    const client = await connectDB();
    const db = client.db('practsx');
    let result = await db.collection('post')

    const postId = new ObjectId(요청.body._id);
    const post = await result.updateOne(
        {_id: postId}, 
        {$set: 바꿀거}
    );
    응답.redirect(302, '/board');
}