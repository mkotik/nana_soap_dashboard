import React from "react";

function Header(props) {
  return (
    <nav className="px-5 navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">Site Dash</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto d-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-center">Products</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
