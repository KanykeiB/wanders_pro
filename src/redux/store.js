import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {tourReducers} from "./reducers/tourReducers";




const rootReducer = combineReducers({
    tour: tourReducers,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export {store}