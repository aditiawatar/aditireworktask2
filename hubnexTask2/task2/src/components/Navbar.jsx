
import logo from './images/Logo.png'
import './Navbar.css'
import Pathway from './Pathway'




const Navbar = () => {
  return (
    <div>
   
      <nav className="navbar navbar-expand-sm  ">
      <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className='collapse navbar-collapse nav-list' id='collapsibleNavbar'>
      <ul className='navbar-nav'>
          <li className='nav-item'>
                <a className='nav-link' href="#">About</a>
          </li>
          <li className='nav-item'>
                <a className='nav-link' href="#">Feature</a>
          </li>
          <li className='nav-item'>
                <a className='nav-link' href="#">Customers</a>
          </li>
          <li className='nav-item'>
                <a className='nav-link' href="#">Update</a>
          </li>
          <li className='nav-item'>
                <a className='nav-link' href="#">Help</a>
          </li>
          <li className='nav-item'>
                <button className='btn btn-dark'>Get for Free</button>
          </li>

      </ul>

      </div>

      </div>

      </nav>

    
<Pathway></Pathway>
    </div>
  )
}

export default Navbar
