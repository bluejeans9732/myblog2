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
          <div className='flex flex-col w-[75%] relative '>
            <input
              name="name"
              type="text"
              required
              className="flex border-2 p-2 focus:outline-none focus:border-cyan-900 focus:border-b-2 transition-colors peer text-black/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span 
              className="absolute left-2 top-2.5 text-gray-600 cursor-text peer-focus:text-xs peer-valid:text-xs peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-cyan-900 peer-valid:text-cyan-900 transition-all"
              style={{pointerEvents: "none"}}
            >
                  이름
                </span>
          </div>
          <div className='flex flex-col w-[75%] relative mt-4'>
            <input
              name="email"
              type="email"
              required
              className="flex border-2 p-2 focus:outline-none focus:border-cyan-900 focus:border-b-2 transition-colors peer text-black/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span 
              className="absolute left-2 top-2.5 text-gray-600 cursor-text peer-focus:text-xs peer-valid:text-xs peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-cyan-900 peer-valid:text-cyan-900 transition-all"
              style={{pointerEvents: "none"}}
            >
              이메일 // test@gmail.com
            </span>
          </div>
          
          <div className='flex flex-col w-[75%] relative mt-4'>
            <input
              name="password"
              type="password"
              required
              className="flex border-2 p-2 focus:outline-none focus:border-cyan-900 focus:border-b-2 transition-colors peer text-black/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span 
              className="absolute left-2 top-2.5 text-gray-600 cursor-text peer-focus:text-xs peer-valid:text-xs peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-cyan-900 peer-valid:text-cyan-900 transition-all"
              style={{pointerEvents: "none"}}
            >
              비밀번호
            </span>
          </div>
          <div className='flex flex-col w-[75%] relative mt-4'>
            <input
              name="passwordcheck"
              type="password"
              required
              className="flex border-2 p-2 focus:outline-none focus:border-cyan-900 focus:border-b-2 transition-colors peer text-black/50"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <span 
              className="absolute left-2 top-2.5 text-gray-600 cursor-text peer-focus:text-xs peer-valid:text-xs peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-cyan-900 peer-valid:text-cyan-900 transition-all"
              style={{pointerEvents: "none"}}
            >
              비밀번호 확인
            </span>
          </div>
          <div className={`${!arePasswordsSame ? '' : 'invisible'} text-red-800`}>비밀번호가 일치하지않습니다</div>
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
