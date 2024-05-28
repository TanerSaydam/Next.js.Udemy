export async function POST(request){
    const res = await request.json();

    return Response.json(res);
}