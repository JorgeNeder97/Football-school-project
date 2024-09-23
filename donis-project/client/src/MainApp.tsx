import { Routes, Route } from 'react-router-dom';
import { NavBar } from '@components/NavBar/NavBar';
import { Home } from '@pages/Home/Home';


export const MainApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </>
    )
};
