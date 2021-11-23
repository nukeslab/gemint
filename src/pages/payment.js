import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Alert, Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import axios from "axios";
import globalContext from "../context/globalContext";
import { server_uri } from "../config";
import RateList from "../components/EasyShip/RateList";
import Nav from "../components/navigation";

const payment = props => {
  // let history = useHistory();

  // const {
  //   email,
  //   setEmail,
  //   cart,
  //   setResponse,
  //   cartTotal,
  //   billingDetails,
  //   setBillingDetails,
  //   selectedCourier,
  //   shippingDetails,
  //   setShippingDetails,
  //   grossTotal,
  //   user
  // } = useContext(globalContext);

  // const backButton = () => {
  //   history.push("/");
  // };
  // const nextButton = async e => {
  //   e.preventDefault();
  //   const res = await axios
  //     .post(`${server_uri}/customer-exist`, {
  //       email: user.email
  //     })
  //     .then(result => {
  //       setResponse(result);
  //       console.log("customer exist", result);
  //       history.push("/checkout");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("Error: check console for error details");
  //     });
  // };
  return (
  <div class="firsta section">
  <div data-aos="fade-up" data-aos-duration="1000"  class="container">
      <div data-aos="fade-up" data-aos-duration="1000"  class="row">
          <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-2"></div>
          <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-8 standslider">
              <h1 class="text-center">ENTER PAYMENT DETAILS</h1>
            <form>
                <label class="mt-4" for="">Email</label>
                <input type="text" placeholder="xyz@email.com" name="" id=""></input>
                    <div data-aos="fade-up" data-aos-duration="1000"  class="mt-4 ms-auto text-center">
                        
                        <img class="image-fluid text-center" src="images/payment-1.png" alt=""></img>
                        <input type="radio" class="text-center" name="payment" id=""></input>
                    
                        <img class="image-fluid text-center" src="images/payment-2.png" alt=""> </img>
                        <input type="radio" class="text-center" name="payment" id=""></input>

                        <img class="image-fluid text-center" src="images/payment-3.png" alt=""></img> 
                        <input type="radio" class="text-center" name="payment" id=""></input>

                        <img class="image-fluid text-center" src="images/payment-4.png" alt=""> </img>
                        <input type="radio" class="text-center" name="payment" id=""></input>
                    </div>
                    

                <label class="mt-4" for="">Card Information</label>
                <input type="text" name="" placeholder="1234 1234 1234 " id=""></input>
                <input type="text" placeholder="MM/YY" style="width:50%;float:left; "></input> 
                <input type="text" placeholder="CVC" style="width:50%;float:right;"></input> 

                <label class="mt-4" for="">Country or Region</label>
                <input type="text" placeholder="Country or Region" name="" id=""> </input>

                    <div data-aos="fade-up" data-aos-duration="1000"  class="text-center my-3">
                <input class="abtn " type="button" value="START TRIAL" style="background-color: transparent;"> </input>
            </div>   
            </form>
        <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-2"></div>
    </div>
    </div>
    </div>

   

</div>
  )}


export default payment;
