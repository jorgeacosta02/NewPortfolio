import styles from './_NavBarOptionsComp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoonState, toggleMoon } from '../../redux/slices/moonSlice';
import { selectLangState, setLang } from '../../redux/slices/langSlice';
import { setInLocalStorage } from '../localStorageComp/LocalStorageComp';


const NavBarOptionsComp = () => {

  const dispatch = useDispatch();

  const moonState = useSelector(selectMoonState).moon

  const moonHandler = () => {
    setInLocalStorage('mode','dark');
    return dispatch(toggleMoon())
  }

  const langState = useSelector(selectLangState).lang
  console.log(langState.lang)

  const langHandler = (e: any) => {
    const selectedLang = e.target.value;
    setInLocalStorage('lang', selectedLang)
    return dispatch(setLang(selectedLang))
  }

  const optionColor = `${styles.option} ${moonState ? styles.optionWhite : ''}`

  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`

  return (
    <div className={containerColor}>
      <div className={styles.optionContainer}>
        <svg 
          onClick={moonHandler}
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          className={optionColor}
        >
          <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/>
        </svg>
      </div>
      <div className={styles.optionContainer}>
        <svg 
          onClick={langHandler}
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
          className={optionColor}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z"/>
        </svg>
        {/* <h6 className={styles.lang}>
          {langState ? 'ES' : 'EN'}
        </h6> */}
        <select
                    className={styles.langSelect}
                    value={langState}
                    onChange={langHandler}
                >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
      </div>
    </div>
  );
}

export default NavBarOptionsComp;