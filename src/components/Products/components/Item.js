import React, { useState } from "react";
import OptionsMenu from "./OptionsMenu";

import test from "../../../assets/soap-item.png";
import threeDots from "../../../assets/threeDotsH.svg";

function Item(props) {
  const { product } = props;
  // const mainImg = product.images.find((img) => img.primary);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="item">
      <div className="col1">
        <div className="imgWrap d-flex justify-content-center align-items-center p-1">
          {/* {mainImg && <img src={mainImg.image_url} alt="product img" />} */}
          <img
            src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
          />
        </div>
        <h5>{product.name}</h5>
      </div>
      <div className="col2">
        <h5>{product.inventory}</h5>
      </div>
      <div className="col3">
        <h5>{product.quantitySold}</h5>
      </div>
      <div className="col4">
        <h5 className="salesText text-success">${product.sales.toFixed(2)}</h5>
      </div>
      <div className="col5">
        <div
          className="imgWrap px-2 py-2 d-flex justify-content-center align-items-center"
          style={{ borderRadius: "50%" }}
          onClick={openMenu}
        >
          <img src={threeDots} alt="options menu" />
        </div>
      </div>
      <OptionsMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        prodId={product.product_id}
        prodName={product.name}
        product={product}
      />
    </div>
  );
}

export default Item;
