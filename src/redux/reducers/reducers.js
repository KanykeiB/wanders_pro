//reducers
import { FILTRATION } from "../types/types";

const initialState ={
    tour:[],
    filters:{
    type_tour: null,
    activity__activity: null,
    collection__collection:null,
    amount_of_days: {min:0, max:5},
    concrete_tour__price_KGZ: {min:0, max:5},
    min_age_min: 0,
    place__place_residence__type_accommodation: null,
    comfort_level: null,
    difficulty_level: null,
    language: null }
}

const filtrationReducer =(state = initialState, action)=>{
    switch(action.type){
        case FILTRATION:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    ...action.payload
                }
            }
            default:
                return state;
    }

}
export default filtrationReducer