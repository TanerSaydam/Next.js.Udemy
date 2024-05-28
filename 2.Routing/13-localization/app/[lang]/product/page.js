import { getDictionary } from "../dictionaries"

export default async function ProductPage({params: {lang}}){
    const dict = await getDictionary(lang)
    return <h1>{dict.products.main}</h1>
}