import { useState, useEffect } from 'react';

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
import LinkedinImg from '../../assets/images/links/LinkedIn_icon.svg.png'
import GithubImg from '../../assets/images/skills/GitHub-Mark.png'
import FacebookImg from '../../assets/images/links/Facebook_icon_2013.svg.png'
import XImg from '../../assets/images/links/x logo.png'



const HomeComp = () => {
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

  return (
    <div className={styles.container}>
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
        <div className={styles.background}></div>
        <div className={styles.dataContainer}>
          <div className={styles.data}>
            <h4 className={styles.hi}>Hola soy</h4>
            <h2
              className={styles.name}
            >
              Jorge
            </h2>
            <h5
              className={styles.role}
            >
              Programador Web Full Stack
            </h5>
            <p
              className={styles.text}
            >
              Este es mi portafolio web, el cual muestra mis proyectos realizdos, habilidades técnicas y formación académica.
            </p>
            <div className={styles.linksContainer}>
              <a
                className={styles.linkImg}
                href="https://www.linkedin.com/in/jorge-acosta-de-le%C3%B3n-8934a4122/" target="_blank">
                <img
                  className={styles.linkImg}
                  src={LinkedinImg}/>
              </a>
              <a
                className={styles.linkImg}
                href="https://github.com/jorgeacosta02" target="_blank">
                <img
                  className={styles.linkImg}
                  src={GithubImg}/>
              </a>
              <a
                className={styles.linkImg}
                href="https://www.facebook.com/jorge.acostadeleon" target="_blank">
                <img
                  className={styles.linkImg}
                  src={FacebookImg}/>
              </a>
              <a
                className={styles.linkImg}
                href="https://twitter.com/JorgeA78789" target="_blank">
                <img
                  className={styles.linkImg}
                  src={XImg}/>
              </a>
            </div>
              <a
                className={styles.dwlResumeContainer}
                href="https://github.com/jorgeacosta02/Resume/raw/main/Jorge Acosta Resume.pdf" download="Mi_CV.pdf" target="_blank">
                <h4
                  className={styles.dwlResume}
                >Descargar CV</h4>
              </a>
          </div>
            <img
              src={ProfileImg}
              className={styles.profileImg}
            />
        </div>
    </div>
  );
}

export default HomeComp;














import styles from './_HomeComp.module.scss'



    <div className={styles.contenedor}>
        <div className={styles.fondo}></div>
        <div className={styles.contenido}>
            <h1>Título</h1>
            <p>Contenido</p>
        </div>
    </div>

