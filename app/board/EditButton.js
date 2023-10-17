import Link from "next/link"

export default function EditButton({ postId }) {

    return (
        <Link 
          className="cursor-pointer my-[5px] mx-[4px] text-gray-400 hover:underline hover:text-blue-600/75"
          href={`/board/edit/${postId}`}
        >
          수정
        </Link>
    )
}