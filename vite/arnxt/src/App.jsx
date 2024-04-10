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

import { Helmet } from "react-helmet";
import ViewAR from "../components/ViewAR";

const verifyUrl =
  "https://4xuh6eqvr6.execute-api.ap-south-1.amazonaws.com/prod/verify";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reload: null,
    };
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

          <Route path="/arview" exact component={ViewAR} />
        </Router>
      </div>
    );
  }
}

export default App;
