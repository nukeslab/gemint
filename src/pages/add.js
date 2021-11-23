import React, { Component } from "react";
import { Grid, Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Nav from "../components/navigation";
import AccountNav from "../components/accountnav";
import { products } from "../data/products";
import ScheduleBreak from "../components/scheduleBreak";
import axios from "axios";
import algoliasearch from "algoliasearch/lite";
import { BsFilterLeft } from "react-icons/bs";

import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList
} from "react-instantsearch/dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  progess: {
    position: "absolute"
  },
  stepper: {
    marginLeft: "20%",
    marginRight: "20%"
  }
});

const searchClient = algoliasearch(
  "IZY5EAN1H8",
  "268e0d9416d88f79e4d4b8c251523abc"
);

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#23875C"
        },
        "&$active": {
          color: "#23875C"
        }
      },
      active: {},
      completed: {},
      alternativeLabel: {}
    }
  },
  typography: {
    fontSize: 25
  }
});

class Add extends Component {
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

  handleHitClick(hit) {
    console.log(hit);
    this.state.cart.push(hit);
    this.setState({
      cart: this.state.cart
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const breakData = {
      email: this.state.email,
      password: this.state.password,
      boxLeague: this.state.boxLeague,
      boxName: this.state.boxName,
      boxCategory: this.state.boxCategory,
      boxYear: this.state.boxYear,
      breakType: this.state.breakType,
      breakEntryPrice: this.state.breakEntryPrice,
      breakDate: this.state.breakDate,
      breakLink: this.state.breakLink
    };
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .post(
        "https://us-central1-gemint-app.cloudfunctions.net/api/break",
        breakData
      )
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  };

  addToCart = event => {
    this.state.cart.push(event);
    this.setState({
      cart: this.state.cart
    });
  };

  completeCart = event => {
    sessionStorage.setItem("cart", JSON.stringify(event));

    const currentCart = JSON.parse(sessionStorage.getItem("cart"));
    console.log("cart", currentCart);
    this.setState({
      continue: true,
      activeStep: 1
    });
  };

  stepperHandler = event => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  render() {
    const productList = products;
    const { classes } = this.props;
    const { errors, loading } = this.state;
    const cart = this.state.cart;
    const steps = ["SELECT PRODUCTS", "EDIT BREAK", "REVIEW & SCHEDULE"];

    const Hit = ({ hit }) => (
      <div className="hit-container">
        <div className="hit-img-wrapper">
          <img
            className="hit-img"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2Feb0ebc16d38e9dac03809a4891a48cf2%2Ftumblr_ow4o6twG151vo4heao1_400.png&f=1&nofb=1"
          />
        </div>
        <div className="hit-year">
          {hit.year}
          {/* This is so the spacing is even for each card even if there isnt a year registered for it */}
          <p className="hide-dis">Hide</p>{" "}
        </div>
        <p className="hit-league-name">
          {hit.league} {hit.name}
        </p>
        <p className="hit-manufacturer">{hit.cardManufacturer}</p>
        <button
          onClick={() => this.handleHitClick(hit)}
          className="select-spot-btn"
        >
          Add Product
        </button>
      </div>
    );

    function displayManufacturerRefinement() {
      const manufacturerRefinement = document.querySelector(
        "#manufacturer-wrapper"
      );
      if (manufacturerRefinement.style.display === "flex") {
        manufacturerRefinement.style.display = "none";
        // console.log("none");
      } else {
        manufacturerRefinement.style.display = "flex";
        // console.log("flex");
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
    function displayLeagueRefinement() {
      const leagueRefinement = document.querySelector("#league-wrapper");
      if (leagueRefinement.style.display === "flex") {
        leagueRefinement.style.display = "none";
      } else {
        leagueRefinement.style.display = "flex";
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
    const Sidebar = () => (
      <div className="sidebar">
        <h3 className="filter-by-header">Filter by Category</h3>
        {/* Manufacturer */}
        <h5 className="category-header" onClick={displayManufacturerRefinement}>
          Manufacturer
        </h5>
        <div id="manufacturer-wrapper">
          <RefinementList attribute="cardManufacturer" />
        </div>
        {/* Product */}
        <h5 className="category-header" onClick={displayProductRefinement}>
          Product
        </h5>
        <div id="product-wrapper">
          <RefinementList attribute="name" />
        </div>

        {/* League */}
        <h5 className="category-header" onClick={displayLeagueRefinement}>
          League
        </h5>
        <div id="league-wrapper">
          <RefinementList attribute="league" />
        </div>

        {/* Year */}
        <h5 className="category-header" onClick={displayYearRefinement}>
          Year
        </h5>
        <div id="year-wrapper">
          <RefinementList attribute="year" />
        </div>
      </div>
    );

    const Content = () => (
      <div className="content-container">
        <Hits hitComponent={Hit} />
        <div className="pagination">
          {" "}
          {/* Bottom numbers */}
          <Pagination showLast />
        </div>
      </div>
    );

    return (
      <div>
        <Nav />
        <div className="browse-add-container">
          {/* <div className={classes.stepper}>
            <ThemeProvider theme={muiTheme}>
              <Stepper
                activeStep={this.state.activeStep}
                alternativeLabel
                style={{
                  backgroundColor: "transparent"
                }}
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </ThemeProvider>
          </div> */}
          {this.state.continue ? (
            <div />
          ) : (
            <h2 className="add-header">What are you breaking?</h2>
            // <h2 className="browse-add-header">Add Break</h2>
          )}

          <div>
            {/* {this.state.continue || this.state.cart.length == 0 ? (
              <div />
            ) : (
              <p>You have {this.state.cart.length} products</p>
            )} */}
            {this.state.continue ? (
              <ScheduleBreak
                cart={this.state.cart}
                stepperHandler={this.stepperHandler}
              />
            ) : (
              <div>
                <InstantSearch
                  searchClient={searchClient}
                  indexName="dev_PRODUCTS"
                >
                  <Sidebar />
                  <SearchBox
                    className="search-bar"
                    translations={{
                      placeholder: "  Search for Products"
                    }}
                  />
                  <Content />
                </InstantSearch>
              </div>
            )}
          </div>

          {this.state.continue ? (
            <div />
          ) : (
            <div>
              {this.state.continue || this.state.cart.length == 0 ? (
                <div />
              ) : (
                <div className="fixed">
                  <p className="products-counter">
                    You have {this.state.cart.length} product(s)
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => this.completeCart(this.state.cart)}
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Add);
