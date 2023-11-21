'use client'

import { useEffect, useState } from "react"
import CommentEdit from './CommentEdit'
import CommentDel from './CommentDel'

export default function Comment({_id}) {
    let [ comment, setComment ] = useState('')
    let [data, setData] = useState([])
    
    const fetchCommentList = async () => {
        const response = await fetch('/api/comment/list?id=' + _id)
        const result = await response.json();
        setData(result)
    }

    useEffect(()=>{
        fetchCommentList();
    },[])

    const submitComment = async () => {
        await fetch('/api/comment/new', {
            method : 'POST', 
            body : JSON.stringify({ comment : comment , _id : _id})
        })
        setComment(''); 
        fetchCommentList(); 
    }

    return (
        <div className="mt-40 w-[100%]" >
            <div className="text-cyan-900 text-xl mb-8">댓글</div>
            {
                data.length > 0 ? (
                    data.map((a, i) => {
                        return (
                            <div key={i} className="mt-4 flex justify-between items-center ">
                                <div className="flex">
                                    <p className="font-bold">{a.authorname}</p>
                                    : 
                                    <CommentEdit postId={JSON.parse(JSON.stringify(a._id))} onRefreshComments={fetchCommentList} content={a.content}/>
                                    <CommentDel postId={JSON.parse(JSON.stringify(a._id))} onRefreshComments={fetchCommentList}/>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    "로딩중"
                )
            }

            <div className="flex flex-col mt-10">
                <input 
                    onChange={(e) => { setComment(e.target.value)}}
                    value={comment}
                    className="border-2 p-2 focus:outline-none Text-Align "
                />
                <button 
                    className='bg-cyan-700/75 text-white rounded-lg mt-8'
                    onClick={submitComment}>댓글 전송</button>
            </div>
            
            
        </div>
    )
}
