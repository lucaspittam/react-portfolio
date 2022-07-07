import React from 'react';

function NavTabs(props) {
    const tabs = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <ul className="nav-list">
            {tabs.map(tab => (
                <li className="list-item" key={tab}>
                    <a href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? 'navActive' : 'nav-link'}>
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavTabs;