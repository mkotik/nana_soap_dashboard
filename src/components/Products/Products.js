import React from "react";
import "../../styles/Products.scss";
import Item from "./components/Item.js";

function Products(props) {
  return (
    <div className="products py-5">
      <div className="container">
        <div className="top">
          <h1>Products</h1>
          <button>Add</button>
        </div>
        <input className="searchBar" placeholder="Search" />
        <div className="productsList">
          <div className="header">
            <h5 className="productHead">Product</h5>
            <h5 className="remainingHead">Remaining</h5>
            <h5 className="ordersHead">Orders</h5>
            <h5 className="salesHead">Sales</h5>
            <h5 className="optionsHead">Options</h5>
          </div>
          <div className="items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
