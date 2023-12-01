import { connectDB } from '@/utils/database'
import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    
    if(session) {
        요청.body.author = session.user.email
        요청.body.name = session.user.name
        요청.body.image = session.user.image
    } else {
        요청.body.name = 'guest'
        요청.body.image = "https://avatars.githubusercontent.com/u/87612227?v=4"
    }

    if(요청.method == 'POST'){
        const client = await connectDB();
        const db = client.db('practsx');
        let result = await db.collection('post').insertOne(요청.body)

        return 응답.redirect(302, '/board');
    }
}