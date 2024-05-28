import { NextResponse } from "next/server";

export function middleware(request){
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-hello-from-middleware", "hello");

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });

    response.headers.set("x-hello-from-middleware", "hello");
    response.headers.set("authorization", "bearer token");
    response.cookies.set("token","mymytoken");
    return response;
}