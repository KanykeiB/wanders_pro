import {GET_TOUR_BY_ID, GET_TOURS_LIST} from "../types/types";

const initialState = {
    tours: [],
    tour_retrieve: [],
}

const tourReducers = (state = initialState, action) => {
    switch (action.type){
        case GET_TOURS_LIST:
            return {...state, tours: action.payload}
        case GET_TOUR_BY_ID:
            return {...state, tour_retrieve: action.payload}
        default:
            return state
    }
}

export {
    tourReducers
}