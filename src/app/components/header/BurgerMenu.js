import React from "react";
import { Link } from "react-router-dom";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const BurgerMenu = () => {
    return (
        <div className="links">
            <a href="#projects" className="link">
                Projects
            </a>
            <a href="#aboutMe" className="link">
                About Me
            </a>
            <Link to={`/contact`} className="link">
                Contact
            </Link>
        </div>
    );
};

export default BurgerMenu;
