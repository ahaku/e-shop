import allReducers from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state") as string)
  : {};
export const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools()
);
store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

export default store;
