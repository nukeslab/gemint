import React, { Component } from "react";
import { Grid, Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountNav from "../components/accountnav";
import { products } from "../data/products";
import ScheduleBreak from "../components/scheduleBreak";
import axios from "axios";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList
} from "react-instantsearch/dom";
import Nav from "../components/navigation";
import { BsFilterLeft } from "react-icons/bs";

const searchClient = algoliasearch(
  "IZY5EAN1H8",
  "268e0d9416d88f79e4d4b8c251523abc"
);

class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxLeague: "",
      boxName: "",
      boxCategory: "",
      boxYear: "",
      breakType: "",
      breakEntryPrice: "",
      breakDate: "",
      breakLink: "",
      errors: [],
      cart: [],
      continue: false,
      loading: false,
      activeStep: 0
    };
  }

  handleHitClick(hit) {}

  render() {
    const { errors, loading } = this.state;

    const Hit = ({ hit }) => (
      <div className="hit-container">
        <div className="hit-img-wrapper">
          <img
            className="hit-img"
            src={`https://gemint-prod.web.app/${hit.products[0].sport}/${hit.products[0].name}/${hit.products[0].year}-${hit.products[0].cardManufacturer}-${hit.products[0].league}-${hit.products[0].name}-Hobby.png`}
            alt="Cardbox"
          />
        </div>
        <div className="hit-year">
          {hit.products[0].year}
          {/* This is so the spacing is even for each card even if there isnt a year registered for it */}
          <p className="hide-dis">Hide</p>{" "}
        </div>
        <p className="hit-league-name">
          {hit.products[0].league} {hit.products[0].name}
        </p>

        <p className="hit-manufacturer">{hit.products[0].cardManufacturer}</p>
        <p className="hit-box-type">Hobby Box</p>
        <div className="hit-break-type-wrapper">
          <p className="hit-break-type1">BREAK TYPE:</p>
          <p className="hit-break-type2"> {hit.breakType}</p>
        </div>
        <h5 className="price-header">Price</h5>
        <p className="price">${hit.breakEntryPrice}</p>
        {/* <p className="status">{hit.breakStatus}</p> */}
        {/* <p>{hit.createdByUsername}</p> */}
        <Link to={`/browse/${hit.objectID}`}>
          <button className="select-spot-btn">Select a spot</button>
        </Link>
      </div>
    );

    const Content = () => (
      <div className="content-container">
        <Hits hitComponent={Hit} />
        <div className="pagination">
          {/* Bottom numbers */}
          <Pagination showLast />
        </div>
      </div>
    );

    function displayLeagueRefinement() {
      const leagueRefinement = document.querySelector("#league-wrapper");
      if (leagueRefinement.style.display === "flex") {
        leagueRefinement.style.display = "none";
      } else {
        leagueRefinement.style.display = "flex";
      }
    }
    function displaySportRefinement() {
      const sportRefinement = document.querySelector("#sport-wrapper");

      if (sportRefinement.style.display === "flex") {
        sportRefinement.style.display = "none";
      } else {
        sportRefinement.style.display = "flex";
      }
    }
    function displayProductRefinement() {
      const productRefinement = document.querySelector("#product-wrapper");
      if (productRefinement.style.display === "flex") {
        productRefinement.style.display = "none";
      } else {
        productRefinement.style.display = "flex";
      }
    }
    function displayCreatorRefinement() {
      const creatorRefinement = document.querySelector("#creator-wrapper");
      if (creatorRefinement.style.display === "flex") {
        creatorRefinement.style.display = "none";
      } else {
        creatorRefinement.style.display = "flex";
      }
    }
    function displayYearRefinement() {
      const yearRefinement = document.querySelector("#year-wrapper");
      if (yearRefinement.style.display === "flex") {
        yearRefinement.style.display = "none";
      } else {
        yearRefinement.style.display = "flex";
      }
    }
    function displayBreakTypeRefinement() {
      const breakTypeRefinement = document.querySelector("#break-type-wrapper");
      if (breakTypeRefinement.style.display === "flex") {
        breakTypeRefinement.style.display = "none";
      } else {
        breakTypeRefinement.style.display = "flex";
      }
    }
    function displayPriceRefinement() {
      const priceRefinement = document.querySelector("#price-wrapper");
      if (priceRefinement.style.display === "flex") {
        priceRefinement.style.display = "none";
      } else {
        priceRefinement.style.display = "flex";
      }
    }

    const Sidebar = () => (
      <div className="sidebar">
        <h3 className="filter-by-header">Filter by Category</h3>
        {/* League */}
        <h5 className="category-header" onClick={displayLeagueRefinement}>
          League
        </h5>

        <div id="league-wrapper">
          <RefinementList attribute="products.league" />
        </div>
        {/* Sport */}
        <h5 className="category-header" onClick={displaySportRefinement}>
          Sport
        </h5>
        <div id="sport-wrapper">
          <RefinementList attribute="products.sport" />
        </div>
        {/* Product */}
        <h5 className="category-header" onClick={displayProductRefinement}>
          Product
        </h5>
        <div id="product-wrapper">
          <RefinementList attribute="products.name" />
        </div>
        {/* Creator */}
        <h5 className="category-header" onClick={displayCreatorRefinement}>
          Creator
        </h5>
        <div id="creator-wrapper">
          <RefinementList attribute="products.cardManufacturer" />
        </div>
        {/* Year */}
        <h5 className="category-header" onClick={displayYearRefinement}>
          Year
        </h5>
        <div id="year-wrapper">
          <RefinementList attribute="products.year" />
        </div>
        {/* Break Type */}
        <h5 className="category-header" onClick={displayBreakTypeRefinement}>
          Break Type
        </h5>
        <div id="break-type-wrapper">
          <RefinementList attribute="breakType" />
        </div>
        {/* Price */}
        <h5 className="category-header" onClick={displayPriceRefinement}>
          Price
        </h5>
        <div id="price-wrapper">
          <RefinementList attribute="breakEntryPrice" />
        </div>
      </div>
    );

    return (
      <div>
        <Nav />
        <div className="browse-add-container">
          <h1 className="browse-breaks-header">BROWSE BREAKS</h1>
          <div>
            <div>
              <InstantSearch searchClient={searchClient} indexName="dev_BREAKS">
                <Sidebar />
                <SearchBox
                  className="search-bar"
                  translations={{
                    placeholder: "  Find your next break"
                  }}
                />

                <Content />
              </InstantSearch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Browse;
