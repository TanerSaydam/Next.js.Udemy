export async function GET(){
    const result = await fetch("http://localhost:9500/todos",{
        cache: "no-store"
    }).then(res=> res.json());
    return Response.json(result);
}