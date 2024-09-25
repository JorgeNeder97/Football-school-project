import { Routes, Route } from 'react-router-dom';
import { NavBar } from '@components/NavBar/NavBar';
import { Home } from '@pages/Home/Home';
import { Footer } from '#components/Footer/Footer.js';


export const MainApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
};
