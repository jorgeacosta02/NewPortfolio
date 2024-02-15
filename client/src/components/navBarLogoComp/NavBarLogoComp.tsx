import { useState } from 'react';
import styles from './_NavBarLogoComp.module.scss';

const NavBarLogoComp = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const onAnimationEnd = () => {
        setAnimationComplete(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={`${styles.logo} ${animationComplete && styles.animationComplete}`} onAnimationEnd={onAnimationEnd}>
                Portfolio
            </h1>
        </div>
    );
}

export default NavBarLogoComp;