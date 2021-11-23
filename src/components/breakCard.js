import React from "react";

function BreakCard(props) {
  const postedBreak = props.postedBreak;

  return (
    <div className="break-card-container">
      <div className="break-card-img-wrapper">
        <img
          className="break-card-img"
          src={`https://gemint-prod.web.app/${postedBreak.products[0].sport}/${postedBreak.products[0].name}/${postedBreak.products[0].year}-${postedBreak.products[0].cardManufacturer}-${postedBreak.products[0].league}-${postedBreak.products[0].name}-Booster.png`}
          alt="Cardbox"
        />
      </div>
      <p className="break-card-year">{postedBreak.products[0].year}</p>
      <p className="break-card-league-name">
        {postedBreak.products[0].league} {postedBreak.products[0].name}
      </p>
      <p className="break-card-manufacturer">
        {" "}
        {postedBreak.products[0].cardManufacturer}
      </p>
      <p className="break-card-box-type">Hobby Box</p>
      <div className="break-card-break-type-wrapper">
        <p className="break-card-break-type1">BREAK TYPE:</p>
        <p className="break-card-break-type2"> {postedBreak.breakType}</p>
      </div>
      <h5 className="price-header">Price</h5>
      <p className="price">${postedBreak.breakEntryPrice}</p>
      <button className="select-spot-btn">Select a spot</button>
    </div>
  );
}

export default BreakCard;
