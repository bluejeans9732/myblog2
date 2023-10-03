import Link from "next/link";

export default function WriteButton() {
    return (
        <div className="fixed bottom-8 right-8">
            <Link href="/write">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                    +
                </button>
            </Link>
            
        </div>
    )
}