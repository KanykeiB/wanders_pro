//actions
import {
    GET_TOURS_BY_ID
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

export {
    getTourByIdRequestActionCreator,
    getTourByIdReceiveActionCreator,
    getTourByIdFailureActionCreator
}