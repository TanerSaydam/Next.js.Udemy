'use client'

import { Suspense, useState } from "react";
import Todos from "./todos";
import Loading from "./loading";

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  return (
    <main>
     <h1>Dashboard Page</h1>  
     <input onChange={(e)=> setSearch(e.target.value)} placeholder="Search something..."/>
     <Suspense fallback={<Loading/>}>
      <Todos search={search}/>  
     </Suspense>
    </main>
  );
}
