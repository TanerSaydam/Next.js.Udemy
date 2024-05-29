import { redirect } from "next/navigation";

export async function create(userId,formData){
    'use action'       
    const work = formData.get("work");
    //const userId = formData.get("userId");

    await new Promise(resolve => setTimeout(resolve, 3000));

    await fetch("http://localhost:9500/todos",{
      method: "POST",
      body: JSON.stringify({work: work, userId: userId})
    });

    redirect("/");
  }  