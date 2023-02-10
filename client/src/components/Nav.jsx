import "./Nav.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import React from "react";
function Nav() {
  return (
    <div>
      {/* fixed-top es la clase bootstrap para mantener la barra en el scroll */}
      <nav className="navbar navbar-expand-lg bg-dark fixed-top"> 
        <div className="container-fluid">
          <div className="icons container">
            <a href="#">
              <i><FaGithub/></i>
            </a>
            <a href="https://www.linkedin.com/in/maximiliano-rucci-b757901b0/">
              <i><AiFillLinkedin/></i>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <p><FiMenu/></p>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#mypresentacion">
                Home
              </a>
              <a className="nav-link" href="#proyects">
                Proyects
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
