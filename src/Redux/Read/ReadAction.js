import { ADD_READ } from "./ReadTypes";

export const addRead=(data)=>{
    return{
        type:ADD_READ,
        payload:data
    }
}