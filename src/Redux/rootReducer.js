import { combineReducers } from "redux";
import FavoriteReducer from "./Favorite/FavoriteReducer";
import unReadReducer from "./UnRead/UnReadReducer";

const rootReducer=combineReducers({
    Favorite: FavoriteReducer,
    unRead:unReadReducer
    
}) 
export default rootReducer