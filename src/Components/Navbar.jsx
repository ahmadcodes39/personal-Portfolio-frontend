import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMode, setToggleMode }) => {
  const changeMode = () => {
    setToggleMode(!toggleMode);
  };

  return (
    <nav
      className={`mb-3 navbar navbar-expand-lg  ${
        toggleMode ? "navbar-dark bg-dark" : ""
      } `}
    >
      {/* */}
      <div className="container-fluid shadow">
        <Link className="navbar-brand ms-5" to="/">
          <i className="fa-solid fa-code display-5 textHeading-Color "></i>
          <h1 className=" d-inline-block display-6 ms-1">Ahmad</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${
              toggleMode && "navbar-dark bg-dark text-light"
            }`}></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div
            className={`offcanvas-header ${
              toggleMode && "navbar-dark bg-dark text-light"
            }`}
          >
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Portfolio Menu
            </h5>
            <button
              type="button"
              className={`btn-close ${toggleMode ? "text-light" : ""}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
            className={`offcanvas-body  ${toggleMode && "navbar-dark bg-dark"} `}
          >
            {/**/}
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-4 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fs-4  nav-link mx-lg-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fs-4  nav-link" to="/skills">
                  Technologies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fs-4  nav-link" to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fs-4  nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch fs-4 mt-3 me-5 ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={changeMode}
              />
              <label
                className={`form-check-label  ${
                  toggleMode ? "text-light" : "text-dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {toggleMode ?<p>Light Mode</p>:<p>Dark Mode</p> }
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
