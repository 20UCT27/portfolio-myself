import React from "react";
import "./Header.css";


function Header() {
  return (
    <div className="container">
         <nav className="navbar navbar-expand-lg nav">
            <div className="navbar-brand">
                <h4>MEETME...</h4>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
   
  );
}
export default Header;