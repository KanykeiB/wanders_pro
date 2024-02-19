import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {tourReducers} from "./reducers/tourReducers";
import locationById from "./reducers/locationById";




const rootReducer = combineReducers({
    tour: tourReducers,
    locationData : locationById,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))