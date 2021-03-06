import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../node_modules/bulma/bulma.sass";
import "../../App.scss";

const ContactMe = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };
    //for redirect
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/thankyou");
    };

    // form submission
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form }),
        })
            .then(() => handleRedirect())
            .catch((error) => alert(error));
        e.preventDefault();
    };
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div className="formContainer">
            <div className="contactMeIntro">
                <h1 className="title">For further information</h1>
            </div>
            <div className="center">
                <form
                    name="contact"
                    onSubmit={handleSubmit}
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <label>
                        Name:
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            className="input"
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            className="input"
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            onChange={handleChange}
                            name="message"
                            row="4"
                            className="textarea"
                        />
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
