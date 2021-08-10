import React from "react";
import { useState } from "react";
import "../../../../node_modules/bulma/bulma.sass";
import logo from "../../assets/logo.png";
import NavbarRight from "./NavbarRight";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import "../../../App.scss";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="container">
            <div className="navbar" style={{ paddingTop: 15, paddingLeft: 15 }}>
                <div className="navbar-brand navbarIcon">
                    <img
                        src={logo}
                        alt="VK logo"
                        className="image is-64x64"
                        style={{ marginTop: 10 }}
                    />
                </div>
                <NavbarRight />
                <BurgerButton
                    onClick={() => setShowMenu(!showMenu)}
                    showMenu={showMenu}
                    color={showMenu && "#6a73c7"}
                />
                {showMenu && <BurgerMenu />}
            </div>
        </div>
    );
};

export default NavBar;
