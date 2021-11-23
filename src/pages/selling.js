import React, { useState, useEffect, useContext } from "react";
import AccountNav from "../components/accountnav";
import { Link } from "react-router-dom";
import SalesTable from "../components/salesTable";
import axios from "axios";
import { userContext } from "../userContext";

function Selling() {
  const [isLoading, setLoading] = useState(true);
  const [userBreaks, setUserBreaks] = useState();
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
        setUserBreaks(allBreaks);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="account-containers">
      <AccountNav />
      <h1>Selling</h1>
      <p>Want to sell on Gemint? Join the waitlist.</p>

      {isLoading ? <p>Loading...</p> : <SalesTable userBreaks={userBreaks} />}
    </div>
  );
}

export default Selling;
