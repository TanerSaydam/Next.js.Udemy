import { cookies, headers } from 'next/headers'

export const revalidate = 1;

export async function GET(){
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const headersList = headers();
    const secretKey = headersList.get("secretKey");

    const result = await fetch("http://localhost:9500/todos",{
        cache: "no-cache"
       //next: { revalidate: 1}
    }).then(res=> res.json());

    return new Response(secretKey, {
        status: 200,
        headers: { 'Set-Cookie': 'token=' + token}
    });
}