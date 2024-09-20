import styles from './NavBarMobile.module.css';
import { Link } from "react-router-dom";
import logoHorizontal from '@assets/donis.png';
import logo from '@assets/logo.png';
import marcaPersonal from '@assets/marcaPersonal.png';

export const NavBarMobile = () => {
    return (
        <>
            <div className={styles.mobileContainer}>
                <div className={styles.logosContainer}>
                    <img src={logo} alt="" className={styles.logo} />
                    <img src={logoHorizontal} alt="" className={styles.logoTexto}/>
                </div>
                <label className={styles.hamburgerMenuButton}>
                    <input type="checkbox" />
                </label>
                <aside className={styles.sideBar}>
                    <div className={styles.linksContainer}>
                        <Link to="" className={styles.links}>Torneo</Link>
                        <Link to="" className={styles.links}>Noticias</Link>
                        <Link to="" className={styles.links}>Auspiciantes</Link>
                        <Link to="" className={styles.links}>Contacto</Link>
                        <Link to="" className={styles.links}>Galería de Fotos</Link>
                    </div>
                    <div className={styles.developedBy}>
                        <p className={styles.developedByText}>Developed By</p>
                        <img src={marcaPersonal} alt="developedBy JorgeNeder97" className={styles.developedByLogo} />
                    </div>
                </aside>
            </div>
        </>
    );
};
