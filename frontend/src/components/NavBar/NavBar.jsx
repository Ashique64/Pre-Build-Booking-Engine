import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="main-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-lg-3">
          <a className="navbar-brand" href="#">
            <i className="fas fa-hotel me-2"></i>
            StayBooker
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  List Your Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <button className="btn login-btn">
              <i className="fas fa-user me-2"></i>
              Login
            </button>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
