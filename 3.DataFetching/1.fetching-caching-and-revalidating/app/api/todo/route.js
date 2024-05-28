export async function GET(request){
    var res = await fetch("todoendpoint");
    return Response.json(res.json())
}