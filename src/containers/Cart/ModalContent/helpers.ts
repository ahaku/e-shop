import { IGood } from "../../../store/goods/i";

export const patchGood = (id: string, override: { [key: string]: any }) => {
  return fetch(`http://localhost:8080/goods/${id}`, {
    method: "PATCH",
    body: JSON.stringify(override),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createOrder = (data: { [key: string]: any }) => {
  return fetch("http://localhost:8080/orders", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      credentials: "same-origin",
    },
  });
};

export const getUpdatingGoodsList = (
  cartDataWithCount: { [key: string]: number },
  goods: IGood[]
): Promise<Response>[] => {
  return Object.entries(cartDataWithCount).map(([goodId, count]) => {
    const inStock = goods.find(({ id }) => id === goodId)?.stock;
    return patchGood(goodId, { stock: (inStock as number) - count });
  });
};

export const responseListToJSON = (results: Response[]) =>
  Promise.all(results.map((r: any) => r.json()));
