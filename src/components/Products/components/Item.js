import React from "react";
import soap from "../../../assets/soap-item.png";
import threeDots from "../../../assets/threeDotsH.svg";

function Item(props) {
  return (
    <div className="item">
      <div className="col1">
        <div className="imgWrap">
          <img src={soap} />
        </div>
        <h5>Lemongrass</h5>
      </div>
      <div className="col2">
        <h5>20</h5>
      </div>
      <div className="col3">
        <h5>20</h5>
      </div>
      <div className="col4">
        <h5 className="salesText">20</h5>
      </div>
      <div className="col5">
        <div className="imgWrap">
          <img src={threeDots} />
        </div>
      </div>
    </div>
  );
}

export default Item;
