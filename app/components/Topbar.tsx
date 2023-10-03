import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Topbar() {
    const isUserLoggedIn = false;

    return (
        <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-slate-700 px-6 py-3">
            <Link href="/" className="flex item-center gap-4">
                메인이미지
                <p className="text-white max-md:hidden">메인글자</p>
            </Link>
            
            <div className="flex items-center gap-1">
                {
                    isUserLoggedIn ?  
                    <div>로그인 이름 & 사진</div>
                    :
                    <div className="block max-md:hidden text-white ">
                    로그인
                </div>
                }
                
            </div>
        </nav>
    )
}
