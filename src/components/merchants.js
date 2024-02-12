import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/usersAndMerchants.css";

class Merchants extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      merchantsList: [],
      deleteMsg: "",
      subscribed: null,
    };
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
              axios.get(`${url}/admin/merchants`).then((response) => {
                console.log(response.data);
                this.setState({
                  admin: true,
                  merchantsList: response.data,
                });
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

  DeleteHandle = (email) => {
    const { merchantsList } = this.state;
    axios
      .post(`${url}/admin/merchant_delete/${email}`)
      .then((resp) => {
        let id = merchantsList.findIndex(
          (merchant) => merchant.email === email
        );
        merchantsList.splice(id, 1);
        this.setState({
          deleteMsg: resp.data.deleteMsg,
          merchantsList,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate() {
    window.scrollTo(0, 1);
    const { deleteMsg } = this.state;
    if (deleteMsg.length > 0) {
      this.state.deleteMsg = "";
    }
  }

  render() {
    let { user, admin, deleteMsg, merchantsList, subscribed } = this.state;
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
        merchantsList = merchantsList.filter((m) => !m.admin);

        return (
          <div className="container merchantsCont">
            {deleteMsg.length > 0 && (
              <p role="alert" className="merchants__alert">
                {" "}
                {deleteMsg}
              </p>
            )}

            <h1 className="merchants__heading">Merchants</h1>
            {merchantsList.length > 0 ? (
              <div className="merchants">
                {merchantsList.map((merchant) => {
                  return (
                    <div className="merchant">
                      <Link
                        className="merchant__link"
                        to={`/admin/merchants/${merchant.hex}`}>
                        {merchant.name}
                      </Link>
                      <button
                        className="merchant__deleteBtn"
                        onClick={() => this.DeleteHandle(merchant.email)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h4 className="merchant__noMerchant">
                There are no merchants available
              </h4>
            )}
          </div>
        );
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Merchants;
