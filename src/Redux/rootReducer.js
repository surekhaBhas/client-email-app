import { combineReducers } from "redux";
import FavoriteReducer from "./Favorite/FavoriteReducer";
import unReadReducer from "./UnRead/UnReadReducer";
import readReducer from "./Read/ReadReducer";
import SelectedReducer from "./Selected/SelectedReducer";
const rootReducer=combineReducers({
    Favorite: FavoriteReducer,
    unRead:unReadReducer,
    read:readReducer,
    select:SelectedReducer
    
}) 
export default rootReducer