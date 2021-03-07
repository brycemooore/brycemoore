import React from 'react'
import personalLogo from '../images/personsal_logo.png';
import '../App.css'

export default function Nav() {
    return (
        <ul className="siteNav" style={{listStyle: 'none'}}>
            <li>
                <h2><a href="#about-section">About</a></h2>    
            </li>
            <li>
                <h2><a>Skills</a></h2>
            </li>
            <li>
                <h2><a>Projects</a></h2>
            </li>
            <li>
                <h2><a>Links</a></h2>
            </li>

        </ul>
    )
}
