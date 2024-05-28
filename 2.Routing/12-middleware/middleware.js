import { NextResponse } from "next/server";

export function middleware(request){
    console.log("Middleware is working...");
    //console.log(request);
    if(!request.nextUrl.pathname.includes("/login")){
        return NextResponse.redirect(new URL("/auth/login", request.url))
    }
}

// export const config = {
//     matcher: ['/log/:path*',"/"]
// }