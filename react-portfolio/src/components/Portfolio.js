import React, {useState} from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        switch (currentPage) {
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Portfolio;