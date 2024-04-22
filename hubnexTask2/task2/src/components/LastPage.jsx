
import './LastPage.css'

import logo from './images/Default.png'
import twitter from './images/twitter.png'
import insta from './images/insta.png'
import pint from './images/pinterest.png'
import link from './images/linkdin.png'
import utube from './images/utube.png'
const LastPage = () => {
  return (
    <div>
    <div className="lastPage">

    <p>
        <img src={logo} className='last-logo'></img>
       <p className='lastPara'> Effortlessly turn your ideas into a <br></br> fully functional, responsive, no-<br></br>code SaaS website.</p>
    <img src={twitter} className='social'></img>
    <img src={insta} className='social'></img>
    <img src={pint} className='social'></img>
    <img src={link} className='social'></img>
    <img src={utube} className='social'></img>

    <div className='list'>
        <div className='list1 listing'>
        <h6 className='text-white heading'>Product</h6>
       <ul>
            <li>Features</li>
            <li>Integration</li>
            <li>Updates</li>
            <li>FAQ</li>
            <li>Pricing</li>
            </ul>
        </div>


        <div className='list2 listing'>
        <h6 className='text-white heading'>Company</h6>
        <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Manifesto</li>
            <li>Press</li>
            <li>Contact</li>
        </ul>
        </div>


        <div className='list3 listing'>
        <h6 className='text-white heading'>Resources</h6>
        <ul>
            <li>Example</li>
            <li>Community</li>
            <li>Guide</li>
            <li>Docs</li>
        </ul>
        </div>

        <div className='list4 listing'>
        <h6 className='text-white heading'>Legal</h6>
        <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
        </ul>
        </div>
    </div>

    </p>
 <div>
       
</div>
        </div>
  
        

    </div>


 
  )
}

export default LastPage
