import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useCookies } from "react-cookie";

//importing components
import { Footer, Model_Approval, Add_tag } from "./components";

import HomePage from "./components/HomePage";
import Navbartest from "./components/Navbartest";
import Footertest from "./components/Footertest";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Merchant_Register from "./components/merchant_register.js";
import Merchant_Login from "./components/merchant_login.js";
import User_Login from "./components/user_login.js";
import User_Register from "./components/user_register.js";
import Model from "./components/models.js";
import Welcome_User from "./components/welcome_user.js";
import Download from "./components/download.js";
import Merchants from "./components/merchants.js";
import Users from "./components/users.js";
import Plans from "./components/plans.js";
import User_Guide from "./components/user_guide.js";
import Contact_Support from "./components/contact_support.js";
import User_Details_Admin from "./components/user_details_admin.js";
import Merchant_Details_Admin from "./components/merchant_details_admin.js";
import User_Profile from "./components/user_profile.js";
import Merchant_Profile from "./components/merchant_profile.js";
import Project_Gallery from "./components/project_gallery.js";
import Projects from "./components/projects.js";
import Welcome_Admin from "./components/welcome_admin.js";
import Transaction_History from "./components/transaction_history.js";
import HiddenPlan from "./components/hiddenplan";
import Merch_Guide from "./components/merch_guide";
import Request_Demo from "./components/requestDemo";
import { Login } from "./Login";
import { Register } from "./Register";
import Products from "./Products";
import {
  getUser,
  getToken,
  setUserSession,
  resetUserSession,
} from "./service/AuthService";
import { useEffect } from "react";
import axios from "axios";
import PrivateRoute from "./routes/PrivateRoute";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

// importing bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Nav } from "reactstrap";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Privacypolicy from "./components/Privacypolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import LoginNew from "./components/LoginNew";
import Registernew from "./components/Registernew";
import Productsnew from "./components/Productsnew";
import ProductsHome from "./components/ProductsHome";
import Blognew from "./components/Blognew";
import ProductTest from "./ProductTest";
import ContactUsnew from "./ContactUsnew";
import Testpage from "./Testpage";
import BlogSecond from "./components/BlogSecond";
import BlogThird from "./components/BlogThird";
import Career from "./components/Career";
import Joinus from "./components/Joinus";
import Opening from "./components/Opening";
import JobDesc from "./components/JobDesc";
import Form from "./components/FormFill";

import Dashboard from "./components/Dashboard";
import Test from "./components/Test";
import TestNew from "./components/TestNew";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ViewAR from "./components/ViewAR";
import ARdetails from "./components/ARdetails";
import Wallchange from "./components/Wallchange";
import View from "./components/View";
import Plan from "./components/Plan";
import Qrcode from "./Qrcode";
import Rooms from "./components/Rooms";
import RoomsCategory from "./components/RoomsCategory";
import ProductDetailAR from "./components/ProductDetailAR";
import RoomBrands from "./components/RoomBrands";
import CategoryAR from "./components/CategoryAR";
import CategoryBrandsAR from "./components/CategoryBrandsAR";
import Visualizer from "./components/Visualizer";
import Visualizer2D from "./components/Visualizer2D";
import Upholstry from "./components/Upholstry.js";
import UpholstryMobile from "./components/UpholstryMobile.js";
import VisualizerMobile from "./components/VisualizerMobile.js";
import Visualizer2Dmobile from "./components/Visualizer2Dmobile.js";
import Homepagenew from "./components/Homepagenew.js";
import UpholstryItem from "./components/UpholstryItem.js";

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
        console.log(response);

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

          <Route path="/price" exact component={Pricing} />

          <Route path="/about" exact component={About} />

          <Route path="/privacypolicy" exact component={Privacypolicy} />
          <Route
            path="/terms&conditions"
            exact
            component={TermsAndConditions}
          />
          <Route path="/login" exact component={LoginNew} />
          <Route path="/register" exact component={Registernew} />
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
          <Route path="/" exact component={Homepagenew} />

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
          <Route path="/arview/upholstry/:id" component={Upholstry} />
          <Route
            path="/arview/upholstry/:id/:category"
            component={UpholstryItem}
          />

          <Route
            path="/arview/upholstry_mobile/:id"
            component={UpholstryMobile}
          />

          <Route
            path="/arview/categoryBrands/:id"
            component={CategoryBrandsAR}
          />

          <Route exact path="/career" component={Career} />
          <Route exact path="/details" component={ARdetails} />
          <Route exact path="/webdetails" component={Wallchange} />
          <Route exact path="/view" component={View} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/qrcode" component={Qrcode} />

          <Route path="/career/:id" component={JobDesc} />

          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/test" exact component={Test} />
          <Route path="/testnew" exact component={TestNew} />

          {/* <Route path="/:id" component={JobDesc} /> */}
          <Route path="/:id/fill" component={Form} />
        </Router>
      </div>
    );
  }
}

export default App;
