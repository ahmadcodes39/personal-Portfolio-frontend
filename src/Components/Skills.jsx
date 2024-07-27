import React from "react";
// import AnimatedAvatar from "../Avatars/animationAvatar";
// import Lottie from 'lottie-react'
function Skills() {
  return (
    <div className="d-flex justify-content-center align-items-center  p-5 text-center flex-column">
      <h1 className="display-5 fw-bold mt-5">Technologies</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-12 col-12 p-3">
          <i className="my-4 mx-4 display-4 fa-brands fa-html5 text-danger" style={{maxWidth:'100%'}}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-css3 text-primary" style={{maxWidth:'100%'}}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-js text-warning" style={{maxWidth:'100%'}}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-node-js text-success" style={{maxWidth:'100%'}}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-react text-primary" style={{maxWidth:'100%'}}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-npm text-danger" style={{maxWidth:'100%'}}></i>
          <img
            className="my-4 mx-4 img-fluid fs-5 mb-4"
            src="/tailwind.png"
            alt=""
            style={{ width: "70px", maxWidth: "100%" }}
          />
        </div>

        <div className="col-md-12 col-12 ">
          <i className="my-4 mx-4 display-4 fa-brands fa-bootstrap" style={{ color: 'purple',maxWidth:'100%' }}></i>
          <i className="my-4 mx-4 display-4 fa-brands fa-git-alt" style={{ color: 'orangered',maxWidth:'100%' }}></i>
          <img
            className="mx-4 img-fluid fs-5"
            src="/c language.png"
            alt=""
            style={{ width: "50px", maxWidth: "100%" }}
          />
          <i className="my-4 mx-4 display-4 fa-brands fa-github" style={{maxWidth:'100%'}}></i>
          <img
            className="my-4 mx-4 img-fluid fs-5 remove-img-bg"
            src="/c++ language.webp"
            alt=""
            style={{ width: "80px", maxWidth: "100%" }}
          />
          <img
            className="my-4 mx-4 img-fluid fs-5"
            src="/mongodb.webp"
            alt=""
            style={{ width: "50px", maxWidth: "100%" }}
          />
          <img
            className="my-4 mx-4 img-fluid "
            src="/vscode.webp"
            alt=""
            style={{ width: "50px", maxWidth: "100%" }}
          />
          <img
            className="my-4 mx-4 img-fluid fs-5"
            src="/ejs.png"
            alt=""
            style={{width:'100px',  maxWidth: "100%" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">  {/* Added a new div for placement */}
        {/* <AnimatedAvatar />  Place the AnimatedAvatar component here */}
      </div>
    </div>
  );
}

export default Skills;
