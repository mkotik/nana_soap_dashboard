import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function ProductImages(props) {
  const { id } = useParams();
  const location = useLocation();
  const { prodName } = location.state;
  const [file, setFile] = useState(null);
  const [s3URL, setS3URL] = useState(null);
  const [img, setImg] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    setImg(`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${id}`);
    axios
      .post("http://localhost:5000/api/products/s3Url", { imgName: id })
      .then((res) => {
        console.log(res.data);
        setS3URL(res.data.url);
        setIsFetching(false);
      })
      .catch((err) => {
        console.dir(err);
        setIsFetching(false);
      });
  }, []);
  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log(s3URL);
  };
  const handleSubmit = (e) => {
    setIsFetching(true);
    e.preventDefault();
    console.log(file);
    setImg(null);
    axios
      .put(s3URL, file)
      .then((res) => {
        console.log(res);
        setImg(s3URL.split("?")[0]);
        setIsFetching(false);
      })
      .catch((err) => {
        console.dir(err);
        setIsFetching(false);
      });
  };

  return (
    <div className="productImg py-5">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="m-auto"
          style={{ width: "20rem" }}
        >
          <h1 className="text-center">{prodName}</h1>
          <div
            style={{ width: "20rem", height: "20rem" }}
            className="d-flex justify-content-center align-items-center"
          >
            {!isFetching && (
              <img
                src={img}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="current soap product"
              />
            )}
            {isFetching && <CircularProgress />}
          </div>
          <div
            className="btns d-flex justify-content-between align-items-center"
            style={{ height: "4rem" }}
          >
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={onChange}
            />
            <button type="submit" className="btn bg-success ml-5">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductImages;
