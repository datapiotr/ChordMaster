import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss'

function Navigation() {
    return (
        <div className='navigation'>
            <div className='logo'>
                <img alt='logo' src={require('../img/logo_chord_master2.png')} />
            </div>
            <ul className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/chordFinder">Chord Finder</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;