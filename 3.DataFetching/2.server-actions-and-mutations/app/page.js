'use client'
import { useEffect, useState } from "react";
import { Thread } from "./thread";

export default function Home() { 
  const [todos, setTodos] = useState([]); 

  useEffect(()=> {
    fetch("http://localhost:9500/todos").then(res => res.json()).then(d => setTodos(d));
  },[]);

  return (
    <>
    <h1>Server actions and mutations</h1>    
    <Thread todos={todos} userId='1'/>    
    </>
  );
}