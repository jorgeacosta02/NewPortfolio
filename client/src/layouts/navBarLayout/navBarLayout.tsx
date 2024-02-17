import React, { useEffect, useState } from 'react';
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/NavBarMenuComp";
import styles from './_NavBarLayout.module.scss';
import NavBarOptionsComp from "../../components/navBarOptionsComp/NavBarOptionsComp";


const NavBarLayout: React.FC = () => {

  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setScrollingDown(currentScrollPosition > 0); // Cambio aquí, utilizando un valor fijo
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navBar} ${scrollingDown ? styles.scrollingDown : ''}`}>
      <NavBarLogoComp/>
      <NavBarOptionsComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

