import styles from './_MessageComp.module.scss'
import { useSelector } from 'react-redux'
import { selectMoonState } from '../../redux/slices/moonSlice'


const MessageComp = (props:any) => {

    const moonState = useSelector(selectMoonState).moon;
    const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;

    const message = props.data;

    return (
        <div className={containerColor}>
            <div className={styles.dataContainer}>
                <p className={styles.text}>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default MessageComp
