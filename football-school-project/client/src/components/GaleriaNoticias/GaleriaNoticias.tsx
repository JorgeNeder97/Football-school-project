import styles from "./GaleriaNoticias.module.css";
import { Noticia } from "#components/Noticia/Noticia.js";

export const GaleriaNoticias = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.tituloPagina}>Últimas Noticias</h2>
                {/* <div className={styles.divider}></div> */}
                <div className={styles.noticiasContainer}>
                    <div className={styles.noticia}>
                        <Noticia
                            id={1}
                            titulo={"Noticia Uno"}
                            adelanto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                            imagen={"noticia1.jpg"}
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={2} 
                            titulo={"Noticia Dos"} 
                            adelanto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"} 
                            imagen={"noticia2.jpg"} 
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={3} 
                            titulo={"Noticia Tres"} 
                            adelanto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"} 
                            imagen={"noticia3.jpg"} 
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={4} 
                            titulo={"Noticia Cuatro"} 
                            adelanto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"} 
                            imagen={"noticia4.jpg"} 
                        />
                    </div>
                </div>

                {/* <div className={styles.bottomDivider}></div> */}
            </div>
        </>
    );
};
