'use client'

import { SubmitButton } from "../button";
import { login } from "./actions";

import {useFormState} from 'react-dom'

const initialState ={
    message: ""
}

export default function LoginPage(){
    const [state, formAction] = useFormState(login, initialState)

    return(
        <form action={formAction}>
            <label>Email</label>
            <input name="email"/>
            <p>
                {state?.message}
            </p>
            <SubmitButton name="Login"/>
        </form>
    )
}