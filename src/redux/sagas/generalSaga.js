import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  REQUEST_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  REQUEST_MEME_DATA,
  SUCCESS_MEME_DATA,
  FAIL_MEME_DATA,
} from "../actionType";
import axios from "axios";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getData() {
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
    if (res.status === 200) {
      yield put({
        type: SUCCESS_FETCH_DATA,
        payload: res.data,
      });
    }
  } catch (e) {
    yield put({
      type: FAIL_FETCH_DATA,
      payload: e,
    });
  }
}

function* getMeme() {
  try {
    const meme = yield axios.get("https://api.imgflip.com/get_memes");
    if (meme.status === 200) {
      yield put({
        type: SUCCESS_MEME_DATA,
        payload: meme.data.data.memes,
      });
    }
  } catch (e) {
    yield put({
      type: FAIL_MEME_DATA,
      payload: e,
    });
  }
}

function* generalSaga() {
  yield takeLatest(REQUEST_FETCH_DATA, getData);
  yield takeLatest(REQUEST_MEME_DATA, getMeme);
}

export default generalSaga;
