import React from "react";
import Nav from "../components/navigation";

function Apply() {
  return (
    <div>
      <Nav />
      <div className="apply-container">
        <h1 className="breaker-header">Become a Verified Breaker</h1>
        <p className="apply-today-p">
          We're currently working with a limited set of verified sellers – apply
          today to sell more, quicker, and easier on Gemint.
        </p>
        <form className="apply-form">
          <div className="label-input-wrapper">
            <label className="label">Email</label>
            <input className="input"></input>
          </div>
          <div className="label-input-wrapper">
            <label className="label">Social</label>
            <input className="input"></input>
          </div>
          <div className="submit-btn-wrapper">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;
