import { combineReducers } from "redux";
import FavoriteReducer from "./Favorite/FavoriteReducer";


const rootReducer=combineReducers({
    Favorite: FavoriteReducer,
    
}) 
export default rootReducer