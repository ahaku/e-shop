import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrdersAction } from "../../store/orders/actions";
import { getOrders } from "../../store/orders/selectors";
import { getDateFromISO, getMoneyString } from "../../utils/helpers";
import "./index.css";

const fetchOrders = () => {
  return fetch("http://localhost:8080/orders").then((res) => res.json());
};

const OrdersContainer = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);
  useEffect(() => {
    fetchOrders().then((res) => {
      dispatch(setOrdersAction(res));
    });
  }, [dispatch]);
  if (orders && orders.length === 0)
    return <div className="no-data-container container">No orders</div>;
  return (
    <div className="orders container">
      {orders.length
        ? orders.map(({ id, date, data }) => {
            const total = data.reduce((acc, { count, price }) => {
              return acc + count * price;
            }, 0);
            return (
              <div className="orders__item" key={id}>
                <small>{getDateFromISO(date)}</small>
                <div>Order cost: {getMoneyString(total)}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default OrdersContainer;
