import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GoodsContainer from "./containers/Goods";
import OrdersContainer from "./containers/Orders";
import { getCart } from "./store/cart/selectors";
import { setGoodsAction, setGoodsError } from "./store/goods/actions";
import { IGood } from "./store/goods/i";

const fetchGoods = () => {
  return fetch("http://localhost:8080/goods").then((res) => res.json());
};

function App() {
  const dispatch = useDispatch();
  const cartData = useSelector(getCart);

  useEffect(() => {
    fetchGoods()
      .then((res: IGood[]) => {
        const newGoods = res.map((good) => {
          const countInCart = cartData[good.id] || 0;
          return { ...good, available: good.stock - countInCart };
        });
        dispatch(setGoodsAction(newGoods));
      })
      .catch((err) => {
        dispatch(setGoodsError());
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/orders">
            <OrdersContainer />
          </Route>
          <Route path="/">
            <GoodsContainer />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
