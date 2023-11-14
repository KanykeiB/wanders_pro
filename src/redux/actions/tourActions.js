import axios from "axios";
import {GET_TOURS_LIST} from "../types/types";

const getTourList = () => {
    return dispatch => {
        axios.get('https://6553a2b55449cfda0f2efb61.mockapi.io/api/wanders/tours')
            .then(data => {
                // console.log(data)
                dispatch({type: GET_TOURS_LIST, payload: data.data})
            })
    }
}

export {
    getTourList,
}