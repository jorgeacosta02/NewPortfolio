import styles from './_SkillsComp.module.scss'
import { useSelector } from 'react-redux'
import { selectMoonState } from '../../redux/slices/moonSlice'
import { selectLangState } from '../../redux/slices/langSlice'
import html from '../../assets/images/skills/HTML.png'
import css from '../../assets/images/skills/CSS.png'
import sass from '../../assets/images/skills/sass03.png'
import javascript from '../../assets/images/skills/javascript.png'
import typescript from '../../assets/images/skills/Typescript.svg.png'
import SliderComp from '../sliderComp/SliderComp'
import react from '../../assets/images/skills/React js.png'
import redux from '../../assets/images/skills/HTML.png'
import reduxToolkit from '../../assets/images/skills/HTML.png'
import node from '../../assets/images/skills/node-4.jpg'
import express from '../../assets/images/skills/Explress1.png'
import sequelize from '../../assets/images/skills/Sequelize.png'
import postgres from '../../assets/images/skills/PosgreSQL2.png'
import git from '../../assets/images/skills/git-1.png'
import github from '../../assets/images/skills/GitHub-Mark.png'
import scrum from '../../assets/images/skills/scrum.png'


const SkillsComp = () => {

  const moonState = useSelector(selectMoonState);

  const containerColor = `${styles.container} ${moonState.moon ? styles.containerWhite : ''}`;

  const projectWhite = `${styles.project} ${moonState.moon ? styles.projectWhite : ''}`;

  const langState = useSelector(selectLangState).lang;


  return (
    <div className={containerColor}>
      <SliderComp/>
      <div className={styles.skillsContainer}>
        <img
          src={html}
          alt="HTML Logo"
          className={styles.skillLogo}
        />
        <img
          src={css}
          alt="CSS Logo"
          className={styles.skillLogo}
        />
        <img
          src={sass}
          alt="Sass Logo"
          className={styles.skillLogo}
        />
        <img
          src={javascript}
          alt="Javascript Logo"
          className={styles.skillLogo}
        />
        <img
          src={typescript}
          alt="Typescript Logo"
          className={styles.skillLogo}
        />
        <img
          src={react}
          alt="React Logo"
          className={styles.skillLogo}
        />
        <img
          src={redux}
          alt="Redux Logo"
          className={styles.skillLogo}
        />
        <img
          src={reduxToolkit}
          alt="Redux Toolkit Logo"
          className={styles.skillLogo}
        />
        <img
          src={node}
          alt="Node Logo"
          className={styles.skillLogo}
        />
        <img
          src={express}
          alt=" Logo"
          className={styles.skillLogo}
        />
        <img
          src={sequelize}
          alt="Sequelize Logo"
          className={styles.skillLogo}
        />
        <img
          src={postgres}
          alt="Postgres Logo"
          className={styles.skillLogo}
        />
        <img
          src={git}
          alt="Git Logo"
          className={styles.skillLogo}
        />
        <img
          src={github}
          alt="Github Logo"
          className={styles.skillLogo}
        />
        <img
          src={scrum}
          alt="Scrum Logo"
          className={styles.skillLogo}
        />
      </div>
    </div>
  )
}

export default SkillsComp
