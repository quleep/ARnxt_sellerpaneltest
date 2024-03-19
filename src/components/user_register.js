import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/register.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import url from "../serverURL";

class Merchant_Register extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      cpassword: "",
      errorPhone: "",
      errorPassword: "",
      errorEmail: "",
      errorCPassword: "",
      /*errorProducts: '',*/
      errorName: "",
      toLogIn: false,
      type: "password",
      phone: "",
      /*products: [],*/
      name: "",
      user: null,
      admin: false,
      subscribed: null,
      /*others:false,
            othersValue:''*/
    };
  }

  NameHandle = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  PhoneHandle = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  PasswordHandle = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  CPasswordHandle = (e) => {
    this.setState({
      cpassword: e.target.value,
    });
  };

  EmailHandle = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  /*productHandle = (e) => {
        const { products, others } = this.state;*/
  /*if(e.target.value === "Others"){
        if(others){
            this.setState({
                others:false
            })
        }
        else{
            this.setState({
                others:true
            })
        }
    }
    else{*/
  /*const indexToDelete = products.findIndex(item => item === e.target.value);
    if (indexToDelete >= 0) {
        products.splice(indexToDelete, 1);
        this.setState({
            products: products
        })
    }
    else {
        this.setState({
            products: [...products, e.target.value]
        })
    }*/
  /*}*/
  /*}*/

  /*OthersHandle=(e)=>{
        this.setState({
            othersValue:e.target.value
        })
    }*/
  SubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/user/register`, this.state)
      .then((resp) => {
        if (resp.data.status) {
          sessionStorage.setItem("registered", resp.data.status);
          this.setState({
            toLogIn: true,
          });
        } else {
          this.setState({
            errorPassword: resp.data.errorPassword,
            errorEmail: resp.data.errorEmail,
            errorCPassword: resp.data.errorCPassword,
            errorPhone: resp.data.errorPhone,
            /*errorProducts: resp.data.errorProducts,*/
            errorName: resp.data.errorName,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate() {
    window.scrollTo(0, 1);
    this.state.errorName = "";
    this.state.errorPassword = "";
    this.state.errorEmail = "";
    this.state.errorCPassword = "";
    this.state.errorPhone = "";
    /*this.state.errorProducts = "";*/
  }

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

  render() {
    const {
      /*errorProducts,*/ errorPassword,
      toLogIn,
      errorEmail,
      errorCPassword,
      errorPhone,
      errorName,
      user,
      admin,
      subscribed,
      /*others*/
    } = this.state;

    if (typeof sessionStorage.getItem("token") === "string" && user === true) {
      return <Redirect to="/welcome_user" />;
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
          <Loader type="Circles" color="whitesmoke" height={40} width={40} />
        </div>
      );
    }
    if (toLogIn) {
      this.state.toLogIn = false;
      return <Redirect to="/user_login" />;
    }
    return (
      <div className="container register__container">
        <div className="regFormDiv">
          <h2 className="regFormHeading">User Register</h2>
          <form className="regForm" onSubmit={this.SubmitHandle}>
            <div className="regInputDiv">
              {/* <i class="fa fa-fw fa-user"
                                    style={{
                                        position: "absolute",
                                        padding: "10px",
                                        paddingTop: "12px",
                                        minWidth: "40px"
                                    }}>
                                </i> */}
              <input
                type="text"
                className="regInput"
                placeholder="Full Name"
                onChange={this.NameHandle}
              />
            </div>

            {errorName.length > 0 && (
              <div className="regError">{errorName}</div>
            )}

            <div className="regInputDiv">
              {/* <i class="fa fa-fw fa-user"
                                    style={{
                                        position: "absolute",
                                        padding: "10px",
                                        paddingTop: "12px",
                                        minWidth: "40px"
                                    }}>
                                </i> */}
              <input
                type="email"
                placeholder="Email"
                className="regInput"
                onChange={this.EmailHandle}
              />
            </div>

            {errorEmail.length > 0 && (
              <div className="regError">{errorEmail}</div>
            )}

            <div className="regInputDiv">
              {/* <i class="fa fa-fw fa-user"
                                    style={{
                                        position: "absolute",
                                        padding: "10px",
                                        paddingTop: "12px",
                                        minWidth: "40px"
                                    }}>
                                </i> */}
              <input
                type="text"
                placeholder="Phone"
                className="regInput"
                onChange={this.PhoneHandle}
              />
            </div>

            {errorPhone.length > 0 && (
              <div className="regError">{errorPhone}</div>
            )}

            <div className="regInputDiv">
              {/* <i class="fa fa-fw fa-lock"
                                    style={{
                                        position: "absolute",
                                        padding: "10px",
                                        paddingTop: "12px",
                                        minWidth: "40px"
                                    }}>
                                </i> */}
              <input
                type={this.state.type}
                placeholder="Password"
                className="regInput"
                onChange={this.PasswordHandle}
              />
            </div>

            {errorPassword.length > 0 && (
              <div className="regError"> {errorPassword}</div>
            )}

            <div className="regCheckboxDiv">
              <input
                className="regCheckbox"
                type="checkbox"
                id="checkbox"
                onClick={this.show}
              />
              <label className="regShowPass" for="checkbox">
                Show Password
              </label>
            </div>

            <div className="regInputDiv">
              {/* <i class="fa fa-fw fa-lock"
                                    style={{
                                        position: "absolute",
                                        padding: "10px",
                                        paddingTop: "12px",
                                        minWidth: "40px"
                                    }}>
                                </i> */}
              <input
                type="password"
                placeholder="Confirm Password"
                className="regInput"
                onChange={this.CPasswordHandle}
              />
            </div>

            {errorCPassword.length > 0 && (
              <div className="regError">{errorCPassword}</div>
            )}

            <button className="regSubmitBtn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Merchant_Register;
