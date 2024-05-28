export async function GET(){
    const res = await fetch("endpoint", {cache: "force-cache"});

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return Response.json(res.json());
}