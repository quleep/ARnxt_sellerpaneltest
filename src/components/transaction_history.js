import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../css/transactions.css";
import url from "../serverURL";

class Transaction_History extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      transacDetails: [],
    };
  }

  componentDidUpdate() {
    window.scrollTo(0, 1);
  }

  async componentDidMount() {
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
              try {
                const response = await axios.get(
                  `${url}/razorpay/transaction_history/${resp.data.hex}`
                );
                if (response) {
                  this.setState({
                    user: false,
                    transacDetails: response.data,
                  });
                }
              } catch (err) {
                console.log(err);
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
    const { user, admin, transacDetails } = this.state;

    if (typeof sessionStorage.getItem("token") === "string" && user === true) {
      return <Redirect to="/welcome_user" />;
    }

    if (typeof sessionStorage.getItem("token") === "string" && user === false) {
      return (
        <div className="container tranCont">
          <h3 className="tran__heading">TRANSACTION HISTORY</h3>
          {transacDetails.length > 0 ? (
            <div className="table">
              <div className="row rowH">
                <p className="col colH">Transaction_ID</p>
                <p className="col colH">Amount</p>
                <p className="col colH">Transaction time</p>
              </div>
              {transacDetails.map((item) => {
                return (
                  <div className="row">
                    <p className="col">{item.paymentId}</p>
                    <p className="col">{item.amount}</p>
                    <p className="col">{item.transactionDate}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <h4 className="tran__noTran">No transaction history</h4>
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

export default Transaction_History;
