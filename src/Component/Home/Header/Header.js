import React from "react";
import headerImage from "../../../../src/Image/digital header pic.png";

const Header = () => {
  return (
    <>
      <div className="headerBackground">
        <div className="container">
          <div className="row d-flex align-items-center text-center text-md-left pt-md-5 pb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <h1 className="oneNumberLine">
                With The Best Digital Marketing Company in India
              </h1>
              <h3 className="twoNumberLine">Generate More Traffic & Sales!</h3>

              <div class="divider">
                <span class="divider-separator"></span>
              </div>

              <p className="thirdNumberLine">
                Next-level Digital Marketing Strategies That Works
              </p>
              <button className="btn btn-primary">Get Your Free Quote</button>
            </div>
            <div className="col-md-6 headerImage mt-5 mt-md-0 mb-md-0 mb-5">
              <img className="image-fluid w-100" src={headerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
