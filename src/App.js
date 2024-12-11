import './style/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import Project from './pages/project/Project';
import ScrollToTop from './utils/scrollToTop';



function App() {
    return (
        <>
            {/* Router - Маршрутизатор */}
            <Router>
                <ScrollToTop />
                <Navbar />

                <Routes>
                    {/* Route - Маршрут */}
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<Project />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;
