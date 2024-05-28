export const revalidate = 3600;

export async function GET(){
    const res = await fetch("endpoint", {cache: "force-cache", next: {revalidate: 3600, tags: ['collection']}});

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return Response.json(res.json());
}

