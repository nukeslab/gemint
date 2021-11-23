import React, { useState, useEffect } from "react";
import axios from "axios";
import BreakCard from "../components/breakCard";

function BreakList() {
  const [breaks, setBreaks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-gemint-app.cloudfunctions.net/api/breaks?limit=3`
      )
      .then(response => {
        console.log(response.data);
        const allBreaks = Array.from(response.data);
        setBreaks(allBreaks);
        setLoading(false);
      });
  }, []);

  return (
    <div className="break-list-container">
      {breaks.length > 0 ? (
        breaks.map(postedBreak => {
          return <BreakCard postedBreak={postedBreak} />;
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default BreakList;
