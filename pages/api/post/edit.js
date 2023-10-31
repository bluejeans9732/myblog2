import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Edit(요청, 응답) {
    if(요청.method) {
        let session = await getServerSession(요청, 응답, authOptions)

        let 바꿀거 = {title : 요청.body.title, content : 요청.body.content}
        
        const postID = new ObjectId(요청.body._id);
        const client = await connectDB();
        const db = client.db('practsx');

        let findID = await db.collection('post').findOne({ _id : new ObjectId(postID) })

        if(findID.author == session?.user?.email || findID.name == 'guest' || (session.user.role === 'administrator')) {
            
            let result = await db.collection('post').updateOne(
                { _id: new ObjectId(postID)}, 
                {$set: 바꿀거}
            );

            return 응답.redirect(302, '/board');
        }
        else {
            return 응답.redirect(500, '/');
        }
    }
}