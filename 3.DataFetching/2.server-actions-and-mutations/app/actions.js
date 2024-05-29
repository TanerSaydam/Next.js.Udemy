import { redirect } from "next/navigation";

export async function create(formData){
    'use action'       
    const work = formData.get("work");
    
    await fetch("http://localhost:9500/todos",{
      method: "POST",
      body: JSON.stringify({work: work})
    });

    redirect("/");
  }  