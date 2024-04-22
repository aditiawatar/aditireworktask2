import "./SignUp.css";
import learn from "./images/learn2.png";
import star from "./images/emojistar 1.png";
import ring from './images/helix2 1.png'
import LastPage from "./LastPage";

const SignUp = () => {
  return (
    <div>
    <div className="sign-up mt-4">
    <img src={star} className="star d-none d-md-block" alt="star"></img>
    <div className="container">
      <div className="row sign2">
        <div className="col-md-12 text-center">
          <div className="h1 text-center mt-4">
            Sign up for free today
          </div>
          <p className="celebrate mt-3">
            Celebrate the joy of accomplishment with an app designed
            <br />
            to track your progress and motivate your efforts
          </p>
          <button className="btn btn-dark sign-btn mt-4">
            Get for free
          </button>
          <img src={learn} className="img-fluid sign-btn mt-4" alt="learn"></img>
        </div>
      </div>
      <img src={ring} className="ring img-fluid mt-4 d-none d-md-block" alt="ring"></img>
    </div>
</div>
    <LastPage></LastPage>
  </div>
  

  );
};

export default SignUp;
