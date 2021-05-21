import { IOrders } from "./i";
import { AnyAction } from "redux";
import { SET_ORDERS } from "../types";

const initialState: IOrders = {
  data: [],
};

const ordersReducer = function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default ordersReducer;
