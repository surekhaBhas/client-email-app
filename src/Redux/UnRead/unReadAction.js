
import { ADD_UNREAD } from "./UnReadTypes";
import axios from 'axios';
export const addUnread=(Item)=>{
    return {
        type: ADD_UNREAD,
        payload:Item
    }
}

export const fetchMails=()=>{
    return (dispatch)=>{
           axios.get()
    }
}