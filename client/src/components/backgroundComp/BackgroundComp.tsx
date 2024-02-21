import styles from './_BackgroundComp.module.scss'
import SliderComp from '../sliderComp/SliderComp'
import { useSelector } from 'react-redux'
import { selectMoonState } from '../../redux/slices/moonSlice'
import { selectLangState } from '../../redux/slices/langSlice'


const BackgroundComp = () => {

    const moonState = useSelector(selectMoonState);

    const containerColor = `${styles.container} ${moonState.moon ? styles.containerWhite : ''}`;
  
    const projectWhite = `${styles.project} ${moonState.moon ? styles.projectWhite : ''}`;
  
    const langState = useSelector(selectLangState).lang;


  return (
    <div className={containerColor}>
      <SliderComp/>
      
    </div>
  )
}

export default BackgroundComp
