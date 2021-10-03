import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="px-5 navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <a className="navbar-brand">Site Dash</a>
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto d-flex justify-content-center">
            <Link to="/" className="text-decoration-none">
              <li className="nav-item">
                <a className="nav-link text-center">Products</a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link text-center">Analytics</a>
            </li>
            <Link to="/orders" className="text-decoration-none">
              <li className="nav-item">
                <a className="nav-link text-center">Orders</a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link text-center">Mailing List </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
