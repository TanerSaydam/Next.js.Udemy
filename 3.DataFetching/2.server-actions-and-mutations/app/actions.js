import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function create(userId, formData) {
  'use action'
  try {

    const value = cookies().get("token");
    cookies().set("name","Taner Saydam");
    cookies().delete("name");

    const work = formData.get("work");
    //const userId = formData.get("userId");

    await new Promise(resolve => setTimeout(resolve, 3000));

    await fetch("http://localhost:9500/todos", {
      method: "POST",
      body: JSON.stringify({ work: work, userId: userId, isCreated: true })
    });

    revalidateTag("/todos");
    redirect("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }

}  