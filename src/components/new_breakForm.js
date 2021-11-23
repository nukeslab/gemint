import React, { useState, useContext } from "react";
import globalContext from "../context/globalContext";
import PersonalBreakForm from "./AddBreakForms/PersonalBreak";
import HitBreakForm from "./AddBreakForms/HitBreak";
import DivisionBreakForm from "./AddBreakForms/DivisionBreak";
import TeamBreakForm from "./AddBreakForms/TeamBreak";


function BreakForm(props) {
  const { user } = useContext(globalContext);

  const [breakType, setBreakType] = useState("");
  const [breakSpotsAvailable, setBreakSpotsAvailable] = useState(0);
  const [breakSpotsRandom, setBreakSpotsRandom] = useState(false);
  const [breakStatus, setBreakStatus] = useState("");
  const [breakOptionCustom, setBreakOptionCustom] = useState("");
  const [completedCart, setCompletedCart] = useState([]);
  const [activeCartIndex, setActiveCartIndex] = useState(0);

  function BreakTypeForm(props) {
    const breakType = props.breakType;
    const product = props.product;

    if (breakType === "Personal") {
      return (
        <PersonalBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    } else if (breakType === "Hit Draft") {
      return (
        <HitBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    } else if (breakType === "Division") {
      return (
        <DivisionBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    } else if (breakType === "Team") {
      return (
        <TeamBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    } else {
      /*
    else if (breakType === "Razz") {
      return (
        <RazzBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    }  else if (breakType === "Snake Draft") {
      return (
        <SnakeDraftBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    }  else if (breakType === "Pick Your Team") {
      return (
        <PickYourTeamBreakForm
          user={props.user}
          totalProducts={props.totalProducts}
          activeCartIndex={props.activeCartIndex}
          product={product}
        />
      );
    } */
      return <div />;
    }
  }

  return (
    <div className="break-form-container">
      <div className="header-link-wrapper">
        <h1 className="break-editor-header">BREAK EDITOR</h1>
        <a href="/contact" target="_blank">
          <p className="suggestion">Have a suggestion or issue?</p>
        </a>
      </div>
      <div className="break-form-wrapper">
        {props.cart.map((product, i) =>
          i === activeCartIndex ? (
            <div>
              <div className="section-container">
                <div className="column" id="column1">
                  <h2 className="section-header">Product information</h2>
                  <div className="product-information-img-wrapper">
                    <img
                      className="product-information-img"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FUlIAAOSw6zlfd3-B%2Fs-l300.jpg&f=1&nofb=1"
                    />
                  </div>
                </div>
                <div className="column" id="column2">
                  <div className="column-2-info-wrapper">
                    <p className="year">{product.year}</p>
                    <h3 className="league-name">
                      {product.league} {product.name}
                    </h3>
                    <p>{product.cardManufacturer}</p>
                    <p>HOBBY BOX</p>
                  </div>
                  <div className="break-type-wrapper">
                    <label className="break-type-label">BREAK TYPE</label>
                    <select
                      value={breakType}
                      onChange={(e) => setBreakType(e.target.value)}
                      placeholder="Break type"
                      name="breakType"
                      className="select-dropdown"
                    >
                      <option value={""}> </option>

                      <option value={"Personal"}>Personal</option>
                      <option value={"Hit Draft"}>Hit Draft</option>
                      <option value={"Division"}>Division</option>
                      <option value={"Team"}>Team</option>
                      <option value={"Pick Your Team"}>Pick Your Team</option>
                    </select>
                    <p className="select-break-type-p">
                      Select a "BREAK TYPE" to begin editing
                    </p>
                  </div>
                </div>

                <div className="column" id="column3"></div>
              </div>
              <BreakTypeForm
                user={user}
                totalProducts={props.cart.length}
                activeCartIndex={activeCartIndex}
                product={product}
                breakType={breakType}
              />{" "}
            </div>
          ) : (
            <div className="not-active-wrapper">
              <h1>Not active</h1>
              <p>{product.name}</p>
              <p>{product.league}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BreakForm;
