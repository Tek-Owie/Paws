import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    <div className="footer-div">
        <div className="brand">
            
        </div>
        <div className="contact">
            <h4>
                Get in touch
            </h4>
            <h4>
                MON-FRI
                8AM - 5PM
            </h4>
            <li>
                <a href="https://intsgram.com">INSTAGRAM</a>
            </li>
            <li>
                <a href="https://facebook.com">FACEBOOK</a>
            </li>
            <li>
                <a href="https://pinterest.com">PINTREST</a>
            </li>
        </div>
        <div className="subscribe">
            <h3>
                join our mailing list
            </h3>
            <form action="submit">
                
            </form>
        </div>
        <div className="explore">
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
    </div>
}