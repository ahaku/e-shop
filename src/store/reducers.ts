import { IStore } from "./types";
import { combineReducers } from "redux";
import goodsReducer from "./goods/reducer";
import cartReducer from "./cart/reducer";
import ordersReducer from "./orders/reducers";

const allReducers = combineReducers<IStore>({
  goods: goodsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default allReducers;
