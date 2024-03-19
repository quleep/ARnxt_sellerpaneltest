import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

import { FaPhone, FaArrowRight, FaVoicemail, FaEnvelope } from "react-icons/fa";
import { Metadata } from "../layout/MetaData";
import Navbartest from "./Navbartest";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Footertest from "./Footertest";
import Navbar from "./Navbar";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const words = ["Experience"];
  let i = 0;
  let timer;
  const wordinner = document.querySelector(".wordchange");

  function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function () {
      if (word.length > 0) {
        document.getElementById("word").innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 500);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    let loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        document.getElementById("word").innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }

      timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
  }

  window.onscroll = function () {
    scrollFun();
  };

  const div1 = document.querySelector("#getstarted1");
  const div2 = document.querySelector("#getstarted2");
  const div3 = document.querySelector("#getstarted3");
  const div4 = document.querySelector("#getstarted4");
  const div5 = document.querySelector("#getstarted5");

  const whydiv1 = document.querySelector("#image1");
  const whydiv2 = document.querySelector("#image2");

  const whydiv3 = document.querySelector("#image3");
  const whydiv4 = document.querySelector("#whyarweb");

  const nbrcheck = document.querySelector("#nbr");
  const nbrcheck1 = document.querySelector("#nbr1");

  const nbrcheck2 = document.querySelector("#nbr2");

  function scrollFun() {
    if (
      whydiv1 &&
      whydiv2 &&
      whydiv3 &&
      document.documentElement.scrollTop > 20
    ) {
      whydiv1.classList.add("animwhydiv");
      whydiv2.classList.add("animwhydiv");

      whydiv3.classList.add("animwhydiv");
    }
    if (div1 && document.documentElement.scrollTop > 30) {
      div1.classList.add("animfade1");
      div2.classList.add("animfade1");
      div3.classList.add("animfade1");
      div4.classList.add("animfade1");
      div5.classList.add("animfade1");
    } else {
      document.documentElement.classList.add("nochange");
    }

    if (document.documentElement.scrollTop > 900) {
      if (nbrcheck) {
        incNbr();

        incNbr2();
      }
      if (nbrcheck1) {
        incNbr1();
      }
      if (nbrcheck2) {
        incNbr2();
      }
    } else {
      document.documentElement.classList.add("nochange");
    }
  }

  const [value, setValue] = useState(0);

  let speed = 10;

  function incEltNbr(id) {
    let elt = document.getElementById(id);
    let endNbr = 28;
    incNbrRec(0, endNbr, elt);
  }

  function incEltNbr1(id) {
    let elt1 = document.getElementById(id);
    let endNbr1 = 8;
    incNbrRec1(0, endNbr1, elt1);
  }

  function incEltNbr2(id) {
    let elt2 = document.getElementById(id);
    let endNbr2 = 100;
    incNbrRec2(0, endNbr2, elt2);
  }

  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      if (elt) {
        elt.innerHTML = i;
        setTimeout(function () {
          incNbrRec(i + 1, endNbr, elt);
        }, speed);
      }
    }
  }
  function incNbrRec1(i, endNbr1, elt1) {
    if (i <= endNbr1) {
      if (elt1) {
        elt1.innerHTML = i;
        setTimeout(function () {
          incNbrRec1(i + 1, endNbr1, elt1);
        }, speed);
      }
    }
  }

  function incNbrRec2(i, endNbr2, elt2) {
    if (i <= endNbr2) {
      if (elt2) {
        elt2.innerHTML = i;
        setTimeout(function () {
          incNbrRec2(i + 1, endNbr2, elt2);
        }, speed);
      }
    }
  }

  function incNbr() {
    incEltNbr("nbr");
  }
  function incNbr1() {
    incEltNbr1("nbr1");
  }
  function incNbr2() {
    incEltNbr2("nbr2");
  }

  let speedc = 5;

  function incEltNbrc(id) {
    let eltc = document.getElementById(id);
    let endNbrc = 8;
    incNbrRecc(0, endNbrc, eltc);
  }

  function incNbrRecc(i, endNbrc, eltc) {
    if (i <= endNbrc) {
      eltc.innerHTML = i;
      setTimeout(function () {
        incNbrRecc(i + 1, endNbrc, eltc);
      }, speedc);
    }
  }

  function incNbr() {
    incEltNbr("nbr");
  }
  function incNbrc() {
    incEltNbrc("nbrc");
  }

  const colors = [
    "#50C878",

    "#3EB489",
    "#3CB371",
    "#7C9D8E",
    "#78866B",
    "#848B79",
    "#617C58",
    "#728C00",
    "#6B8E23",
  ];

  const brandSlide = document.querySelector(".brands-slide");

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setValue((v) => (v === 9 ? 0 : v + 1));
    }, 2000);

    setTimeout(() => {}, 2000);
  }, []);

  return (
    <div id="homemain" style={{ overflowX: "hidden" }}>
      <Navbar />

      <Helmet>
        <title> Augmented Reality MarketPlace for Businesses | ARnxt </title>
        <meta
          name="description"
          content="India’s first Augmented reality market place where the company’s stand-out feature is its DIY(Do-It-Yourself) features."
        />
        <meta
          name="keywords"
          content="
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
           "
        />
      </Helmet>

      <div className="headerbackground_div" style={{}}>
        <div className="header_text">
          <h3 className="headertoptext">
            <div className="headerhome">
              <div className="headerhomediv1">
                <h2>Sell</h2>
              </div>
              <div className="headerhomediv2">
                <div className="typing-demo">
                  <h2 className="">Experience</h2>
                </div>
              </div>
              <div className="headerhomediv3">
                <h2>Anywhere</h2>
              </div>
            </div>
          </h3>

          <div className="gifdiv"></div>

          <div className="buttonhomediv">
            <div style={{ marginRight: "50px" }}>
              <PopupButton
                className="btnheader"
                url="https://calendly.com/arnxt-meet/30min"
                rootElement={document.getElementById("root")}
                text="Schedule a call"
              />{" "}
              <FaPhone className="phonesymbol" />
            </div>
            <div className="">
              <button className="btnpartner">
                <a href="/register">Become our partner</a>
              </button>
            </div>
          </div>
          <div className="slider-1" style={{}}>
            <div className="container">
              <div className="worldleader_div">
                <div className="col-lg-12 ">
                  <h4 className="worldleadertext">Trusted by World leaders</h4>

                  <hr className="section-divider" style={{ marginTop: "" }} />

                  <div class="sliderhome">
                    <div class="slide-track" style={{ marginTop: "-30px" }}>
                      <div class="slide">
                        <img
                          src="assets/images/customer-logo-1.webp"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/customer-logo-2.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/customer-logo-3.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/customer-logo-4.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/hometownnew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/godrejnew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>

                      <div class="slide">
                        <img
                          src="assets/images/ifbnew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>

                      <div class="slide">
                        <img
                          src="assets/images/lgnew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>

                      <div class="slide">
                        <img
                          src="assets/images/nilkamanew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>

                      <div class="slide">
                        <img
                          src="assets/images/ottomatenew.png"
                          style={{
                            width: "250px",
                            height: "120px",
                            marginTop: "10px",
                          }}
                          alt="logo"
                        />
                      </div>
                      <div class="slide">
                        <img
                          src="assets/images/samsungnew.png"
                          style={{ width: "250px", height: "100%" }}
                          alt="logo"
                        />
                      </div>

                      <div class="slide">
                        <img
                          src="assets/images/simpolonew.png"
                          style={{ width: "100%", height: "100%" }}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundgif_div"></div>
      </div>

      {/* Header ends here --------------------------------------------------------------------------------- */}

      {/* Services starts here ----------------------------------------------------------------------------- */}

      <div className="homevideodiv">
        <ReactPlayer
          url="https://youtu.be/GwsMgmxNpK8"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      <div className="ardiv">
        <div className="ardiv_header"></div>
        <div className="ardiv_content">
          <h3
            className=""
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              fontFamily: "Manrope, san-serif",
            }}>
            The future of shopping is Connected, Virtual & Augmented.
          </h3>
        </div>

        <div className="arimagemob">
          <div>
            <div className="armobdiv1">
              <div className="armobdivheader">
                <div class="waviy">
                  <span style={{ "--i": "1" }}>W</span>
                  <span style={{ "--i": "2" }}>h</span>
                  <span style={{ "--i": "3" }}>y</span>
                  <span style={{ "--i": "4" }}>A</span>
                  <span style={{ "--i": "5" }}>R</span>
                  <span style={{ "--i": "5" }}>n</span>
                  <span style={{ "--i": "7" }}>x</span>
                  <span style={{ "--i": "8" }}>t</span>
                  <span style={{ "--i": "9" }}>?</span>
                </div>
              </div>

              <div className="armobdivbody">
                <img
                  src="/assets/images/arimage1.png"
                  alt="logo"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
              <div className="armobdivfooter">
                <div className="image_divcontent2">
                  <h4
                    className=""
                    style={{
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                    }}>
                    Rich interactivity
                  </h4>
                </div>
                <div className="image_divcontent3">
                  <p
                    className=""
                    style={{
                      textAlign: "justify",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}>
                    Supports feature animations, sound, hotspots, dynamic
                    lighting, feature-focus cameras and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="armobdiv2">
              <div className="armobdiv2body">
                <img
                  src="/assets/images/arimage2.jpeg"
                  alt="logo"
                  style={{ height: "200px", width: "200px", marginTop: "5px" }}
                />
              </div>
              <div className="armobdiv2footer">
                <div className="arimagedivcontent2">
                  <h4
                    className=""
                    style={{
                      marginBottom: "30px",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                    }}>
                    Augmented Reality
                  </h4>

                  <p
                    className=""
                    style={{
                      textAlign: "justify",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}>
                    Visualize how products will look and how well they will fit
                    in your home or office environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="armobdiv3">
              <div className="armobdiv2body">
                <img
                  src="/assets/images/arimage3.png"
                  alt="logo"
                  style={{ height: "150px", width: "150px", marginTop: "5px" }}
                />
              </div>
              <div className="armobdiv2footer">
                <div className="arimagedivcontent2">
                  <h4
                    className=""
                    style={{
                      marginBottom: "20px",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                    }}>
                    Analytics
                  </h4>

                  <p
                    className="analyticsp"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}>
                    Get insights on which product features influence purchase
                    decisions through in-depth experience analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ardiv_image">
          <div className="image_divar">
            <div id="image1" className="image_divar1">
              <div className="image_divcontent">
                <div className="image_divcontent1">
                  <img
                    src="/assets/images/arimage1.png"
                    alt="logo"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
                <div className="image_divcontent2">
                  <h4
                    className=""
                    style={{
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                    }}>
                    Rich interactivity
                  </h4>
                </div>
                <div className="image_divcontent3">
                  <p
                    className=""
                    style={{
                      textAlign: "justify",
                      fontFamily: "Josefin Sans, san-serif",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}>
                    Supports feature animations, sound, hotspots, dynamic
                    lighting, feature-focus cameras and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="image_divar2">
              <div className="image_content2">
                <div id="image2" className="image_contentfirst">
                  <div className="arimage_div">
                    <div className="arimagedivcontent3">
                      <div className="waviy" id="whyarweb">
                        <span style={{ "--i": "1" }}>W</span>
                        <span style={{ "--i": "2" }}>h</span>
                        <span style={{ "--i": "3", marginRight: "10px" }}>
                          y
                        </span>
                        <span style={{ "--i": "4" }}>A</span>
                        <span style={{ "--i": "5" }}>R</span>
                        <span style={{ "--i": "6" }}>n</span>
                        <span style={{ "--i": "7" }}>x</span>
                        <span style={{ "--i": "8" }}>t</span>
                        <span style={{ "--i": "9" }}>?</span>
                      </div>
                    </div>
                    <div className="arimagedivcontent1">
                      <img
                        src="/assets/images/arimage2.jpeg"
                        alt="logo"
                        style={{
                          height: "200px",
                          width: "200px",
                          marginTop: "5px",
                        }}
                      />
                    </div>

                    <div className="arimagedivcontent2">
                      <h4
                        className=""
                        style={{
                          marginBottom: "30px",
                          fontFamily: "Josefin Sans, san-serif",
                          fontWeight: "bold",
                        }}>
                        Augmented Reality
                      </h4>

                      <p
                        className=""
                        style={{
                          textAlign: "justify",
                          fontFamily: "Josefin Sans, san-serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}>
                        Visualize how products will look and how well they will
                        fit in your home or office environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="image_contentsecond" id="image3">
                  <div className="arimage_div2nd">
                    <div className="arimagedivcontent2">
                      <h4
                        className=""
                        style={{
                          marginBottom: "20px",
                          fontFamily: "Josefin Sans, san-serif",
                          fontWeight: "bold",
                        }}>
                        Analytics
                      </h4>

                      <p
                        className="analyticsp"
                        style={{
                          textAlign: "justify",
                          fontFamily: "Josefin Sans, san-serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}>
                        Get insights on which product features influence
                        purchase decisions through in-depth experience
                        analytics.
                      </p>
                    </div>
                    <div className="arimagedivcontent1">
                      <img
                        src="/assets/images/arimage3.png"
                        alt="logo"
                        style={{
                          height: "150px",
                          width: "150px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="cardbody_div" style={{}}>
        <div className="container">
          <div className=""></div>
          <div className="">
            {/*

              <div className="col-lg-12" style={{marginBottom:'40px'}}>
              <h2 className="heading_home">Why ARnxt ?</h2>
             

            </div>
              <div className="whyarnxt_div" style={{marginBottom:'119px'}}>
              <div  style={{marginTop:'30px' , flex:'1'}}>
              <div className="card1">
               <div className="card_content1">
                <div  style={{marginBottom:'15px'}}><h3  style={{color:'black'}}>TECHNOLOGY</h3></div>
                 <div><p style={{color:'white',fontFamily:'Josefin Sans, san-serif'}}>Augmented Reality and Computer<br/>Vision Enabled Application</p></div>
               </div>
               <div className="card_content2" >
                <div  className="card_con">
                  <div className="card_Contentbox1" >
                    <h5 style={{textAlign:'justify', margin:'5px',fontFamily:'Josefin Sans, san-serif'}}>AR overlays digital image into your view of real world</h5>

                  </div >
                  <div  className="card_Contentbox2"  >  
                  <h5 style={{textAlign:'justify', margin:'5px',fontFamily:'Josefin Sans, san-serif'}}>Computer Vision based floor and wall changer Changes paint and wallpapers behind objects too</h5>


                  </div>
                  <div className="card_Contentbox3"></div>

                </div>

               </div>
                  </div>

              </div>
           

              <div  style={{marginTop:'30px', flex:'1'}}>
              <div className="card2">
               <div className="card_content1">
                <img src='assets/images/custexp.png'  style={{width:'250px', height:'200px'}}/>
               </div>
               <div className="card_content1"  style={{backgroundColor:''}}>
                <p style={{fontSize:'18px', color:'black', textAlign:'justify', letterSpacing:'1px',fontFamily:'Josefin Sans, san-serif'}}>Let your customers try out and experience products directly from our app.
                <br/>With the augmented reality features your customers can place product virtually at the comfort of their home.
                </p>
               </div>

                  </div>

              </div>
              <div  style={{marginTop:'30px', flex:'1'}}>
              <div className="card3">
               <div className="card_contentbusiness">
               <div  style={{marginBottom:'15px'}}><h3  style={{color:'black'}}>BUSINESS</h3></div>
                 <div><p style={{color:'black',fontSize:'18px',textAlign:'justify',fontFamily:'Josefin Sans, san-serif'}}>Get your products 3d models and application for your customers.<br/>
                 Get insightful data of your product on app in the form of dashboards</p></div>
               </div>
               <div className="card_content3">
                  <div className="busi_content1" > <p style={{fontSize:'15px', color:'black', marginTop:'5px', fontFamily:'Josefin Sans, san-serif'}} >Boost your sales</p></div>
                    <div  className="wire1"><p  style={{fontSize:'50px',marginLeft:'-35px', color:'black', marginTop:'-30px'}}>.</p>
                    </div>
                    <div className="wire2"><p  style={{fontSize:'50px',marginLeft:'-25px', color:'black', marginTop:'-30px'}}>.</p></div>
                  <div className="busi_content2">
                  <p   style={{fontSize:'15px', color:'black', marginTop:'5px', fontFamily:'Josefin Sans, san-serif'}} >Increase Conversion</p>
                  </div>
                  <div  className="wire4"><p  style={{fontSize:'50px',marginLeft:'15px', color:'black', marginTop:'-30px'}}>.</p>
                    </div>
                    <div className="wire3"></div>
                    <div className="wire5"><p  style={{fontSize:'50px',marginLeft:'36px', color:'black', marginTop:'-30px'}}>.</p></div>


                  <div className="busi_content3">
                  <p style={{fontSize:'15px', color:'black', marginTop:'5px', fontFamily:'Josefin Sans, san-serif'}} >Improve demand supply funnel</p>
                  </div>
                  <div  className="wire6"><p  style={{fontSize:'50px',marginLeft:'-15px', color:'black', marginTop:'-30px'}}>.</p>
                    </div>
                    <div className="wire7"><p  style={{fontSize:'50px',marginLeft:'-40px', color:'black', marginTop:'-30px'}}>.</p></div>

                  <div className="busi_content4">
                  <p style={{fontSize:'15px', color:'black', marginTop:'5px', fontFamily:'Josefin Sans, san-serif'}} >Attract new customers</p>
                  </div>
                  <div className="wire8">
                  <p  style={{fontSize:'50px',marginLeft:'30px', color:'black', marginTop:'-30px'}}>.</p>
                  </div>
                   
                    
                    <div className="wire10">
                    <p  style={{fontSize:'50px',marginLeft:'48px', color:'black', marginTop:'-30px'}}>.</p>
                    </div>

                  <div className="busi_content5">
                  <p style={{fontSize:'15px', color:'black', marginTop:'5px', fontFamily:'Josefin Sans, san-serif'}} >Increase the product visiblity</p>
                  </div>

                 

               </div>

                  </div>

            
              </div>
            </div>

            */}

            <div style={{ marginBottom: "40px" }}>
              <div class="waviy">
                <span style={{ "--i": "1" }}>G</span>
                <span style={{ "--i": "2" }}>e</span>
                <span style={{ "--i": "3" }}>t</span>
                <span style={{ "--i": "4" }}>t</span>
                <span style={{ "--i": "5" }}>i</span>
                <span style={{ "--i": "5" }}>n</span>
                <span style={{ "--i": "7", marginRight: "10px" }}>g</span>
                <span style={{ "--i": "8" }}>S</span>
                <span style={{ "--i": "9" }}>t</span>
                <span style={{ "--i": "10" }}>a</span>
                <span style={{ "--i": "11" }}>r</span>
                <span style={{ "--i": "12" }}>t</span>
                <span style={{ "--i": "13" }}>e</span>
                <span style={{ "--i": "14" }}>d</span>
              </div>
            </div>
            <div className="getstarted_div">
              <div className="card" style={{ height: "450px" }}>
                <div id="getstarted1">
                  <div className="getstartedcontent1">
                    <div className="getstartedcontentheader">
                      <div style={{ display: "flex" }}>
                        <h3
                          className="text"
                          style={{ fontSize: "180px", fontWeight: "bold" }}>
                          1
                        </h3>
                        <img
                          src="/assets/images/Registerlogo.PNG"
                          alt="logo"
                          style={{
                            height: "40px",
                            width: "40px",
                            marginLeft: "60px",
                            marginTop: "80px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="getstartedcontentbody">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                        }}>
                        <p
                          className=""
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "",
                          }}>
                          Simple Registration
                        </p>
                        <p
                          className=""
                          style={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            fontFamily: "Manrope, san-serif",
                          }}>
                          No credit card required.
                        </p>
                      </div>
                    </div>

                    <a className="registercard" href="/register">
                      Register <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ height: "450px" }}>
                <div id="getstarted2">
                  <div className="getstartedcontent1">
                    <div className="getstartedcontentheader">
                      <div style={{ display: "flex" }}>
                        <h3
                          className="text"
                          style={{ fontSize: "180px", fontWeight: "bold" }}>
                          2
                        </h3>
                        <img
                          src="/assets/images/Loginlogo.PNG"
                          alt="logo"
                          style={{
                            height: "40px",
                            width: "40px",
                            marginLeft: "60px",
                            marginTop: "80px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="getstartedcontentbody">
                      <div className="logincard">
                        <p
                          className=""
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "",
                            marginTop: "-5px",
                            marginBottom: "20px",
                          }}>
                          Quick Login
                        </p>
                        <p
                          className=""
                          style={{
                            fontFamily: "Josefin Sans, san-serif",
                            fontSize: "15px",
                            marginTop: "-10px",
                            fontFamily: "Manrope, san-serif",
                            fontWeight: "bold",
                          }}>
                          Get access to your dashboard on login.
                        </p>
                      </div>
                    </div>

                    <a
                      className=""
                      href="/login"
                      style={{
                        marginTop: "70px",
                        width: "150px",
                        marginLeft: "50px",
                        fontFamily: "Manrope, san-serif",
                        fontWeight: "bold",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}>
                      Login <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ height: "450px" }}>
                <div id="getstarted3">
                  <div className="getstartedcontent2">
                    <div
                      className="getstartedcontentheader2"
                      style={{ marginBottom: "30px" }}>
                      <div style={{ display: "flex" }}>
                        <h3
                          className="text"
                          style={{ fontSize: "180px", fontWeight: "bold" }}>
                          3
                        </h3>
                        <img
                          src="/assets/images/Triallogo.PNG"
                          alt="logo"
                          style={{
                            height: "60px",
                            width: "60px",
                            marginLeft: "60px",
                            marginTop: "80px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="getstartedcontentbody2"
                      style={{ marginTop: "50px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "-10px",
                        }}>
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginTop: "10px",
                          }}>
                          Trial
                        </p>

                        <p
                          className=""
                          style={{
                            fontSize: "15px",
                            marginTop: "10px",
                            fontFamily: "Manrope, san-serif",
                            textAlign: "justify",
                            fontWeight: "bold",
                          }}>
                          Simply add details of your products and get all the
                          premium features for them as per t&c. Have any query?
                        </p>
                      </div>
                      <a>
                        <PopupButton
                          className="homecontact"
                          url="https://calendly.com/arnxt-meet/30min"
                          rootElement={document.getElementById("root")}
                          text="Contact us"
                        />{" "}
                        <FaPhone />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ height: "450px" }}>
                <div id="getstarted4">
                  <div className="getstartedcontent2">
                    <div
                      className="getstartedcontentheader2"
                      style={{ marginBottom: "30px" }}>
                      <div style={{ display: "flex" }}>
                        <h3
                          className="text"
                          style={{ fontSize: "180px", fontWeight: "bold" }}>
                          4
                        </h3>
                        <img
                          src="/assets/images/Upgradelogo.PNG"
                          alt="logo"
                          style={{
                            height: "40px",
                            width: "40px",
                            marginLeft: "60px",
                            marginTop: "80px",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="getstartedcontentbody2"
                      style={{ marginTop: "70px", marginBottom: "120px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                        }}>
                        <p
                          style={{
                            fontFamily: "",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}>
                          Upgrade
                        </p>
                        <p
                          className=""
                          style={{
                            fontSize: "15px",
                            textAlign: "justify",
                            fontWeight: "bold",
                            fontFamily: "Manrope, san-serif",
                          }}>
                          Select the best plan and get additional{" "}
                          <b style={{ color: "green", fontSize: "18px" }}>
                            10%
                          </b>{" "}
                          discount by upgrading during the free trial.
                        </p>

                        <a className="checkoutproduct" href="/product">
                          Checkout products
                          <span style={{ marginTop: "-1px" }}>
                            <FaArrowRight />
                          </span>
                        </a>
                      </div>
                    </div>

                    <div
                      className="getstartedcontentfooter2"
                      style={{ marginTop: "-120px", marginLeft: "10px" }}>
                      <a className="checkoutplan" href="/pricing">
                        Checkout plans <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ height: "450px" }}>
                <div id="getstarted5">
                  <div className="getstartedcontent2">
                    <div className="getstartedcontentheader2">
                      <div style={{ display: "flex" }}>
                        <h3
                          className="text"
                          style={{ fontSize: "180px", fontWeight: "bold" }}>
                          5
                        </h3>
                        <img
                          src="/assets/images/paylogo.PNG"
                          alt="logo"
                          style={{
                            height: "40px",
                            width: "40px",
                            marginLeft: "60px",
                            marginTop: "80px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="getstartedcontentbody2"
                      style={{ marginTop: "40px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "25px",
                        }}>
                        <p
                          className=""
                          style={{
                            marginTop: "",
                            fontWeight: "bold",
                            fontFamily: "",
                            fontSize: "20px",
                          }}>
                          Pay
                        </p>
                        <p
                          className=""
                          style={{
                            fontSize: "15px",
                            textAlign: "justify",
                            fontWeight: "bold",
                            fontFamily: "Manrope, san-serif",
                          }}>
                          We support almost all the payment methods including
                          Credit Cards, Net Banking, UPI and others.
                        </p>
                      </div>
                      <div className="btnreachout">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=care@arnxt.com&su=&body=&bcc=">
                          {" "}
                          Reach out <FaArrowRight />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services ends here --------------------------------------------------------------------------- */}

      {/* Slider starts here------------------------------------------------------------------------------------- */}

      <div className="slider-1">
        <div className="container">
          <div className="">
            <div className="col-lg-12">
              <div className="waviy" style={{ marginTop: "30px" }}>
                <span style={{ "--i": "1" }}>W</span>
                <span style={{ "--i": "2", marginRight: "10px" }}>e</span>
                <span style={{ "--i": "3" }}>a</span>
                <span style={{ "--i": "4" }}>r</span>
                <span style={{ "--i": "5", marginRight: "10px" }}>e</span>
                <span style={{ "--i": "5" }}>g</span>
                <span style={{ "--i": "7" }}>r</span>
                <span style={{ "--i": "8" }}>o</span>
                <span style={{ "--i": "9" }}>w</span>
                <span style={{ "--i": "10" }}>i</span>
                <span style={{ "--i": "11" }}>n</span>
                <span style={{ "--i": "12" }}>g</span>
              </div>

              <div className="slider-container">
                <div className="brands_div">
                  <div>
                    <div className="brands_divcontent">
                      <div className="brands_divcontent1">
                        <h2 id="nbr" className="number_div">
                          28
                        </h2>
                      </div>
                      <div className="brands_divcontent2">
                        <h2
                          className="text"
                          style={{
                            fontFamily: "Manrope, san-serif",
                            fontSize: "50px",
                            fontWeight: "bold",
                          }}>
                          BRANDS
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="brands_divcontent">
                      <div className="brands_divcontent1">
                        <h2 id="nbr1" className="number_div">
                          8
                        </h2>
                      </div>
                      <div className="brands_divcontent2">
                        <h2
                          className="text"
                          style={{
                            fontFamily: "Manrope, san-serif",
                            fontSize: "50px",
                            fontWeight: "bold",
                          }}>
                          CATEGORIES
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="brands_divcontent">
                      <div className="brands_divcontent1">
                        <div style={{ display: "flex", marginLeft: "80px" }}>
                          <h2 id="nbr2" className="number_div">
                            100{" "}
                          </h2>{" "}
                          <span
                            className="number_div"
                            style={{ marginTop: "-7px" }}>
                            +
                          </span>
                        </div>
                      </div>
                      <div className="brands_divcontent2">
                        <h2
                          className="text"
                          style={{
                            fontFamily: "Manrope, san-serif",
                            fontSize: "50px",
                            fontWeight: "bold",
                          }}>
                          DOWNLOADS
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="brands_divcontent">
                      <div className="brands_divcontent1">
                        <h2 className="number_div">4.2</h2>
                      </div>
                      <div className="brands_divcontent2">
                        <h2
                          className="text"
                          style={{
                            fontFamily: "Manrope, san-serif",
                            fontSize: "50px",
                            fontWeight: "bold",
                          }}>
                          RATINGS
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photorealistic Rendering sections ends here---------------------------------------------------------------------------- */}

      {/* Testimonials stsrts here ------------------------------------------------------------------------------------------------- */}

      <div
        className="cards-2 bg-gray"
        style={{ backgroundColor: "white", marginTop: "-200px" }}>
        <div className="container">
          <div className="">
            <div
              className="col-lg-12"
              style={{ marginBottom: "60px", marginTop: "-50px" }}>
              <div className="waviy" style={{ marginTop: "40px" }}>
                <span style={{ "--i": "1" }}>T</span>
                <span style={{ "--i": "2" }}>e</span>
                <span style={{ "--i": "3" }}>s</span>
                <span style={{ "--i": "4" }}>t</span>
                <span style={{ "--i": "5" }}>i</span>
                <span style={{ "--i": "5" }}>m</span>
                <span style={{ "--i": "7" }}>o</span>
                <span style={{ "--i": "8" }}>n</span>
                <span style={{ "--i": "9" }}>i</span>
                <span style={{ "--i": "10" }}>a</span>
                <span style={{ "--i": "11" }}>l</span>
                <span style={{ "--i": "12" }}>s</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="col-lg-12">
              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body2">
                  <p className="testimonial-text">
                    “Our Takeout went through the roofs because this was the
                    solution which the entire Industry was looking forward to
                    get the real time Experience of the product.”
                  </p>
                  <div className="testimonial-author">Santosh</div>
                  <div className="occupation">
                    Head – Real Estate, Hero Motocorp Ltd
                  </div>
                </div>
                <div className="gradient-floor red-to-blue"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body2">
                  <p className="testimonial-text">
                    “A great platform to showcase all our products digitally
                    with LIVE visualization”
                  </p>
                  <div className="testimonial-author">Ranjan Tarafder</div>
                  <div className="occupation">
                    NSM @ INDIA’s Largest Wallcoverings Organisation
                  </div>
                </div>
                <div className="gradient-floor purple-to-green"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body2">
                  <p className="testimonial-text">
                    “Our sales lead and customer delight has grown exponentially
                    with the help of ARNnxt platform. A great product for all –
                    Sellers as well as buyers.”
                  </p>
                  <div className="testimonial-author">Manuj Sharma</div>
                  <div className="occupation">CSA, Schneider Electric</div>
                </div>
                <div className="gradient-floor red-to-blue"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body2">
                  <p className="testimonial-text">
                    “Helping our customers succeed”
                  </p>
                  <div className="testimonial-author">Manish Upadhyay</div>
                  <div className="occupation">
                    Vice President - Supply Chain &amp; Emerging Business at H
                    &amp; R Johnson (India)
                  </div>
                </div>
                <div className="gradient-floor blue-to-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials ends here ----------------------------------------------------------------------------------------------------------------- */}

      <Footertest />
    </div>
  );
};

export default HomePage;
