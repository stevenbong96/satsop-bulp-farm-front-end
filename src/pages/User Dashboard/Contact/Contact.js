import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contactStyle">
            <div className="columns">
                <div className="column is-5">
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="First Name" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Last Name" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="Inquiries" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type your message here"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped is-justify-content-center">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="column is-7 imageStyle">
                    <img src="http://via.placeholder.com/640x360" alt="picture1" />
                </div>
            </div>
        </div>
    )
}

export default Contact