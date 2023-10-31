import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Delete(요청, 응답) {
    if(요청.method) {
        let session = await getServerSession(요청, 응답, authOptions)

        const postID = JSON.parse(요청.body).postId;
        const client = await connectDB();
        const db = client.db('practsx');

        let findID = await db.collection('post').findOne({ _id : new ObjectId(postID) })

        if(findID.author == session?.user?.email || findID.name == 'guest' || (session.user.role === 'administrator')) {
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(postID) })
    
            return 응답.status(200).json('삭제완료')
        }
        else {
            return 응답.redirect(500, '/');
        }
    }
}