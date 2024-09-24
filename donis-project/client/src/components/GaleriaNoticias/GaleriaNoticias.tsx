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
                            titulo={"Torneo Changuito 2024"}
                            adelanto={"Un hoy bien vivido hace que cada ayer sea un sueño de felicidad y cada mañana una visión de esperanza"}
                            imagen={"noticia1.jpg"}
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={2} 
                            titulo={"Entrenadores que inspiran"} 
                            adelanto={"La clave del éxito en el fútbol infantil: entrenadores que inspiran. Los buenos entrenadores en equipos juveniles moldean futuros atletas y personas."} 
                            imagen={"noticia2.jpg"} 
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={3} 
                            titulo={"Un empate para recordar"} 
                            adelanto={"Unión Santiago empató contra la Escuelita Jorge Donis este viernes 20 de Septiembre tras un partido lleno de emociones"} 
                            imagen={"noticia3.jpg"} 
                        />
                    </div>
                    <div className={styles.noticia}>
                        <Noticia 
                            id={4} 
                            titulo={"La Escuelita Jorge Donis triunfa en el Torneo Changuito 2023"} 
                            adelanto={"La Escuelita Jorge Donis se coronó campeona del Torneo Changuito 2023 con una actuación memorable."} 
                            imagen={"noticia4.jpg"} 
                        />
                    </div>
                </div>

                {/* <div className={styles.bottomDivider}></div> */}
            </div>
        </>
    );
};
