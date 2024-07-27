import React from "react";

const About = ({toggleMode}) => {
  return (
    <div className=" p-4">
      <div className="row d-flex justify-content-between align-items-center" style={{marginTop:'5%'}}>
        <div className="col-md-4 col-12" style={{ marginTop: "6%" }}>
          <img
            className={`rounded-circle border border-2 img-fluid w-50 ${toggleMode&&'img-thumbnail'}`}
            src="/about.jpeg"
            alt=""
            style={{ marginLeft: "30%",maxWidth:'100%' }}
          />
        </div>
        <div
          className="col-md-8 col-12 order-1 order-md-0 m-2 m-md-0"
          style={{ marginTop: "6%" }}
        >
          <h1 className="mb-3 fs-3">About Me</h1>
          <p className="me-3 fs-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            deleniti facere quae suscipit repellat fuga repellendus voluptate,
            hic at provident culpa pariatur animi earum aut inventore ipsa nisi.
            Iste, doloremque?
          </p>
          <button type="button" className="btn cvBtn text-light shadow mt-3 fs-4" style={{width:'400px',maxWidth:'100%'}}>
            Download My CV <i className=" ms-2 fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
