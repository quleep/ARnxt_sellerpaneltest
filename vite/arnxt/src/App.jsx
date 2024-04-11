import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import axios from "axios";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

// importing bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Homepagenew from "../pages/Homepagenew";

import { Helmet } from "react-helmet";
import ViewAR from "../pages/ViewAR";
import Rooms from "../pages/Rooms";
import Visualizer from "../pages/Visualizer";
import VisualizerMobile from "../pages/VisualizerMobile";
import Visualizer2D from "../pages/Visualizer2D";
import Visualizer2Dmobile from "../pages/Visualizer2Dmobile";
import RoomsCategory from "../pages/RoomsCategory";
import ProductDetailAR from "../pages/ProductDetailAR";
import RoomBrands from "../pages/RoomBrands";
import CategoryAR from "../pages/CategoryAR";
import Upholstry from "../pages/Upholstry";
import UpholstryItem from "../pages/UpholstryItem";
import UpholstryMobile from "../pages/UpholstryMobile";
import CategoryBrandsAR from "../pages/CategoryBrandsAR";
import {
  getUser,
  getToken,
  setUserSession,
  resetUserSession,
} from "../service/AuthService";
import Plan from "../pages/Plan";
import Qrcode from "../pages/Qrcode";
import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";
import TestNew from "../pages/TestNew";
import PricingNew from "../pages/PricingNew";
import About from "../pages/About";
import Privacypolicy from "../pages/Privacypolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import Loginform from "../pages/Loginform";
import Analyticslogin from "../pages/Analyticslogin";
import Analytics from "../pages/Analytics";
import Productsnew from "../pages/Productsnew";
import ProductsHome from "../pages/ProductsHome";
import Blognew from "../pages/Blognew";
import ProductTest from "../pages/ProductTest";
import ContactUsnew from "../pages/ContactUsnew";
import Testpage from "../pages/Testpage";
import BlogSecond from "../pages/BlogSecond";
import BlogThird from "../pages/BlogThird";
const verifyUrl =
  "https://4xuh6eqvr6.execute-api.ap-south-1.amazonaws.com/prod/verify";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reload: null,
    };
  }
  componentDidUpdate() {
    const token = getToken();
    if (
      token === "undefined" ||
      token === undefined ||
      token === null ||
      !token
    ) {
      return;
    }
    const requestBody = {
      user: getUser(),
      token: token,
    };

    axios
      .post(verifyUrl, requestBody)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
      })
      .catch(() => {});
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Helmet>
            <title>Augmented Reality MarketPlace for Businesses | ARnxt</title>
            <meta
              name="description"
              content="India’s first Augmented reality market place where the company’s stand-out feature is its DIY(Do-It-Yourself) features."
            />
            <meta
              name="keywords"
              content="
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
           "
            />
          </Helmet>
          <Route path="/" exact component={Homepagenew} />
          <Route path="/pricing" exact component={PricingNew} />
          <Route path="/about" exact component={About} />
          <Route path="/privacypolicy" exact component={Privacypolicy} />
          <Route
            path="/terms&conditions"
            exact
            component={TermsAndConditions}
          />
          <Route path="/login" exact component={Loginform} />
          <Route path="/loginanalytics" component={Analyticslogin} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/productsnew" exact component={Productsnew} />
          <Route path="/product" exact component={ProductsHome} />
          <Route path="/blog" exact component={Blognew} />
          <Route path="/producttest" exact component={ProductTest} />
          <Route path="/contact" exact component={ContactUsnew} />
          <Route path="/test" exact component={Testpage} />
          <Route path="/blogsecond" exact component={BlogSecond} />
          <Route path="/blogthird" exact component={BlogThird} />

          <Route path="/arview" exact component={ViewAR} />
          <Route path="/arview/rooms/:id" component={Rooms} />
          <Route path="/arview/visualizer" component={Visualizer} />
          <Route
            path="/arview/visualizer_mobile"
            component={VisualizerMobile}
          />
          <Route path="/arview/visualizer2d" component={Visualizer2D} />
          <Route
            path="/arview/visualizer2d_mobile"
            component={Visualizer2Dmobile}
          />
          <Route path="/arview/categories/:id" component={RoomsCategory} />
          <Route path="/arview/productdetail/:id" component={ProductDetailAR} />
          <Route path="/arview/brands/:id" component={RoomBrands} />
          <Route path="/arview/category/:id" component={CategoryAR} />
          <Route path="/arview/upholstry_item/:id" component={Upholstry} />
          <Route path="/arview/upholstry/:id" component={UpholstryItem} />
          <Route
            path="/arview/upholstry_mobile/:id"
            component={UpholstryMobile}
          />

          <Route
            path="/arview/categoryBrands/:id"
            component={CategoryBrandsAR}
          />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/qrcode" component={Qrcode} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/test" exact component={Test} />
          <Route path="/testnew" exact component={TestNew} />
        </Router>
      </div>
    );
  }
}

export default App;
