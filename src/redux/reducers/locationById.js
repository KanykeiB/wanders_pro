import React from 'react';
import { GET_LOCATION_BY_ID } from '../types/types';

const initialState={
    locationData:[],
    error:null,
    loading: false,
}


const locationById = (state= initialState, action) => {
    switch(action.type){
        case GET_LOCATION_BY_ID.REQUEST:
            return {
                ...state,
                loading:true
            }
            case GET_LOCATION_BY_ID.RECEIVE:
                return{
                    ...state,
                    loading:false,
                    error:null,
                    locationData : action.payload
                }
                case GET_LOCATION_BY_ID.FAILURE:
                    return {
                        ...state,
                        loading:false,
                        locationData:null,
                        error: action.payload
                    }
                    default :
                    return state;

    }
};

export default locationById;