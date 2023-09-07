import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ scrollToSection }) => {
  return (
    <nav className="Header">
      <div className="header-left">
        <span className="name">Douglas Moy</span>
      </div>
      <ul className="nav-list">
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("section1")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("section2")}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("section3")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("section4")}
          >
            Work Experience
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("section5")}
          >
            Just For Fun
          </button>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};
export default Header;
