'use client'

import { signOut } from 'next-auth/react';

export default function LoginUser({ user }) {
  const defaultImage = "https://avatars.githubusercontent.com/u/87612227?v=4";

  const image = user?.image || defaultImage;

  return (
    <div className="flex items-center gap-2">
      <img
        src={image}
        alt={image}
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