import img1 from "./images/acme 1.png";
import img2 from "./images/quantum 1.png";
import img3 from "./images/echo 1.png";
import img4 from "./images/celestia 1.png";
import img5 from "./images/pulse 1.png";
import img6 from "./images/apex 1.png";

import "./Logos.css";
import Progress from "./Progress";



const Logos = () => {
  return (
    <div>
      <div className="container mt-5 logos">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img1} className="img-fluid" alt="Image 1" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img2} className="img-fluid" alt="Image 2" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img3} className="img-fluid" alt="Image 3" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img4} className="img-fluid" alt="Image 4" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img5} className="img-fluid" alt="Image 5" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 text-center pt-3">
            <img src={img6} className="img-fluid" alt="Image 6" />
          </div>
        </div>
      </div>
<Progress></Progress>
    </div>
    
  );
};

export default Logos;
