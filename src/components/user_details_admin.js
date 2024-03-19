import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/userDetails.css";

class User_Details extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      userInfo: null,
      subscribed: null,
    };
  }

  componentDidUpdate() {
    window.scrollTo(0, 1);
  }

  componentDidMount() {
    if (typeof sessionStorage.getItem("token") === "string") {
      const token = sessionStorage.getItem("token");
      axios
        .get(`${url}/merchant/profile/${token}`)
        .then((resp) => {
          if (resp.data.user) {
            this.setState({
              user: true,
            });
          } else {
            if (resp.data.admin) {
              const { userId } = this.props;
              axios
                .get(`${url}/admin/user_details/${userId}`)
                .then((response) => {
                  this.setState({
                    admin: true,
                    userInfo: response.data.userInfo,
                  });
                })
                .catch((err) => console.log(err));
            } else {
              if (!resp.data.uploadLimit) {
                this.setState({
                  user: false,
                });
              } else {
                this.setState({
                  user: false,
                  subscribed: true,
                });
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { user, admin, userInfo, subscribed } = this.state;
    if (typeof sessionStorage.getItem("token") === "string") {
      if (user === null && admin === false) {
        return (
          <div className="loader__modal">
            <Loader type="Circles" color="#1752DB" height={40} width={40} />
          </div>
        );
      }
      if (user === true) {
        return <Redirect to="/welcome_user" />;
      }
      if (user === false && subscribed === true) {
        return <Redirect to="/models" />;
      }
      if (user === false && subscribed === null) {
        return <Redirect to="/plans" />;
      }
      if (admin === true) {
        return (
          <div className="container aUserCont">
            {userInfo ? (
              <div className="aUser__card">
                <h3 className="aUser__heading">PROFILE DETAILS</h3>

                <p className="aUser__detail">
                  <strong>Name : </strong>
                  {userInfo.name}
                </p>

                <p className="aUser__detail">
                  <strong>Email : </strong>
                  {userInfo.email}
                </p>

                <p className="aUser__detail">
                  <strong>Phone : </strong>
                  {userInfo.phone}
                </p>
              </div>
            ) : (
              <h2 className="aUser__noInfo">No info available</h2>
            )}
          </div>
        );
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default User_Details;
