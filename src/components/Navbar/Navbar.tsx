import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { MenuItems } from './NavbarItems/NavabrItems';
import { Link as Scroll } from 'react-scroll';
import burger from '../../assets/images/burger_icon.svg';
import closeIcon from '../../assets/images/close_icon.svg';
import { Container } from 'react-bootstrap';


const Navbar:React.FC<{backgroundImage: string}> = ({ backgroundImage }) => {

  const [click, setClick] = useState(false);
  const [show, setShow]  = useState(false);
  const [showButton, setShowButton]  = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if(click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
 }, [click]);

 const checkScrollHeader = () => {
  if (!show && window.pageYOffset > 320) {
    setShow(true);
  } else if (show && window.pageYOffset <= 320) {
    setShow(false);
  }

  if (!showButton && window.pageYOffset > 520) {
    setShowButton(true);
  } else if (show && window.pageYOffset <= 520) {
    setShowButton(false);
  }
};

window.addEventListener('scroll', checkScrollHeader);

  return (
    <>
      <header>
        <Container>
          <nav className={styles.navbar}>
            <Scroll to='main' className={show ? styles.navbar__logo + " " + styles.navbar__logo_active : styles.navbar__logo} smooth={true}>
                <div className={styles.header__img} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            </Scroll>
            <div className={styles.menu__icon_new} onClick={handleClick}>
              <img src={burger} alt="burger" />
            </div>
            <ul 
            className={click ? styles.nav__menu + " " + styles.active : styles.nav__menu}
            >
            <li>
              <img src={closeIcon} alt="closeIcon" onClick={closeMobileMenu}/>
            </li>
            { MenuItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <Scroll
                  to={item.path} 
                  className = {styles.nav__links}
                  onClick={closeMobileMenu}
                  smooth={true}
                  activeClass={styles.active}
                  spy={true}
                >
                  { item.title }
                </Scroll>
              </li>
            ))}
            <li className={styles.nav__item}>
              <Scroll to='appoint' smooth={true} className={styles.header__appointment}  onClick={closeMobileMenu}>
                Записаться на консультацию
              </Scroll>
            </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
