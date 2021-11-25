import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import GlobalState from "./context/GlobalState";
import globalContext from "./context/globalContext";

import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";
import browse from "./pages/browse";
import selling from "./pages/selling";
import buying from "./pages/buying";
import settings from "./pages/settings";
import ProtectedRoute from "./components/protectedRoute";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import add from "./pages/add";
import postedBreak from "./pages/postedBreak";
import { userContext } from "./userContext";
import axios from "axios";
import AppProvider from "./themeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Breakers from "./pages/breakers";
import Profile from "./pages/profile";
import apply from "./pages/apply";
import NoPageFound from "./pages/noPageFound";
import RandomizerPage from "./pages/freeRandomizer";
import FAQ from "./pages/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"
import Contact from "./pages/contact";
import Orders from "./pages/Orders";
import TermsAndConditions from "./pages/termsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy";
import Payment from "./pages/payment";
import Checkout from "./pages/checkout";
import CheckoutConfirm from "./pages/checkoutConfirm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishable_key } from "./config";
import Footer from "./components/footer";
import pricingPage from "./pages/pricingPage";
import standard from "./pages/standard";
import feature from "./pages/feature";
import "./styles/styleSheet.css";
import Randomizer from "./components/randomizer";
import RandomizerTeam from "./components/Randomizers/randomTeam";
import payment from "./pages/payment";
import Settings from "./pages/settings";
import CheckoutPage from "./pages/checkout";
import Randomize from "./pages/randomize";
import Apply from "./pages/apply";
import Test from "./pages/test"
const stripePromise = loadStripe(publishable_key);

function App() {
  const { user, setUser } = useContext(globalContext);

  return (
    <GlobalState>
      <AppProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <div>
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/RandomizerPage" component={RandomizerPage} />
                <Route exact path="/browse" component={browse} />
                <Route path="/browse/:breakId" component={postedBreak} />
                <Route exact path="/breakers" component={Breakers} />
                <Route path="/breakers/:username" component={Profile} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/apply" component={apply} />
                <Route exact path="/Randomizer" component={Randomizer} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/terms" component={TermsAndConditions} />
                <Route exact path="/privacy" component={PrivacyPolicy} />
                <Route exact path="/pricingPage" component={pricingPage} />
                <Route exact path="/feature" component={feature} />
                <Route exact path="/standard" component={standard} />
                <Route exact path="/RandomizerTeam" component={RandomizerTeam} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/postedBreak" component={postedBreak} />
                <Route exact path="/test" component={Test} />
                  <NoPageFound />
                <Route
                  exact
                  path="/checkout/confirm"
                  component={CheckoutConfirm}
                />
                <Route path="/checkout">
                  <Elements stripe={stripePromise}>
                    <Checkout />
                  </Elements>
                </Route>

                <ProtectedRoute exact path="/add" component={add} />
                <ProtectedRoute exact path="/orders" component={Orders} />

                <ProtectedRoute exact path="/buying" component={buying} />
                <ProtectedRoute exact path="/selling" component={selling} />
                <ProtectedRoute exact path="/settings" component={settings} />
                <Elements stripe={stripePromise}>
                  <Route path="/payment" component={Payment} />
                </Elements>

                <Route path="*">
                  <NoPageFound />
                </Route>
              </Switch>
              <Footer />
            </div>
          </ThemeProvider>
        </Router>
      </AppProvider>
    </GlobalState>
  );
}

export default App;
