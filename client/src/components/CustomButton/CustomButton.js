import React from "react";
import { Button } from "@mui/material";

import "./CustomButton.css";

const CustomButton = ({ text, icon, className }) => {
  return (
    <Button
      variant="contained"
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_background">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
