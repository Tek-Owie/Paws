import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

export default function NavBar ()
{
    return (
        <nav className="navbar">
            <div className="brandname">
                Paws
            </div>
            <ul className="navlinks">
                <li>         
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/catalogue">Catalogue</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}