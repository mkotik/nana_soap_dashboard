import React from "react";
import { Link } from "react-router-dom";
import OrderTab from "./components/OrderTab";
import "../../styles/Orders.scss";

function Orders(props) {
  return (
    <div className="orders py-5 ">
      <div className="container">
        <div className="top">
          <h1>Orders</h1>
        </div>
        <div className="d-flex">
          <input className="searchBar" placeholder="Search" />
        </div>
        <div className="ordersList">
          <div className="header">
            <h5 className="orderHead">Order #</h5>
            <h5 className="dateHead">Date/Time</h5>
            <h5 className="statusHead">Status</h5>
            <h5 className="amountHead">Amount</h5>
          </div>
          <div className="items">
            <OrderTab />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
