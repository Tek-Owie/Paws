import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer ()
{
    return (
        <footer>
            <div className="footer">
                <div className="footer-brandname">
                    <h1>
                        paws
                    </h1>
                    <ul>
                        <li>
                            <Link to="/" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalogue" >
                                Catalogue
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <ul>
                        <li>
                            <p>
                                123 Ashton Drive, San Francisco
                            </p>
                        </li>
                        <li>
                            <p>
                                (1) 456 1227
                            </p>
                        </li>
                        <li>
                            <p>
                                44452144
                            </p>
                        </li>
                        <li>
                            <p>
                                info@paws.cute
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="https://instagram.com">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://pinterest.com">
                                Pinterest
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}