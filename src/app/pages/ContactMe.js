import React from "react";
import "../../../node_modules/bulma/bulma.sass";
import "../../App.scss";
import emailjs from "emailjs-com";

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mwks3zh",
                "template_lj8ew5r",
                e.target,
                "user_zl5b822b2ELK364J9oPDL"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="formContainer">
            <div className="contactMeIntro">
                <h1 className="title">For further informations</h1>
            </div>
            <div className="center">
                <form onSubmit={sendEmail}>
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
