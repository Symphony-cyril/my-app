import { useDebugValue } from "react";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_FAILURE,
} from "./catType";

export function catFetch() {
  return fetch("https://api.thecatapi.com/v1/images/search").then((response) =>
    response.json()
  );
}

export function* executeCatFetch() {
  const cat = yield call(catFetch);
  yield put({ type: FETCH_CAT_SUCCESS, payload: cat[0] });
}

export function* mySaga() {
  yield takeEvery(FETCH_CAT_REQUEST, executeCatFetch);
}
