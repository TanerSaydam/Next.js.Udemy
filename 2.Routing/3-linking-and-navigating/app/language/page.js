'use client'

import { usePathname } from "next/navigation";

export default function LocaleSwitcher(){
    const pathName = usePathname();

    function swithLocale(lang){
        const newPath = `/${lang}${pathName}`
        window.history.replaceState(null,'',newPath);
    }

    return (
        <>
        <button onClick={()=> swithLocale("en")}>English</button>
        <button onClick={()=> swithLocale("tr")}>Turkish</button>
        </>
    )
}