import { MINUS_DATA, PLUS_DATA } from "../actionType";

const initialState = {
  count: 1,
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
    default:
      return state;
  }
};

export default valueReducer;
