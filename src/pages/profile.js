import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/navigation";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../userContext";
import BreakCard from "../components/breakCard";

function Profile() {
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

  return (
    <div>
      <Nav />
      <div className="container">
        <h1>{user.username}</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          sellerBreaks.map(postedBreak => {
            return (
              <Link to={`/browse/${postedBreak.breakId}`}>
                <BreakCard key={postedBreak.breakId} {...postedBreak} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Profile;
