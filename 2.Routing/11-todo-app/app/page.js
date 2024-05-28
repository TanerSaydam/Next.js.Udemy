'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [work, setWork] = useState("");

  function getAll(){
    fetch("http://localhost:3000/api/todos/get").then(res=> res.json()).then(data => setTodos(data));
  }

  function create(){
    fetch("http://localhost:3000/api/todos/post",{
      method: "POST",
      body: JSON.stringify({work: work})
    })
    .then(()=> getAll())
  }

  useEffect(()=> {
    getAll();
  },[])

  return (
    <>
      <h1>Todo App</h1>    
      <input onChange={(e)=> setWork(e.target.value)}/>
      <button onClick={create}>Create</button>
      <ul>
        {todos.map((val,i)=> <li key={i}>{val.work}</li>)}
      </ul>
    </>
  );
}
