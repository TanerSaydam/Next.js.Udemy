'use client'

export default function Error({error, reset}){
    return(
        <>
        <h1>Something went wrong!</h1>
        <p>Hata mesajı: {error.message}</p>
        <button onClick={()=> reset()}>Reset</button>
        </>
    )
}