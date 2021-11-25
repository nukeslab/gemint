import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/navigation";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../userContext";
import BreakCard from "../components/breakCard";

function Profile(props) {
  const [isLoading, setLoading] = useState(true);
  const [sellerBreaks, setSellerBreaks] = useState();
  const user = useContext(userContext);

  useEffect(() => {
    let userId = user.userId;
    console.log("userid", user);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get(
        `https://us-central1-gemint-app.cloudfunctions.net/api/breaks/${userId}`
      )
      .then(response => {
        console.log(response.data);
        const allBreaks = Array.from(response.data);
        setSellerBreaks(allBreaks);
        setLoading(false);
      });
  }, [user]);
console.log(user)
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Hello{user.username}</h1>

  
      </div>
    </div>
  );
}

export default Profile;
