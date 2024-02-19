import { GET_TOURS_LIST, GET_TOURS_BY_ID, GET_TOURS_BY_TAG, GET_TOUR_TAGS } from "../types/types";

const initialState = {
    tours: [],
    tags:[],
    error: null,
    loading: false,
    data: {},
    tour_retrieve: [],
}

const tourReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURS_LIST:
      return { ...state, tours: action.payload };
    case GET_TOURS_BY_ID.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOURS_BY_ID.RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_TOURS_BY_ID.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      };
    case GET_TOURS_BY_TAG:
      return {...state, tours:action.payload};
      case GET_TOUR_TAGS:
        return {...state, tags:action.payload}

    default:
      return state;
  }
};

export { tourReducers };
