import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const BurgerMenu = () => {
    return (
        <div className="links">
            <a href="#" className="link">
                Projects
            </a>
            <a href="#" className="link">
                About Me
            </a>
            <a href="#" className="link">
                Contact
            </a>
        </div>
    );
};

export default BurgerMenu;
