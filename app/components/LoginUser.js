'use client'

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LoginUser({ user, admin }) {
  const defaultImage = "https://avatars.githubusercontent.com/u/87612227?v=4";

  const image = user?.image || defaultImage;

  return (
    <div className="flex items-center gap-2">
      <img
        src={image}
        alt={image}
        className="w-8 h-8 rounded-full"
      />
      <div className='text-white mr-2'>{user.name}</div>
      {admin === "administrator" && <Link href="/admin" className="block text-white/75 cursor-pointer mr-2">관리자 모드</Link>}
      <div
        onClick={() => signOut()}
        className="block text-white/75 cursor-pointer"
      >
        로그아웃
      </div>
    </div>
  );
}