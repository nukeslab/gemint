import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import GemintLogoOutline from "../img/gemint-logo-outline.png";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import globalContext from "../context/globalContext";
import ForgotPassword from "../components/forgotPassword";
import Nav from "../components/navigation"
import Foooter from "../components/footer"
import Footer from "../components/footer";

function Login(props) {
  const { user, setUser } = useContext(globalContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    axios
    .post(
      "https://us-central1-gemint-app.cloudfunctions.net/api/login",
      userData
      )
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLoading(false);
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
        })
        .then(() => {
          try {
            if (
              typeof props.location.state.loginRedirect !== "undefined" ||
              props.location.state.loginRedirect !== undefined
              ) {
                history.push(props.location.state.loginRedirect);
              }
            } catch (e) {
              history.push("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      };
      
      console.log(user)
      return (
        <div>
            {/* NavBar Component Call*/}
            <Nav />
            {/* NavBar End*/}

            {/* row 1  */}
            <div class="reset section">
        <div class="container text-center">
            <div class="row">
                <h1>SELLER LOGIN</h1>
                <p class="m-0">VERIFIED SELLERS CAN LOGIN TO YOUR GEMINT ACCOUNT.</p>
                <small class="mb-3">Don't have a login? <a href="/registration">Sign up</a> for a free trial</small>
                
                <div class="col-md-2 d-none d-sm-block"></div>
                <div class="col-md-8">
                    <form noValidate>
                        <div class="formcontainer">
                            <div class="container">
                                <div class="mb-3 text-center">
                                    <label><strong>Email</strong></label>
                                    <input
                                    required
                                    label="Email Address"
                                    id="email"
                                    name="email"
                                    helperText={errors.email}
                                    error={errors.email ? true : false}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div class="mb-3 text-center">
                                    <label><strong>Password</strong></label>
                                    <input
                                    required
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    helperText={errors.password}
                                    error={errors.password ? true : false}
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                   
                                </div>
                            </div>
                <ForgotPassword />
                        </div>
                        <button
                          className="btn abtn"
                          type="submit"
                          onClick={(e) => handleSubmit(e)}
                          disabled={loading || !email || !password}>
                          Log In
                          {loading && <CircularProgress size={30} />}
                        </button>
                    </form>
                </div>
                <div class="col-md-2 d-none d-sm-block"></div>
            </div>
        </div>  
    </div>
            {/* row 1 End */}
        </div>
    // <div className="sign-up-container">
    //   {/* <GuestNav /> */}
    //   {/* <div className="sign-up-wrapper"> */}
    //   <div className="login-wrapper">
    //     <a className="login-a" href="signup">
    //       Sign Up
    //     </a>
    //   </div>
    //   <div className="gemint-logo-img-wrapper">
    //     <Link to="/">
    //       <img src={GemintLogoOutline} className="gemint-logo-img" />
    //     </Link>
    //   </div>
    //   <h1 className="create-account-header">Login</h1>
    //   <div className="create-account-wrapper">
    //     <div className="column">
    //       <form noValidate>
    //         <div className="inputs-container">
    //           {/* Email  */}
    //           <div className="label-input-wrapper">
    //             <label>Email</label>
    //             <input
    //               required
    //               label="Email Address"
    //               id="email"
    //               name="email"
    //               helperText={errors.email}
    //               error={errors.email ? true : false}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>

    //           {/* Password */}
    //           <div className="label-input-wrapper">
    //             <label>Password</label>
    //             <input
    //               required
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="current-password"
    //               helperText={errors.password}
    //               error={errors.password ? true : false}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         {errors.general && <p variant="body2">{errors.general}</p>}

    //         <div className="btn-wrapper">
    //           <button
    //             className="btn"
    //             type="submit"
    //             onClick={(e) => handleSubmit(e)}
    //             disabled={loading || !email || !password}
    //           >
    //             Log In
    //             {loading && <CircularProgress size={30} />}
    //           </button>
    //         </div>
    //         <div className="forgot-password-wrapper"></div>
    //       </form>
    //     </div>
    //     <div id="middle">
    //       {/* 
    //       <span></span>
    //       <p className="or">OR</p>

    //       <span></span>
    //     </div>

    //     <div className="column" id="right">
    //       <div className="btn-wrapper">
    //         <button className="btn" id="facebook">
    //           {" "}
    //           <AiFillFacebook className="btn-icon" size={25} />
    //           Continue with Facebook
    //         </button>
    //       </div>
    //       <div className="btn-wrapper">
    //         <button className="btn" id="google">
    //           <AiOutlineGoogle className="btn-icon" size={25} />
    //           Continue with Google
    //         </button>
    //       </div>
    //         */}
    //     </div>
    //   </div>
    //   <p className="terms-and-conditions"></p>
    // </div>
  );
}

export default Login;
