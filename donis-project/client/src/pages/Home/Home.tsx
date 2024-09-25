import styles from './Home.module.css';
import { GaleriaNoticias } from '#components/GaleriaNoticias/GaleriaNoticias.js';
import video from '#assets/video.mp4';
import { Carrusel } from '#components/Carrusel/Carrusel.js';


export const Home = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.videoContainer}>
                    <video className={styles.video} loop={true} muted={true} autoPlay={true}>
                        <source src={video}/>
                    </video>
                    <h3 className={styles.videoTitulo}>FORJANDO LEYENDAS</h3>
                </div>
                <div className={styles.torneoChanguito}>
                    <h3 className={styles.torneoTitulo}>Torneo Changuito</h3>
                </div>
                <Carrusel />
                <GaleriaNoticias />
            </div>
        </>
    );
};
