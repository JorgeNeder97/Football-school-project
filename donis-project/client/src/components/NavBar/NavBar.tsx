import styles from "./NavBar.module.css";
import logo from "@assets/logo.png";
import logoHorizontal from '@assets/donis.png';
import { Link } from "react-router-dom";
import { NavBarMobile } from "@components/NavBarMobile/NavBarMobile";

export const NavBar = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Donis F.C." className={styles.logo} />
                    <img src={logoHorizontal} alt="" className={styles.logoTexto} />
                </div>
                <div className={styles.linksContainer}>
                        <Link to="" className={styles.links}>Torneo</Link>
                        <Link to="" className={styles.links}>Noticias</Link>
                        <Link to="" className={styles.links}>Auspiciantes</Link>
                        <Link to="" className={styles.links}>Contacto</Link>
                        <Link to="" className={styles.links}>Galería de Fotos</Link>
                </div>
            </div>
            <NavBarMobile />
        </>
    );
};
