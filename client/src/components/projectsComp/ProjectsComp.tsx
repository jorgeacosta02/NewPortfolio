import styles from './_ProjectsComp.module.scss'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectLangState } from '../../redux/slices/langSlice';

// Importa tus imágenes
import img01 from '../../assets/images/slider/code01.jpg';
import img02 from '../../assets/images/slider/laptop01.jpg';
import img03 from '../../assets/images/slider/code02.jpg';
import img04 from '../../assets/images/slider/laptop02.jpg';
import img05 from '../../assets/images/slider/code03.jpg';
import img06 from '../../assets/images/slider/laptop03.jpg';
import img07 from '../../assets/images/slider/code04.jpg';
import img08 from '../../assets/images/slider/laptop04.jpg';
import img09 from '../../assets/images/slider/code05.jpg';
import img10 from '../../assets/images/slider/laptop05.jpg';
import img11 from '../../assets/images/slider/code06.jpg';
import img12 from '../../assets/images/slider/laptop06.jpg';

import triarLogo from '../../assets/images/logos&Brands/logo.png'
import exploserviceLogoBrand from '../../assets/images/logos&Brands/ExploserviceLogoBrand.png'


const ProjectsComp = () => {

  const moonState = useSelector(selectMoonState);

  console.log(moonState)

  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 12);
    }, 2000); // Cambia a la siguiente imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  console.log(currentSlide)

  // Define un arreglo con las imágenes
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12
  ];

  const backColor = `${styles.background} ${moonState.moon ? styles.backWhite : ''}`;
  
  const containerColor = `${styles.container} ${moonState.moon ? styles.containerWhite : ''}`;

  const langState = useSelector(selectLangState).lang;

  return (
    <div className={containerColor}>

      {/* Background slider */}
      <div className={styles.slider}>
            {images.map((image, index) => (
            <div
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                key={index}
                >
                <img
                src={image}
                alt=""
                className={styles.img}
                />
            </div>
            ))}
        </div>

        {/* Background slider cover */}
        <div className={backColor}></div>

        {/* Page title */}
        <h3 className={styles.mainTitle}>
          {langState ? 'Mis proyectos' :'My projects'}
        </h3>

        {/* Projects */}
        <ul className={styles.projectsContainer}>
            <li
              key="1"
              className={styles.project}
            >
                <h5 className={styles.projectTitle}>
                    {langState ?
                    'Clínica Kinesiológica Triar' :
                    'Triar Kinesiology Clinic'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5>
                <div className={styles.projDataContainer}>
                    <img
                      src={triarLogo}
                      alt="Triar Logo"
                    />
                    <p
                      className={styles.projectDescription}
                    >
                      {langState ?
                      ' Aplicación para una clínica kinesiológica que debe mostrar aspectos de ésta como instalaciones, especialidades, personal, etc., y funcionalidades como el manejo del sistema de turnos, registro de historias clínicas y chats privados entre profesionales y pacientes.' :
                      'Application for a kinesiology clinic that must show aspects of it such as facilities, specialties, staff, etc., and functionalities such as management of the shift system, registration of medical histories and private chats between professionals and patients.'}
                    </p>
                </div>
            </li>
            <li
              key="1"
              className={styles.project}
            >
                <h5 className={styles.projectTitle}>
                    {langState ?
                    'Empresa de perforación y voladura' :
                    'Drilling and blasting company'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5>
                <div className={styles.projDataContainer}>
                    <img
                      src={exploserviceLogoBrand}
                      alt="Triar Logo"
                    />
                    <p
                      className={styles.projectDescription}
                    >
                      {langState ?
                      ' Aplicación para una empresa que presta servicios de perforación y voladura, muestra aspectos de la empresa como instalaciones, servicios, equipos, algunos trabajos, y como funciones debe permitir registrar el registro de partes diarios de producción e ingreso y egreso de insumos en almacenes, elaborando informres sobre esos temas.' :
                      'Application for a company that provides drilling and blasting services, shows aspects of the company such as facilities, services, equipment, some jobs, and as functions it must allow recording the record of daily production parts and entry and exit of supplies in warehouses, preparing inform about those topics.'}
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ProjectsComp
