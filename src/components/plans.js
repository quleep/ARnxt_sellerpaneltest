import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/plans.css";
import { Fragment } from "react";
// import "../css/plans.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

class Plans extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      plansList: [],
      subscribed: null,
      error: "",
      success: "",
      transition: null,
      loader: false,
      planId: null,
      transitionUpdated: null,
      funcId: null,
      subLoader: false,
    };
  }

  displayError = () => {
    this.setState({
      error: "Error occured while adding subscription",
    });
  };

  displaySuccess = (id) => {
    const { planId } = this.state;
    if (!planId) {
      this.setState({
        success: "Subscription added",
        transition: "ready",
        loader: true,
      });
    } else {
      this.setState({
        transitionUpdated: "ready",
        subLoader: true,
        funcId: () => {
          console.log(this);
          this.setState({
            success: "Subscription updated",
            planId: id,
          });
        },
      });
    }
  };

  displayRazorpay = async (id, limit) => {
    const token = sessionStorage.getItem("token");
    // const res = await loadScript("https://api.razorpay.com/v1/subscriptions");
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      this.setState({
        error: "Razorpay SDK failed to load",
      });
    } else {
      try {
        const data = await fetch(
          `${url}/razorpay/subscription?plan=${id}&token=${token}&limit=${limit}`,
          { method: "POST" }
        ).then((t) => t.json());

        if (data.error) {
          this.setState({
            error: data.error,
          });
        } else {
          const displayError = this.displayError;
          const displaySuccess = this.displaySuccess;
          console.log(data);
          let options = {
            key: data.key,
            subscription_id: data.id,
            name: "ARnxt",
            description: "Monthly Test Plan",
            image: `${url}/razorpay/logo`,
            handler: async function (response) {
              if (typeof response.razorpay_payment_id === "undefined") {
                displayError();
              } else {
                displaySuccess(id);
              }
            },
            prefill: {
              name: data.merchantData.name,
              email: data.merchantData.email,
              contact: data.merchantData.phone,
              company: data.merchantData.company,
            },
            notes: { id: data.merchantData.hex },
            theme: {
              color: "#F37254",
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        }
      } catch (err) {
        this.setState({
          error: "Could not add subscriptions",
        });
      }
    }
  };

  componentDidUpdate() {
    window.scrollTo(0, 1)
    
    const { success, error, transition, transitionUpdated, funcId } =
      this.state;
    if (success.length > 0) {
      this.state.success = "";
    }
    if (error.length > 0) {
      this.state.error = "";
    }
    if (transition) {
      this.state.transition = null;
      setTimeout(() => {
        sessionStorage.setItem("models", "go");
        this.setState({
          subscribed: true,
        });
      }, 7000);
    }
    if (transitionUpdated) {
      this.state.transitionUpdated = null;
      this.state.funcId = null;
      setTimeout(() => {
        this.state.subLoader = false;
        funcId();
      }, 7000);
    }
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
              axios
                .get(`${url}/razorpay/plans`)
                .then((response) => {
                  console.log(response.data.plansList.items.slice(1,4));
                  if (response.data.plansList) {
                    if (typeof resp.data.sub_id === "string") {
                      axios
                        .get(`${url}/razorpay/plan/${resp.data.sub_id}`)
                        .then((newResp) => {
                          this.setState({
                            user: false,
                            sub_id: resp.data.sub_id,
                            plansList:
                              response.data.plansList.items.slice(1, 4) || [],
                            planId: newResp.data.planId,
                          });
                        });
                    } else {
                      this.setState({
                        user: false,
                        plansList: response.data.plansList.items.slice(1,4) || [],
                      });
                    }
                  } else {
                    this.setState({
                      user: false,
                      error: response.data.error,
                    });
                  }
                })
                .catch((err) => console.log(err));
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  cancelSub = async (e) => {
    e.persist();

    try {
      if (e.target.textContent === "Please Wait...") return;
      if (!window.confirm("Are you sure want to cancel the Subscription ?"))
        return;
      e.target.textContent = "Please Wait...";
      const token = sessionStorage.getItem("token");
      let res = await axios.post(`${url}/razorpay/cancelSub`, {
        token,
        sub_id: this.state.sub_id,
      });

      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failded to Cancel the subscription.");
      window.location.reload();
    }
  };

  render() {
    const {
      error,
      user,
      admin,
      plansList,
      subscribed,
      success,
      loader,
      planId,
      subLoader,
    } = this.state;

    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === false &&
      subscribed === null
    ) {
      return (
        <div className="plansCont">
          {error.length > 0 && (
            <div className="plans__alert" role="alert">
              {error}
            </div>
          )}

          {success.length > 0 && (
            <div className="plans__alert" role="alert">
              {success}
            </div>
          )}

          {loader ? (
            <div className="loader__modal">
              <h3 className="loader__heading">Redirecting</h3>
              <Loader
                type="Circles"
                color="#1752DB"
                height={40}
                width={40}
                style={{ marginTop: "80px", marginBottom: "-10px" }}
              />
            </div>
          ) : (
            <div className="plans__section">
              <h3 className="plans__heading">PLANS</h3>

              <div className="plansDiv">
                {plansList.length > 0 ? (
                    <div className="plans">
                    {plansList.map((plan, index) => {
                      return (
                        <ul class="plan" key={index}>
                          <li className="plan__header">{plan.item.name}</li>
                          <li className="plan__detail">
                            {`${plan.item.amount / 100} ${plan.item.currency}`}{" "}
                            / Month
                          </li>
                          <li className="plan__detail">
                            Desc : {plan.description}
                          </li>
                          <li className="plan__detail">
                            Model Limit : {plan.notes.modelLimit}
                          </li>
                          <li>
                            {
                              planId ? (
                                planId === plan.id ? (
                                  <button
                                    className="plan__btn plan__cbtn"
                                    onClick={this.cancelSub}
                                  >
                                    Cancel
                                  </button>
                                ) : (
                                  <button
                                    className="plan__btn"
                                    type="submit"
                                    onClick={() =>
                                      this.displayRazorpay(
                                        plan.id,
                                        plan.notes.modelLimit
                                      )
                                    }
                                  >
                                    Upgrade Plan
                                  </button>
                                )
                              ) : (
                                <button
                                  className="plan__btn"
                                  type="submit"
                                  onClick={() =>
                                    this.displayRazorpay(
                                      plan.id,
                                      plan.notes.modelLimit
                                    )
                                  }
                                >
                                  Take Plan
                                </button>
                              )
                              // bug -----------------------
                            }
                          </li>
                        </ul>
                      );
                    })}
                    <div>
                      {subLoader && (
                        <div style={{ marginTop: "-30px" }}>
                          <div>
                            <h3
                              style={{
                                color: "#2C2D30",
                                fontSize: "1.5rem",
                                fontWeight: "500",
                                fontFamily: "Alata",
                                letterSpacing: "2px",
                              }}
                            >
                              Subscription updating
                            </h3>
                          </div>
                          <Loader
                            type="Circles"
                            color="#1752DB"
                            height={40}
                            width={40}
                            style={{
                              marginTop: "30px",
                              marginBottom: "10px",
                              textAlign: "left",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="plansDiv">
                    <h3 className="noPlans">There are no plans available</h3>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    }
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

export default Plans;
