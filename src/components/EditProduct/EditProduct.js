import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../styles/AddProduct.scss";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { setCategories } from "../../actions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

function AddProduct(props) {
  const location = useLocation();
  const { push } = useHistory();
  const product = location.state.product;
  console.log(product);
  const initialState = {
    category: "Body Bars",
    description: product.description,
    exfoliation: product.exfoliation,
    featured: product.featured,
    inventory: product.inventory,
    name: product.name,
    price: product.price,
    smells_like: product.smells_like,
  };

  const [isFetching, setIsFetching] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithNumbers = {
      ...formData,
      price: Number(formData.price),
      inventory: Number(formData.inventory),
    };
    console.log(formDataWithNumbers);

    axios
      .put(
        `https://nanasoapsbackend.herokuapp.com/api/products//${product.product_id}`,
        formDataWithNumbers
      )
      .then((res) => {
        console.log(res);
        props.setCategories(res.data);
        Swal.fire({
          icon: "success",
          title: "Changes Saved",
          showConfirmButton: true,
          confirmButtonText: "Back to Products",
        }).then(() => {
          push("/");
        });
      })
      .catch((err) => {
        console.dir(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<p>${err.response.data.message}</p>`,
        });
      });
  };

  return (
    <div className="addProduct py-5">
      {isFetching && (
        <CircularProgress
          style={{
            position: "absolute",
            left: "48.5%",
            top: "3.6rem",
          }}
        />
      )}
      <div className="container">
        <form
          className="ms-auto d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="productDetails">
            <h5>Edit Product: {product.name}</h5>
            <label className=" d-flex flex-column justify-content-start full">
              Name
              <input
                placeholder="Name"
                className="full"
                onChange={onChange}
                name="name"
                value={formData.name}
              />
            </label>
            <div className="d-flex justify-content-between">
              <label className=" d-flex flex-column justify-content-start half">
                Category
                <select
                  name="category"
                  className="full"
                  onChange={onChange}
                  value={formData.category}
                >
                  <option value="">Category</option>
                  <option value="Body Bars">Body Bars</option>
                  <option value="Face Bars">Face Bars</option>
                  <option value="For Babies">For Babies</option>
                  <option value="Gift Boxes">Gift Boxes</option>
                </select>
              </label>
              <label className=" d-flex flex-column justify-content-start half">
                Inventory
                <input
                  placeholder="Inventory"
                  className="full"
                  onChange={onChange}
                  name="inventory"
                  value={formData.inventory}
                />
              </label>
            </div>
            <label className=" d-flex flex-column justify-content-start full">
              Description
              <textarea
                placeholder="Description"
                onChange={onChange}
                name="description"
                value={formData.description}
              />
            </label>
            <label className=" d-flex flex-column justify-content-start full">
              Price
              <input
                placeholder="Price (Required)"
                className="full"
                onChange={onChange}
                name="price"
                value={formData.price}
              />
            </label>
            <div className="d-flex justify-content-between">
              <label className=" d-flex flex-column justify-content-start half">
                Smells Like
                <input
                  placeholder="Smells Like (optional)"
                  className="full"
                  onChange={onChange}
                  name="smells_like"
                  value={formData.smells_like}
                />
              </label>
              <label className=" d-flex flex-column justify-content-start half">
                Exfoliation
                <select
                  name="exfoliation"
                  className="full"
                  onChange={onChange}
                  value={formData.exfoliation}
                >
                  <option value="">Exfoliation (optional)</option>
                  <option value="None">None</option>
                  <option value="Light">Light</option>
                  <option value="Medium">Medium</option>
                  <option value="Heavy">Heavy</option>
                  <option value="Extra Heavy">Extra Heavy</option>
                </select>
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success half" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { setCategories })(AddProduct);
