import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/merchProfile.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// import "../css/profile.css";
// import "../css/plans.css";
import url from "../serverURL";

class Merchant_Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      planDetails: null,
      merchantInfo: null,
    };
  }

  componentDidUpdate() {
    window.scrollTo(0, 1);
  }

  async componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);

    if (typeof sessionStorage.getItem("token") === "string") {
      const token = sessionStorage.getItem("token");
      try {
        const resp = await axios.get(`${url}/merchant/profile/${token}`);
        if (resp) {
          if (resp.data.user) {
            this.setState({
              user: true,
            });
          } else {
            if (resp.data.admin) {
              this.setState({
                admin: true,
              });
            } else {
              if (!resp.data.uploadLimit) {
                this.setState({
                  user: false,
                  merchantInfo: resp.data,
                });
              } else {
                try {
                  const id = resp.data.sub_id;
                  const response = await axios.get(
                    `${url}/razorpay/plan/${id}`
                  );
                  if (response) {
                    this.setState({
                      user: false,
                      merchantInfo: resp.data,
                      planDetails: response.data.planDetails,
                    });
                  }
                } catch (err) {
                  console.log(err);
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { user, admin, merchantInfo, planDetails } = this.state;

    if (typeof sessionStorage.getItem("token") === "string" && user === true) {
      return <Redirect to="/welcome_user" />;
    }
    if (typeof sessionStorage.getItem("token") === "string" && user === false) {
      return (
        <div className="container merchProfile__cont">
          {merchantInfo ? (
            <div className="merchProfile__card">
              <h3 className="merchProfile__heading">PROFILE</h3>

              <h1>
                <i class="fas fa-user"></i>
                <span className="merchProfile__detail merchProfile__name">
                  {merchantInfo.name}
                </span>
              </h1>

              <p className="title">
                <i class="fas fa-envelope-open-text"></i>
                <span className="merchProfile__detail">
                  {merchantInfo.email}
                </span>
              </p>

              <p className="title">
                <i class="fas fa-building"></i>
                <span className="merchProfile__detail">
                  {merchantInfo.company}{" "}
                </span>
              </p>

              <p className="title">
                <i class="fas fa-phone"></i>
                <span className="merchProfile__detail">
                  {merchantInfo.phone}
                </span>
              </p>

              {planDetails ? (
                <div>
                  <p>
                    <i class="fas fa-lightbulb"></i>
                    <span className="merchProfile__detail">
                      Plan : {planDetails.name}
                    </span>
                  </p>

                  <p className="title2">
                    <i class="fas fa-rupee-sign"></i>
                    <span className="merchProfile__detail">
                      Subscription Amount:{" "}
                      {`${planDetails.amount / 100} ${
                        planDetails.currency
                      }/month`}
                    </span>
                  </p>

                  <p className="title2">
                    <i class="fas fa-cube"></i>
                    <span className="merchProfile__detail">
                      Model limit: <span className="title"></span>
                      {merchantInfo.uploadLimit}
                    </span>
                  </p>
                </div>
              ) : (
                <div class="title">
                  Plan selected:<span className="title"> </span>No plan choosen
                </div>
              )}
            </div>
          ) : (
            <div>
              <h4 class="merchant_profile_text">No info available</h4>
            </div>
          )}
        </div>
      );
    }
    if (typeof sessionStorage.getItem("token") === "string" && admin === true) {
      return <Redirect to="/welcome_admin" />;
    }
    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === null &&
      admin === false
    ) {
      return (
        <div className="loader__modal">
          <Loader type="Circles" color="#1752DB" height={40} width={40} />
        </div>
      );
    }
    if (typeof sessionStorage.getItem("token") != "string") {
      return <Redirect to="/" />;
    }
  }
}

export default Merchant_Profile;
