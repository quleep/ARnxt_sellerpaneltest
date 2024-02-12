import React from "react";
import { Metadata } from "../layout/MetaData";
import { Helmet } from "react-helmet";
import Navbartest from "./Navbartest";
import Footertest from "./Footertest";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";

const Blognew = () => {
  const history = useHistory();

  const handleClick = (val) => {
    history.push({
      pathname: `/blogsecond`,
      state: val,
    });
  };
  return (
    <div>
      <Navbarhome />
      <Helmet>
        <title>
          Arnxt Blog | Information about Augmented Reality & Metaverse
        </title>
        <meta
          name="description"
          content="Know useful information about augmented reality, virtual reality, metaverse, festemverse etc "
        />
        <meta
          name="keywords"
          content="
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
          
          
          
          "
        />
      </Helmet>

      <div className="blogbody">
        <div className="blogdiv">
          <div>
            <div className="carddetails">
              <img
                src="/assets/images/blogimage1.jpg"
                style={{}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <div className="cardtitle">
                  <h5 className="card-title">Opportunities for AR </h5>
                </div>
                <div className="cardtext">
                  <p className="card-text">
                    Retailers are instead turning to AR to help customers
                    digitally test out thousands of beauty .......
                  </p>
                </div>
                <div className="cardbutton">
                  <a href="" onClick={() => handleClick("1")} className="">
                    Read more.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="carddetails">
              <img
                src="/assets/images/2.jpeg"
                style={{}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <div className="cardtitle">
                  <h5 className="card-title"> What Is Virtual Reality (VR)?</h5>
                </div>
                <div className="cardtext">
                  <p className="card-text">
                    Augmented reality stating the technology as differentiator,
                    towards Retail........
                  </p>
                </div>
                <div className="cardbutton">
                  <a href="" onClick={() => handleClick("2")} className="">
                    Read more.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="carddetails">
              <img
                src="/assets/images/3.jpeg"
                style={{}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <div className="cardtitle">
                  <h5 className="card-title">Augmented reality</h5>
                </div>
                <div className="cardtext">
                  <p className="card-text">
                    {" "}
                    Augmented reality in our surroundings. To have a better
                    understanding of this .....
                  </p>
                </div>
                <div className="cardbutton">
                  <a href="" onClick={() => handleClick("3")} className="">
                    Read more.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="carddetails">
              <img
                src="/assets/images/5.jpeg"
                style={{}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <div className="cardtitle">
                  <h5 className="card-title">What is Augmented Reality </h5>
                </div>
                <div className="cardtext">
                  <p className="card-text">
                    {" "}
                    Augmented Reality is an enhanced and interactive experience
                    in which .....
                  </p>
                </div>
                <div className="cardbutton">
                  <a href="" onClick={() => handleClick("4")} className="">
                    Read more.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footercomponent />
    </div>
  );
};

export default Blognew;
