'use server'

import { redirect } from 'next/navigation';

export async function login(prevState, formData){    

    const email = formData.get("email");

    if(email.length < 15){
        return {
            message: "Invalid email!!"
        }
    }    

    redirect("/login");
}