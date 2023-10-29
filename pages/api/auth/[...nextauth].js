import NextAuth from "next-auth";

/**git아이디로 로그인 */
import GithubProvider from "next-auth/providers/github";

/** mongoDB로 아이디 저장 관리 */
import { connectDB } from '@/utils/database'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GithubProvider({
        clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  secret : process.env.JWT_SECRET,
  adapter : MongoDBAdapter(connectDB()),
};
export default NextAuth(authOptions); 