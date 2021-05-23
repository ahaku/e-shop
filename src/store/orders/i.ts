import { IGood } from "./../goods/i";
export interface IOrders {
  data: IOrder[];
}

export interface IOrder {
  id: string;
  date: string;
  data: IOrderData[];
  name: string;
  phone: string;
}

export interface IOrderData extends IGood {
  count: number;
  uid: string;
}
