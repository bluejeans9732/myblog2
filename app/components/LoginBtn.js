'use client'

import { signIn } from 'next-auth/react'

export default function LoginBtn() {
    return (
        <div 
            className="block max-md:hidden text-white/75 cursor-pointer"
            onClick={() => { signIn() }}
        >
            로그인
        </div>
    )
}