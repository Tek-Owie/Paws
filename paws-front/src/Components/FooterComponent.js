import React from "react";
import { a } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-div">
            <div className="brand">
                <h3>Paws</h3>
            </div>
            <div className="contact">
                <h4>
                    Get in touch
                </h4>
                <h4>
                    MON-FRI <br/>
                    8AM - 5PM
                </h4>
                <li>
                    <a href="https://intsgram.com">instagram</a>
                </li>
                <li>
                    <a href="https://facebook.com">facebook</a>
                </li>
                <li>
                    <a href="https://pinterest.com">pinterest</a>
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
                <h3>Explore</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Footer;