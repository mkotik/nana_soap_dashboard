import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function SaveButton(props) {
  const { closeMenu1 } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
    closeMenu1();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Button
      aria-describedby={"#popover"}
      variant="contained"
      // color="secondary"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        fontSize: "1rem",
      }}
      onClick={handleClick}
    >
      <Popover
        id={"popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <Typography style={{ textAlign: "center" }}>
            Are you sure ?
          </Typography>
          <Button
            style={{
              backgroundColor: "#198754",
              color: "white",
              marginRight: "0.5rem",
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
            }}
          >
            No
          </Button>
        </Typography>
      </Popover>
      Delete
    </Button>
  );
}

export default SaveButton;
