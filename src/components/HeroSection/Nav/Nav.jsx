import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';

const Nav = () => 
  <nav>
    <div>
      <div className='logo'>
        <img src={Logo}></img>
      </div>

      <div className='nav-bar'>
        <ul>
          <li className='active'><a href='#'>Home</a></li>
          <li><a href='#'>Explore</a></li>
          <li><a href='#'>Travel</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Pricing</a></li>
        </ul>
      </div>

      <div className='login-buttons'>
        <a href='#'>Login</a>
        <a className='signup-btn' href='#'>Signup</a>
      </div>

      <div className='burger-button'>
        <img src={Burger} alt="menu" />
      </div>
    </div>
    
  </nav>

export default Nav;
