import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import navData from "../../utils/navData";
import "./Header.css";

const Header = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Homepage link */}
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <CustomButton className="header_button" icon={navData.Home.icon} />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="navbar_collapse">
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathname === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathname === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathname === "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        {/* Socials */}
        <div className="header_socials">
          {Object.keys(navData.socials).map((media) => (
            <a
              key={navData.socials[media].text}
              className="header_icons"
              href={navData.socials[media].link}
              target="_blank"
              rel="noreferrer"
            >
              {navData.socials[media].icon}
            </a>
          ))}
          <CustomButton
            className="for_hire"
            text={navData.Button.text}
            icon={navData.Button.icon}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
