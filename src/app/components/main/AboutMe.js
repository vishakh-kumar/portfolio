import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";
import resume from "../../assets/Resume.pdf";

const AboutMe = () => {
    return (
        <div className="aboutMeContainer" id="aboutMe">
            <div className="card">
                <p className="aboutMeText title">
                    Hi, I'm Vishakh. Welcome to my portfolio.
                </p>
                <p>
                    I love coding, traveling, working-out, eating, video games,
                    and creating DIY projects. I have always made it a goal to
                    excel in everything I attempt. Whether it is a challenging
                    endeavor or nearly impossible. I will always try my best to
                    achieve my goals. I am not reluctant to ask for help, nor am
                    I hesitant to offer it. Coding puts my mind at ease, as I
                    have complete control in creating something amazing for
                    others to use. There is a lot more I want to learn, and the
                    more I learn, the better I’ll get.
                </p>
                <a href={resume} download="Vishakh Resume">
                    <div>
                        <i class="fas fa-file-download" /> Download Resume
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
