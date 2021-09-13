import React, { useState } from "react";
import SaveButton from "./SaveButton.js";
import "../../styles/AddProduct.scss";

function AddProduct(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="addProduct py-5">
      <div className="container">
        <form className="ms-auto d-flex flex-column justify-content-center align-items-center">
          <div className="productDetails">
            <h5>Edit Product</h5>
            <input placeholder="Name" className="full" />
            <div className="d-flex justify-content-between">
              <input placeholder="SKU" className="half" />
              <input placeholder="Inventory" className="half" />
            </div>
            <textarea placeholder="Description" />
            <input placeholder="Price (Required)" className="full m-0" />
            <label className="mt-2">
              <h5>Product Image:</h5>
              <input
                placeholder="Price (Required)"
                className="full m-0"
                type="file"
              />
            </label>
            <div className="d-flex justify-content-center">
              <SaveButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
