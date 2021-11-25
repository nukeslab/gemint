import React,{ useState, useEffect, useContext } from 'react'
import axios from "axios";
import globalContext from "../context/globalContext";

function Test(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [shippingAddress, setAddress] = useState("");
    const { user } = useContext(globalContext);
  
    console.log(user);
    function resetPassword() {
      alert("Gehrig needs to build this still.");
    }
  
    function updateUserInfo() {
      alert(
        "This would update an email or username (if the username is available)"
      );
      console.log(user)
    }
    return (
        <div className="account-containers">
  
        {user? (
          <div>
            <h2>Account {user.username}</h2>
            <label>Username</label>
            <input placeholder={user.username} value={username}></input>
  
            <label>Email</label>
            <input placeholder={user.email} value={email}></input>
  
            <button onClick={(e) => resetPassword()}>Reset password</button>
  
            <h2>Shipping</h2>
            <label>City</label>
            <input
              placeholder={user.shippingAddress.addressLine1}
              value={email}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
  
            <label>State</label>
            <input
              placeholder={user.shippingAddress.addressLine1}
              value={email}
            ></input>
  
            <label>Country</label>
            <input
              placeholder={user.shippingAddress.addressLine1}
              value={email}
            ></input>
  
            <label>Country</label>
            <input
              placeholder={user.shippingAddress.addressLine1}
              value={email}
            ></input>
  
            <label>Address Line 1</label>
            <input
              placeholder={user.shippingAddress.addressLine1}
              value={email}
            ></input>
  
            <label>Address Line 2</label>
            <input
              placeholder={user.shippingAddress.addressLine2}
              value={email}
            ></input>
          </div>
        ) : (
          // <p>...</p>
          <div>
            <h2>Account</h2>
            
          </div>
        )}
      </div>
    )
}

export default  Test
