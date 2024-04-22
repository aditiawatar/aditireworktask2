import Progress2 from "./Progress2";
import "./Streamline.css";
import cube1 from "./images/cube-helix 1.png";
import cube2 from "./images/cube-helix 2.png";

const Streamline = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="border d-inline rounded-pill p-1 fs-6 fw-normal">
              Everything you need
            </div>
            <div className="h1 text-center mt-4">
              Streamlined for easy
              <br />
              management
            </div>
            <p className="d-inline para2 fs-6">
              Enjoy customizable lists, team work tools, and smart
              <br /> tracking all in one place. Set tasks, get reminders, and
              <br /> see your progress simply and quickly.
            </p>
          </div>
        </div>

        <div className="container cubic">
    <div className="row">
        <div className="col-md-6">
            <div className="cube1 cube text-center cubicbox">
                <img src={cube1} className="img-fluid" alt="Cube 1"></img>
                <div>
                    <h5 className="mt-5">Integration ecosystem</h5>
                    <p style={{
                      fontSize:"15px"

                      
                    }}>
                        Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="cube2 cube text-center cubicbox">
                <img src={cube2} className="img-fluid" alt="Cube 2"></img>
                <div>
                    <h5 className="mt-5">Goal Setting and tracking</h5>
                    <p style={{
                      fontSize:"15px"
                    }}>
                    Define and track your goals, breaking down <br></br>objectives into achievable tasks to keep your<br></br> targets in sight.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

      </div>
      <Progress2></Progress2>
    </div>
  );
};

export default Streamline;
