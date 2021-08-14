import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bulma/bulma.sass";
import "../../App.scss";
import logo from "../assets/logo.png";

const ThankYou = () => {
    return (
        <div className="thankyouContainer">
            <div className="thankyouSection">
                <h1 className="title thankyou">
                    THANK YOU FOR YOUR SUBMISSION
                </h1>
                <p className="subtitle">Click below to Redirect</p>
                <Link to="/">
                    <button>
                        <img src={logo} alt="logo" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
