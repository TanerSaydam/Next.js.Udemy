'use client'

import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const router = useRouter();

  function save(){
    //kayıt işlemi
    router.push("/blog");
  }

  return (
    <main>
     <h1>Create Blog Page</h1>  
     <button onClick={save}>Save</button>   
    </main>
  );
}
