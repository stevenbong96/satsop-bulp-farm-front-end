import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contactStyle is-justify-content-center">
            <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Text input" value="First Name" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Last Name</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Text input" value="Last Name" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email input" value="hello@hello.com" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="email" placeholder="Inquiries" value="Bulb" />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div className="field is-grouped is-justify-content-center">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact