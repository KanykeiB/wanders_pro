//actions
import {
    GET_TOURS_BY_ID,
    FILTRATION,
    GET_LOCATION_BY_ID
} from '../types/types'

const getTourByIdRequestActionCreator =()=>({
    type: GET_TOURS_BY_ID.REQUEST
})
const getTourByIdReceiveActionCreator =(data)=>({
    type: GET_TOURS_BY_ID.RECEIVE,
    payload: data
})
const getTourByIdFailureActionCreator = (error) =>({
    type:   GET_TOURS_BY_ID.FAILURE,
    payload: error
})
const filtrationActionCreator =(data)=>({
    type: FILTRATION,
    payload: data
})

const getLocationByIdRequestActionCreator =()=>({
    type: GET_LOCATION_BY_ID.REQUEST
})
const getLocationByIdReceiveActionCreator =(data)=>({
    type: GET_LOCATION_BY_ID.RECEIVE,
    payload: data
})
const getLocationByIdFailureActionCreator = (error) =>({
    type:   GET_LOCATION_BY_ID.FAILURE,
    payload: error
})


export {
    filtrationActionCreator,
    getTourByIdRequestActionCreator,
    getTourByIdReceiveActionCreator,
    getTourByIdFailureActionCreator,
    getLocationByIdRequestActionCreator,
    getLocationByIdReceiveActionCreator,
    getLocationByIdFailureActionCreator
}