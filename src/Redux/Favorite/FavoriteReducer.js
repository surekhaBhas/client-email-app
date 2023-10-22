import { ADD_FAVORITE } from "./FavoriteTypes";

const initialState = {
  listOfArray: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        listOfArray: [...state.listOfArray, action.payload], // Corrected this line
      };
    default:
      return state;
  }
};

export default FavoriteReducer;


  