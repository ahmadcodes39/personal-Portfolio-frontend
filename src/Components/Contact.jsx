import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import getTogeather from "../Avatars/workTogeather.json";
import Call from "../Avatars/Call.json";
import { saveUser } from "../../Api_Calls/apiRoutes";

const Contact = ({ toggleMode }) => {
  const workAvatar = useRef(null);
  const callAvatar = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: workAvatar.current,
      loop: true,
      autoplay: true,
      animationData: getTogeather,
    });
    Lottie.loadAnimation({
      container: callAvatar.current,
      loop: true,
      autoplay: true,
      animationData: Call,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [textArea, setTextArea] = useState("");
  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const sentData = async (e) => {
    e.preventDefault();
    await saveUser(formData, textArea);
    setTextArea(" ");
    setFormData({
      name: " ",
      phone: " ",
      email: " ",
    });
  };
  return (
    <>
      <div className="  pt-5">
        <div className="row d-flex justify-content-evenly">
          <div className="col-12 col-md-6">
            <h1 className="fw-bold text-center">Lets Work Togeather</h1>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              suscipit debit
            </p>
            <div className=" d-flex justify-centebt-left align-items-left flex-column gap-2 ">
              <div>
                <a
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  href="https://www.facebook.com/syedahmadali.shah.505/"
                >
                  <i className="fa-brands fa-square-facebook p-md-3 p-2 btn fs-5 social-icons"></i>
                  <p className="d-inline-block ms-2 text-break fs-5 fw-bold ">
                    facebook.com/syedahmadali.shah.505
                  </p>
                </a>
              </div>

              <div>
                <i className="fa-solid fa-phone p-md-3 p-2 btn fs-5 social-icons"></i>
                <p className="d-inline-block ms-2 text-break fs-5 fw-bold">
                  +92 3224-8993-31
                </p>
              </div>
              <div>
                <a
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  href="mailto:syedahmadalishah39@gmail.com"
                >
                  <i className="fa-solid fa-envelope p-md-3 p-2 btn fs-5 social-icons"></i>
                  <p className="d-inline-block ms-2 text-break  fs-5 fw-bold">
                    syedahmadalishah39@gmail.com
                  </p>
                </a>
              </div>

              <div>
                <a
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  href="https://github.com/ahmadcodes39"
                >
                  <i className="fa-brands fa-github p-md-3 p-2 btn fs-5 social-icons"></i>
                  <p className="d-inline-block ms-2 text-break  fs-5 fw-bold">
                    github.com/ahmadcodes39
                  </p>
                </a>
              </div>

              <div>
                <a
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  href="https://www.linkedin.com/in/syed-ahmad-ali-3461012a9/"
                >
                  <i className="fa-brands fa-linkedin p-md-3 p-2 btn fs-4 social-icons"></i>
                  <p className="d-inline-block ms-2 text-break  fs-5 fw-bold">
                    linkedin.com/in/syed-ahmad-ali-3461012a9/
                  </p>
                </a>
              </div>
            </div>
            <div
              className="container"
              ref={callAvatar}
              style={{ width: "100%", height: "500px", maxWidth: "100%" }}
            ></div>
          </div>

          {/* Contact column */}
          <div
            className={`col-12 ${
              toggleMode ? "bg-darkContact" : "bg-contact"
            } col-md-4 mt-4 me-2 rounded-4 `}
            style={{ width: "700px", height: "fit-content", maxWidth: "100%" }}
          >
            <form
              onSubmit={sentData}
              className="p-4"
              style={{ fontSize: "calc(1.275rem + 0.3vw)" }}
            >
              <div className="mb-2 d-flex justify-content-left align-items-left flex-column">
                <label
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  htmlFor="name"
                >
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className={`form-control p-3 rounded-4 fs-5 ${
                    toggleMode && "bg-inputDarkColor"
                  }`}
                />
              </div>
              <div className="mb-2 d-flex justify-content-left align-items-left flex-column mt-4">
                <label
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  htmlFor="phone"
                >
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  placeholder="Enter your Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className={`form-control p-3 rounded-4 fs-5 ${
                    toggleMode && "bg-inputDarkColor"
                  }`}
                />
              </div>
              <div className="mb-2 d-flex justify-content-left align-items-left flex-column mt-4">
                <label
                  className={`${toggleMode ? "text-light" : "text-secondary"}`}
                  htmlFor="email"
                >
                  E-mail <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className={`form-control p-3 rounded-4 fs-5 ${
                    toggleMode && "bg-inputDarkColor"
                  }`}
                />
              </div>
              <div
                className={`d-flex justify-content-left align-items-left flex-column mt-4 text-secondary ${
                  toggleMode ? "text-light" : "text-secondary"
                }`}
              >
                <label htmlFor="message">
                  Comments <span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control fs-5 ${
                    toggleMode && "bg-inputDarkColor"
                  }`}
                  rows={5}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  autoComplete="off"
                  value={textArea}
                  onChange={handleTextArea}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5 mb-4 text-secondary">
                <button
                  type="submit"
                  className="btn text-light landing-btn-colors rounded-pill fs-4 p-2 text-center "
                  style={{ width: "400px", maxWidth: "100%" }}
                >
                  Send Message{" "}
                  <i className="ms-2 fa-regular fa-paper-plane fs-4"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
