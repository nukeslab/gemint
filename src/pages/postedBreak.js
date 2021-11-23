import React, { useContext, useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Nav from "../components/navigation";
import Randomizer from "../components/randomizer";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import globalContext from "../context/globalContext";

import BreakList from "../components/BreakList";
import { AiOutlineLeft } from "react-icons/ai";
import {
  IoLogoFacebook,
  IoLogoTwitch,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io";

const PostedBreak = (props) => {
  const { cartTotal, setCartTotal, cart, setCart, user } =
    useContext(globalContext);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const breakId = props.match.params.breakId;

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://us-central1-gemint-app.cloudfunctions.net/api/break/${breakId}`
      )
      .then((response) => {
        const breakData = response.data;
        setProduct(breakData);
      });
  }, [breakId]);

  useEffect(() => {
    computecartTotal();
  }, [cart]);

  const addItemToCart = (breakSpot, index) => {
    console.log(breakSpot);
    const spotNumber = index + 1;
    const addedProduct = product;
    const productTitle =
      product.products[0].league +
      " " +
      product.products[0].cardManufacturer +
      " " +
      "Spot " +
      spotNumber.toString();

    console.log(productTitle);

    if (cart.find((c) => c.price_data.product_data.name === productTitle)) {
      const newArr = cart.map((p) => {
        if (p.price_data.product_data.name === product.title) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      if (newArr.length >= 0) {
        setCart(newArr);
      }
    } else {
      setCart([
        //Commented so that products from only one merchant are added
        ...cart,
        {
          productId: breakId,
          breakSpot: breakSpot,
          spotNumber: spotNumber,
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: breakSpot.spotPrice,
            product_data: {
              name: productTitle,
              actual_weight: 0.05669905,
              height: 29.21,
              width: 5,
              length: 15.24,
              category: "toys",
              declared_currency: "USD",
              declared_customs_value: 4,
            },
          },

          merchant: {
            id: "acct_1IVTl0PIylH5GvoE",
          },
        },
      ]);
    }
  };

  const removeItemFromCart = (product) => {
    const newArr1 = cart.map((p) => {
      if (p.productId === product.id) {
        if (p.quantity > 0) {
          return { ...p, quantity: p.quantity - 1 };
        }
      }
      return p;
    });
    const newArr2 = newArr1.filter((item) => {
      if (item.quantity > 0) {
        return item;
      }
      return false;
    });

    // console.log(newArr[0]);
    setCart(newArr2);
  };

  const computecartTotal = () => {
    let amount = 0;
    cart.map((c) => {
      amount = c.quantity * c.price_data.unit_amount + amount;
      return c;
    });
    setCartTotal(amount);
    console.log(amount);
  };

  const PayButton = () => {
    if (user) {
      return (
        <button className="purchase-btn">
          <Link
            to={{
              pathname: "/payment",
            }}
          >
            {" "}
            Pay ${cartTotal}
          </Link>
        </button>
      );
    } else {
      return (
        <button className="purchase-btn">
          <Link
            to={{
              pathname: "/login",
              state: { loginRedirect: "/payment" },
            }}
          >
            {" "}
            Pay ${cartTotal}
          </Link>
        </button>
      );
    }
  };

  function BreakSpotStatus(props) {
    const { index, orderedBy } = props;

    if (typeof user !== "undefined" && user.userId === orderedBy) {
      return (
        <div className="spot-wrapper">
          <label
            for={`spot-${index}`}
            name={`spot-${index}`}
            className="spot-label"
            id="bought"
          >
            Your spot
          </label>
          <input
            disabled
            type="checkbox"
            id={`spot-${index}`}
            name={`spot-${index}`}
            value="Sold"
          />
        </div>
      );
    } else {
      return (
        <div className="spot-wrapper">
          <label
            for={`spot-${index}`}
            name={`spot-${index}`}
            className="spot-label"
            id="sold"
          >
            Sold
          </label>
          <input
            disabled
            type="checkbox"
            id={`spot-${index}`}
            name={`spot-${index}`}
            value="Sold"
          />
        </div>
      );
    }
  }

  const userLink = "Instagram";
  let DisplayUserLink;
  if (userLink === "Instagram") {
    DisplayUserLink = <IoLogoInstagram size={50} />;
  } else {
    DisplayUserLink = <div></div>;
  }
  return (
    <div>
      <Nav />
      <div className="back-btn-wrapper">
        <Link to="/browse" className="back-btn-link">
          <AiOutlineLeft size={30} />
          BACK
        </Link>
        {window.location.href.indexOf("paymentFailed") > -1 && (
          <alert color="danger">Payment Failed. Try Again !</alert>
        )}
        {window.location.href.indexOf("paymentSuccess") > -1 && (
          <alert color="success">Payment Successful. Yayy !</alert>
        )}
        {window.location.href.indexOf("success-merch-acc") > -1 && (
          <alert color="success">Connect Account Creation Success.</alert>
        )}
        {window.location.href.indexOf("failure-merch-acc") > -1 && (
          <alert color="danger">
            Connect Account Creation Failed. Try Again !
          </alert>
        )}
      </div>
      <div id="posted-break-container">
        <div id="posted-break-wrapper">
          {product ? (
            product.products.map((item) => (
              <div className="left-right-wrapper">
                <div className="left">
                  <div className="product-img-wrapper">
                    <img
                      className="product-img"
                      src={`https://gemint-prod.web.app/${item.sport}/${item.name}/${item.year}-${item.cardManufacturer}-${item.league}-${item.name}-Hobby.png`}
                    />
                  </div>
                  {/* Product Details */}
                  <div className="product-details-section">
                    <div className="header-wrapper">
                      <div className="rectangle"></div>
                      <h2>PRODUCT DETAILS</h2>
                    </div>
                    <p className="product-details-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Augue lacus viverra vitae congue eu consequat.
                      Gravida quis blandit turpis cursus in hac habitasse platea
                      dictumst.
                    </p>
                  </div>

                  {/* In this break */}
                  <div className="in-this-break-section">
                    <div className="header-wrapper">
                      <div className="rectangle"></div>
                      <h2>IN THIS BREAK</h2>
                    </div>
                    {product ? (
                      product.breakSpotsFilled.map((breakSpot, index) =>
                        breakSpot.spotFilled ? (
                          <div>
                            <p className="break-names">
                              {breakSpot.orderedByUsername
                                .charAt(0)
                                .toUpperCase()}
                            </p>
                          </div>
                        ) : (
                          <div></div>
                        )
                      )
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>

                <div className="right">
                  <h4 className="product-year">{item.year}</h4>
                  <div className="product-league-name">
                    <h2 className="product-league">{item.league}</h2>
                    <h2 className="product-name">{item.name}</h2>
                  </div>
                  <h3 className="product-card-manufacturer">
                    {item.cardManufacturer}
                  </h3>
                  <h3 className="product-box">Hobby box</h3>
                  <div className="break-type-wrapper">
                    <h5 className="break-type-header">Break Type</h5>
                    <h5 className="break-type-header">Spots</h5>
                  </div>
                  <div className="break-type-wrapper" id="bottom-wrapper">
                    <p className="break-type-p">{product.breakType}</p>
                    <p className="break-type-p">
                      {product.breakMaxSpots} Total
                    </p>
                  </div>
                  <h3 className="price-per-spot">
                    ${product.breakEntryPrice}{" "}
                    <span className="per-spot">per spot</span>
                  </h3>
                  <h2 className="select-spot-header">Select your spot:</h2>

                  {product ? (
                    product.breakSpotsFilled.map((breakSpot, index) =>
                      breakSpot.spotFilled ? (
                        <BreakSpotStatus
                          index={index}
                          orderedBy={breakSpot.orderedBy}
                        />
                      ) : (
                        <div className="spot-wrapper">
                          <label for={`spot-${index}`} className="spot-label">
                            <h3 className="spot-number">Spot {index + 1}</h3>
                            <h3 className="spot-price">
                              ${product.breakEntryPrice}
                            </h3>
                          </label>
                          <input
                            type="checkbox"
                            id={`spot-${index}`}
                            name={`spot-${index}`}
                            value={`spot-${index}`}
                            onClick={(e) => addItemToCart(breakSpot, index)}
                          />
                        </div>
                      )
                    )
                  ) : (
                    <p>Loading...</p>
                  )}

                  {cartTotal > 0 ? (
                    <PayButton />
                  ) : (
                    <button className="purchase-btn" disabled>
                      Add a product
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {product ? (
          <div className="seller-section">
            <div className="header-wrapper">
              <div className="rectangle"></div>
              <h2>THE SELLER</h2>
            </div>{" "}
            <div className="seller-wrapper">
              <div className="seller-img-wrapper">
                <img
                  src="https://legacy.imagemagick.org/Usage/canvas/gradient_angle_masked.png"
                  className="seller-img"
                />
              </div>
              <div className="seller-middle-column">
                <h3 className="seller-username">{product.createdByUsername}</h3>
                <p className="seller-info">Member since 2020</p>
                <p className="seller-info">Phoenix, AZ</p>
                <p className="seller-bio">
                  The sellers bio will go here. 🔥🔥🔥 Sup Reese. 😎
                </p>
                <a
                  className="visit-profile"
                  href={`/breakers/${product.createdByUsername}`}
                >
                  Visit seller profile
                </a>
              </div>
              <div className="seller-right-column">
                <label className="column2-label" id="seller-link-label">
                  SELLER SOCIAL LINKS
                </label>
                <div className="social-link-wrapper">
                  <div className="im-just-an-icon-living">
                    {/* <IoLogoInstagram size={50} /> */}
                    {DisplayUserLink}
                  </div>
                  <div className="im-just-an-icon-living">
                    {/* <IoLogoYoutube size={50} /> */}
                    {DisplayUserLink}
                  </div>
                  <div className="im-just-an-icon-living">
                    {DisplayUserLink}
                    {/* <IoLogoTwitch size={50} /> */}
                  </div>
                  <div className="im-just-an-icon-living">
                    {DisplayUserLink}
                    {/* <IoLogoFacebook size={50} /> */}
                  </div>
                </div>
                {/* <p className="paste-link-p">
                  PASTE THIS LINK TO YOUR BROWSER VIEW LIVE STREAMS
                </p> */}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <div className="header-wrapper">
            <div className="rectangle"></div>
            <h2>BREAKS YOU MAY LIKE</h2>
          </div>{" "}
          <BreakList />
        </div>

        <Randomizer product={product} />
        <div className="back-to-browse-btn-wrapper">
          <Link to="/browse">
            <button className="back-to-browse-btn">BACK TO BROWSE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostedBreak;
