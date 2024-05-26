'use client'

import { createPost } from '@/app/action'

export default function CreateBlogPage() {
  return (
    <main>
      <h1>Create Blog Page</h1>
      <form action={createPost}>
        <input name="subject" />
        <br />
        <textarea name="content"></textarea>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
