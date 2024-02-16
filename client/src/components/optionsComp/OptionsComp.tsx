import styles from './_OptionsComp.module.scss'
import Moon from '../../assets/svg/routine_FILL0_wght400_GRAD0_opsz24.svg'


const OptionsComp = () => {
  return (
    <div className={styles.container}>
        <p className={styles.enEs}>EN</p>
        <img
            src={Moon}
            alt='moon'
            className={styles.moon}
        />
    </div>
  )
}

export default OptionsComp
