'use client'

export default function Error({error, reset}){
    return(
        <>
        <h1>Something went wrong!</h1>
        <p>Hata: {error.message}</p>
        <button onClick={()=> reset()}>Return page</button>
        </>
    )
}