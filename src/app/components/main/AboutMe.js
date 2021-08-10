import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const AboutMe = () => {
    return (
        <div className="aboutMeContainer" id="aboutMe">
            <div className="card">
                <p className="aboutMeText title">
                    Hi, I'm Vishakh. Welcome to my portfolio.
                </p>
                <p>
                    I love coding, traveling, working-out, eating, video-games
                    and creating DIY projects. I have always liked to be the
                    best in everything. Regardless of if it was hard or
                    impossible, I always try my best to get there. I am not shy
                    to ask for help not am I hesitant to help someone in need.
                    Coding is something that puts my mind to ease as I have
                    complete control on something I am creating and I love the
                    process of it turning into something awesome. I still have a
                    lot to learn, the more I learn the better it gets.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
