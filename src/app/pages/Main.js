import React from "react";
import Intro from "../components/main/Intro";
import AboutMe from "../components/main/AboutMe";
import Projects from "../components/main/Projects";
import Specs from "../components/main/Specs";

const Main = () => {
    return (
        <div>
            <Intro />
            <Specs />
            <Projects />
            <AboutMe />
        </div>
    );
};

export default Main;
