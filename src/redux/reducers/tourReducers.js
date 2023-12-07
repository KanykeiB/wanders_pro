import { GET_TOURS_LIST, GET_TOURS_BY_ID } from "../types/types";

const initialState = {
  tours: [],
  error: null,
  loading: false,
  data: {},
};

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

    default:
      return state;
  }
};

export { tourReducers };
