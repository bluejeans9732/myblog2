'use client'

import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

export default function Textarea({content}) {
    const quillRef = useRef();
    let Quill;

    useEffect(() => {
        Quill = require('quill');
        new Quill(quillRef.current, { theme: "snow" });
    }, []);
    
    return (
        <textarea
            name="content"
            ref={quillRef} 
            style={{ height: '400px', resize: 'none', overflowY: 'auto' }}
            className="mt-[16px] border-[2px] p-[8px] focus:outline-none"
            defaultValue={content}
        />
    )
}