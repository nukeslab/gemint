import React, { useState } from "react";
import ScheduleInput from "./ScheduleInput";

function HitBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const cardAmount = 5;

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label className="column2-label">SPOTS AVAILABLE</label>
            <div className="set-price-wrapper">
              <p> </p>{" "}
              <input
                className="set-price-input"
                required
                value={cardAmount}
                minimumValue="0"
                type="number"
                decimalCharacter="."
                digitGroupSeparator=","
                disabled
              />
            </div>
            <p className="plz-set-price">
              There are {cardAmount} cards in this box
            </p>

            <label className="column2-label">SET SPOT PRICE</label>
            <div className="set-price-wrapper">
              <p>$</p>{" "}
              <input
                className="set-price-input"
                required
                value={breakEntryPrice}
                currencySymbol="$"
                minimumValue="0"
                type="number"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={(e) => setBreakEntryPrice(e.target.value)}
              />
              <p className="usd-p">USD</p>
            </div>
            <p className="plz-set-price">Please set a price for each spot</p>
          </div>
        </div>
        <div className="column" id="column3"></div>
      </div>
      <ScheduleInput
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        breakType={"Hit Draft"}
        product={props.product}
        breakEntryPrice={breakEntryPrice}
        breakMaxSpots={cardAmount}
      />
    </div>
  );
}

export default HitBreakForm;
