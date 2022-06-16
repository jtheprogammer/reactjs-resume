import React from "react";
import { Button } from "@mui/material";

import "./CustomButton.css";

async function handleClick() {
  try {
    await fetch("/resume", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => console.log(data));
  } catch (err) {
    console.log(err.message);
  }
}

const CustomButton = ({ text, icon, className }) => {
  return (
    <Button
      onClick={(e) => (className === "resume_btn" ? handleClick() : null)}
      variant="contained"
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_background">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
