import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/welcomeUserAndAdmin.css";

class Welcome_Admin extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
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
              this.setState({
                admin: true,
              });
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
    const { user, admin, subscribed } = this.state;
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
          <div className="container welcomeUserAndAdminCont">
            <h3 className="userAndAdminName">Hi, Admin</h3>
            <h3 className="userAndAdminWelcome">Welcome to ARnxt</h3>
          </div>
        );
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Welcome_Admin;
