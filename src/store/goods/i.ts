import { Statuses } from "./../types";

export interface IGoods {
  data: IGood[];
  status: Statuses;
}

export interface IGood {
  id: string;
  image: string;
  banner: string;
  name: string;
  about: string;
  price: number;
  stock: number;
  available: number;
}
