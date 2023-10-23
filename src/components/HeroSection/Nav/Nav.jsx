import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';

const Nav = () => 
  <nav>
    <div>
      <div className={styles.logo}>
        <img src={Logo}></img>
      </div>

      <div className={styles['nav-bar']}>
        <ul>
          <li className={styles.active}><a href='#'>Home</a></li>
          <li><a href='#'>Explore</a></li>
          <li><a href='#'>Travel</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Pricing</a></li>
        </ul>
      </div>

      <div className={styles['login-buttons']}>
        <a href='#'>Login</a>
        <a className={styles['signup-btn']} href='#'>Signup</a>
      </div>

      <div className={styles['burger-button']}>
        <img src={Burger} alt="menu" />
      </div>
    </div>
    
  </nav>

export default Nav;
