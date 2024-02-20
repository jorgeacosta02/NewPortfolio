import styles from './_ProjectsComp.module.scss'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectLangState } from '../../redux/slices/langSlice';
import { NavLink } from 'react-router-dom';

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

import triarLogo from '../../assets/images/logos&Brands/TriarLogo.png'
import exploserviceLogoBrand from '../../assets/images/logos&Brands/ExploserviceLogoBrand.png'
import craftBeerLogo from '../../assets/images/logos&Brands/craftBeerLogo.jpg'
import videogamesImage from '../../assets/images/logos&Brands/Videogames.png'


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

        {/* Projects */}
        <ul className={styles.projectsContainer}>
            <li
              key="1"
              className={styles.project}
            >
              <img
                src={triarLogo}
                alt="Triar Logo"
              />
              <div className={styles.projectTitleContainer}>
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
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState ?
                ' Aplicación para una clínica kinesiológica, desarrollada de forma individual, la que debe mostrar aspectos de ésta como instalaciones, especialidades, personal, etc., y funcionalidades como el manejo del sistema de turnos, registro de historias clínicas y chats privados entre profesionales y pacientes.' :
                'Application for a kinesiology clinic, developed individually, which must show aspects of it such as facilities, specialties, staff, etc., and functionalities such as management of the shift system, registration of medical records and private chats between professionals and patients.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="#"
                  target="_blank"
                >
                  {langState ?
                  'Ir a la página':
                  'Go to the page'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/triar-detail"
                >
                  {langState ?
                  'Más sobre la página':
                  'More about the page'}
                </NavLink>
              </div>
            </li>
            <li
              key="2"
              className={styles.project}
            >
              <img
                src={exploserviceLogoBrand}
                alt="Exploservice Logo"
              />
              <div className={styles.projectTitleContainer}>
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
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState ?
                'Aplicación para una empresa que presta servicios de perforación y voladura, desarrollada de forma individual, la cual muestra aspectos de la empresa como instalaciones, servicios, equipos, algunos trabajos, y como funciones debe permitir registrar el registro de partes diarios de producción e ingreso y egreso de insumos en almacenes, elaborando informres sobre esos temas.' :
                'Application for a company that provides drilling and blasting services, developed individually, which shows aspects of the company such as facilities, services, equipment, some jobs, and as functions it must allow recording the registration of daily production and income parts and disbursement of supplies in warehouses, preparing reports on these topics.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://page-in-progress.netlify.app/"             target="_blank"
                >
                  {langState ?
                  'Ir a la página':
                  'Go to the page'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/exploservice-detail"
                >
                  {langState ?
                  'Más sobre la página':
                  'More about the page'}
                </NavLink>
              </div>
            </li> 
            <li
              key="3"
              className={styles.project}
            >
              <img
                src={craftBeerLogo}
                alt="CraftBeer Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    'Ecommerce de cervezas artesanales' :
                    'Craft beer ecommerce'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    '(Aplicación académica de equipo)' :
                    '(Academic team application)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState ?
                'Ecommerce de cervezas artesanales en el que puden registrarse tanto vendedores como compradores, incluye realizar operaciones de compra venta, pasarela de pagos, filtros de búsqueda, carrito de compras, manejo de stocks de productos, consultas de historiales de compra y venta, además de autenticación y autorización de roles.' :
                'Craft beer ecommerce in which both sellers and buyers can register, includes carrying out purchase and sale operations, payment gateway, search filters, shopping cart, product stock management, purchase and sale history queries, as well as authentication and role authorization.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://craftbeershop.vercel.app/"
                  target="_blank"
                >
                  {langState ?
                  'Ir a la página':
                  'Go to the page'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/craftbeer-detail"
                >
                  {langState ?
                  'Más sobre la página':
                  'More about the page'}
                </NavLink>
              </div>
            </li>
            <li
              key="4"
              className={styles.project}
            >
              <img
                src={videogamesImage}
                alt="Videogames Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    'Aplicación de carga y búsqueda de videojuegos' :
                    'Video game loading and searching application'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState ?
                    '(Aplicación académica individual)' :
                    '(Individual academic application)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState ?
                'Aplicación individual integradora del bootcamp SoyHenry, la que trabaja con una base de datos local y con datos de una API externa, permite filtrar y ordenar los videogames y cargar nuevos a la base de datos.' :
                'Individual application integrating the SoyHenry bootcamp, which works with a local database and with data from an external API, allows you to filter and sort the video games and upload new ones to the database.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://videogames-pi.netlify.app/"             target="_blank"
                >
                  {langState ?
                  'Ir a la página':
                  'Go to the page'}
                </a>
                <NavLink
                  className={styles.link}
                  to="/videogames-detail"
                >
                  {langState ?
                  'Más sobre la página':
                  'More about the page'}
                </NavLink>
              </div>
            </li>
        </ul>
    </div>
  )
}

export default ProjectsComp
