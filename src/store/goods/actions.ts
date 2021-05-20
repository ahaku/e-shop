import { IGood } from "./i";
import {
  ADD_TO_CART,
  DECREASE_GOODS,
  REMOVE_FROM_CART,
  SET_GOODS,
} from "../types";

export function setGoodsAction(data: IGood[]) {
  return {
    type: SET_GOODS,
    payload: data,
  };
}

export function decreaseGoodsAction(count: number) {
  return {
    type: DECREASE_GOODS,
    payload: count,
  };
}

export function addToCartAction(id: string) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}
export function removeFromCartAction(id: string) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
