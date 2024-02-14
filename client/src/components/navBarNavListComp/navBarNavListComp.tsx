import { NavLink } from "react-router-dom";
import styles from './_navBarNavListComp.module.scss';
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

  return (
    <ul className={styles.navList} >
        <li onClick={handleClick} >
          <NavLink
            to="/" 
            className={styles.navLink} 
           >Inicio</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="/company" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="/appointment" 
            className={styles.navLink} 
           >Turnos online</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="/equipment" 
            className={styles.navLink} 
           >Equipos</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="/jobs" 
            className={styles.navLink} 
           >Trabajos</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>

        <div onClick={handleClick} >
          <NavLink
            to="/worker-login" 
            className={styles.intranet} 
           >Intranet</NavLink>
        </div>
      </ul>
  )
}

export default NavBarNavListComp
