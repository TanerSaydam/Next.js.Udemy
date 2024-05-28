import {cache} from 'react';
export const getItem = cache(async (id)=> {
    //const item = await db.item.findUnique({id})
    const item = await axios.get("endpoint");
    return item
});