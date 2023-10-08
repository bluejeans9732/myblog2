'use client'

export default function DeleteButton({ postId }) {
    const handleDelete = async () => {
        try {
          const response = await fetch('/api/post/delete', {
            method: 'POST',
            body: JSON.stringify({ postId }),
          }).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };

    return (
        <div 
          className="cursor-pointer my-[5px] text-gray-400"
          onClick={handleDelete}
        >
          삭제
        </div>
    )
}