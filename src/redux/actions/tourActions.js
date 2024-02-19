import axios from "axios";
import {GET_TOUR_BY_ID, GET_TOURS_LIST, GET_TOURS_BY_TAG, GET_TOUR_TAGS} from "../types/types";

// const getTourList = () => {
//     return dispatch => {
//         axios.get('https://6553a2b55449cfda0f2efb61.mockapi.io/api/wanders/tours')
//             .then(data => {
//                 // console.log(data)
//                 dispatch({type: GET_TOURS_LIST, payload: data.data})
//             })
//     }
// }
// tryng somth 

const filterTour =(filter)=>{
    const apiUrl = 'http://16.171.152.174/tour/list/?'
    const filters= Object.entries(filter)
    .filter(([_, value]) => value !== '' && value !== null && value.length !== 0)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
    return apiUrl + filters
}
const getTourByFilter =(filter)=>{
    const filterAPI = filterTour(filter)
    console.log(filterAPI, 'api')
    return dispatch =>{
        axios.get(filterAPI)
        .then(data=>{
            dispatch({type: GET_TOURS_LIST, payload:data.data})
        })
    }
}
const getTourBySort = (filter, sort)=>{
    const apiUrl = 'http://16.171.152.174/tour/list/?'
    if(filter) {
        const sortApi = `${filterTour(filter)}&${sort}`
        console.log(sortApi, 'sortApi')
    } else{
        const sortApi = `${apiUrl}${sort}`
        console.log(sortApi, 'sortApi')
    }
    
}


const getTourById = (id) => {
    return dispatch => {
        axios.get(`https://6553a2b55449cfda0f2efb61.mockapi.io/api/wanders/tours/${id}`)
            .then(data => {
                // console.log(data)
                dispatch({type: GET_TOUR_BY_ID, payload: data})
            })
    }
}
// just leaving it here, cuz i do not want to change ur code
const getToursByTag = (id) =>{
    return dispatch => {
        axios.get(`http://16.171.152.174/tour/list/${id}`)
            .then(data => {
                dispatch({type: GET_TOURS_BY_TAG, payload: data})
            })
    }
}
const getTourTags = () =>{
    return dispatch => {
        axios.get(`http://16.171.152.174/tags/all_tags/`)
            .then(data => {
                dispatch({type: GET_TOUR_TAGS, payload: data.data})
            })
    }
}

export {
    getTourByFilter,
    getTourById,
    getToursByTag,
    getTourTags,
    getTourBySort
    // filterTour
}