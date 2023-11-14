'use client'

import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

export default function Write() {
    
    //  quill.js 를 적용하여 에디터 적용
    let Quill;
    const quillRef = useRef();
    const formRef = useRef();
    let quill;

    useEffect(() => {
        Quill = require('quill');
        quill = new Quill(quillRef.current, { theme: "snow" });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const contentInput = document.createElement('input');
        contentInput.type = 'hidden';
        contentInput.name = 'content';
        contentInput.value = JSON.stringify(quill.getContents());
        formRef.current.appendChild(contentInput);
        formRef.current.submit();
    }

    return (
        <main>
        <div className=''>
            <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
            글 작성
            </h4>
            <form ref={formRef} action="/api/post/new" method="POST" className="flex flex-col h-[60vh]" onSubmit={handleSubmit}>
            <input 
                name="title" 
                placeholder="글제목"
                className="mt-4 flex border-2 focus:outline-none"
            />
            <div 
                name="content"
                ref={quillRef} 
                style={{ height: '800px', resize: 'none', overflowY: 'auto' }}
                className="mt-[16px] border-[2px] p-[8px] focus:outline-none"
            />
            <button
                type='submit'
                className='bg-cyan-700/75 text-white rounded-lg mx-auto p-4 mt-10'
            >
                작성하기
            </button>
            </form>
        </div>  
        </main>
    )
}
