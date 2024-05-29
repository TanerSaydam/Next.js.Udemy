'use server'

import { redirect } from 'next/navigation';
import {z} from 'zod';

const scheme = z.object({
    email: z.number({
        invalid_type_error: "Invalid email"
    })
})

export async function login(prevState, formData){
    const validatedFields = scheme.safeParse({
        email: +formData.get("email")
    });

    if(!validatedFields.success){
        return {
            message: JSON.stringify(validatedFields.error.flatten().fieldErrors)
        }
    }

    const email = formData.get("email");

    redirect("/login");
}