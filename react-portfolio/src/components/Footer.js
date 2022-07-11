import React from 'react';

const Footer = () => {

    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/lucaspittam'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/lucas-pittam-3209bb22b/'
        }
    ];

    return (
        <footer className="footer">
            <ul className="nav-list footer-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>

    );
}

export default Footer; 
