import { NextResponse } from "next/server";

const locales = ['tr','en']

export function middleware(request){
    const {pathname} = request.nextUrl;
    const pathnameHasLocale = locales.some((val) => 
     pathname.startsWith(`/${val}/`) || pathname === `/${val}`);

    if(pathnameHasLocale) return;

    const defaultLocale = "tr";
    const newUrl = new URL(`/${defaultLocale}${pathname}`,request.nextUrl.origin);

    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        '/((?!_next).*)'
    ]
}