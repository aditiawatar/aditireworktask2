import "./Progress.css";

import pdt from "./images/Product Image.png";
import dia1 from "./images/torus 3.png";
import dia2 from "./images/pyramid 2.png";

import i1 from "./images/Icon1.png";
import i2 from "./images/Icon2.png";
import i3 from "./images/Icon3.png";
import i4 from "./images/Icon4.png";

import arrow from "./images/arrow.png";
import Streamline from "./Streamline";


const Progress = () => {
  return (
    <div>
    <div className="page3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="boost border d-inline rounded-pill p-1 fs-6 fw-normal">
              Boost Your productivity
            </div>
            <div className="h1 text-center mt-4">
              A more effective way <br />
              to track progress
            </div>
            <p className="d-inline para2 fs-6">
              Effortlessly turn your ideas into a fully functional,
              <br /> responsive, no-code SaaS website in just minutes with
              <br /> the set of free components for Framer.
            </p>
          </div>

          <div className="container">
            <img src={pdt} className="img-fluid mt-4" alt="Responsive image" />
            <div className="container information">
              <div className="row mx-5 ">
                <div className="col-sm">
                  <p>
                    <img src={i1}></img> <br></br>
                    <span className="h6">Integration ecosystem</span> <br></br>
                    Track your progress and motivate <br></br>your efforts
                    everyday.
                    <br></br> Learn more <img src={arrow}></img>
                  </p>
                </div>

                <div className="col-sm">
                  <p>
                    <img src={i2}></img> <br></br>
                    <span className="h6">Goal setting and tracking</span>{" "}
                    <br></br>
                    Set and track goals with <br></br>manageable task
                    breakdowns.
                    <br></br> Learn more <img src={arrow}></img>
                  </p>
                </div>

                <div className="col-sm">
                  <p>
                    <img src={i3}></img> <br></br>
                    <span className="h6">Secure data encryption</span> <br></br>
                    Ensure your data’s safety with top <br></br>tier encryption.
                    <br></br> Learn more <img src={arrow}></img>
                  </p>
                </div>

                <div className="col-sm">
                  <p>
                    <img src={i4}></img> <br></br>
                    <span className="h6">Customizable notifications</span>{" "}
                    <br></br>
                    Get alerts on tasks and deadlines <br></br>that matter most.
                    <br></br> Learn more <img src={arrow}></img>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <img
              src={dia1}
              className="img-fluid dia1 d-none d-md-block"
              alt="Responsive image"
            />
          </div>

          <div className="container">
            <img
              src={dia2}
              className="img-fluid dia1 d-none d-md-block dia2"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>


      </div>

      <Streamline></Streamline>
    </div>
  );
};

export default Progress;
