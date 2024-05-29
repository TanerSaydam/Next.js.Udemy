'use client'
import { useEffect, useState } from "react";
import { create } from "./actions";
import { SubmitButton } from "./button";

export default function Home() { 
  const [todos, setTodos] = useState([]);  
  const createAction = create.bind(null, 2);

  useEffect(()=> {
    fetch("http://localhost:9500/todos").then(res => res.json()).then(d => setTodos(d));
  },[]);

  return (
    <>
    <h1>Server actions and mutations</h1>    
    <form action={createAction}>
      <div>
        <label>Work</label>
        <input name="work"/>
      </div>
      <div>
       <SubmitButton name="Save"/>
      </div>
    </form>
    <hr/>
    <ul>
      {todos.map((val,i)=> <li key={i}>{val.work}</li>)}
    </ul>
    </>
  );
}
