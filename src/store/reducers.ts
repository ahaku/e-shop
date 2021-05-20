import { IStore } from "./types";
import { combineReducers } from "redux";
import goodsReducer from "./goods/reducer";

const allReducers = combineReducers<IStore>({
  goods: goodsReducer,
});

export default allReducers;
