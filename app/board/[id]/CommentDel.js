'use client'

export default function CommentDel({ postId, onRefreshComments }) {

  const handleDelete = async () => {
      try {
        const response = await fetch('/api/comment/delete', {
          method: 'POST',
          body: JSON.stringify({ postId }),
        }).then(() => {
          onRefreshComments();
        });
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };

  return (
      <div 
        className="cursor-pointer text-gray-400 hover:underline hover:text-red-600"
        onClick={handleDelete}
      >
        삭제
      </div>
  )
}