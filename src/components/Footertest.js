import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";
import { FaExclamationCircle } from "react-icons/fa";
import applestorelogo from "../../src/assets/image/appstorefinal.png";
import playstorelogo from "../../src/assets/image/playstorefinal.png";

const newsletterurl =
  "https://adtzd6cy7j.execute-api.ap-south-1.amazonaws.com/production/newsletter";

function Footertest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submithandler = (event) => {
    if (email === "") {
      setMessage(`Please give your email`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    event.preventDefault();

    const requestBody = {
      email: email,
    };

    axios
      .post(newsletterurl, requestBody)
      .then((response) => {
        swal({
          title: " Thanks for subscribing to ARnxt weekly ",

          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          setMessage(error.response.data.message);
        } else {
          setMessage("sorry backend server is down");
        }
      });
  };

  return (
    <div>
      <div className="footermainbody">
        <div className="footerbody">
          <div>
            <div className="companycontainer">
              <div className="companyimagecontainer">
                <div className="companyimage">
                  <img src="/assets/images/quleeplogomain.png" />
                </div>
                <div className="companyname">
                  <h3>Company</h3>
                </div>
              </div>
              <div className="companycontentcontainer">
                <p>
                  Quleep is a cutting-edge technology company specialising in
                  the development and innovation of products in the metaverse
                  and augmented reality (AR) domains. With a mission to
                  transform the way people interact with digital content and
                  bridge the gap between the virtual and physical worlds, Quleep
                  is at the forefront of shaping the future of immersive
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="contactuscontainer">
              <div className="contactusname">
                <h3>Contact Us</h3>
              </div>
              <div className="contactuscontentone">
                <p>Plot No, 7 to 10, Sector 126 Noida, Uttar Pradesh 201303</p>
              </div>
              <div className="contactuscontenttwo">
                <p>
                  Kolkata - 11th floor Kamdhenu Building 75C, Park Street,
                  Kolkata-700016 .
                </p>
              </div>
              <div className="contactuscontentthree">
                <p>+91 9883019518</p>
              </div>
              <div className="contactuscontentfour">
                <p>reach us at care@arnxt.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="logocontainer">
              <div className="logocontainerone">
                <div className="logoimageone">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.quleep.ARnxt"
                    target="blank">
                    <img className="" src={playstorelogo} alt="playstore" />
                  </a>
                </div>
              </div>
              <div className="logocontainertwo">
                <div className="logoimagetwo">
                  <a
                    href="https://apps.apple.com/in/app/arnxt/id1598795711"
                    target="blank">
                    {" "}
                    <img className="" src={applestorelogo} alt="apple" />{" "}
                  </a>
                </div>
              </div>
              <div className="logocontainerthree">
                <div className="footer_newsletteremail">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className=" input_email"
                    placeholder="Email"
                    required
                  />
                  <button className="btnfooter" onClick={submithandler}>
                    Subscribe
                  </button>
                </div>
                <p style={{}}>
                  {message && (
                    <p className="messagefooter">
                      {" "}
                      <FaExclamationCircle /> {message}{" "}
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="socialiconcontainer">
          <div className="iconscontainer">
            <p> Copyright @ 2023, Quleep. All Right Reserved</p>
            <div className="iconimages">
              <div>
                <div className="iconimageinside">
                  <a
                    href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A"
                    target="blank">
                    <img
                      className="footer-image-instagram"
                      src="assets/images/youtube.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="iconimageinside">
                  <a href="https://www.instagram.com/arnxt2021/" target="blank">
                    <img
                      className="footer-image-instagram"
                      src="assets/images/instagram.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="iconimageinside">
                  <a
                    href="https://www.linkedin.com/company/arnxt"
                    target="blank">
                    <img
                      className="footer-image"
                      src="assets/images/linkedin.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="iconimageinside">
                  <a href="https://twitter.com/ARNXT1" target="blank">
                    <img
                      className="footer-image-twitter"
                      src="assets/images/twitter.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="iconimageinside">
                  <a href="https://www.facebook.com/ARNXT/" target="blank">
                    <img
                      className="footer-image"
                      src="assets/images/facebook.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footertest;
