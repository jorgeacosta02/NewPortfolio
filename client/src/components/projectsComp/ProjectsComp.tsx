import styles from './_ProjectsComp.module.scss'
import triarLogo from '../../assets/images/logos&Brands/logo.png'


const ProjectsComp = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.mainTitle}>My projects</h2>
        <ul className={styles.ul}>
            <li key="1">
                <h3 className={styles.projectTitle}>
                    Clínica Triar
                </h3>
                <div className={styles.projDataContainer}>
                    <img src={triarLogo} alt="Triar Logo" />
                    <p className={styles.projectDescription}>
                      Aplicación para una clínica kinesiológica que debe mostrar aspectos de ésta como instalaciones, especialidades, personal, etc., y funcionalidades como el manejo del sistema de turnos, registro de historias clínicas y chats privados entre profesionales y pacientes.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ProjectsComp
