import React from "react";
import PropTypes from "prop-types";
import { Highlight, Snippet } from "react-instantsearch-dom";

export default Hit;

function Hit({ hit }) {
  return (
    <div className="hit">
      <div className="hit-content">
        <div>
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} tagName="em" />
          </div>
          <div className="hit-cardManufacturer">
            <Snippet attribute="cardManufacturer" hit={hit} />
          </div>
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};
