import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_FAILURE,
} from "./catType";

const initialState = {
  cat: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST:
      return {
        ...state,
      };
    case FETCH_CAT_SUCCESS:
      return {
        cat: action.payload,
        error: "",
      };
    case FETCH_CAT_FAILURE:
      return {
        cat: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
