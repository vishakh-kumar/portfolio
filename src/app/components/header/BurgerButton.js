import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const BurgerButton = ({ onClick, color }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="myButton navbar-burger"
                style={{ marginRight: 10 }}
            >
                <i style={{ color: color }} className="fas fa-bars is-button" />
            </button>
        </div>
    );
};

export default BurgerButton;
