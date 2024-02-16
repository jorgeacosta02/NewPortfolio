import { NavLink } from "react-router-dom";
import styles from './_NavBarNavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectMenuState, falseMenu } from "../../redux/slices/menuSlice";
import { getDataFromLocalStorage } from "../localStorageComp/LocalStorageComp";


const NavBarNavListComp = () => {

  const accessLogin = getDataFromLocalStorage('accessLogin');
  console.log('user in navBarNavList:', accessLogin);
  const userId = accessLogin?.user?.id;
  console.log('userId en NavBarNavListComp: ', userId);
  // const userAuth = useSelector(selectUserAuth); 
  // const userAuthId = userAuth?.data?.user?.id;
  // console.log(userAuth)
  
  // si utilizo useSelector con menuReducer no necesito importarlo
  const menuCompleteReducer = useSelector((state: any) => state.menu.menu);
  // si lo utilizo con la slice separada, sí necesito importarlo.
  const menuReducer:any = useSelector(selectMenuState)

  console.log('menuCompleteReducer: ', menuCompleteReducer)

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch( falseMenu() );
  };

  const navListStyles = `${styles.navList} ${menuReducer.menu ? styles.show : ''}`;

  return (
    <ul className={navListStyles} >

      <li
        className={styles.li}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
      </li>
      <li
        className={styles.li}
        onClick={handleClick}
      >
        <h3>EN</h3>
      </li>
      <li
        className={styles.li}
        onClick={handleClick}
      >
        <NavLink
          to="/"
          className={styles.navLink} 
        >
          Inicio
        </NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/about" 
          className={styles.navLink} 
          >Sobre Mi</NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/projects" 
          className={styles.navLink} 
          >Proyectos</NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/skills" 
          className={styles.navLink} 
          >Tecnologías</NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/background" 
          className={styles.navLink} 
          >Formación</NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/contact" 
          className={styles.navLink} 
          >Contacto</NavLink>
      </li>
    </ul>
  )
}

export default NavBarNavListComp
