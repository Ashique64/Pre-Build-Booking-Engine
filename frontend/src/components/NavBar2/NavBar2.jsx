import React from "react";
import "./NavBar2.scss";
import { useNavigate } from "react-router-dom";

const NavBar2 = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate("/");
  };
  return (
    <section className="main-header-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container py-lg-3">
          <div>
            <a className="navbar-brand" onClick={handleHomeNavigate}>
              <img src="/assets/logo (3).png" alt="" />
            </a>
          </div>

          <button onClick={handleHomeNavigate} className="btn mob-login-btn d-block d-lg-none">
            <i className="bx bx-home" />
          </button>

          <div className="collapse navbar-collapse navbar-items" id="navbarNav">
            <button onClick={handleHomeNavigate} className="btn login-btn d-none d-lg-block">
              <i className="bx bx-home" />
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar2;
