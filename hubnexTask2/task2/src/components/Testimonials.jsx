import t1 from './images/Testimonial.png'
import t2 from './images/Testimonial2.png'
import t3 from './images/Testimonial3.png'
import t4 from './images/Testimonial4.png'
import t5 from './images/Testimonial5.png'
import t6 from './images/Testimonial6.png'
import t7 from './images/Testimonial7.png'
import t8 from './images/Testimonial8.png'
import t9 from './images/Testimonial9.png'
import SignUp from './SignUp'

import './Testimonials.css'

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="boost border d-inline rounded-pill p-1 fs-6 fw-normal">
             Testimonials
            </div>

            <div className="h1 text-center mt-4">
                 What our users say<br />
              
            </div>


           

            <div className="container mt-5">
  <div className="row">
    <div className="col-sm-12 col-md-4 image1">
      <a href={t1} target="_blank" rel="noopener noreferrer">
        <img src={t1} className="img-fluid" alt="t1" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image2">
      <a href={t2} target="_blank" rel="noopener noreferrer">
        <img src={t2} className="img-fluid" alt="t2" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image3">
      <a href={t3} target="_blank" rel="noopener noreferrer">
        <img src={t3} className="img-fluid" alt="t3" />
      </a>
    </div>
    <div className="w-100"></div>
    <div className="col-sm-12 col-md-4 image1">
      <a href={t4} target="_blank" rel="noopener noreferrer">
        <img src={t4} className="img-fluid" alt="t4" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image2">
      <a href={t5} target="_blank" rel="noopener noreferrer">
        <img src={t5} className="img-fluid" alt="t5" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image3">
      <a href={t6} target="_blank" rel="noopener noreferrer">
        <img src={t6} className="img-fluid" alt="t6" />
      </a>
    </div>
    <div className="w-100"></div>
    <div className="col-sm-12 col-md-4 image1">
      <a href={t7} target="_blank" rel="noopener noreferrer">
        <img src={t7} className="img-fluid" alt="t7" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image2">
      <a href={t8} target="_blank" rel="noopener noreferrer">
        <img src={t8} className="img-fluid" alt="t8" />
      </a>
    </div>
    <div className="col-sm-12 col-md-4 image3">
      <a href={t9} target="_blank" rel="noopener noreferrer">
        <img src={t9} className="img-fluid" alt="t9" />
      </a>
    </div>
  </div>
</div>

  </div>
</div>


            </div>

            <SignUp></SignUp>
            </div>
           
    
  )
}

export default Testimonials
