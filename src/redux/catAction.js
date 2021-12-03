import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_FAILURE,
} from "./catType";

export const fetchCat = () => {
  return (dispatch) => {
    dispatch(fetchCatRequest());

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://api.thecatapi.com/v1/images/search", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          dispatch(fetchCatSuccess(data[0].url));
          console.log(data);
        },
        (error) => {
          dispatch(fetchCatFailure(error));
        }
      );
  };
};

const fetchCatRequest = () => {
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
