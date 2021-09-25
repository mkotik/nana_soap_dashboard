import React, { useState } from "react";
import OptionsMenu from "./OptionsMenu";

import test from "../../../assets/soap-item.png";
import threeDots from "../../../assets/threeDotsH.svg";

function Item(props) {
  const { soap } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="item">
      <div className="col1">
        <div className="imgWrap">
          <img src={test} />
        </div>
        <h5>{soap.name}</h5>
      </div>
      <div className="col2">
        <h5>{soap.inventory}</h5>
      </div>
      <div className="col3">
        <h5>150</h5>
      </div>
      <div className="col4">
        <h5 className="salesText text-success">$1200.00</h5>
      </div>
      <div className="col5">
        <div
          className="imgWrap px-2 py-2 d-flex justify-content-center align-items-center"
          style={{ borderRadius: "50%" }}
          onClick={openMenu}
        >
          <img src={threeDots} />
        </div>
      </div>
      <OptionsMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
}

export default Item;
