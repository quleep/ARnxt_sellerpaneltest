import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import applestorelogo from "../../src/assets/image/appstorefinal.png";
import playstorelogo from "../../src/assets/image/playstorefinal.png";
const Footercomponent = () => {
  return (
    <div className="footercontainer">
      <div class="footer">
        <div class="footer-column">
          <div class="footer-title">Products</div>

          <a href="/arview">AR viewer</a>
          <a href="/arView/visualizer">Wall Visualiser</a>
          <a href="/arView/visualizer">Floor Visualiser</a>
          <a href="/arView/upholstry_item/Fabric">Upholstery</a>
        </div>

        <div class="footer-column">
          <div class="footer-title">Resources</div>

          <a href="/blog">Blogs</a>
        </div>

        <div class="footer-column">
          <div class="footer-title">ArNXT</div>

          <a href="/pricing">Pricing</a>
          <a href="/loginanalytics">Client login</a>
        </div>

        <div class="footer-column">
          <div class="footer-title">Company</div>

          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacypolicy">Privacy policy</a>
        </div>
      </div>

      <div class="app-store-logos">
        <div className="applogodiv">
          <a
            href="https://play.google.com/store/apps/details?id=com.quleep.ARnxt"
            target="blank">
            <img className="" src={playstorelogo} alt="playstore" />
          </a>
          <a
            href="https://apps.apple.com/in/app/arnxt/id1598795711"
            target="blank">
            <img className="" src={applestorelogo} alt="apple" />
          </a>

          <div className="footercopyrightdiv">
            <p>Copyright @ 2024, QULEEP PRIVATE LIMITED</p>
          </div>
        </div>
        <div className="socialiconsdiv">
          <a
            href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A"
            target="blank">
            <FaYoutube className="footersocialicons" />
          </a>
          <a href="https://www.instagram.com/arnxt2021/" target="blank">
            <FaInstagram className="footersocialicons" />
          </a>
          <a href="https://www.linkedin.com/company/arnxt" target="blank">
            <FaLinkedin className="footersocialicons" />
          </a>
          <a href="https://twitter.com/ARNXT1" target="blank">
            <FaTwitterSquare className="footersocialicons" />
          </a>
          <a href="https://www.facebook.com/ARNXT/" target="blank">
            <FaFacebookF className="footersocialicons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footercomponent;
