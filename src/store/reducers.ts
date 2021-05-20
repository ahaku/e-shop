import { IStore } from "./types";
import { combineReducers } from "redux";
import goodsReducer from "./goods/reducer";
import cartReducer from "./cart/reducer";

const allReducers = combineReducers<IStore>({
  goods: goodsReducer,
  cart: cartReducer,
});

export default allReducers;
