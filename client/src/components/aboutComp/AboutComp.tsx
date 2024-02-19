import styles from './_AboutComp.module.scss'
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
// Other images
import ProfileImg from '../../assets/images/profile/Profile.jpg'


const AboutComp = () => {
  
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

  const backColor = `${styles.background} ${moonState.moon ? styles.bckgndWhite : ''}`;
  
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

        {/* Comment */}
        <div className={styles.commentContainer}>
          <p className={styles.comment}>
            {langState ?
            'Dedicación, compromiso, esfuerzo, responsabilidad, comunicación y colaboración pienso que son cualidades indispensables para alcanzar cualquier objetivo.' :
            'Dedication, commitment, effort, responsibility, communication and collaboration I think are essential qualities to achieve any goal.'
          }
            </p>
            </div>

        {/* Main data container */}
        <div className={styles.dataContainer}>
          <img
              src={ProfileImg}
              className={styles.profileImg}
          />
          <div className={styles.data}>
            <h4 className={styles.about}>
              {langState ? "Sobre mí" : "About me"}
            </h4>
            <p
              className={styles.text}
            >
              {langState ? 
                'Mi nombre es Jorge Acosta, vivo en la Provincia de San Juan, Argentina, tengo 50 años. En cuanto a lo laboral, comencé a buscar una alternativa con la que me sintiera más a gusto, me hablaron sobre programación y me interesó mucho, ya que siempre me sentí cómodo trabajando con una computadora. Empecé de forma autodidacta, hasta que decidí inscribirme en el bootcamp de SoyHenry que consta de 800 horas de trabajo teórico-práctico, en el cual realicé un proyecto individual y participé de uno grupal. Las tecnologías usadas incluyen HTML, CSS, Javascript, Typescript, React, Redux, NodeJS, Express, Sequelize y Postgres.' 
                : 'My name is Jorge Acosta, I live in the Province of San Juan, Argentina, I am 50 years old. As for work, I started looking for an alternative that I felt more comfortable with, they talked to me about programming and I was very interested, since I always felt comfortable working with a computer. I started self-taught, until I decided to enroll in the SoyHenry bootcamp, which consists of 800 hours of theoretical-practical work, in which I carried out an individual project and participated in a group project. The technologies used include HTML, CSS, Javascript, Typescript, React, Redux, NodeJS, Express, Sequelize and Postgres.'}
            </p>
            <p
              className={styles.text}
            >
              {langState ? 
                'En mi juventud cursé la carrera de Lic. administración de empresas, llegando a aprobar las materias de tercer año.' 
                : 'In my youth I studied a degree in business administration, passing the third year subjects.'}
            </p>
            <p
              className={styles.text}
            >
              {langState ? 
                'Mi objetivo a corto plazo es encontrar la posibilidad de aplicar mis conocimientos como aporte a una empresa, me gustaría formar parte de un equipo de trabajo con el cual interactuar y crecer en el desarrollo de mis conocimientos y habilidades.' 
                : 'My short-term goal is to find the possibility of applying my knowledge as a contribution to a company. I would like to be part of a work team with which I can interact and grow in the development of my knowledge and skills.'}
            </p>
            <p
              className={styles.text}
            >
              {langState ? 
                'En lo personal, soy divorciado, con dos hijos adolescentes, siempre me gustó la actividad física, y la música como hobby.' 
                : 'Personally, I am divorced, with two teenage children, I always liked physical activity, and music as a hobby.'}
            </p>
          </div>
        </div>
    </div>
  );
}

export default AboutComp;