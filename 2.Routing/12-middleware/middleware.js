import { NextResponse } from "next/server";

const cors = {
    origins: ["https://www.tanersaydan.net", "https://www.blabla.com"],
    methods: ["POST","PUT"],
    headers: ["Authorizations"]
}

export function middleware(request){
    const origin = request.headers.get("origin") ?? "";
    const isAllowedOrigin = cors.origins.includes(origin); 
    const isAllowedMethod = cors.methods.includes(request.method);
    if(!isAllowedOrigin){
        return NextResponse.json({message: "İzin verilen siteler dışında bu endpointe istek yapılamaz!"},{status: 405});
    }

    if(!isAllowedMethod){
        return NextResponse.json(            
            {message: "İzin verilen metotlar dışında istek yapılamaz!"},
            {status: 405}, 
            {headers: {"Access-Control-Allow-Methods": "POST,PUT"} });
    }
    
    const response = NextResponse.next();

    return response;
}


export const config = {
    matcher: '/api/:path*',
  }