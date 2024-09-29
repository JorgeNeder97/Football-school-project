import styles from "./NavBar.module.css";
import logo from "#assets/logo.png";
import useViewport from "#hooks/useViewport.js";
import { Link } from "react-router-dom";
import { NavBarMobile } from "#components/NavBarMobile/NavBarMobile.js";

export const NavBar = () => {

    const { width } = useViewport();

    return (
        <>
            <div className={styles.mainContainer}>
                <Link to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Donis F.C." className={styles.logo} />
                </Link>
                <div className={styles.linksContainer}>
                    <Link to="" className={styles.links}>Torneo</Link>
                    <Link to="" className={styles.links}>Noticias</Link>
                    <Link to="" className={styles.links}>Contacto</Link>
                    <Link to="" className={styles.links}>Sobre Nosotros</Link>
                    <Link to="" className={styles.links}>{width < 1260 ? 'Galería' : 'Galería de Fotos'}</Link>
                </div>
            </div>
            <NavBarMobile />
        </>
    );
};
