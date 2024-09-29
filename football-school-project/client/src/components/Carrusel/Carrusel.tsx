import { useState, useEffect } from 'react';
import styles from './Carrusel.module.css';
import { Link } from 'react-router-dom';

export const Carrusel = () => {
    const images = ['imagen.jpg', 'imagen2.jpg', 'imagen3.jpg'];
    const titles = ['', '', ''];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [title, setTitle] = useState(titles[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (index: number, images:string[], next: boolean = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? index < images.length - 1 : index > 0;
            const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
            setTitle(titles[nextIndex]);
        }, 500);
    }


    // const previous = () => {
    //     selectNewImage(selectedIndex, images, false);
    // }

    // const next = () => {
    //     selectNewImage(selectedIndex, images);
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 6000);
        return () => clearInterval(interval);
    }, [selectedImage]);

    return (
        <>
            <div className={styles.imageContainer}>
                <img
                    src={`/${selectedImage}`}
                    alt={selectedImage}
                    className={loaded ? styles.imageLoaded : styles.imageUnloaded}
                    onLoad={() => setLoaded(true)}
                />
                <div className={styles.titleContainer}><p className={styles.title}>{title}</p></div>
                {/* <Link to={link} className={styles.navLink}>Leer más</Link> */}
                <div className={styles.filtro}></div>
                <div className={styles.mainContainer}>
                    <h3 className={styles.categoriasTitulo}>Categorías Participantes</h3>
                        <Link to="" className={styles.link}>2011</Link>
                        <Link to="" className={styles.link}>2012</Link>
                        <Link to="" className={styles.link}>2013</Link>
                        <Link to="" className={styles.link}>2014</Link>
                        <Link to="" className={styles.link}>2015</Link>
                        <Link to="" className={styles.link}>2016</Link>
                        <Link to="" className={styles.link}>2017</Link>
                        <Link to="" className={styles.link}>2018</Link>
                    </div>
            </div>
        </>
    )
}
