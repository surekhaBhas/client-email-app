import { combineReducers } from "redux";
import FavoriteReducer from "./Favorite/FavoriteReducer";
import unReadReducer from "./UnRead/UnReadReducer";
import readReducer from "./Read/ReadReducer";
const rootReducer=combineReducers({
    Favorite: FavoriteReducer,
    unRead:unReadReducer,
    read:readReducer
    
}) 
export default rootReducer