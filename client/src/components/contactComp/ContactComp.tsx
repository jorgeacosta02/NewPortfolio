import styles from './_ContactComp.module.scss'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';

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


const ContactComp = () => {

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

    return (
        <div>
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
        <div className={backColor}></div>
        </div>
    )
}

export default ContactComp
