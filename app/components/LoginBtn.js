'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function LoginBtn() {
    return (
        <>
            <Link 
                className="block max-md:hidden text-white/75 cursor-pointer mr-4"
                href="/register"
            >
                가입하기
            </Link>
            <div 
                className="block max-md:hidden text-white/75 cursor-pointer"
                onClick={() => { signIn() }}
            >
                로그인
            </div>
        </>
        
    )
}