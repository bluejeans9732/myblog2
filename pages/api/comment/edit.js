import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Edit(요청, 응답) {
    if(요청.method) {
        let session = await getServerSession(요청, 응답, authOptions)
        console.log(요청.body)

        let 바꿀거 = JSON.parse(요청.body).content;
        const 바꿀내용 = { content : 바꿀거};
        
        const postID = JSON.parse(요청.body).postId;
        const client = await connectDB();
        const db = client.db('practsx');

        let findID = await db.collection('comment').findOne({ _id : new ObjectId(postID) })

        if(findID.author == session?.user?.email || findID.name == 'guest' || (session?.user?.role === 'administrator')) {
            
            let result = await db.collection('comment').updateOne(
                { _id: new ObjectId(postID)}, 
                {$set: 바꿀내용}
            );

            return 응답.status(200).json('수정완료')
        }
        else {
            return 응답.redirect(500, '/');
        }
    }
}