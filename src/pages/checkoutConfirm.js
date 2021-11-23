import React from "react";

import Nav from "../components/navigation";

export default function ConfirmReceipt() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="card">
          <h1>Thank you for your purchase!</h1>
          <p>You're in – break name</p>
          <p>Checkmark</p>
          <p>Your payment has been received.</p>
          <p>
            You'll receive a text or email notification when your break is full.
          </p>
        </div>
        <div>
          <p>Order summary has been sent to email</p>
          <p>Your Order: XXXXXXX</p>
          <p>Order Date: XXXXXXX</p>
        </div>
      </div>
    </div>
  );
}
