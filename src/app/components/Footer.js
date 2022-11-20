import React from "react";
import "../../../node_modules/bulma/bulma.sass";
import "../../App.scss";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <a href="#top">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <div className="footerText">
                <p>
                    Designed By <i class="far fa-copyright" />
                    Vishakh
                </p>
            </div>
            <div className="icons">
                <a
                    href="https://github.com/vishakh-kumar"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/vishakh-kumar/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin" />
                </a>
                <a
                    href="https://www.instagram.com/vishakh_kumar/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-instagram" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
