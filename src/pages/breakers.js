import React, { Component } from "react";
import Nav from "../components/navigation";
import BreakerCard from "../components/breakerCard";
class Breakers extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1>Breakers</h1>
          <p>Find your new favorite breaker.</p>

          <BreakerCard />
        </div>
      </div>
    );
  }
}

export default Breakers;
