import React from "react";
import { Link } from "react-router-dom";
const Footer = ({toggleMode}) => {
  return (
    <div className="container text-left  p-5">
      <div className="row mt-5 d-flex justify-content-evenly align-items-center">
        <div className="col-md-2 col-12 text-center text-sm-start">
          <Link className="text-center" to="/">
            <i className="fa-solid fa-code display-6 textHeading-Color "></i>
            <h1
              className={`d-inline-block ms-1  mb-2 ${toggleMode?'text-light':'text-secondary'}`}
              style={{ fontSize: "35px" }}
            >
              Ahmad
            </h1>
          </Link>
        </div>

        <div className="mt-2 col-md-4 col-12 text-center text-sm-start">
          <a href="https://www.facebook.com/syedahmadali.shah.505/">
            <i className={`mx-2 fa-brands fa-square-facebook p-3 btn fs-5 ${toggleMode&&'text-white'}`}></i>
          </a>

          <a href="https://github.com/ahmadcodes39">
            <i className={`mx-2 fa-brands fa-github p-3 btn fs-5   ${toggleMode&&'text-white'}`}></i>
          </a>

          <a href="https://www.linkedin.com/in/syed-ahmad-ali-3461012a9/">
            <i className={`mx-2 fa-brands fa-linkedin p-3 btn fs-4 ${toggleMode&&'text-white'}`}></i>
          </a>
        </div>

        <div className="mt-4 col-md-6 text-center text-sm-start">
          <ul className={`d-flex justify-content-between align-items-center flex-wrap ${toggleMode ? 'text-white' : 'text-secondary'}`}>
            <Link className={`${toggleMode ? 'text-white' : 'text-secondary'} fs-4 text-decoration-none list-unstyled`} to="/">
              <li>Home</li>
            </Link>
            <Link className={`${toggleMode ? 'text-white' : 'text-secondary'} fs-4 text-decoration-none list-unstyled`} to="/about">
              <li>About</li>
            </Link>
            <Link className={`${toggleMode ? 'text-white' : 'text-secondary'} fs-4 text-decoration-none list-unstyled`} to="/skills">
              <li>Technologies</li>
            </Link>
            <Link className={`${toggleMode ? 'text-white' : 'text-secondary'} fs-4 text-decoration-none list-unstyled`} to="/works">
              <li>Work</li>
            </Link>
            <Link className={`${toggleMode ? 'text-white' : 'text-secondary'} fs-4 text-decoration-none list-unstyled`} to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <hr class="border border-secondary border-2 opacity-75"/>
      </div>
    </div>
  );
};

export default Footer;
