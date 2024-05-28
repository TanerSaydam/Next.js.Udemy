export async function POST(request){
    const res = await request.json();
    
    await fetch("http://localhost:9500/todos",{
        method: "POST",
        body: JSON.stringify(res)
    });

    return Response.json({message: "Create is successful"});
}