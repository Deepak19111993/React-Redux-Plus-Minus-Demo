import {
  MINUS_DATA,
  PLUS_DATA,
  REQUEST_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  REQUEST_MEME_DATA,
  SUCCESS_MEME_DATA,
  FAIL_MEME_DATA,
} from "../actionType";

const initialState = {
  count: 1,
  users: [],
  meme: [],
  loading: false,
  error: null,
};

const valueReducer = (state = initialState, action) => {
  //    return state;

  switch (action.type) {
    case MINUS_DATA:
      return {
        ...state,
        count: state.count <= 1 ? 1 : state.count - 1,
      };
    case PLUS_DATA:
      return {
        ...state,
        count: state.count + 1,
      };

    case REQUEST_FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_FETCH_DATA:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case FAIL_FETCH_DATA:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case REQUEST_MEME_DATA:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_MEME_DATA:
      return {
        ...state,
        meme: action.payload,
      };
    case FAIL_MEME_DATA:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default valueReducer;
