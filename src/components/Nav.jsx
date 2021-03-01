import React from 'react'
import personalLogo from '../images/personsal_logo.png';
import '../App.css'

export default function Nav() {
    return (
        <nav className="siteNav">
            <img src={personalLogo} alt="Bryce Moore"/>
            <h2>Hello</h2>
        </nav>
    )
}
