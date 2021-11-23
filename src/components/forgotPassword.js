import React from "react";
import { server_uri } from "../config";
import axios from "axios";

function ForgotPassword(props) {
  function sendResetEmail(email) {
    axios.post(server_uri + "/account/reset", {
      email: "gakz@pm.me",
    });
  }

  return (
    <div>
      <button
        onClick={(e) => sendResetEmail(props.email)}
        className="forgot-password-p"
      >
        Reset password
      </button>
    </div>
  );
}

export default ForgotPassword;
