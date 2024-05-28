
async function getData(){
    const res = await fetch("endpoint");

    if(!res.ok){
        throw new Error("Failed to fetch data")
    }

    return res.json();
}

export default async function BlogPage(){
    const data = await getData();
    return <></>
}