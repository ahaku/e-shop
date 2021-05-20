import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
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
