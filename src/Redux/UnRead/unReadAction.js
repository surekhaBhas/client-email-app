
import { ADD_UNREAD,REMOVE_UNREAD } from "./UnReadTypes";
import axios from 'axios';

export const addUnread = (data) => {
    return {
        type: ADD_UNREAD,
        payload: data
    };
}
export const removeUnread = (id) => {
    return {
        type: REMOVE_UNREAD,
        payload: id
    };
}
export const fetchMails = () => {
    return (dispatch) => {
      
        let combinedData = [];

        axios.get('https://flipkart-email-mock.now.sh/?page=1')
            .then((response) => {
                const list = response.data.list;
                combinedData = [...combinedData, ...list];
            })
            .then(() => {

                axios.get('https://flipkart-email-mock.now.sh/?page=2')
                    .then((response) => {
                        const additionalData = response.data.list;
                        combinedData = [...combinedData, ...additionalData];

                        dispatch(addUnread(combinedData));
                    });
            });
    }
}
