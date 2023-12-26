import React, { Component } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Header.css"
import chess from "./Images/chesscom.png"
import github from "./Images/github.png"
import email from "./Images/email.png"
import itchio from "./Images/itchio.png"
import linkedin from "./Images/linkedin.png"

class Header extends Component {
  render() {
    return (
      
        <header className="header">
          {/* Updated to use react-scroll's Link */}
          <Link to="home" className="logo" spy={true} smooth={true} duration={500}>
            <span>Samuel Miller</span>
          </Link>
          <ul className="menu">
            <li>
              <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
            </li>
            <li>
              <Link to="chess" spy={true} smooth={true} duration={500}>Play Me In Chess</Link>
            </li>
            <li>
              <div>
                <button><img style={styles.button} src={chess} alt="Chess" /></button>
                <button><img style={styles.button} src={email} alt="Email" /></button>
                <button><img style={styles.button} src={github} alt="GitHub" /></button>
              </div>
              <div>
                <button> <img style={styles.button} src={itchio} alt="Itch.io" /></button>
                <button> <img style={styles.button} src={linkedin} alt="LinkedIn" /></button>
              </div>
            </li>
          </ul>
        </header>
      
    );
  }
}

const styles = {
  div: {
    "background-color": "#262626",
  },
  button: {
    width: '20px',
    height: '20px'
  },
  li: {
    color: 'white'
  }
}

export default Header;
