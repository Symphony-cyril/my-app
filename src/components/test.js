//ACTION
const SHOW_CAT = "SHOW_CAT";

function getCat() {
  return {
    type: SHOW_CAT,
  };
}

//REDUCER

const initialState = {
  cat: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CAT:
      return {
        ...state,
        cat: state.cat - 1,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
console.log(store);
