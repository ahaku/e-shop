import { AnyAction } from "redux";
import {
  ADD_TO_CART,
  ERROR_GOODS,
  REMOVE_FROM_CART,
  RESET_CART,
} from "../types";
import { ICart } from "./i";

const initialState: ICart = {
  data: {},
};

const cartReducer = function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.data[action.payload]) {
        return { ...state, data: { ...state.data, [action.payload]: 1 } };
      }
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: state.data[action.payload] + 1,
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: state.data[action.payload] - 1,
        },
      };
    case RESET_CART:
      return initialState;
    case ERROR_GOODS:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
