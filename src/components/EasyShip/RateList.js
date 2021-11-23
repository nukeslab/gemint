import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, FormGroup, Input, Label } from "reactstrap";
import { server_uri } from "../../config";
import globalContext from "../../context/globalContext";

function RateList({ nextButton }) {
  const [rateList, setRateList] = useState();
  const { email, billingDetails } = useContext(globalContext);
  const {
    selectedCourier,
    setSelectedCourier,
    grossTotal,
    setGrossTotal,
    cartTotal,
    cart,
  } = useContext(globalContext);

  const retrieveRates = (e) => {
    e.preventDefault();
    if (cart && cart?.length > 0) {
      axios
        .post(server_uri + "/easyship/rate-list", {
          items: cart.map((item) => ({
            actual_weight: item.price_data.product_data.actual_weight,
            height: item.price_data.product_data.height,
            width: item.price_data.product_data.width,
            length: item.price_data.product_data.length,
            category: item.price_data.product_data.category,
            declared_currency: item.price_data.product_data.declared_currency,
            declared_customs_value:
              item.price_data.product_data.declared_customs_value,
            quantity: item.quantity,
          })),
          destination_country_alpha2: billingDetails.address.country,
          destination_city: billingDetails.address.city || "",
          destination_state: billingDetails.address.region || "",
          destincation_address_line_1:
            billingDetails.address.addressLine1 || "",
          destincation_address_line_2:
            billingDetails.address.addressLine2 || "",
          destination_postal_code: billingDetails.address.zip || "",
          // apply_shipping_rules: true,
          origin_address_id: billingDetails.origin_address_id || null,
        })
        .then((response) => {
          console.log(response.data);
          setRateList(response.data);
          setSelectedCourier(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert("ERROR : Check log for error");
        });
    } else {
      alert("Go back and add some products to the carts");
    }
  };

  useEffect(() => {
    setGrossTotal({
      cartTotal,
      shippingCharge: selectedCourier?.total_charge,
      grossTotal: cartTotal + selectedCourier?.total_charge,
    });
  }, [selectedCourier]);
  return (
    <div styles={styles.container}>
      <Button color="primary" onClick={(e) => retrieveRates(e)}>
        Retrieve Shipping Rates
      </Button>
      {rateList &&
        rateList?.messages?.length > 0 &&
        rateList?.messages.map((message) => {
          return <Alert color="danger">{message}</Alert>;
        })}
      {rateList && rateList?.rates?.length > 0 && (
        <FormGroup
          tag="fieldset"
          style={{
            background: "#bac0cc",
            padding: "12px",
            margin: "10px",
            marginTop: "20px",
          }}
        >
          Select your shipping partner
          {rateList.rates.map((rate, index) => (
            <FormGroup
              style={{
                background: "whitesmoke",
                marginBottom: "5px",
                paddingLeft: "35px",
                paddingRight: "35px",
                textAlign: "left",
              }}
              check
              key={index}
              onChange={(e) => setSelectedCourier(rate)}
            >
              <Input
                id={`radio1-option${index + 1}`}
                type="radio"
                name={`radio1`}
              />
              <Label
                style={{ fontSize: "18px" }}
                check
                for={`radio1-option${index + 1}`}
              >
                {rate.courier_display_name} - ${rate.total_charge}
                <p style={{ fontSize: "12px" }}>
                  Approx delivery in {rate.max_delivery_time} days
                </p>
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
      )}{" "}
      {selectedCourier && (
        <Button
          color="primary"
          style={{ marginBottom: "5%", marginTop: "10px" }}
          onClick={(e) => nextButton(e)}
        >
          Next
        </Button>
      )}
    </div>
  );
}
const styles = {
  container: {
    color: "whitesmoke",
    marginBottom: "30px",
  },
};
export default RateList;
