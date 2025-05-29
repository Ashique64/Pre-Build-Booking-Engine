import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <section className="main-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container py-lg-3">
          <a className="navbar-brand" href="#">
            <img src="/assets/logo (3).png" alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-items" id="navbarNav">
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
              <i className="bx bxs-user-circle bx-brust me-2" />
              Login
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
