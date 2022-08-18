import {
  MINUS_DATA,
  PLUS_DATA,
  REQUEST_FETCH_DATA,
  REQUEST_MEME_DATA,
  DISPLAY_NEW_DATA_WITH_CLICK,
} from "../actionType";

export const increaseValue = (payload) => ({
  type: PLUS_DATA,
  payload,
});

export const decreaseValue = (payload) => ({
  type: MINUS_DATA,
  payload,
});

export const getFetchData = () => ({
  type: REQUEST_FETCH_DATA,
});

export const getMemeData = () => ({
  type: REQUEST_MEME_DATA,
});

export const displayNewDataWithClick = () => ({
  type: DISPLAY_NEW_DATA_WITH_CLICK,
});
