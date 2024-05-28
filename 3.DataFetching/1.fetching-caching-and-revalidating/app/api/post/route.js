export const revalidate = 0;

export async function GET(){
    const res = await fetch("endpoint", 
    {cache: "no-cache"});

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return Response.json(res.json());
}

