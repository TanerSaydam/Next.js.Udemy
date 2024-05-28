export const revalidate = 1;

export async function GET(){
    const result = await fetch("http://localhost:9500/todos",{
        cache: "no-cache"
       //next: { revalidate: 1}
    }).then(res=> res.json());
    return Response.json(result);
}