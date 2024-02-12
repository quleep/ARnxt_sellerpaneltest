import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/userGuide.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";

class User_Guide extends Component {
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
          <div className="container userG__cont">
            <div className="userG">
              <aside className="userG__aside">
                <div className="userG__asideNav">
                  <a className="userG__link" href="#">
                    Get Started
                  </a>
                  <a className="userG__link" href="#">
                    General
                  </a>
                  <a className="userG__link" href="#">
                    Features
                  </a>
                  <a className="userG__link" href="#">
                    Credits
                  </a>
                </div>
              </aside>

              <main className="userG__main">
                <h1 className="userG__heading">User Guide</h1>

                <h2 className="userG__sub">Get Started</h2>
                <p className="userG__para">
                  Find the best match you can design your vicinity with, into
                  multiple tests and trials options without any hustle and
                  charges paid. Begin with your journey with Arnxt where you
                  yourself can build your empire with 3D Configurator, Augmented
                  Reality, Photorealistic Rendering and Quick and efficient
                  services. By clicking here on the ‘Try Now’ option you’ll be
                  directed to the market where you can choose the textiles you
                  want to add and with the help of camera visuals you can know
                  about how the particular object or textures suits your
                  requirements.
                </p>
                {/* <p className='userG__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere culpa officia autem, ipsum reprehenderit! Magni aut ex perferendis? Dignissimos, saepe! Facere eum fugit officia suscipit illo quibusdam ipsam beatae.</p> */}

                <h2 className="userG__sub">General</h2>
                <p className="userG__para">
                  Arnxt is here with the aim to provide you with the best market
                  visualizations, our vision is to provide our customers with
                  the best innovative and easy to use technology. Here at Arnxt
                  you can design your own world with the comfort of your area.
                </p>

                <h2 className="userG__sub">Features</h2>
                <p className="userG__para">
                  Features/It includes every and anything which would help the
                  customer choose, customize and if not immediately purchase
                  then save the likely options they’d like to move with. One can
                  not just get textiles and furniture but also options to change
                  their wall textures and floors.
                </p>

                <h2 className="userG__sub">Credits</h2>
                {/* <p className='userG__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem vel ipsam at. Ut est quas veniam repellendus.
                                    Maiores excepturi quaerat exercitationem. Aliquid quidem quod porro cupiditate possimus. Aperiam sequi sapiente
                                    voluptate iure minus quasi, aliquid harum beatae aut quam unde, ipsam, quisquam odit laudantium culpa odio minima.
                                    Labore, perferendis quia.</p> */}
              </main>
            </div>
          </div>
        );
      }
      if (user === false && subscribed === true) {
        return <Redirect to="/models" />;
      }
      if (user === false && subscribed === null) {
        return <Redirect to="/plans" />;
      }
      if (admin === true) {
        return <Redirect to="/welcome_admin" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default User_Guide;
