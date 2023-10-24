import { ADD_READ } from "./ReadTypes";

const initialState={
    ReadList:[]
}

const readReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_READ:return{
            ...state,
            ReadList:[...state.ReadList,action.payload]
        }
        default: return state
    }
}

export default readReducer;