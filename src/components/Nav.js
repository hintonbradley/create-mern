import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-links nav-links-left">
                <Link to='/' >
                    <li>Home</li>
                </Link>
            </ul>
            <ul className="nav-links nav-links-right">
                <Link to='/intro'>
                    <li>Intro</li>
                </Link>
                <Link to='/setup'>
                    <li>Basic Setup</li>
                </Link>
                <Link to='/google-auth'>
                    <li>oAuth</li>
                </Link>
               
            </ul>
        </nav>
    );
}

export default Nav;