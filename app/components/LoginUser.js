'use client'

import { signOut } from 'next-auth/react';

export default function LoginUser({ user }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={user.image}
        alt={user.name}
        className="w-8 h-8 rounded-full"
      />
      <div className='text-white mr-4'>{user.name}</div>
      <div
        onClick={() => signOut()}
        className="block text-white/75 cursor-pointer"
      >
        로그아웃
      </div>
    </div>
  );
}