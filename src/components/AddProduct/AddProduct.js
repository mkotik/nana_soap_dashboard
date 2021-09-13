import React from "react";
import "../../styles/AddProduct.scss";

function AddProduct(props) {
  return (
    <div className="addProduct py-5">
      <div className="container">
        <form className="ms-auto d-flex flex-column justify-content-center align-items-center">
          <div className="productDetails">
            <h5>Add Product</h5>
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
              <button className="btn btn-success half">Add New Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
