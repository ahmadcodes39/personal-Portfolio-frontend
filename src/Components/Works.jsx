import React from "react";

function Works({ toggleMode,data}) {
  return (
    <div className="">
      <div className="container">
        <h1 className="display-5 fw-bold pt-5 text-center mb-5">My Works</h1>
        <div className="row justify-content-center align-items-center">
          {data.map((work) => (
            <div key={work.id} className="col-12 col-md-12 col-lg-6 ">
              <div className={`card rounded-corners shadow bg-secondary mb-5 ${toggleMode?'works-darkMode':'bg-light'}`}>
                <img src={work.img} className="card-img-top rounded-corners img-fluid w-100" alt={work.title}/>
                <div className="row card-body">
                  <h5 className="card-title fw-bold fs-4">{work.title}</h5>
                  <p className={`card-text fs-4 ${toggleMode&&'lh-base letter-spacing'}`}>{work.description}</p>
                  {work.resources.map((item, index) => (
                    <span key={index} className={`badge badgeColor mb-2 shadow px-3 col w-50  rounded rounded-pill mx-2 ${toggleMode?'badges-darkMode':'hover-effect'} `}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Works);
