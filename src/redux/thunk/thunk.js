import axios from "axios";

import {getTourByIdRequestActionCreator, getTourByIdReceiveActionCreator, getTourByIdFailureActionCreator} from '../actions/actions'

const getTourById =(id) => async(dispatch)=>{
    dispatch (getTourByIdRequestActionCreator())
    try{
        const res = await axios.get(`http://13.48.138.48/tours/${id}`)
        dispatch(getTourByIdReceiveActionCreator(res.data))
    } catch (error){
        dispatch(getTourByIdFailureActionCreator(error))
    }
}

export default {getTourById}