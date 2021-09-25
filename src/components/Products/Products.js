import React, { useState } from "react";
import "../../styles/Products.scss";
import Item from "./components/Item.js";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

function Products(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="products py-5">
      <div className="container">
        <div className="top">
          <h1>Products</h1>
          <Link to="addproduct">
            <button>Add</button>
          </Link>
        </div>
        <div className="d-flex">
          <input className="searchBar" placeholder="Search" />
        </div>
        <div className="productsList">
          <div className="header">
            <h5 className="productHead">Product</h5>
            <h5 className="remainingHead">Remaining</h5>
            <h5 className="ordersHead">Orders</h5>
            <h5 className="salesHead">Sales</h5>
            <h5 className="optionsHead">Options</h5>
          </div>
          <div className="items">
            {props.products.map((prod) => (
              <Item prod={prod} />
            ))}
            {/* <Item />
            <Item />
            <Item />
            <Item />
            <Item /> */}
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Products);
