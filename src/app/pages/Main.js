import React from "react";
import Intro from "../components/main/Intro";
import AboutMe from "../components/main/AboutMe";
import Projects from "../components/main/Projects";
import Specs from "../components/main/Specs";
import { Route, Switch } from "react-router-dom";
import ContactMe from "./ContactMe";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Intro />
                    <Specs />
                    <Projects />
                    <AboutMe />
                </Route>
                <Route path="/contact">
                    <ContactMe />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
