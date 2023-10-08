import Link from "next/link"

export default function EditButton({ postId }) {

    return (
        <Link 
          className="cursor-pointer my-[5px] mx-[4px] text-gray-400"
          href={`/boardedit/${postId}`}
        >
          수정
        </Link>
    )
}