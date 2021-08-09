import React from "react";
import "../../../../node_modules/bulma/bulma.sass";

const NavbarLeft = () => {
    return (
        <div className="navbar-end navRight">
            <a href="#" className="navbar-item">
                Projects
            </a>
            <a href="#" className="navbar-item">
                About Me
            </a>
            <a href="#" className="navbar-item">
                Contact
            </a>
        </div>
    );
};

export default NavbarLeft;
