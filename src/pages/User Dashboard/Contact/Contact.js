import React, { useState } from "react";
import "./contact.css";
import API from "../../../utils/User/userAPI";

function Contact() {
  // Declare state
  const [filledForm, setFilledFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiries: "",
    message: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFilledFormState({ ...filledForm, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("SELECTED");
    API.sendContactInfo(filledForm)
      .then((res) => {
        // console.log(res);
        if (res.data.status === "success") {
          alert("Message Sent!!!!!");
          setFilledFormState({
            firstName: "",
            lastName: "",
            email: "",
            inquiries: "",
            message: "",
          });
        } else if (res.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="contact__container card">
      <h2 className="section__title">CONTACT US</h2>
      <hr></hr>
      <div className="columns">
        <div className="column is-7 imageStyle">
          <img
            className="contactImage"
            src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605897599/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf5_rkemhu.jpg"
            alt="picture1"
          />
        </div>
        <form className="column is-">
          <div className="column is-12">
            <div className="field">
              <label className="label">First Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  className="input"
                  name="inquiries"
                  type="email"
                  placeholder="Inquiries"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Type your message here"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped is-justify-content-center">
              <div className="control">
                <button className="contact__button" onClick={handleFormSubmit}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
