import React, { Component, useState } from "react";
import { userContext } from "../userContext";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { MLBTeams, NBATeams, NFLTeams } from "../data/MLBTeams";
import { YearSelection } from "@material-ui/pickers/views/Year/YearView";
import globalContext from "../context/globalContext";

class BreakForm extends Component {
  static contextType = globalContext;

  constructor(props) {
    super(props);

    this.state = {
      breakType: "",
      breakSpotsAvailable: 0,
      breakEntryPrice: 0,
      breakSpotsRandom: false,
      breakStatus: "",
      breakOptionCustom: "",
      completedCart: [],
      activeCartIndex: 0,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let user = this.context;

    return (
      <div className="break-form-container">
        <div className="header-link-wrapper">
          <h1 className="break-editor-header">BREAK EDITOR</h1>
          <a href="/contact" target="_blank">
            <p className="suggestion">Have a suggestion or issue?</p>
          </a>
        </div>
        <div className="break-form-wrapper">
          {this.props.cart.map((product, i) =>
            i === this.state.activeCartIndex ? (
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
                        value={this.state.breakType}
                        onChange={this.handleChange}
                        name="breakType"
                        className="select-dropdown"
                      >
                        <option value={""}> </option>
                        <option value={"Personal"}>Personal</option>
                        <option value={"Hit Draft"}>Hit</option>
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
                  totalProducts={this.props.cart.length}
                  activeCartIndex={this.state.activeCartIndex}
                  product={product}
                  breakType={this.state.breakType}
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
}

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
  } else if (breakType === "Razz") {
    return (
      <RazzBreakForm
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
  } else if (breakType === "Snake Draft") {
    return (
      <SnakeDraftBreakForm
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
  } else if (breakType === "Division") {
    return (
      <DivisionBreakForm
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        product={product}
      />
    );
  } else if (breakType === "Pick Your Team") {
    return (
      <PickYourTeamBreakForm
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        product={product}
      />
    );
  } else return <div />;
}
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

function HitBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const breakMaxSpots = 5;

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            {/* Available spots */}
            <label className="column2-label" id="hit-draft-label">
              AVAILABLE SPOTS
            </label>
            <div className="set-price-wrapper" id="available-spots">
              <input
                className="set-price-input"
                disabled
                variant="outlined"
                type="number"
                value={breakMaxSpots}
              />
            </div>
            <p className="plz-set-price">
              Set the “NUMBER OF SPOTS” you want to fill
            </p>

            {/* Price per spot */}
            <label className="column2-label" id="hit-draft-label">
              PRICE PER SPOT
            </label>
            <div className="set-price-wrapper">
              <p>$</p>{" "}
              <input
                className="set-price-input"
                required
                value={breakEntryPrice}
                type="number"
                currencySymbol="$"
                minimumValue="0"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={(e) => setBreakEntryPrice(e.target.value)}
              />
              <p className="usd-p">USD</p>
            </div>
            <p className="plz-set-price">Set prices for each spot being sold</p>
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
        breakMaxSpots={breakMaxSpots}
        breakOrderRandom={true}
      />
    </div>
  );
}

function RazzBreakForm(props) {
  const [breakMaxSpots, setBreakMaxSpots] = useState(0);
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
            <label>HOW MANY SPOTS AVAILABLE?</label>
            <input
              label="Spots available"
              variant="outlined"
              value={breakMaxSpots}
              type="number"
              max="32"
              onChange={(e) => setBreakMaxSpots(e.target.value)}
            />
            <p>Select the "NUMBER OF SPOTS" you want to fill</p>

            <label>SET PRICE PER SPOT</label>
            <p>Set the price for each spot being sold</p>

            <input
              required
              value={breakEntryPrice}
              type="number"
              currencySymbol="$"
              minimumValue="0"
              decimalCharacter="."
              digitGroupSeparator=","
              onChange={(e) => setBreakEntryPrice(e.target.value)}
            />
            <label>Will you be randomizing spots?</label>
            <p>Select 'YES' if you are randomizing spot order</p>
            <input
              type="checkbox"
              id="randomize-yes"
              onClick="myFunction()"
            ></input>
            <label for="everythingShips">Yes</label>
            <input
              type="checkbox"
              id="randomize-no"
              onClick="myFunction()"
            ></input>
            <label for="everythingShips">No</label>
          </div>
        </div>

        <div className="column" id="column3"></div>
      </div>

      <ScheduleInput
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        breakType={"Razz"}
        product={props.product}
        breakEntryPrice={breakEntryPrice}
        breakMaxSpots={breakMaxSpots}
      />
    </div>
  );
}

function SnakeDraftBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const [snakeDraftType, setSnakeDraftType] = useState("");
  const [maxSpots, setMaxSpots] = useState(0);
  const [breakSpotsAvailable, setBreakSpotsAvailable] = useState(0);

  const onSelect = (type) => {
    const league = props.product.league;
    if (type === "Divisions") {
      if (league === "MLB") {
        setMaxSpots(6);
      } else if (league === "NBA") {
        setMaxSpots(6);
      } else if (league === "NFL") setMaxSpots(8);
    } else if (type === "Teams") {
      if (league === "MLB") {
        setMaxSpots(32);
      } else if (league === "NBA") {
        setMaxSpots(30);
      } else if (league === "NFL") setMaxSpots(32);
    }
  };

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label>Will you draft "divisions" or "teams"?</label>
            <select
              type="checkbox"
              id="randomize-yes"
              onChange={(e) => onSelect(e.target.value)}
            >
              <option></option>
              <option value="Divisions">Divisions</option>
              <option value="Teams">Teams</option>
            </select>
            <label>HOW MANY SPOTS AVAILABLE?</label>
            <input
              variant="outlined"
              type="number"
              value={breakSpotsAvailable}
              onChange={(e) => setBreakSpotsAvailable(e.target.value)}
            />

            <label>SET PRICE PER SPOT</label>
            <input
              required
              value={breakEntryPrice}
              type="number"
              currencySymbol="$"
              minimumValue="0"
              decimalCharacter="."
              digitGroupSeparator=","
              onChange={(e) => setBreakEntryPrice(e.target.value)}
            />
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
        breakMaxSpots={breakSpotsAvailable}
      />
    </div>
  );
}

function DivisionBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const [DivisionBreakType, setDivisionBreakType] = useState("");
  const league = props.product.league;
  let breakSpotsAvailable;

  if (league === "MLB") {
    breakSpotsAvailable = 6;
  } else if (league === "NBA") {
    breakSpotsAvailable = 6;
  } else if (league === "NFL") {
    breakSpotsAvailable = 8;
  }

  const onSelect = (e) => {
    setDivisionBreakType(e);
  };

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label className="snake-or-random">
              Will your break be a "snake draft" or "random"?
            </label>
            <select
              type="checkbox"
              id="randomize-yes"
              onChange={(e) => onSelect(e.target.value)}
            >
              <option></option>
              <option value="Draft">Draft</option>
              <option value="Random">Random</option>
            </select>
            {/* Available spots */}
            <label className="column2-label" id="hit-draft-label">
              AVAILABLE SPOTS
            </label>
            <div className="set-price-wrapper" id="available-spots">
              <input
                className="set-price-input"
                disabled
                variant="outlined"
                type="number"
                value={breakSpotsAvailable}
              />
            </div>
            <p className="plz-set-price">
              Set the “NUMBER OF SPOTS” you want to fill
            </p>

            {/* Price per spot */}
            <label className="column2-label" id="hit-draft-label">
              PRICE PER SPOT
            </label>
            <div className="set-price-wrapper">
              <p>$</p>{" "}
              <input
                className="set-price-input"
                required
                value={breakEntryPrice}
                type="number"
                currencySymbol="$"
                minimumValue="0"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={(e) => setBreakEntryPrice(e.target.value)}
              />
              <p className="usd-p">USD</p>
            </div>
            <p className="plz-set-price">Set prices for each spot being sold</p>
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
        breakMaxSpots={breakSpotsAvailable}
      />
    </div>
  );
}

function TeamBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const [TeamBreakType, setTeamBreakType] = useState("");
  const league = props.product.league;
  let breakSpotsAvailable;

  if (league === "MLB") {
    breakSpotsAvailable = 32;
  } else if (league === "NBA") {
    breakSpotsAvailable = 30;
  } else if (league === "NFL") {
    breakSpotsAvailable = 32;
  }

  const onSelect = (e) => {
    setTeamBreakType(e);
  };

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label className="snake-or-random">
              Will your break be a "snake draft" or "random"?
            </label>
            <select
              type="checkbox"
              id="randomize-yes"
              onChange={(e) => onSelect(e.target.value)}
            >
              <option></option>
              <option value="Divisions">Draft</option>
              <option value="Teams">Random</option>
            </select>
            <label className="column2-label" id="hit-draft-label">
              AVAILABLE SPOTS
            </label>{" "}
            <div className="set-price-wrapper" id="available-spots">
              <input
                className="set-price-input"
                disabled
                variant="outlined"
                type="number"
                value={breakSpotsAvailable}
              />
            </div>
            <p className="plz-set-price">
              Set the “NUMBER OF SPOTS” you want to fill
            </p>
            <label className="column2-label" id="hit-draft-label">
              PRICE PER SPOT
            </label>
            <div className="set-price-wrapper">
              <p>$</p>{" "}
              <input
                className="set-price-input"
                required
                value={breakEntryPrice}
                type="number"
                currencySymbol="$"
                minimumValue="0"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={(e) => setBreakEntryPrice(e.target.value)}
              />
              <p className="usd-p">USD</p>
            </div>
            <p className="plz-set-price">Set prices for each spot being sold</p>
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
        breakMaxSpots={breakSpotsAvailable}
      />
    </div>
  );
}

function PickYourTeamBreakForm(props) {
  const [breakEntryPrice, setBreakEntryPrice] = useState(0);
  const league = props.product.league;
  let breakSpotsAvailable;
  let leagueTeams;

  if (league === "MLB") {
    breakSpotsAvailable = 32;
    leagueTeams = MLBTeams;
  } else if (league === "NBA") {
    breakSpotsAvailable = 30;
    leagueTeams = NBATeams;
  } else if (league === "NFL") {
    breakSpotsAvailable = 32;
    leagueTeams = NFLTeams;
  } else {
    breakSpotsAvailable = 32;
    leagueTeams = NFLTeams;
  }

  return (
    <div>
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          <h2 className="section-header">Spot details</h2>
          <p className="sub-header">EDIT YOUR SPOTS AND PRICES</p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            {/* Available spots */}
            <label className="column2-label" id="hit-draft-label">
              AVAILABLE SPOTS
            </label>
            <div className="set-price-wrapper" id="available-spots">
              <input
                className="set-price-input"
                disabled
                label="Spots available"
                variant="outlined"
                value={breakSpotsAvailable}
              />
            </div>
            <p className="plz-set-price">
              Set the “NUMBER OF SPOTS” you want to fill
            </p>
            <label className="column2-label" id="hit-draft-label">
              PRICE PER TEAM
            </label>
            <p className="plz-set-price">Set prices for each spot being sold</p>
            <div className="team-container">
              {leagueTeams.map((team) => {
                return (
                  <div className="team-wrapper">
                    <label className="team-label">{team}</label>
                    <input
                      className="team-input"
                      required
                      value={breakEntryPrice}
                      type="number"
                      currencySymbol="$"
                      minimumValue="0"
                      decimalCharacter="."
                      digitGroupSeparator=","
                      onChange={(e) => setBreakEntryPrice(e.target.value)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="column" id="column3"></div>
      </div>
      <ScheduleInput
        user={props.user}
        totalProducts={props.totalProducts}
        activeCartIndex={props.activeCartIndex}
        breakType={"Snake Draft"}
        product={props.product}
        breakEntryPrice={breakEntryPrice}
        breakMaxSpots={breakSpotsAvailable}
      />
    </div>
  );
}

function ScheduleInput(props) {
  const status = "Live";
  const scheduled = "Scheduled";
  const breakType = props.breakType;
  const breakEntryPrice = props.breakEntryPrice;
  const breakMaxSpots = props.breakMaxSpots;
  const activeCartIndex = props.activeCartIndex;
  const totalProducts = props.totalProducts;
  const user = props.user;
  const breakSpotsFilled = [];

  const products = [
    {
      league: props.product.league,
      sport: props.product.sport,
      name: props.product.name,
      year: props.product.year,
      cardManufacturer: props.product.cardManufacturer,
      objectId: props.product.objectId,
    },
  ];

  function showCustomNote() {
    const customNote = document.querySelector(".custom-note-input");
    customNote.style.display = "flex";
    const notesToBuyers = document.querySelector(".notes-to-buyers");
    notesToBuyers.style.marginTop = "30px";
  }

  return (
    <div className="additonal-details-container">
      <div className="section-container" id="border-section">
        <div className="column" id="column1">
          {" "}
          <h2 className="section-header">Additional details</h2>
          <p className="sub-header">
            ADD ADDITIONAL DETAILS YOU WANT POTENTIAL BUYERS TO KNOW
          </p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <div className="label-p-wrapper">
              <div className="notes-to-buyers">
                <label className="column2-label" id="notes-label">
                  NOTES TO BUYERS{" "}
                </label>
                <p className="optional-p">(Optional)</p>
              </div>
            </div>
            <div className="label-input-wrapper">
              <label for="everythingShips">EVERYTHING SHIPS</label>
              <input
                type="checkbox"
                id="everythingShips"
                onClick="myFunction()"
              ></input>
            </div>
            <div className="label-input-wrapper">
              <label for="allCardsTop">ALL CARDS TOP LOADED</label>
              <input
                type="checkbox"
                id="allCardsTop"
                onClick="myFunction()"
              ></input>
            </div>
            <div className="label-input-wrapper">
              <label for="option3">THIS OPTION</label>

              <input
                type="checkbox"
                id="option3"
                onClick="myFunction()"
              ></input>
            </div>
            <div className="custom-note-wrapper">
              <input
                className="custom-note-input"
                placeholder="Create your custom note"
              ></input>
            </div>
          </div>
        </div>

        <div className="column" id="column3">
          <p className="custom-note" onClick={showCustomNote}>
            Create a custom note
          </p>
        </div>
      </div>

      {/* <div className="section-container" id="border-section">
        <div className="column" id="column1">
          {" "}
          <h2 className="section-header">Social platform link</h2>
          <p className="sub-header">
            PROVIDE A LINK TO THE SOCIAL PROFILE WHERE YOU HOST LIVE BREAKS
          </p>
        </div>
        <div className="column" id="column2">
          <div className="column2-wrapper">
            <label className="column2-label" id="social-link-label">
              SOCIAL LINK{" "}
            </label>
            <input
              className="ig-input"
              disabled
              placeholder="instagram.com/gemintcards_"
            />
            <p className="change-link-p">
              You can change this link in your{" "}
              <a className="change-link-a" href="/settings">
                account settings
              </a>
              .
            </p>
          </div>
        </div>

        <div className="column" id="column3"></div>
      </div> */}

      {activeCartIndex === totalProducts - 1 ? (
        <div className="review-btn-wrapper">
          <button
            className="review-btn"
            onClick={(e) =>
              AddLiveBreak(
                user,
                products,
                breakType,
                breakEntryPrice,
                breakMaxSpots,
                breakSpotsFilled,
                status
              )
            }
          >
            CONTINUE TO 'REVIEW'
          </button>
        </div>
      ) : (
        //Save product to firestore or local state? and make next product active
        <div className="review-btn-wrapper" id="review-btn-wrapper-multiple">
          <button className="review-btn">Next Product</button>
        </div>
      )}
    </div>
  );

  function AddLiveBreak(
    user,
    products,
    breakType,
    breakEntryPrice,
    breakMaxSpots,
    breakSpotsFilled,
    status
  ) {
    const breakData = {
      products: products,
      createdByUserId: user.userId,
      createdByUsername: user.username,
      breakType: breakType,
      breakStatus: status,
      breakMaxSpots: breakMaxSpots,
      breakEntryPrice: breakEntryPrice,
      breakSpotsRandom: false,
      breakSpotsFilled: breakSpotsFilled,
    };
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .post(
        "https://us-central1-gemint-app.cloudfunctions.net/api/break",
        breakData
      )
      .then((response) => {
        var newBreakId = response.data.id;
        window.location.href = `/browse/${newBreakId}`;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default BreakForm;
