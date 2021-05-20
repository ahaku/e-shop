import { ICart } from "./cart/i";
import { IGoods } from "./goods/i";

export const SET_GOODS = "SET_GOODS";
export const FETCH_GOODS = "FETCH_GOODS";
export const DECREASE_GOODS = "DECREASE_GOODS";
export const ERROR_GOODS = "ERROR_GOODS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const RESET_CART = "RESET_CART";

export enum Statuses {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export interface IStore {
  goods: IGoods;
  cart: ICart;
}
