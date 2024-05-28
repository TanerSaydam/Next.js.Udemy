'use client'

import { useEffect, useState } from "react"

export default function TodoPage(){
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch("/api/todo").then(res=> res.json()).then(data => setData(data));
    },[])

    return <></>
}