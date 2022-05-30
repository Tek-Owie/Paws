import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function NavBar ()
{
    return (
        <nav className="navbar">
            <div className="brand-name">
                Paws
            </div>
            <ul>
                <li>
                    <NavLink to="#">Home</NavLink>
                    <NavLink to="#">About</NavLink>
                    <NavLink to="#">Catalogue</NavLink>
                    <NavLink to="#">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;