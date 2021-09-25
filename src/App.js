import React, { useEffect } from "react";
import axios from "axios";
import { AddProduct, Header, Products, EditProduct } from "./components";
import { Route, Switch } from "react-router-dom";
import { setProducts } from "./actions";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/soap")
      .then((res) => {
        props.setProducts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/addproduct">
          <AddProduct />
        </Route>
        <Route exact path="/editproduct">
          <EditProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { setProducts })(App);
