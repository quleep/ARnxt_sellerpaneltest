import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/login.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import url from "../serverURL";

class User_Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
      type: "password",
      toYour: false,
      user: null,
      admin: false,
      subscribed: null,
    };
  }

  EmailHandle = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  PasswordHandle = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  SubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/user/login`, this.state)
      .then((resp) => {
        if (resp.data.status) {
          sessionStorage.setItem("token", resp.data.status);
          this.state.user = true;
          this.props.rfunction();
        } else {
          this.setState({
            errorEmail: resp.data.errorEmail,
            errorPassword: resp.data.errorPassword,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  show = () => {
    if (this.state.type === "password") {
      this.setState({
        type: "text",
      });
    } else {
      this.setState({
        type: "password",
      });
    }
  };

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

  componentDidUpdate() {
    window.scrollTo(0, 1);
    if (typeof sessionStorage.getItem("registered") === "string") {
      sessionStorage.removeItem("registered");
    }
    this.state.errorEmail = "";
    this.state.errorPassword = "";
  }

  render() {
    const { errorEmail, errorPassword, user, admin, subscribed } = this.state;
    if (typeof sessionStorage.getItem("token") === "string" && user === true) {
      return <Redirect to="/welcome_user" />;
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
    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === false &&
      subscribed === true
    ) {
      return <Redirect to="/models" />;
    }
    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === false &&
      subscribed === null
    ) {
      return <Redirect to="/plans" />;
    }
    return (
      <div className="container Login__container">
        {/* <div style={{ paddingTop: "25px" }}>
                    {
                        typeof sessionStorage.getItem('registered') === "string" &&
                        <div style={{ color: "#1752DB", fontWeight: "bold" }}>
                            {sessionStorage.getItem('registered')}
                        </div>
                    }
                </div> */}
        <div className="formDiv">
          <h2 className="formHeading">User Login</h2>
          <form className="form" onSubmit={this.SubmitHandle}>
            <div className="inputDiv">
              {/* <i class="fa fa-fw fa-user"></i> */}
              <input
                type="email"
                className="userEmail input"
                placeholder="Email"
                onChange={this.EmailHandle}
                value={this.state.email}
              />
            </div>

            {errorEmail.length > 0 && (
              <div className="errorEmail">{errorEmail}</div>
            )}

            <div className="inputDiv">
              {/* <i class="fa fa-fw fa-lock"></i> */}
              <input
                type={this.state.type}
                placeholder="Password"
                className="userPass input"
                onChange={this.PasswordHandle}
              />
            </div>

            {errorPassword.length > 0 && (
              <div className="errorPass">{errorPassword}</div>
            )}

            <div className="checkboxDiv">
              <input
                className="checkbox"
                id="showp"
                type="checkbox"
                onClick={this.show}
              />
              <label className="showPass" for="showp">
                Show Password
              </label>
            </div>

            <button className="submitBtn" type="submit">
              Login
            </button>

            <div className="notReg">
              Not registered now ?
              <Link className="notReg__link" to="/user_register">
                {" "}
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default User_Login;
