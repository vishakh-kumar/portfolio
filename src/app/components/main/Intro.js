import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";
import pic from "../../assets/pic.jpg";

const Intro = () => {
    return (
        <div className="container" style={{ marginTop: 50 }}>
            <h1 className="title">
                Software Engineer, Front-End Developer & Learner
            </h1>
            <div className="notification">
                <img src={pic} alt="profile-pic" />
                <div className="card">jkhgkjjh</div>
            </div>
        </div>
    );
};

export default Intro;
