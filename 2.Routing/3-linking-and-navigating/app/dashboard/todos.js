
export async function getTodos(search){
    await new Promise(resolve => setTimeout(resolve, 200));
    const todos = ["Taner", "Seval", "Toprak"]
    return todos.filter(p=> p.includes(search))
}

export default async function Todos({search}){    
    const todos = await getTodos(search);
    return(
        <ul>
            {todos.map((val,i)=> <li key={i}>{val}</li>)}
        </ul>
    )
}