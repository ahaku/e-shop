import { IStore } from "./../types";
export const getOrders = (state: IStore) => state.orders.data;
