
import { connectDB } from '@/utils/database'
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {

    const { passwordcheck, ...otherBody } = 요청.body; // passwordcheck를 제외하기

    // 비밀번호 hash
    const hash = await bcrypt.hash(otherBody.password, 10);
    otherBody.password = hash;

    const checkEmail = otherBody.email;
    
    const client = await connectDB();
    const db = client.db('practsx');

    let result = await db.collection('user_cred').findOne({ email: checkEmail });

    // 결과가 존재하는 경우
    if (result) {
      return 응답.redirect(302, '/profile');
    }
  
    // 결과가 존재하지 않는 경우
    await db.collection('user_cred').insertOne(otherBody);
    return 응답.redirect(302, '/');
  }
};