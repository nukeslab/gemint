import React, { useState, useEffect } from "react";
import globalContext from "./globalContext";
import axios from "axios";

function GlobalState({ children }) {
  const [response, setResponse] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();

  const [selectedCourier, setSelectedCourier] = useState("");
  const [grossTotal, setGrossTotal] = useState({
    cartTotal,
    shippingCharge: 0,
  });
  const [shipmentList, setShipmentList] = useState({});

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    phone: "",
    address: {
      addressLine1: " ",
      addressLine2: " ",
      city: "",
      region: "",
      country: "",
      zip: "",
    },
  });
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    phone: "",
    address: {
      addressLine1: " ",
      addressLine2: " ",
      city: "",
      region: "",
      country: "United States",
      zip: "",
    },
  });

  useEffect(() => {
    if (user) {
      console.log("app user", user);
      setEmail(user.email);
    } else {
      console.log("querying for user");
      const authToken = localStorage.getItem("AuthToken");
      axios.defaults.headers.common = { Authorization: `${authToken}` };
      axios
        .get("https://us-central1-gemint-app.cloudfunctions.net/api/user")
        .then((response) => {
          console.log("data", response.data.userCredentials);
          setUser(response.data.userCredentials);
          setEmail(user.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <globalContext.Provider
      value={{
        shipmentList,
        setShipmentList,
        selectedCourier,
        setSelectedCourier,
        response: response,
        setResponse,
        cartTotal,
        setCartTotal,
        cart: cart,
        setCart,
        email,
        setEmail,
        billingDetails,
        setBillingDetails,
        grossTotal,
        setGrossTotal,
        shippingDetails,
        setShippingDetails,
        user,
        setUser,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default GlobalState;
