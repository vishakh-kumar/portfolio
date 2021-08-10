import React from "react";
import "../../../../node_modules/bulma/bulma.sass";

const NavbarRight = () => {
    return (
        <div className="navbar-end navRight">
            <a href="#projects" className="navbar-item">
                Projects
            </a>

            <a href="#aboutMe" className="navbar-item navMiddle">
                About Me
            </a>
            <a href="#" className="navbar-item">
                Contact
            </a>
        </div>
    );
};

export default NavbarRight;
