import styles from './MainApp.module.css';
import { NavBar } from '@components/NavBar/NavBar';


export const MainApp = () => {
    return (
        <>
            <NavBar />
            <div className={styles.mainContainer}>
                <h1>The Donis Project</h1>
            </div>
        </>
    )
};
