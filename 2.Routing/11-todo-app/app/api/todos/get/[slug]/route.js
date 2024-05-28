export async function GET(request, {params}){
    const slug = params.slug;

    return new Response(slug);
}