'use client'

import { sidebarLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function LeftSidebar() {
    const pathname = usePathname() || '';

    return (
        <section className="
            max-md:hidden sticky left-0 top-0 z-20 flex h-screen w-fit 
            flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden
        ">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                { 
                    sidebarLinks.map((link) => {
                        const isActive =
                            (pathname.includes(link.route) && link.route.length > 1) ||
                            pathname === link.route;

                        return (
                            <Link
                                href={link.route}
                                key={link.label}
                                className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive ? "bg-blue-400/75" : ""}`}
                            >
                                <img 
                                    src={isActive ? link.imgURLactive : link.imgURL}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                                <p className={`font-light max-lg:hidden ${isActive ? "text-white" : ""}`}>{link.label}</p>
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    )
}