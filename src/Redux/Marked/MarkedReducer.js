import { SELECTED_MAIL } from "./MarkedTypes";
const initialState={
    selected:{}
}

const selectReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_MAIL:
          return {
          
            selected: [ action.payload]
          };
        default:
          return state;
      }

}
export default selectReducer