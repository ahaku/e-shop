import { IGood, IGoods } from "./i";
import { deepCopy } from "./../../utils/helpers";
import { AnyAction } from "redux";
import {
  ADD_TO_CART,
  ERROR_GOODS,
  FETCH_GOODS,
  REMOVE_FROM_CART,
  SET_GOODS,
  Statuses,
} from "../types";

const initialState: IGoods = {
  data: [],
  status: Statuses.IDLE,
};

const goodsReducer = function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_GOODS:
      return {
        ...state,
        data: action.payload.map((good: IGood) => ({
          ...good,
          available: good.available,
        })),
        status: Statuses.SUCCESS,
        // available: action.payload.length,
      };
    case FETCH_GOODS:
      return { ...state, status: Statuses.LOADING };

    case ERROR_GOODS:
      return { ...state, status: Statuses.FAILURE };

    case ADD_TO_CART:
      const newGoods = deepCopy(state.data);
      const targetGood = newGoods.find(({ id }) => id === action.payload);
      if (targetGood) targetGood.available -= 1;

      return { ...state, data: newGoods };

    case REMOVE_FROM_CART:
      const copyGoods = deepCopy(state.data);
      const exactGood = copyGoods.find(({ id }) => id === action.payload);
      if (exactGood) exactGood.available += 1;

      return { ...state, data: copyGoods };

    default:
      return state;
  }
};

export default goodsReducer;
