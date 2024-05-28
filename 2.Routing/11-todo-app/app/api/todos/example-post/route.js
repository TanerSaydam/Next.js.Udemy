export async function POST(request){
    //const res = await request.json();
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");

    return Response.json({name: name, email: email, age: age});
}