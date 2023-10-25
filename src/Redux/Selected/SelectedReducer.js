import { SELECTED_MAIL } from "./SelectedTypes";

const initialState = {
    MailItem: null, // Initialize as null or an empty object, depending on your data structure
  };
  
  const SelectedReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_MAIL:
        return {
          ...state,
          MailItem: action.payload,
        };
      default:
        return state;
    }
  };
  

export default SelectedReducer;


