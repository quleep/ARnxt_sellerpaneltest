import Navbar from "./Navbar";
import Footertest from "./Footertest";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { BsBox } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";
import Toast from "react-bootstrap/Toast";

import QRCode from "react-qr-code";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";
function ProductDetailAR() {
  const [count, setCount] = useState(null);

  const [productData, setProductData] = useState(null);
  const [glbFile, setGlbFile] = useState("");
  const [usdzFile, setUsdzFile] = useState("");
  const param = useParams();
  const [modal, setModal] = useState(false);
  const [isGlbKeyPresent, setIsGlbKeyPresent] = useState(false);
  const [isGlb, setIsGlb] = useState(false);
  const [viewInARitem, setViewInARitem] = useState([]);
  const history = useHistory();
  const modelViewerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
        const [state, setState] = useState("");
  const [contact, setContact] = useState("");

  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
 const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
    const handleCityChange = (event) => {
       setCity(event.target.value);

  };
    const handleStateChange = (event) => {
       setState(event.target.value);

  };
    const handleContactChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) {
      setContact(value);
      setContactError("");
    } else {
      setContactError("* Contact number should be 10 or less than 10");
    }
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsingleproduct?productid=${param.id}`
        );
        const data = response.data.productdetails[0];
        setGlbFile(response.data.glb);
        setUsdzFile(response.data.usdz);
        setIsGlbKeyPresent("glb" in response.data);

        console.log(data);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [param]);
  useEffect(() => {
      const arButton = document.querySelector("change-speed-demo");
      arButton?.addEventListener("quick-look-button-tapped", () => {
        setCount("dd");
        window.location.href = "https://https://www.nasa.gov/";
        
      });
    console.log("diffrentor", isGlbKeyPresent);
    modelViewerRef.current?.addEventListener("ar-status", (event) => {
      setCount(event.detail.status);
      console.log(event.detail.status);
          window.location.href = '#open-modal1';

    });
       modelViewerRef?.current?.addEventListener(
        'quick-look-button-tapped',
        () =>   window.location.href = '#open-modal'
      );
  }, [isGlbKeyPresent]);
  const handlemodalclose = () => {
    document.querySelector(".modalscan").style.display = "none";
  };
    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
 

      const newApplicant = {
      Id: new Date().getTime().toString(),
            registration_Time: new Date().toString(),

        name: name,
        contactNumber: contact,
        city: city,
        state: state,
      };

      const applicantResponse = await axios.post(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/adduserarnxtdata",
        newApplicant
      );
      setShowToast(true);
    
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
                window.location.href = '#';

    }
  };
  const openqrcode = () => {
    document.querySelector(".modalscan").style.display = "block";
  };
  const handleSimpleImageClick = () => {
    // Handle the click behavior when 'glb' key is not present
    console.log("Handle Simple Image Click");
    // Add your logic here
    history.push(`/arView/visualizer`, {
      state: { itemname: param.id },
    });
  };
  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = () => {
      // Ensure the model is fully loaded before accessing the duration
      console.log(modelViewer.duration);

      // To go to the first frame
      modelViewer.currentTime = 0;

      // Check if the duration is greater than 1 second
      setHasAnimation(modelViewer.duration > 1);

      // To go to the last frame
      modelViewer.currentTime = modelViewer.duration;
    };

    if (modelViewer) {
      modelViewer.addEventListener("load", handleLoad);
    }

    // Cleanup event listener
    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("load", handleLoad);
      }
    };
  }, [modelViewerRef.current]);

  const handleToggleAnimation = async () => {
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
      if (hasAnimation) {
        if (isPlaying) {
          await modelViewer.pause();
        } else {
          modelViewer.play();
        }

        setIsPlaying(!isPlaying);
      } else {
        console.log("No animation present or duration is less than 1 second.");
      }
    }
  };
  useEffect(() => {
    console.log("anikami", hasAnimation);
  }, [hasAnimation]);

  return (
    <>
      <Navbarhome />
      <DropdownMenu />
      <div className="hero_container">
        <div class="product_detail_ar_container">
          <div class="product_detail_ar_container_child">
            <div class="product_detail_ar_container_child_child">
              <div class="product_detail_ar_container_child_child_grid">
                <div class="product_detail_ar_container_grid_child">

                  {isGlbKeyPresent ? (
                    <div className="App">
                      <model-viewer
                        ref={modelViewerRef}
                        id="change-speed-demo"
                        camera-controls
                        touch-action="pan-y"
                        animation-name="Dance"
                        ar
                        ar-scale="fixed"
                        ar-modes="webxr scene-viewer"
                        shadow-intensity="1"
                        src={glbFile}
                        ios-src={usdzFile}
                        alt="A 3D model of a duck">
                        {hasAnimation && ( // Conditionally render controls if hasAnimation is true
                          <div id="controls">
                            <button onClick={handleToggleAnimation}>
                              {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                          </div>
                        )}
                      </model-viewer>
                    </div>
                  ) : (
                    <img src={productData?.imageurl[0]} alt="Simple Image" />
                  )}
                </div>
                <div class="product_detail_ar_container_grid_child1">
                  <h2 class="product_detail_ar_container_grid_child1_text1">
                    {productData?.productname
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>

                  <p class="product_detail_ar_container_grid_child1_text2_child">
                    ₹{productData?.offerprice}
                  </p>
                  <div className="product_detail_ar_container_grid_child1_text2">
                    <div className="product_detail_ar_container_grid_child1_text2_child">
                      Brands
                    </div>
                    <div
                      className="product_detail_ar_container_grid_child1_text2_child1"
                      style={{ textTransform: "uppercase" }}>
                      {productData?.brand
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </div>
                  </div>
                  <div className="product_detail_ar_container_grid_child1_text2">
                    <div className="product_detail_ar_container_grid_child1_text2_child">
                      Dimensions:
                    </div>
                    <div className="product_detail_ar_container_grid_child1_text2_child1">
                      {productData?.lengthprod}
                      {productData?.unit} (L) x {productData?.breadthprod}
                      {productData?.unit} (B) x {productData?.height}
                      {productData?.unit} (H)
                    </div>
                  </div>

                  <div className="product_detail_ar_container_grid_child1_text2">
                    <div className="product_detail_ar_container_grid_child1_text2_child">
                      Description
                    </div>
                    <div className="product_detail_ar_container_grid_child1_text2_child1">
                      {productData?.specification}
                    </div>
                  </div>

                  <div className="product_detail_ar_container_grid_child1_viewinroom">
                    {isGlbKeyPresent ? (
                      <a href="#open-modal" className="btn-link">
                        <BsBox className="icon" /> View In Your Room
                      </a>
                    ) : (
                      <a className="btn-link" onClick={handleSimpleImageClick}>
                        <BsBox className="icon" /> View In Your Room
                      </a>
                    )}
                  </div>

                  <div id="open-modal" class="modal-window">
                    <div>
                      <a href="#" title="Close" class="modal-close">
                        <AiOutlineClose />
                      </a>
                      <QRCode
                        value={`arnxt.com/arview/productdetail/${param.id}`}
                      />
                      <p className="semibold_text">
                        Scan the QR code with your mobile device to view the
                        product in your space.
                      </p>
                    </div>
                  </div>
                     <div id="open-modal1" class="modal-window">
                      <div className="modal-padding">User Details
                       <a href="#" title="Close" class="modal-close">
                        <AiOutlineClose />
                      </a>
            <form
              className="card-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}>
              <div className="name">Name</div>
              <input
                type="text"
                className="name-input"
                required
                onChange={handleNameChange}
              />
              <div className="name">Contact Number:</div>
              <input
                type="tel"
                className="name-input"
                required
                pattern="[0-9]{10}"
                onChange={handleContactChange}
              />
               <div className="name">State:</div>
              <input
                type="text"
                className="name-input"
                required
                onChange={handleStateChange}
              />
              <div className="name">City:</div>
              <input
                type="text"
                className="name-input"
                required
                onChange={handleCityChange}
              />
 
          
              {isLoading && <div className="loader"></div>}
              <button
                className="action-button"
                type="submit"
                disabled={isLoading}>
                {isLoading ? "Submiting..." : "Submit"}
              </button>
            </form>

            <Toast
              onClose={() => setShowToast(false)}
              bg="success"
              show={showToast}
              delay={3000}
              autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Success</strong>
              </Toast.Header>
              <Toast.Body className={"text-white"}>
                Successfully Uploaded!
              </Toast.Body>
            </Toast>
          </div>
                  </div>
                  <div class="modalscan">
                    <div class="modal-wrapscan">
                      <span
                        className="closemodalscan"
                        onClick={handlemodalclose}>
                        <FaTimes style={{ color: "red", fontSize: "20px" }} />
                      </span>
                      <span>
                        <div></div>

                        <QRCode
                          value={`arnxt.com/arview/productdetail/${param.id}`}
                        />
                      </span>
                      <p className="dataupload">
                        Scan the QR code with your mobile device to view the
                        product in your space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
}

export default ProductDetailAR;
