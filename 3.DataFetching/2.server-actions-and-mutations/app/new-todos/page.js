'use client'

import { useEffect, useState } from "react"

export default function NewTodos(){
    const [work, setWork] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:9500/todos").then(res => res.json()).then(d => setTodos(d));
    })

    async function create(work){        
        'use action'               
    
        const data= {work: work, userId: 0, isCreated: true};
        await fetch("http://localhost:9500/todos",{
          method: "POST",
          body: JSON.stringify(data)
        });
    
        return data;
      }  

    return(
        <>
        <h1>New Todos</h1>
                <div>
                    <label>Work</label>
                    <input name="work" onChange={(e)=> setWork(e.target.value)} value={work}/>
                </div>
                <div>
                    <input onChange={async (e)=> {
                        const data = await create(e.target.value);
                        setWork("");
                        setTodos((prev) => [...prev, data]);
                    }}/>
                </div>
                <div>
                    <button onClick={async ()=> {
                        const data = await create(work);
                        setWork("");
                        setTodos((prev) => [...prev, data]);
                    }}>Save</button>
                </div>
           
            <hr />
            <ul>
                {todos.map((val, i) => <li key={i}>
                    {val.work} 
                    <smal><b>
                        {!val.isCreated ? 'Being created...' : ''}
                    </b></smal>
                    </li>)}
            </ul>
        </>
    )
}