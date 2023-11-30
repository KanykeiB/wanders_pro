import {GET_TOURS_LIST} from "../types/types";

const initialState = {
    tours: [],
}

const tourReducers = (state = initialState, action) => {
    switch (action.type){
        case GET_TOURS_LIST:
            return {...state, tours: action.payload}
        default:
            return state
    }
}

export {
    tourReducers
}