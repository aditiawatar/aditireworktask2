
import './Pathway.css'

import learn from './images/learn2.png'
import cylinder from './images/cylinder 1.png'
import visual from './images/Visual.png'
import half from './images/half-torus 1.png'
import Logos from './Logos'


const Pathway = () => {
  return (
    <div>
    
    <div className='pathway'>
   
   <p className='version'>Version 2.0 is here</p>
   <p className=' head'>Pathway to <br></br> productivity</p>
   <p className='para1'>Celebrate the joy of accomplishment with an app <br></br> designed to track your progress, motivate  <br></br>your efforts, and celebrate your successes.</p>
   <button className='btn btn-dark btn2'>Get for Free</button>
    <img src={learn} className='learn'></img>

    <img src={cylinder} className='cylinder img-fluid '></img>
    <img src={visual} className='visual img-fluid'></img>
    <img src={half} className='half img-fluid'></img>
    </div>
  <Logos></Logos>
    </div>
  )
}

export default Pathway
