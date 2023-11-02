'use client'

import { useState } from 'react';

export default function CommentEdit({ postId, onRefreshComments, content }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(content);

    const handleEdit = async () => {
        // 수정 버튼을 누르면 텍스트 필드로 변환
        setIsEditing(true);
    };

    const handleSave = async () => {
      try {
          const response = await fetch('/api/comment/edit', {
              method: 'POST',
              body: JSON.stringify({ postId, content: newContent }),
          }).then(() => {
              onRefreshComments();
          });
      } catch (error) {
          console.error('Error editing post:', error);
      }
      setIsEditing(false);

        // 댓글 리스트 새로고침
        onRefreshComments();
    };

    const handleCancle = async()=> {
      setIsEditing(false);
    }

    return (
        <div>
            {isEditing ? (
                <div className='flex'>
                <input 
                    type="text"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="h-6 ml-2 mt-1 p-1 flex border-2 focus:outline-none focus:border-cyan-900"
                />
                <div 
                  onClick={handleSave}
                  className="cursor-pointer text-gray-400 hover:underline hover:text-cyna-900 hover:font-semibold ml-2 mr-4"
                >
                  저장
                </div>
                <div 
                  onClick={handleCancle}
                  className="cursor-pointer text-gray-400 hover:underline hover:text-blue-800/75 mr-4"
                >
                  취소 
                </div>
            </div>
            ) : (
                <div className='flex justify-between'>
                    <span className='ml-2 mr-4'>{content}</span>
                    <div 
                      className="cursor-pointer text-gray-400 hover:underline hover:text-blue-800/75 mr-1"
                      onClick={handleEdit}
                    >
                      수정
                    </div>
                </div>
            )}
        </div>
    )
}