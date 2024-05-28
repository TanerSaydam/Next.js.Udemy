import { Todos } from "../get/route";

export async function POST(request){
    const res = await request.json();
    
    Todos.push(res.work);

    return Response.json({message: "Create is successful"});
}