import React from "react";
import {
  AddProduct,
  Header,
  Products,
  EditProduct,
  ProductImages,
} from "./components";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
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
        <Route exact path="/products/:id/images">
          <ProductImages />
        </Route>
        <Route exact path="/editproduct">
          <EditProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
