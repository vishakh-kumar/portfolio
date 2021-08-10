import React from "react";
import "../../../../node_modules/bulma/bulma.sass";
import "../../../App.scss";

const Projects = () => {
    return (
        <div className="container projectContainer">
            <h1 className="title">Recent Projects</h1>
            <div className="section">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://static.wikia.nocookie.net/dayshift-at-freddys/images/0/0b/DSaFDave.png/revision/latest/smart/width/250/height/250?cb=20170707211228"
                                alt=""
                            />
                        </figure>
                    </div>
                </div>
                <div className="card">project1</div>
                <div className="card">project1</div>
                <div className="card">project1</div>
                <div className="card">project1</div>
            </div>
        </div>
    );
};

export default Projects;
