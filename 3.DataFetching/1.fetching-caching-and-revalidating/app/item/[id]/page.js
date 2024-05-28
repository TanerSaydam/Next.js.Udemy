import { getItem } from "@/app/utils";

export const revalidate = 3600;

export default async function Page({params: {id}}){
    const item = await getItem(id);
}