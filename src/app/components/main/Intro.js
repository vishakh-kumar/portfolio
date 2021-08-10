import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";
import pic from "../../assets/pic.jpg";

const Intro = () => {
    return (
        <div className="introContainer" style={{ marginTop: 100 }}>
            <h1 className="title">
                Software Engineer, Full-Stack Developer & Learner
            </h1>
            <h2 className="subtitle">Keep Learning</h2>
            <div className="notifications">
                <img src={pic} alt="profile-pic" />
                <div
                    className="card"
                    style={{
                        width: "100%",
                        marginLeft: 15,
                    }}
                >
                    <div className="has-text-centered intro-text">
                        Full Stack Developer with a background in sales and
                        banking. Motivated to develop websites and applications
                        that are aesthetically pleasing with straightforward
                        design that is user friendly for all age groups.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
