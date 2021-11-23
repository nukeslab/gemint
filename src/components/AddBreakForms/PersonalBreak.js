import React, { useState } from "react";
import ScheduleInput from "./ScheduleInput";

function PersonalBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label className="column2-label">SET PRICE</label>
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
            <p className="plz-set-price">Please set a price for this break</p>
          </div>
        </div>
        <div className="column" id="column3"></div>
      </div>
      <ScheduleInput
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        breakType={"Personal"}
        product={props.product}
        breakEntryPrice={breakEntryPrice}
        breakMaxSpots="1"
      />
    </div>
  );
}

export default PersonalBreakForm;
