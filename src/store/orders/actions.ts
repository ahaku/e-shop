import { SET_ORDERS } from "../types";
import { IOrder } from "./i";

export function setOrdersAction(data: IOrder[]) {
  return {
    type: SET_ORDERS,
    payload: data,
  };
}
