import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { setGoodsAction } from "./store/goods/actions";

const fetchGoods = () => {
  return fetch("http://localhost:8080/goods").then((res) => res.json());
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGoods()
      .then((res) => dispatch(setGoodsAction(res)))
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/orders">orders</Route>
          <Route path="/">home</Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
