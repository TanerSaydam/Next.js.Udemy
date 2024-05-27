import Link from "next/link";

export default function Layout({children}){
    return(
        <>
        <Link href="/page-views">Page Views</Link>
        <br/>
        <Link href="/visitors">Visitors</Link>
        <br/>
        {children}
        </>
    )
}