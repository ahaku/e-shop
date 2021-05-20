import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GoodsContainer from "./containers/Goods";
import { getCart } from "./store/cart/selectors";
import { setGoodsAction } from "./store/goods/actions";
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
        dispatch(setGoodsAction([]));
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/orders">Orders</Route>
          <Route path="/">
            <GoodsContainer />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
