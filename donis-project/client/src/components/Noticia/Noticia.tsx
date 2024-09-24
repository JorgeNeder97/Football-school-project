import styles from './Noticia.module.css';
import { News } from '#models/News.js';
import { Link } from 'react-router-dom';



export const Noticia: React.FC<News> = ({ id, titulo, adelanto, imagen }) => {

    const imagenUrl = `/${imagen}`;


    return (
        <>
            <div className={styles.mainContainer} key={id}>
                <Link to="" className={styles.imagenAdelantoContainer}>
                    <img className={styles.image} src={imagenUrl} />
                    <div className={styles.tituloAdelantoContainer}>
                        <h3 className={styles.titulo}>{titulo}</h3>
                        <p className={styles.adelanto}>{adelanto}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
