import React, { useContext } from "react";
import Nav from "../components/navigation";
import globalContext from "../context/globalContext";

function Contact() {
  const { user } = useContext(globalContext);

  return (
    <div>
      <Nav />
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <form className="contact-form">
          <div className="label-input-wrapper">
            <label className="label">Name</label>
            <input className="input"></input>
          </div>
          <div className="label-input-wrapper">
            <label className="label">Email</label>
            <input className="input"></input>
          </div>
          <div className="label-input-wrapper">
            <label className="label">Message</label>
            <textarea className="input" id="message-input"></textarea>
          </div>
          <div className="submit-btn-wrapper">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
