import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../styles/AddProduct.scss";
import { connect } from "react-redux";
import { setCategories } from "../../actions";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

function AddProduct(props) {
  const { push } = useHistory();
  const initialState = {
    name: "",
    description: "",
    price: "",
    smells_like: "",
    exfoliation: "",
    inventory: "",
    category: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isFetching, setIsFetching] = useState(false);

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
    // console.log(formDataWithNumbers);
    setIsFetching(true);
    axios
      .post("http://localhost:5000/api/products", formDataWithNumbers)
      .then((res) => {
        setIsFetching(false);
        props.setCategories(res.data);
        Swal.fire({
          icon: "success",
          title: "Product successfully added",
          showConfirmButton: true,
          confirmButtonText: "Back to Products",
        }).then(() => {
          push("/");
        });
      })
      .catch((err) => {
        setIsFetching(false);
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
            <h5>Add Product</h5>
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
                Add New Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { setCategories })(AddProduct);
