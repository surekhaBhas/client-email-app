import { ADD_FAVORITE } from "./FavoriteTypes";
export const addFavorite=(Item)=>{
    return {
        type:ADD_FAVORITE,
        payload:Item
    }
}