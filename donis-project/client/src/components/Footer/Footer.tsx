import styles from './Footer.module.css';
import logo from '#assets/logo.png';
import logoHorizontal from '#assets/donis.png';
import logoDev from '#assets/MarcaPersonal.png';


export const Footer = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.logosContainer}>
                    <img className={styles.logo} src={logo} alt='Jorge Donis' />
                    <img className={styles.logoHorizontal} src={logoHorizontal} alt='Jorge Donis' />
                </div>
                <div className={styles.redesContainer}>
                    <p>Nuestras Redes</p>
                    <div className={styles.redes}>
                        <a href="https://www.facebook.com/EscueladefutbolInfantil.Jorgedonis?locale=es_LA" target="_blank"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                        <a href="https://www.instagram.com/jorge_donis2013/" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>
                
                <div className={styles.developedByContainer}>
                    <p className={styles.developedBy}>Developed by</p>
                    <img src={logoDev} alt="Desarrollador" className={styles.logoMind} />
                </div>
            </div>
        </>
    )
}
