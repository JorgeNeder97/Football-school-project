import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { GaleriaNoticias } from '#components/GaleriaNoticias/GaleriaNoticias.js';
import video from '#assets/video.mp4';
import { Carrusel } from '#components/Carrusel/Carrusel.js';


export const Home = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Carrusel />
                <div className={styles.videoContainer}>
                    <video className={styles.video} loop={true} muted={true} autoPlay={true}>
                        <source src={video}/>
                    </video>
                    <h3 className={styles.videoTitulo}>FORJANDO LEYENDAS</h3>
                </div>
                <div className={styles.categorias}>
                    <h3 className={styles.categoriasTitulo}>Categorías Participantes</h3>
                    <Link to="">2011</Link>
                    <Link to="">2012</Link>
                    <Link to="">2013</Link>
                    <Link to="">2014</Link>
                    <Link to="">2015</Link>
                    <Link to="">2016</Link>
                    <Link to="">2017</Link>
                    <Link to="">2018</Link>
                </div>
                <GaleriaNoticias />

            </div>
        </>
    );
};
