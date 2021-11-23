import React, { useContext, useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Alert, Button, Input } from "reactstrap";
import axios from "axios";
import globalContext from "../context/globalContext";
import { server_uri } from "../config";
import { useHistory } from "react-router";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import Nav from "../components/navigation";

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [alertMessage, setAlertMessage] = useState();
  const [billingAddressMatch, setBillingAddressMatch] = useState(true);
  const [rateList, setRateList] = useState();

  const {
    user,
    response,
    totalAmount,
    cart,
    cartTotal,
    email,
    shippingDetails,
    billingDetails,
    setBillingDetails,
    grossTotal,
    setGrossTotal,
    setShippingDetails,
    selectedCourier,
    setSelectedCourier
  } = useContext(globalContext);
  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
  };

  const retrieveRates = () => {
    if (cart && cart?.length > 0) {
      axios
        .post(server_uri + "/easyship/rate-list", {
          items: cart.map(item => ({
            actual_weight: item.price_data.product_data.actual_weight,
            height: item.price_data.product_data.height,
            width: item.price_data.product_data.width,
            length: item.price_data.product_data.length,
            category: item.price_data.product_data.category,
            declared_currency: item.price_data.product_data.declared_currency,
            declared_customs_value:
              item.price_data.product_data.declared_customs_value,
            quantity: item.quantity
          })),
          destination_country_alpha2: billingDetails.address.country,
          destination_city: billingDetails.address.city || "",
          destination_state: billingDetails.address.region || "",
          destination_address_line_1: billingDetails.address.addressLine1 || "",
          destination_address_line_2: billingDetails.address.addressLine2 || "",
          destination_postal_code: billingDetails.address.zip || "",
          // apply_shipping_rules: true,
          origin_address_id: billingDetails.origin_address_id || null
        })
        .then(response => {
          console.log(response.data);
          setRateList(response.data);
          setSelectedCourier(response.data);
        })
        .catch(err => {
          console.log(err);
          alert("ERROR : Check log for error");
        });
    } else {
      alert("Go back and add some products to the carts");
    }
  };

  const handlePay = async e => {
    e.preventDefault();
    console.log("email!", email);
    try {
      let customerDetails = {
        name: billingDetails.name,
        email: email,
        address:
          {
            city: billingDetails.address.city || null,
            line1: billingDetails.address.addressLine1 || null,
            state: billingDetails.address.region || null,
            country: billingDetails.address.country || null,
            postal_code: billingDetails.address.zip || null
          } || null
      };
      console.log("customer details", customerDetails);
      setAlertMessage("Loading");
      if (!stripe || !elements) {
        return;
      }
      const cardElement = elements.getElement(CardElement);

      // CREATE PAYMENT METHOD
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: customerDetails
      });
      console.log(paymentMethodReq);

      // PAYMENT INTENT
      let paymentIntent;
      if (response.data.statusCode === 1) {
        paymentIntent = await axios.post(server_uri + "/payment", {
          amount: parseFloat(totalAmount),
          productInfo: cart,
          // sellerId: cart[0]?.merchant.id,
          payment_method: paymentMethodReq.paymentMethod.id,
          userId: response.data.customer.id,
          userEmail: response.data.customer.email,
          user: user,
          phone: billingDetails.phone,
          name: billingDetails.name,
          grossTotal,
          address: {
            city: billingDetails.address.city || null,
            country: billingDetails.address.country || null,
            line1: billingDetails.address.addressLine1 || null,
            line2: billingDetails.address.addressLine2 || null
          },
          cartTotal: totalAmount,
          products: cart.map(p => ({
            productId: p.productId,
            spotPrice: p.price_data.unit_amount,
            breakSpot: p.breakSpot,
            sellerId: p.merchant.id,
            productName: p.price_data.product_data.name
          }))
        });
        // paymentResultsFunction(paymentIntent);
        // console.log(paymentIntent);
      } else {
        paymentIntent = await axios.post(server_uri + "/payment", {
          amount: parseFloat(totalAmount),
          productInfo: cart,
          payment_method: paymentMethodReq.paymentMethod.id,
          userEmail: email,
          cartTotal: totalAmount,
          grossTotal,
          products: cart.map(p => ({
            productId: p.productId,
            spotPrice: p.price_data.unit_amount,
            spotFilled: p.quantity,
            sellerId: p.merchant.id,
            productName: p.price_data.product_data.name
          }))
        });

        // console.log(paymentIntent);
      }

      // REDIRECT TO SUCCESS OR FAILURE
      if (paymentIntent.data.paymentStatus.status === "succeeded") {
        // console.log("called");
        console.log(paymentIntent.data);

        // EASYSHIP LABEL CONFIRM

        const shipment = await axios
          .post(`${server_uri}/easyship/create-shipment-label`, {
            origin_address_id: billingDetails.origin_address_id || null,
            selected_courier_id: selectedCourier.courier_id,
            destination_country_alpha2: billingDetails.address.country,
            destination_city: billingDetails.address.city,
            destination_postal_code: billingDetails.address.zip,
            destination_state: billingDetails.address.region,
            destination_name: billingDetails.name,
            destination_address_line_1: billingDetails.address.addressLine1,
            destination_address_line_2: billingDetails.address.addressLine2,
            destination_phone_number: billingDetails.phone,
            destination_email_address: email,
            items: cart.map(item => ({
              description: item.price_data.product_data.name,
              sku: null,
              actual_weight: item.price_data.product_data.actual_weight,
              height: item.price_data.product_data.height,
              width: item.price_data.product_data.width,
              length: item.price_data.product_data.length,
              category: item.price_data.product_data.category,
              declared_currency: item.price_data.product_data.declared_currency,
              declared_customs_value:
                item.price_data.product_data.declared_customs_value,
              quantity: item.quantity
            }))
          })

          .then(shipment => {
            setShippingDetails(shipment);
            console.log(shippingDetails);
            setAlertMessage(
              "Success : Payment Successful & Shipment Created : To confirm label go to merchant section"
            );
            console.log(shipment);
            history.push("/checkout/confirm");
          })
          .catch(err => {
            setAlertMessage(
              "Error : Check log for more details - Shipment Error"
            );
          });

        // CONFIRMING LABEL after payment Confirmed

        // axios
        //   .post(server_uri + "/easyship/confirm-label", {
        //     easyship_shipment_id:
        //       shippingDetails.data.shipment.easyship_shipment_id,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => console.log(err));

        // REDIRECT TO SUCCESS PAGE
        // setTimeout(() => {
        //   window.location.replace("/paymentSuccessful", "_blank");
        // }, 2500);
      } else {
        console.log(paymentIntent.data.response);

        // REDIRECT TO FAIL PAGE
        // setTimeout(() => {
        //   window.location.replace("/paymentFailed", "_blank");
        // }, 2500);
        setAlertMessage("Error : Check console for details - Payment error");
      }
    } catch (error) {
      setAlertMessage("Error: Check Console for details.");
      if (error) {
        console.log(" [error]", error);
      }
    }
  };

  useEffect(() => {
    if (billingAddressMatch && billingDetails.address.zip) {
      retrieveRates();
      console.log("attempting to retrieve shipping rates");
    } else {
      console.log("shiping rates need more data");
    }
  }, [billingAddressMatch]);

  useEffect(() => {
    setGrossTotal({
      cartTotal,
      shippingCharge: selectedCourier?.total_charge,
      grossTotal: cartTotal + selectedCourier?.total_charge
    });
  }, [selectedCourier]);

  return (
    <>
      <div className="container">
        {grossTotal.hasOwnProperty("shippingCharge") &&
        grossTotal.shippingCharge !== 0 ? (
          <p>
            Cart Total <span>$ {grossTotal.cartTotal} </span>
          </p>
        ) : (
          ""
        )}
        {grossTotal.hasOwnProperty("shippingCharge") &&
        grossTotal.shippingCharge !== 0 ? (
          <p>
            Shipping Charge <span>$ {grossTotal.shippingCharge} </span>
          </p>
        ) : (
          ""
        )}
        {grossTotal.hasOwnProperty("grossTotal") &&
        grossTotal.grossTotal !== 0 ? (
          <p>
            Gross Total = <span>$ {grossTotal.grossTotal} </span>
          </p>
        ) : (
          ""
        )}
        <form
          style={{
            width: "400px"
          }}
          onSubmit={handleSubmit}
        >
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                  backgroundColor: "whitesmoke",
                  lineHeight: "40px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#343856"
                  }
                },
                invalid: {
                  color: "#9e2146"
                }
              }
            }}
          />

          <input
            type="checkbox"
            id="billingAddressMatch"
            name="billingAddressMatch"
            checked={billingAddressMatch}
            onChange={e => setBillingAddressMatch(!billingAddressMatch)}
          />

          <label for="billingAddressMatch">
            Billing address is the same as shipping
          </label>
          {billingAddressMatch ? (
            <div></div>
          ) : (
            <div>
              <form>
                <label>Address Line 1</label>
                <input
                  type="text"
                  placeholder=""
                  name="shippingAddressLine1"
                  id="shippingAddressLine1"
                  value={shippingDetails.address.addressLine1}
                />
                <label>Address Line 2</label>
                <input
                  type="text"
                  placeholder=""
                  name="shippingAddressLine2"
                  id="shippingAddressLine2"
                  value={shippingDetails.address.addressLine2}
                />

                <label>City</label>
                <input
                  type="text"
                  placeholder=""
                  name="shippingCity"
                  id="shippingCity"
                  value={shippingDetails.address.city}
                />

                <RegionDropdown
                  style={{
                    paddingLeft: "10px",
                    fontSize: "20px",
                    maxWidth: "70%  "
                  }}
                  countryValueType="short"
                  disableWhenEmpty={true}
                  country={shippingDetails.address.country}
                  value={shippingDetails.address.region}
                  onChange={val => {
                    setShippingDetails({
                      ...shippingDetails,
                      address: {
                        ...shippingDetails.address,
                        region: val
                      }
                    });
                  }}
                />
                <CountryDropdown
                  style={{
                    paddingLeft: "10px",
                    fontSize: "20px",
                    maxWidth: "80%  "
                  }}
                  valueType="short"
                  value={shippingDetails.address.country}
                  onChange={val => {
                    console.log(val);
                    setBillingDetails({
                      ...shippingDetails,
                      address: {
                        ...shippingDetails.address,
                        country: val
                      }
                    });
                  }}
                />
              </form>
            </div>
          )}

          {alertMessage && (
            <Alert
              color={
                alertMessage.includes("Loading")
                  ? "warning"
                  : alertMessage.includes("Success")
                  ? "success"
                  : "danger"
              }
            >
              {alertMessage}
            </Alert>
          )}
          <Button
            type="submit"
            className="btn btn-primary m-3"
            disabled={!stripe}
            onClick={handlePay}
          >
            Pay
          </Button>
        </form>
      </div>
    </>
  );
};

const CARD_OPTIONS = {
  iconStyle: "solid",
  width: "200px",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#87bbfd",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};

export default CheckoutPage;
