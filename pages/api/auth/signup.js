
import { connectDB } from '@/utils/database'
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    const hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;
    const checkEmail = 요청.body.email;

    const client = await connectDB();
    const db = client.db('practsx');

    let result = await db.collection('post').findOne({ email: checkEmail });

    // 결과가 존재하는 경우
    if (result) {
      return 응답.redirect(302, '/home');
    }
  
    // 결과가 존재하지 않는 경우
    await db.collection('user_cred').insertOne(요청.body);
    return 응답.redirect(302, '/');
  }
};
