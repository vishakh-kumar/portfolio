import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const Specs = () => {
    return (
        <div className="section">
            <div className="columns columnCentered">
                <div className="column">
                    <i class="fas fa-database" />
                    <p className="heading">Full-Stack Developer</p>
                    <p className="columnContent">
                        I like to code and learn different languages. Lately I
                        have been working with React for frontend and Ruby for
                        backend.
                    </p>
                    <p className="heading">Languages Used</p>
                    <p className="columnContent">
                        HTML5, CSS3, SASS, JAVASCRIPT, REACT, REACT-NATIVE,
                        RUBY, EXPRESS
                    </p>
                    <p className="heading">Dev Tools</p>
                    <p className="columnContent">
                        <ul>
                            <li>VSCode</li>
                            <li>Invision App</li>
                            <li>XCode Simulator</li>
                            <li>NPM</li>
                            <li>Yarn</li>
                        </ul>
                    </p>
                </div>

                <div className="column">
                    <i class="fas fa-code" />
                    <p className="heading">Type of Projects</p>
                    <p className="columnContent">
                        I make simple applications that are effective but easy
                        to use. My goal is to offer these apps to ensure others
                        achieve their daily goals in an organized manner.
                    </p>
                    <p className="heading">Apps Designed</p>
                    <p className="columnContent">
                        Webpages, Mobile Apps, Databases
                    </p>
                    <p className="heading">Tools</p>
                    <p className="columnContent">
                        <ul>
                            <li>GitHub</li>
                            <li>Terminal</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                            <li>Postman</li>
                        </ul>
                    </p>
                </div>

                <div className="column">
                    <i class="fas fa-book-reader" />
                    <p className="heading">Learning</p>
                    <p className="columnContent">
                        Currently I am trying to polish my skills on JavaScript
                        and then I will jump to Python(interested in machine
                        learning).
                    </p>
                    <p className="heading">Experience</p>
                    <p className="columnContent">
                        480+ Hours of Coding in Bootcamp, Associates in Computer
                        Science, 2+ Years of Coding
                    </p>
                    <p className="heading">Resources</p>
                    <p className="columnContent">
                        <ul>
                            <li>General Assembly Bootcamp</li>
                            <li>Stack Overflow</li>
                            <li>Google</li>
                            <li>Coding Books</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Specs;
