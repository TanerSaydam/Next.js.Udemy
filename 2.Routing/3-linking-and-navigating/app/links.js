'use client'

import Link from 'next/link';
import {usePathname } from 'next/navigation'

export function Links(){
    const pathName = usePathname();

    return(
        <>
        <nav>
            <ul>
                <li>
                 <Link 
                 className={`${pathName === "/blog" ? 'active': ''}`}
                 href="/blog"
                scroll={true}>Blog Page</Link>
                </li>
                <li>
                   <Link 
                className={`${pathName === "/dashboard" ? 'active': ''}`} 
                href="/dashboard"
                scroll={false}>Dashboard Page</Link>
                </li>
                <li>
                 <Link 
                 className={`${pathName === "/contact" ? 'active': ''}`} href="/contact"
                 scroll={false}>Contact Page</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}