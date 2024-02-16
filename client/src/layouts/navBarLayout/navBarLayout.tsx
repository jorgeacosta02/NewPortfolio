import React from "react"
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/NavBarMenuComp";
import styles from './_NavBarLayout.module.scss';
import NavBarOptionsComp from "../../components/optionsComp/NavBarOptionsComp";


const NavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <NavBarLogoComp/>
      <NavBarOptionsComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

