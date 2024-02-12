import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/merchGuide.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

class Merch_Guide extends Component {
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

  render() {
    return (
      <div className="container merchG__cont">
        <div className="merchG">
          <aside className="merchG__aside">
            <div className="merchG__asideNav">
              <a className="merchG__link" href="#">
                Get Started
              </a>
              <a className="merchG__link" href="#">
                General
              </a>
              <a className="merchG__link" href="#">
                Features
              </a>
              <a className="merchG__link" href="#">
                Credits
              </a>
            </div>
          </aside>

          <main className="merchG__main">
            <h1 className="merchG__heading">Merchant Guide</h1>

            <h2 className="merchG__sub">Get Started</h2>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              vel ipsam at. Ut est quas veniam repellendus. Maiores excepturi
              quaerat exercitationem. Aliquid quidem quod porro cupiditate
              possimus. Aperiam sequi sapiente voluptate iure minus quasi,
              aliquid harum beatae aut quam unde, ipsam, quisquam odit
              laudantium culpa odio minima. Labore, perferendis quia.
            </p>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem facere culpa officia autem, ipsum reprehenderit! Magni
              aut ex perferendis? Dignissimos, saepe! Facere eum fugit officia
              suscipit illo quibusdam ipsam beatae.
            </p>

            <h2 className="merchG__sub">General</h2>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              vel ipsam at. Ut est quas veniam repellendus. Maiores excepturi
              quaerat exercitationem. Aliquid quidem quod porro cupiditate
              possimus. Aperiam sequi sapiente voluptate iure minus quasi,
              aliquid harum beatae aut quam unde, ipsam, quisquam odit
              laudantium culpa odio minima. Labore, perferendis quia.
            </p>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem facere culpa officia autem, ipsum reprehenderit! Magni
              aut ex perferendis? Dignissimos, saepe! Facere eum fugit officia
              suscipit illo quibusdam ipsam beatae.
            </p>

            <h2 className="merchG__sub">Features</h2>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              vel ipsam at. Ut est quas veniam repellendus. Maiores excepturi
              quaerat exercitationem. Aliquid quidem quod porro cupiditate
              possimus. Aperiam sequi sapiente voluptate iure minus quasi,
              aliquid harum beatae aut quam unde, ipsam, quisquam odit
              laudantium culpa odio minima. Labore, perferendis quia.
            </p>

            <h2 className="merchG__sub">Credits</h2>
            <p className="merchG__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              vel ipsam at. Ut est quas veniam repellendus. Maiores excepturi
              quaerat exercitationem. Aliquid quidem quod porro cupiditate
              possimus. Aperiam sequi sapiente voluptate iure minus quasi,
              aliquid harum beatae aut quam unde, ipsam, quisquam odit
              laudantium culpa odio minima. Labore, perferendis quia.
            </p>
          </main>
        </div>
      </div>
    );
  }
}

export default Merch_Guide;
