import { combineReducers } from "redux";
import FavoriteReducer from "./Favorite/FavoriteReducer";
import selectReducer from "./Marked/MarkedReducer";

const rootReducer=combineReducers({
    Favorite: FavoriteReducer,
    select:selectReducer
    
}) 
export default rootReducer