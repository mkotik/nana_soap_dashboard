import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import YouSure from "./YouSure.js";

function optionsMenu(props) {
  const { setAnchorEl, anchorEl } = props;
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/editproduct" className="text-decoration-none text-dark">
          <MenuItem onClick={handleClose}>EDIT</MenuItem>
        </Link>
        <div onClick={handleClose}>
          <YouSure closeMenu1={handleClose} />
        </div>
      </Menu>
    </div>
  );
}

export default optionsMenu;
