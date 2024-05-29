'use client'

import { useEffect, useState } from "react";

let likeCount = 0;

export default function LikesPage(){
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(true);

    async function addLike(){
        'use action'
        likeCount = likeCount + 1;

        return likeCount;
    }

    useEffect(()=> { 
        const newCountFunc = async() => {
            const newCount = await addLike();
            setCount(newCount);
        }

        newCountFunc();
    }, [status]);




    return(
        <>
        <h1>Like Count: {likeCount}</h1>
        <button onClick={() => setStatus(!status)}>Add Like</button>
        </>
    )

}