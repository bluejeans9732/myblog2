"use client"

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Bottombar() {
    const pathname = usePathname() || '';
    
    return (
        <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden bg-gray-100/75">
            <div className="flex items-center justify-between gap-3 xs:gap-5">
                { 
                    sidebarLinks.map((link) => {
                        const isActive =
                            (pathname.includes(link.route) && link.route.length > 1) ||
                            pathname === link.route;

                        return (
                            <Link 
                                href={link.route}
                                key={link.label}
                                className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 max-sm:flex-1 max-sm:px-2 ${isActive ? "bg-blue-400/75" : ""}`}
                            >
                                <Image 
                                    src={isActive ? link.imgURLactive : link.imgURL}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                                <p className={`font-light ${isActive ? "text-white" : ""} max-sm:hidden`}>
                                    {link.label.split(/\s+/)[0]}
                                </p>
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    )
}