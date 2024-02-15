import { useState } from 'react';
import styles from './_NavBarLogoComp.module.scss';

const NavBarLogoComp = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const onAnimationEnd = () => {
        setAnimationComplete(true);
    };

    return (
        <div className={styles.container}>
            <h3 className={`${styles.logo} ${animationComplete && styles.animationComplete}`} onAnimationEnd={onAnimationEnd}>
               Portafolio
            </h3>
        </div>
    );
}

export default NavBarLogoComp;