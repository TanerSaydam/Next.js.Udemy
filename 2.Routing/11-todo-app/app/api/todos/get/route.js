export const Todos = ["Example 1","Example 2"];

export async function GET(){
    return Response.json(Todos);
}