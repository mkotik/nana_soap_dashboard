import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import YouSureDelete from "./YouSureDelete.js";

function optionsMenu(props) {
  const { setAnchorEl, anchorEl, prodId } = props;
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
          <YouSureDelete closeMenu1={handleClose} prodId={prodId} />
        </div>
      </Menu>
    </div>
  );
}

export default optionsMenu;
