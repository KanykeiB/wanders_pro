import axios from "axios";

import {getTourByIdRequestActionCreator, 
            getTourByIdReceiveActionCreator, 
            getTourByIdFailureActionCreator , 
            getLocationByIdRequestActionCreator,
            getLocationByIdReceiveActionCreator,
            getLocationByIdFailureActionCreator} from '../actions/actions'

const getTourById =(id) => async(dispatch)=>{
    dispatch (getTourByIdRequestActionCreator())
    try{
        const res = await axios.get(`http://16.171.152.174/tour/${id}/`)
        dispatch(getTourByIdReceiveActionCreator(res.data))
    } catch (error){
        dispatch(getTourByIdFailureActionCreator(error))
    }
}

const getLocationById =(slug)=> async(dispatch)=>{
    dispatch(getLocationByIdRequestActionCreator())
    try{
        const result = await axios.get(`http://16.171.152.174/location/${slug}/`)
        dispatch(getLocationByIdReceiveActionCreator(result.data))
    } catch (error){
        dispatch(getLocationByIdFailureActionCreator(error))
    }
}

export {getTourById, getLocationById}