import styles from './_HomeComp.module.scss'
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectLangState } from '../../redux/slices/langSlice';
import SliderComp from '../sliderComp/SliderComp';
import ProfileImg from '../../assets/images/profile/Profile.jpg'
import LinksComp from '../linksComp/LinksComp';


const HomeComp = () => {
  
  const moonState = useSelector(selectMoonState);
  
  const dataColor = `${styles.data} ${moonState.moon ? styles.dataWhite : ''}`;

  const langState = useSelector(selectLangState).lang;

  return (
    <div className={styles.container}>
      <SliderComp/>
        <div className={styles.dataContainer}>
          <div className={dataColor}>
            <h4 className={styles.hi}>
            {langState === 'es' ? "Hola Soy" : "Hi I'm"}
            </h4>
            <h2
              className={styles.name}
            >
              Jorge
            </h2>
            <h5
              className={styles.role}
            >
              {langState === 'es' ? 'Programador Web Full Stack' : 'Full Stack Web Developer'}
            </h5>
            <p
              className={styles.text}
            >
              {langState === 'es' ? 
                'Este es mi portafolio web, el cual muestra mis proyectos, habilidades y formación académica.' 
                : 'This is my web portfolio, which shows my projects, skills and academic training.'}
            </p>
          <LinksComp/>
          </div>
            <img
              src={ProfileImg}
              className={styles.profileImg}
            />
      </div>
      <div className={styles.shape}>
        <h4 className={styles.firstName}>Jorge</h4>
        <p className={styles.lastName}>ACOSTA</p>
      </div>
    </div>
  );
}

export default HomeComp;