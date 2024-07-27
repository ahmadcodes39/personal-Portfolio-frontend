import React from "react";

const LandingPage = ({ toggleMode}) => {
  return (
    <div className="container-fluid heroSection ">
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-12 col-md-6 order-1 order-md-0 mt-5">
          <p className="ms-2 fs-2">Hello, I'm</p>
          <div className="display-1 textHeading-Color fw-bold">Ahmad Ali</div>
          <p className="fs-4">
            {" "}
            Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Quas
            quis quae hic asperiores ut qui ad vel cumque non! Cum impedit
            dolores hic <b>beatae sint</b> illo quidem nam quis quaerat!
          </p>
          <button className="btn text-white landing-btn-colors rounded-pill text-center media-btn fs-4" style={{width:'400px',maxWidth:'100%'}}>
            CONTACT ME{" "}
            <i className="ms-2 fa-regular fa-envelope text-white"></i>
          </button>
        </div>

        <div className="col-12 col-md-4 ">
          <img
            src='/landing img.jpeg '
            alt="image"
            className={`rounded-circle border border-2 img-fluid ${toggleMode&&'img-thumbnail'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
