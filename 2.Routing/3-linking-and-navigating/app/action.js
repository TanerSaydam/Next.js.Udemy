'use server'

import { redirect } from "next/navigation";

export async function createPost(data){
    console.log(data);
    //db ye kaydet
    redirect("/blog");
}