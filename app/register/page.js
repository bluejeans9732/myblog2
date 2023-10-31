'use client'

import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const isFormFilled = name && email && password && passwordCheck;
  const arePasswordsSame = password === passwordCheck;

  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[70vw] max-w-[800px]">
        <h4 className="mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold">
          회원 가입
        </h4>
        <form
          action="/api/auth/signup"
          method="POST"
          className="h-[60vh] flex flex-col items-center justify-center "
        >
          <input
            name="name"
            type="text"
            placeholder="이름"
            required
            className="mt-4 flex border-2 p-2 focus:outline-none w-[75%]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="이메일 ex)test@gmail.com"
            required
            className="mt-4 flex border-2 p-2 focus:outline-none w-[75%]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            className="mt-4 flex border-2 p-2 focus:outline-none w-[75%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            name="passwordcheck"
            type="password"
            placeholder="비밀번호 확인검사"
            required
            className="mt-4 flex border-2 p-2 focus:outline-none w-[75%]"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <div className={`${!arePasswordsSame ? '' : 'invisible'}`}>비밀번호가 일치하지않습니다</div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className={`${
                isFormFilled && arePasswordsSame
                  ? 'bg-cyan-700/75 text-white rounded-lg p-4 mt-28'
                  : 'bg-gray-700/50 text-black/75 rounded-lg p-4 mt-28'
              }`}
              disabled={!isFormFilled || !arePasswordsSame}
            >
              id/pw 가입요청
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
