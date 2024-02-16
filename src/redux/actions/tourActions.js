import axios from "axios";
import {GET_TOUR_BY_ID, GET_TOURS_LIST} from "../types/types";

const getTourList = () => {
    return dispatch => {
        axios.get('http://16.171.152.174/tour/list/')
            .then(data => {
                // console.log(data)
                dispatch({type: GET_TOURS_LIST, payload: data.data})
            })
    }
}

const getTourById = (id) => {
    return dispatch => {
        axios.get(`https://6553a2b55449cfda0f2efb61.mockapi.io/api/wanders/tours/${id}`)
            .then(data => {
                // console.log(data)
                dispatch({type: GET_TOUR_BY_ID, payload: data.data})
            })
    }
}

export {
    getTourList,
    getTourById,
}