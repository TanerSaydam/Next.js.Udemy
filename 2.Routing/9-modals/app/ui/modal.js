'use client'

import { useRouter } from 'next/navigation'
import classes from './modal.module.css'

export default function Modal({children}){
    const router = useRouter();
    return(
        <div className={classes.modal}>
            <div className={classes.modalBody}>
                {children}
                <button onClick={()=> router.back()}>Cancel</button>
            </div>
        </div>
    )
}