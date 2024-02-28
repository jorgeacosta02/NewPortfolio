import styles from './_MessageComp.module.scss'
import { useSelector } from 'react-redux'
import { selectLangState } from '../../redux/slices/langSlice'
import { selectMoonState } from '../../redux/slices/moonSlice'




const MessageComp = () => {

    const moonState = useSelector(selectMoonState).moon;

    const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;

    // const projectWhite = `${styles.project} ${moonState ? styles.projectWhite : ''}`;

    const langState = useSelector(selectLangState).lang;

    return (
        <div className={containerColor}>
            <div className={styles.dataContainer}>
                <p className={styles.text}>
                    {langState === 'es' ? 'Mensaje' : 'Message'}
                </p>
            </div>
        </div>
    )
}

export default MessageComp
