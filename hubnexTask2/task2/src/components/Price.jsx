


import Testimonials from './Testimonials';

// import p1 from './images/Pricing Card.png'
// import p2 from './images/Pricing Card2.png'
// import p3 from './images/Pricing Card3.png'

import l1 from './images/pricelist1.png'
import l2 from './images/pricelist2.png'
import l3 from './images/pricelist3.png'
import popular from './images/popular.png'
import './Price.css'

const Price = () => {
  return (
    <>
    
<div>

<div className="container boxes">
    <div className="row">
        <div className="col-md-4">
            <div className="box box1-1 box11 text-center">
                <h4 className="text-secondary fs-5 num1">Free</h4>
                <h2 className="num1">$0 <sub>/monthly</sub></h2>
                <button className="btn btn-primary">Get Started for free</button>
                <img src={l1} className="img-fluid price-img1 mt-4" alt="Price 1"></img>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box box21 text-center">
                <h4 className="text-secondary fs-5 num1 pro mt-4">Pro <img src={popular} style={{marginLeft:"70px"}} alt="Popular" className='popular'></img></h4>
                <h2 className="num1 text-white">$0 <sub>/monthly</sub></h2>
                <button className="btn btn-primary">Get Started for free</button>
                <img src={l2} className="img-fluid price-img1 mt-4" alt="Price 2"></img>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="box box3 box1-1 text-center">
                <h4 className="text-secondary fs-5 num1">Free</h4>
                <h2 className="num1">$0 <sub>/monthly</sub></h2>
                <button className="btn btn-primary">Get Started for free</button>
                <img src={l3} className="img-fluid price-img1 mt-4" alt="Price 3"></img>
            </div>
        </div>
    </div>
</div>

</div>

<Testimonials></Testimonials>

      
    </>
  );
};

export default Price;
