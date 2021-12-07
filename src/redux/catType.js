export const FETCH_CAT_REQUEST = "FETCH_CAT_REQUEST";
export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const FETCH_CAT_FAILURE = "FETCH_CAT_FAILURE";

export const fetchCatRequest = () => {
  return {
    type: FETCH_CAT_REQUEST,
  };
};

const fetchCatSuccess = (cat) => {
  return {
    type: FETCH_CAT_SUCCESS,
    payload: cat,
  };
};
const fetchCatFailure = (error) => {
  return {
    type: FETCH_CAT_FAILURE,
    paylod: error,
  };
};
