import styles from './Home.module.css';
import { Carrusel } from '@components/Carrusel/Carrusel';


export const Home = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Carrusel />
            </div>
        </>
    );
};
