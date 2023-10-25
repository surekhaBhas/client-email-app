import { SELECTED_MAIL } from "./SelectedTypes";
export const selectedMail=(mail)=>{
    return{
        type:SELECTED_MAIL,
        payload:mail
    }

}