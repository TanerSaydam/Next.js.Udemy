export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const lastName = searchParams.get("lastName");

    return Response.json({name: name, lastName: lastName})
}