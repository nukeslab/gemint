import React from "react";
import Nav from '../components/navigation';
import Randomizer from '../components/randomizer';

function Randomize() {

    return (
      <div>
          <Nav />
          <div className="container">
          <Randomizer />
          </div>
      </div>
    );
  }

export default Randomize;
