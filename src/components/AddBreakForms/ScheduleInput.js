import React, { useState, useContext } from "react";
import axios from "axios";
import globalContext from "../../context/globalContext";

function ScheduleInput(props) {
  const { user } = useContext(globalContext);
  const status = "Live";
  const scheduled = "Scheduled";
  const breakType = props.breakType;
  const breakEntryPrice = props.breakEntryPrice;
  const breakMaxSpots = props.breakMaxSpots;
  const activeCartIndex = props.activeCartIndex;
  const totalProducts = props.totalProducts;

  const [optionEverythingShips, setOptionEverythingShips] = useState(false);
  const [optionTopLoaded, setOptionTopLoaded] = useState(false);
  const [customNote, setCustomNote] = useState("");

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
                value={optionEverythingShips}
                id="everythingShips"
                onClick={(e) => setOptionEverythingShips(e.target.value)}
              ></input>
            </div>
            <div className="label-input-wrapper">
              <label for="allCardsTop">ALL CARDS TOP LOADED</label>
              <input
                type="checkbox"
                id="allCardsTop"
                value={optionTopLoaded}
                onClick={(e) => setOptionTopLoaded(e.target.value)}
              ></input>
            </div>
            {/* Third option
            <div className="label-input-wrapper">
              <label for="option3">THIS OPTION</label>

              <input
                type="checkbox"
                id="option3"
                onClick="myFunction()"
              ></input>
            </div>
            */}

            <div className="custom-note-wrapper">
              <input
                className="custom-note-input"
                placeholder="Create your custom note"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
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
                status
              )
            }
          >
            ADD BREAK
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
    status
  ) {
    const breakSpotsFilled = [];
    for (let i = 0; i < breakMaxSpots; i++) {
      breakSpotsFilled.push({
        breakSpotNumber: i + 1,
        orderId: "",
        orderedBy: "",
        orderedByUsername: "",
        spotFilled: false,
        spotPrice: breakEntryPrice,
      });
    }
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

export default ScheduleInput;
