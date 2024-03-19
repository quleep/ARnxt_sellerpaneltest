import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/usersAndMerchants.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      admin: false,
      usersList: [],
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
              axios.get(`${url}/admin/users`).then((response) => {
                console.log(response.data);
                this.setState({
                  admin: true,
                  usersList: response.data,
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
    const { usersList } = this.state;
    axios
      .post(`${url}/admin/user_delete/${email}`)
      .then((resp) => {
        let id = usersList.findIndex((user) => user.email === email);
        usersList.splice(id, 1);
        this.setState({
          deleteMsg: resp.data.deleteMsg,
          usersList,
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
    const { user, admin, usersList, deleteMsg, subscribed } = this.state;
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
          <div className="container usersCont">
            {deleteMsg.length > 0 && (
              <h2 className="users__alert">{deleteMsg}</h2>
            )}

            <h1 className="users__heading">Users</h1>

            {usersList.length > 0 ? (
              <div className="users">
                {usersList.map((user) => {
                  return (
                    <div className="user">
                      <Link
                        className="user__link"
                        to={`/admin/users/${user.hex}`}>
                        {user.name}
                      </Link>
                      <button
                        className="user__deleteBtn"
                        onClick={() => this.DeleteHandle(user.email)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h4 className="user__noUser">There are no users available</h4>
            )}
          </div>
        );
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Users;
