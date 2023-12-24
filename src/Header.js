import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <NavLink to="/" className="logo">
            <span>&lt;/&gt;</span>
          </NavLink>
          <ul className="menu">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
