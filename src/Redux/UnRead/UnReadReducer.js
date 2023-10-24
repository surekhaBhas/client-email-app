
import { ADD_UNREAD, REMOVE_UNREAD } from "./UnReadTypes";

const initialState = {
  list: []
};

const unReadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNREAD:
      return {
        ...state,
        list: [...state.list, ...action.payload]
      };
    case REMOVE_UNREAD:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default unReadReducer;
