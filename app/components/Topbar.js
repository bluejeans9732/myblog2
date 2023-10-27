
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import LoginUser from "./LoginUser";
import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Topbar() {
    let session = await getServerSession(authOptions)
    
    const isUserLoggedIn = session ? true : false;

    return (
        <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-slate-700 px-6 py-3">
            <Link href="/" className="flex item-center gap-4 text-white">
                Myblog
            </Link>
            
            <div className="flex items-center gap-1">
                {isUserLoggedIn ? <LoginUser user={session.user} /> : <LoginBtn />}
            </div>
        </nav>
    )
}
