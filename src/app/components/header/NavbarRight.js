import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import { Link } from "react-router-dom";

const NavbarRight = () => {
    return (
        <div className="navbar-end navRight">
            <a href="#projects" className="navbar-item">
                Projects
            </a>

            <a href="#aboutMe" className="navbar-item navMiddle">
                About Me
            </a>
            <Link to={`/contact`} className="navbar-item">
                Contact
            </Link>
        </div>
    );
};

export default NavbarRight;
