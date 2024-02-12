import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/contact.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";

class Contact_Support extends Component {
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
        .get(`${url}/user/profile/${token}`)
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

  //----SubmitData() starts
  submitData(e) {
    e.preventDefault();
    // add the verification and submit code here

    // Alert animation code
    let contactAlert = document.getElementById("contactAlert");
    contactAlert.classList.add("contact__alert__comein");

    setTimeout(
      () => contactAlert.classList.remove("contact__alert__comein"),
      2500
    );
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
        return (
          <div className="container userContactCont">
            <div className="userContactFormDiv">
              <h3 className="userContact__heading">Contact</h3>
              <form className="userContact__form" onSubmit={this.submitData}>
                <input
                  className="userContact__name"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="userContact__email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="userContact__subject"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className="userContact__message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"></textarea>
                <button className="userContact__submitBtn" type="submit">
                  Submit
                </button>
              </form>

              <div className="contact__waterMark">
                <h1 className="waterMark__heading">Contact Info.</h1>
                <p className="waterMark__para">
                  <strong>Email: </strong>contact.email@gmail.com
                </p>
                <p className="waterMark__para">
                  <strong>Phone: </strong>9910658888
                </p>
                <p className="waterMark__para">
                  <strong>Address: </strong>Z-12, C-4E, janakpuri, New Delhi
                </p>
              </div>
            </div>
          </div>
        );
      }
      if (user === false && subscribed === null) {
        return <Redirect to="/plans" />;
      }
      if (user === false && subscribed === true) {
        return <Redirect to="/models" />;
      }
      if (admin === true) {
        return <Redirect to="/welcome_admin" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Contact_Support;
