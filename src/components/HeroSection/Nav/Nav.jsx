import { useState } from 'react';
import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';

const NavList = () => (
  <ul>
    <li className={styles.active}><a href='#'>Home</a></li>
    <li><a href='#'>Explore</a></li>
    <li><a href='#'>Travel</a></li>
    <li><a href='#'>Blog</a></li>
    <li><a href='#'>Pricing</a></li>
  </ul>
  );

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
      setIsClosing(false);
    }, 200); // 500 миллисекунд - время анимации fadeOut
  };

  return (
  
  <nav>
    <div>
      <div className={styles.logo}>
        <img src={Logo}></img>
      </div>

      <div className={styles['nav-bar']}>
        <NavList />
      </div>

      <div className={styles['login-buttons']}>
        <a href='#'>Login</a>
        <a className={styles['signup-btn']} href='#'>Signup</a>
      </div>

      <div className={styles['burger-button']} onClick={toggleMenu}>
        <img src={Burger} alt="menu" />
      </div>
    </div>

    {isMenuOpen && (
        <div className={`${styles['nav-bar-dropdown']} ${isMenuOpen ? styles.open : (isClosing ? styles.closed : '')}`}>

          <div className={styles['burger-button']} onClick={toggleMenu}>
            <img src={Burger} alt="menu" />
          </div>

          <div className={styles.nav}>
            <NavList />
          </div>
        </div>
      )}
  </nav>)
  }

export default Nav;
