import React from "react";
import { Typography } from "@mui/material";
import navData from "../../utils/navData";
import resumeData from "../../utils/resumeData";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_rights">
          <span>{navData.Footer.icon}</span>
          <span>{navData.Footer.year}</span>
          <span>{navData.Footer.text}</span>
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_designed">
          Designed and Developed by{" "}
          <a
            className="a_link"
            href={resumeData.socials.LinkedIn.link}
            target="_blank"
            rel="noreferrer"
          >
            {resumeData.identity.full_name}
          </a>
          .
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
