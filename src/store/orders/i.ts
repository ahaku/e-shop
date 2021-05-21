import { IGood } from "./../goods/i";
export interface IOrders {
  data: IOrder[];
}

export interface IOrder {
  id: string;
  date: Date;
  data: IOrderData;
  name: string;
  phone: string;
}

export interface IOrderData extends IGood {
  count: number;
}
