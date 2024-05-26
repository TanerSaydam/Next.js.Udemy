import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
     <h1>Blog Page</h1> 
     <Link href="/blog/create">Create</Link>
    </main>
  );
}
