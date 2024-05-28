import { NextResponse } from "next/server";

export function middleware(request){
    console.log("Middleware is working...");
    const requestCookie = request.cookies.get("token");
   
    const allCookies = request.cookies.getAll();
    //console.log(allCookies);

    request.cookies.has('token'); // true / false
    request.cookies.delete("token2");

    const response = NextResponse.next();
    response.cookies.set("token","my token")
    const responseCookie = response.cookies.get("token");

    console.log(requestCookie);
    console.log(responseCookie);

    //allCookies = response.cookies.getAll();
    //console.log(allCookies);
    
}