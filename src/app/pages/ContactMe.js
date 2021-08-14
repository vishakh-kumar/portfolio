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
                <form
                    name="contact v1"
                    method="post"
                    data-netlify="true"
                    onSubmit="submit"
                >
                    <input type="hidden" name="form-name" value="contact v1" />
                    <label>Name:</label>
                    <input type="text" name="name" className="input" />

                    <label>Email:</label>
                    <input type="email" name="email" className="input" />

                    <label>Message:</label>
                    <textarea name="message" row="4" className="textarea" />

                    <button type="submit" value="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
