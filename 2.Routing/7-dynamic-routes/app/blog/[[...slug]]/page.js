export default function BlogDetailPage({params}) {
  return (
    <>
    <h1>Blog Detail Page</h1>
    <p>Gelen değer: {params.slug[1]}</p>
    </>
  );
}
