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
  const [selectedColor, setSelectedColor] = useState(null);

  const [productData, setProductData] = useState(null);
  const [glbFile, setGlbFile] = useState("");
  const [usdzFile, setUsdzFile] = useState("");
  const param = useParams();
  const [modal, setModal] = useState(false);
  const [isGlbKeyPresent, setIsGlbKeyPresent] = useState(false);
  const [isGlb, setIsGlb] = useState(false);
  const [placement, setPlacement] = useState("");
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
  const [colorValuePresent, setColorValuePresent] = useState(false);
  const [selectedTexture, setSelectedTexture] = useState("");

  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleColorClick = (color, imageurl) => {
    setSelectedColor(color);
    // Call changeWallpaper or any other logic you want here
    setSelectedTexture(imageurl);
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
        setColorValuePresent("texture" in response.data);
        setPlacement(response.data.productdetails[0].placement);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [param]);
  useEffect(() => {
    const modelViewerTexture1 = document.querySelector(
      "model-viewer#change-speed-demo"
    );

    const createAndApplyTexture = async (channel, textureUrl) => {
      const randomSuffix = `?random=${Math.random()}`;
      const updatedTextureUrl = textureUrl + randomSuffix;
      const texture = await modelViewerTexture1.createTexture(
        updatedTextureUrl
      );
      const material = modelViewerTexture1.model.materials[0];

      if (channel.includes("base") || channel.includes("metallic")) {
        material.pbrMetallicRoughness[channel].setTexture(texture);
      } else {
        material[channel].setTexture(texture);
      }
    };

    if (modelViewerTexture1?.model) {
      createAndApplyTexture("baseColorTexture", selectedTexture);
    }
  }, [selectedTexture, colorValuePresent]);
  useEffect(() => {
    const arButton = document?.querySelector("#ar-button");

    if (arButton) {
      arButton.addEventListener("click", () => {
        // Assuming brand is a variable representing the brand value
        if (productData.brand === "godrej") {
          // Delay the redirection by 1 second (1000 milliseconds)
          setTimeout(() => {
            window.location.href = "#open-modal1";
          }, 3000);
        }
        // If brand is not "godrej," do nothing
      });
    }
  }, [productData]);

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
      window.location.href = "#";
    }
  };
  const openqrcode = () => {
    document.querySelector(".modalscan").style.display = "block";
  };
  const changeWallpaper = (imageUrl) => {
    setSelectedTexture(imageUrl);
  };
  const handleSimpleImageClick = () => {
    // Handle the click behavior when 'glb' key is not present
    // Add your logic here
    history.push(`/arView/visualizer`, {
      state: { itemname: param.id },
    });
  };
  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleLoad = () => {
      // Ensure the model is fully loaded before accessing the duration

      // To go to the first frame
      modelViewer.currentTime = 0;

      // Check if the duration is greater than 1 second
      setHasAnimation(modelViewer.duration > 1);
console.log(modelViewer.duration)
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
  }, [modelViewerRef.current,isGlbKeyPresent,colorValuePresent]);

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
      }
    }
  };
  useEffect(() => {}, [hasAnimation]);

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
                  {colorValuePresent && isGlbKeyPresent ? (
                    <div className="App">
                      <model-viewer
                        id="change-speed-demo"
                        camera-controls
                        touch-action="pan-y"
                        src={glbFile}
                        ar
                        ar-scale="fixed"
                        ar-placement="wall"
                        alt="A 3D model of a helmet"
                        ref={modelViewerRef}
                        animation-name="Dance"
                        ar-modes="webxr scene-viewer quick-look"
                        shadow-intensity="1">
                        <button slot="ar-button" id="ar-button">
                          View in your space
                        </button>
                        {hasAnimation && (
                          <div id="controls">
                            <button onClick={handleToggleAnimation}>
                              {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                          </div>
                        )}
                      </model-viewer>
                    </div>
                  ) : isGlbKeyPresent || colorValuePresent ? (
                    <div className="App">
                      <model-viewer
                        ref={modelViewerRef}
                        id="change-speed-demo"
                        camera-controls
                        touch-action="pan-y"
                        animation-name="Dance"
                        ar
                        ar-scale="fixed"
                        ar-placement={placement}
                        ar-modes="webxr scene-viewer"
                        shadow-intensity="1"
                        src={glbFile}
                        ios-src={usdzFile}
                        alt="A 3D model of a duck">
                        <button slot="ar-button" id="ar-button">
                          View in your space
                        </button>
                        {hasAnimation && (
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

                  {colorValuePresent && isGlbKeyPresent ? (
                    <div className="product_detail_ar_container_grid_child1_text2">
                      <div className="product_detail_ar_container_grid_child1_text2_child">
                        Color Variant:
                      </div>
                      <div
                        className="product_detail_ar_container_grid_child1_text2_child1"
                        style={{ textTransform: "uppercase" }}>
                        <div className="colors">
                          <li
                            data-color="#d2c8aa"
                            style={{
                              backgroundColor: "#d2c8aa",
                              border:
                                selectedColor === "#d2c8aa"
                                  ? "2px solid black"
                                  : "none",
                            }}
                            onClick={() =>
                              handleColorClick(
                                "#d2c8aa",
                                "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/Godrej+ac_aiStandardSurface1_BaseColor.png"
                              )
                            }></li>
                          <li
                            data-color="#9ab9c7"
                            style={{
                              backgroundColor: "#9ab9c7",
                              border:
                                selectedColor === "#9ab9c7"
                                  ? "2px solid black"
                                  : "none",
                            }}
                            onClick={() =>
                              handleColorClick(
                                "#9ab9c7",
                                "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/Godrej+ac_aiStandardSurface1_BaseColor-1.png"
                              )
                            }></li>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                    <div className="modal-padding">
                      User Details
                      <a href="#" title="Close" class="modal-close">
                        <AiOutlineClose />
                      </a>
                      <form
                        className="card-form"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}>
                        <div className="name">Name:</div>
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
