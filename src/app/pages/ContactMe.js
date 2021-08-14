import React from "react";
import "../../../node_modules/bulma/bulma.sass";
import "../../App.scss";

const ContactMe = () => {
    return (
        <div className="formContainer">
            <div className="contactMeIntro">
                <h1 className="title">For further informations</h1>
            </div>
            <div className="center">
                <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact v1" />
                    <label>
                        Name:
                        <input type="text" name="name" className="input" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" className="input" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" row="4" className="textarea" />
                    </label>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
