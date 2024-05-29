'use client'

import {useFormStatus} from 'react-dom';

export function SubmitButton({name}){
    const { pending } = useFormStatus();


    return(
        <button type="submit" disabled={pending}>{name}</button>
    )
}