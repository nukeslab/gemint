import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// import GuestNav from "../components/guestnav";
import axios from "axios";
import GemintLogoOutline from "../img/gemint-logo-outline.png";
import { AiFillApple, AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../components/navigation"
import Footer from "../components/footer";

const styles = (theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progess: {
    position: "absolute",
  },
});

class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      errors: [],
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const newUserData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(
        "https://us-central1-gemint-app.cloudfunctions.net/api/signup",
        newUserData
      )
      .then((response) => {
        localStorage.setItem("AuthToken", `${response.data.token}`);
        this.setState({
          loading: false,
        });
        window.location.href = "/";
      })
      .catch((error) => {
        this.setState({
          errors: error.response.data,
          loading: false,
        });
      });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <div>
      <NavBar />
   <div className="section">
       <div class="row">
       <h1 class="text-center">CREATE YOUR ACCOUNT</h1>
       <p class="text-center"> JOIN THE GEMINT WAITLIST TO RESERVE YOUR USERNAME<br/>
           AND BE ENTERED TO WIN FREE CARDS</p>
       </div>

   <div class="row">
       <div class="col-md-3"></div>
       <div class="col-md-6">
           <form  className={classes.form} noValidate>
               <div class="formcontainer">
                   <div class="container">
                       <div class="mb-3">
                           <label for="uname"><strong>Username</strong></label>
                           <input
                            required
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            helperText={errors.username}
                            error={errors.username ? true : false}
                            onChange={this.handleChange}
                          />
                           <label class="form-check-label" style={{fontSize: "12px"}}>This username is all yours</label>
                           <input type="checkbox" class="form-check-input float-end" id="exampleCheck1"></input>
                       </div>
           
                       <div class="mb-3">
                           <label for="uname"><strong>First Name</strong></label>
                           <input
                            required
                            id="firstName"
                            label="firstName"
                            name="firstName"
                            autoComplete="firstName"
                            helperText={errors.firstName}
                            error={errors.firstName ? true : false}
                            onChange={this.handleChange}
                          />
                       </div>
           
                       <div class="mb-3">
                           <label for="uname"><strong>Last Name</strong></label>
                           <input
                            required
                            id="lastName"
                            label="lastName"
                            name="lastName"
                            autoComplete="lastName"
                            helperText={errors.lastName}
                            error={errors.lastName ? true : false}
                            onChange={this.handleChange}
                          />
                       </div>
           
                       <div class="mb-3">
                           <label for="uname"><strong>Email</strong></label>
                           <input
                            required
                            label="Email Address"
                            id="email"
                            name="email"
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            onChange={this.handleChange}
                          />
                       </div>
           
                       <div class="mb-3">
                           <label for="uname"><strong>Password</strong></label>
                           <input
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            onChange={this.handleChange}
                          />
                       </div>
       
                   </div>
                   <button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="btn"
                  onClick={this.handleSubmit}
                  disabled={
                    loading ||
                    !this.state.email ||
                    !this.state.password ||
                    !this.state.username
                  }
                >
                  Create Account
                  {loading && (
                    <CircularProgress size={30} className={classes.progess} />
                  )}
                </button>
               </div>
           </form>
       </div>
       </div>
       <div class="col-md-3"></div>
       </div>
   </div>
      // <div className="sign-up-container">
      //   {/* <GuestNav /> */}
      //   {/* <div className="sign-up-wrapper"> */}
      //   <div className="login-wrapper">
      //     <a className="login-a" href="login">
      //       Sign in
      //     </a>
      //   </div>
      //   <div className="gemint-logo-img-wrapper">
      //     <Link to="/">
      //       <img src={GemintLogoOutline} className="gemint-logo-img" />
      //     </Link>
      //   </div>
      //   <h1 className="create-account-header">Create Account</h1>
      //   <div className="create-account-wrapper">
      //     <div className="column">
      //       <form className={classes.form} noValidate>
      //         <div className="inputs-container">
      //           <div className="label-input-wrapper">
      //             <div className="first-last-wrapper">
      //               <div className="half">
      //                 {/* First & Last */}
      //                 <label>First</label>
      //                 <input
      //                   required
      //                   id="firstName"
      //                   label="firstName"
      //                   name="firstName"
      //                   autoComplete="firstName"
      //                   helperText={errors.firstName}
      //                   error={errors.firstName ? true : false}
      //                   onChange={this.handleChange}
      //                 />
      //               </div>
      //               <div className="half">
      //                 <label>Last</label>
      //                 <input
      //                   required
      //                   id="lastName"
      //                   label="lastName"
      //                   name="lastName"
      //                   autoComplete="lastName"
      //                   helperText={errors.lastName}
      //                   error={errors.lastName ? true : false}
      //                   onChange={this.handleChange}
      //                 />
      //               </div>
      //             </div>
      //           </div>

      //           {/* Username  */}
      //           <div className="label-input-wrapper">
      //             <label>Username</label>
      //             <input
      //               required
      //               id="username"
      //               label="Username"
      //               name="username"
      //               autoComplete="username"
      //               helperText={errors.username}
      //               error={errors.username ? true : false}
      //               onChange={this.handleChange}
      //             />
      //           </div>
      //           {/* Email */}
      //           <div className="label-input-wrapper">
      //             <label>Email</label>
      //             <input
      //               required
      //               label="Email Address"
      //               id="email"
      //               name="email"
      //               helperText={errors.email}
      //               error={errors.email ? true : false}
      //               onChange={this.handleChange}
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
      //               onChange={this.handleChange}
      //             />
      //           </div>
      //         </div>

      //         <div className="btn-wrapper">
      //           <button
      //             type="submit"
      //             fullWidth
      //             variant="contained"
      //             color="primary"
      //             className="btn"
      //             onClick={this.handleSubmit}
      //             disabled={
      //               loading ||
      //               !this.state.email ||
      //               !this.state.password ||
      //               !this.state.username
      //             }
      //           >
      //             Create Account
      //             {loading && (
      //               <CircularProgress size={30} className={classes.progess} />
      //             )}
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //     <div id="middle">
      //       <span></span>
      //       {/* 
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
      //     */}
      //     </div>
      //   </div>
      //   <p className="terms-and-conditions">
      //     By signing up to GEMINT, you have agreed to the{" "}
      //     <a className="terms-link" href="/termsandconditions">
      //       Terms & Conditions
      //     </a>{" "}
      //     and have read our Privacy Policy.
      //   </p>
      // </div>
    );
  }
}

export default withStyles(styles)(signup);
