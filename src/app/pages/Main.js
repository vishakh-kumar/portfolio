import React from "react";
import Intro from "../components/main/Intro";
import AboutMe from "../components/main/AboutMe";
import Projects from "../components/main/Projects";
import Specs from "../components/main/Specs";
import { Route, Switch } from "react-router-dom";
import ContactMe from "./ContactMe";
import ThankYou from "./ThankYou";

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
                <Route path="/thankyou">
                    <ThankYou />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
