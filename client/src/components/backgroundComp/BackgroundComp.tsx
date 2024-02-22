import styles from './_BackgroundComp.module.scss'
import SliderComp from '../sliderComp/SliderComp'
import { useSelector } from 'react-redux'
import { selectMoonState } from '../../redux/slices/moonSlice'
import { selectLangState } from '../../redux/slices/langSlice'
// import { NavLink } from 'react-router-dom'
import soyHenry from '../../assets/images/background/SoyHenry.jpg'
import unsj from '../../assets/images/background/UNSJ.jpg'
import efset from '../../assets/images/background/Efset.jpg'


const BackgroundComp = () => {

    const moonState = useSelector(selectMoonState);

    const containerColor = `${styles.container} ${moonState.moon ? styles.containerWhite : ''}`;
  
    const backgroundWhite = `${styles.background} ${moonState.moon ? styles.backgroundWhite : ''}`;
  
    const langState = useSelector(selectLangState).lang;


  return (
    <div className={containerColor}>
        <SliderComp/>
        <ul className={styles.backgroundContainer}>
            <li
              key="1"
              className={backgroundWhite}
            >
              <img
                src={soyHenry}
                alt="SoyHenry image"
              />
              <div className={styles.backgroundTitleContainer}>
                <h5 className={styles.backgroundTitle}>
                    {langState ?
                    'Bootcamp SoyHenry' :
                    'Bootcamp SoyHenry'}
                </h5>
                {/* <h5 className={styles.backgroundTitle}>
                    {langState ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5> */}
              </div>
              <p
                className={styles.backgroundDescription}
              >
                {langState ?
                ' Bootcamp de programación web con una carga horaria de +800 horas de teoría y práctica, en cual se realiza una aplicación de forma individual y otra de forma grupal con tecnología scrum. El título obtenido es DESARROLLADOR WEB FULLSTACK.' :
                'Web programming bootcamp with a workload of +800 hours of theory and practice, in which an application is carried out individually and another in a group with scrum technology. The title obtained is FULLSTACK WEB DEVELOPER.'}
              </p>
              {/* <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="#"
                  target="_blank"
                >
                  {langState ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/triar-detail"
                >
                  {langState ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink>
              </div> */}
            </li>
            <li
              key="3"
              className={backgroundWhite}
            >
              <img
                src={efset}
                alt="Efset image"
              />
              <div className={styles.backgroundTitleContainer}>
                <h5 className={styles.backgroundTitle}>
                    {langState ?
                    'Test de Inglés de reconocimiento internacional' :
                    'Internationally recognized English test'}
                </h5>
                {/* <h5 className={styles.backgroundTitle}>
                    {langState ?
                    '(Aplicación académica de equipo)' :
                    '(Academic team application)'}
                </h5> */}
              </div>
              <p
                className={styles.backgroundDescription}
              >
                {langState ?
                'Realicé el test de inglés en Efset obteniendo una calificación de 48/100 en la sección "listening" quedando ubicado en la categoría B1, y 67/100 en la sección "reading" quedando ubicado en la categoría C1, lo que me da un promedio de categoría B2.' :
                'I took the English test at Efset obtaining a score of 48/100 in the "listening" section, placing me in category B1, and 67/100 in the "reading" section, placing me in category C1, which gives me an average of category B2.'}
              </p>
              {/* <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://craftbeershop.vercel.app/"
                  target="_blank"
                >
                  {langState ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/craftbeer-detail"
                >
                  {langState ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink>
              </div> */}
            </li>
            <li
              key="2"
              className={backgroundWhite}
            >
              <img
                src={unsj}
                alt="UNSJ image"
              />
              <div className={styles.backgroundTitleContainer}>
                <h5 className={styles.backgroundTitle}>
                    {langState ?
                    'Universidad Nacional de San Juan' :
                    'National University of San Juan'}
                </h5>
                {/* <h5 className={styles.backgroundTitle}>
                    {langState ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5> */}
              </div>
              <p
                className={styles.backgroundDescription}
              >
                {langState ?
                'Cursé la carrera de Licenciatura en Administración de empresas, carrera universitaria de cinco años de duración, llegando a aprobar las materias de tercer año.' :
                "I completed a Bachelor's degree in Business Administration, a five-year university degree, passing the third year subjects."}
              </p>
              {/* <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://page-in-progress.netlify.app/"             target="_blank"
                >
                  {langState ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/exploservice-detail"
                >
                  {langState ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink>
              </div> */}
            </li> 
        </ul>
    </div>
  )
}

export default BackgroundComp
