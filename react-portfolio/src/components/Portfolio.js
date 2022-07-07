import React, {useState} from 'react';
import NavTabs from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Portfolio() {

    const [currentPage, handlePageChange] = useState('About');
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
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Portfolio;