import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Footertest from "./Footertest";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useMyContext } from "../Context/store";
import { TbAugmentedReality } from "react-icons/tb";
import texture1 from "../../src/assets/textureImages/download (4).jpg";
import texture2 from "../../src/assets/textureImages/download (5).jpg";
import texture3 from "../../src/assets/textureImages/download (6).jpg";
import { BsBox } from "react-icons/bs";
import QRCode from "react-qr-code";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
function UpholstryMobile() {
  const [products, setProducts] = useState([]);
  const param = useParams();
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const modelViewerRef = useRef(null);
  const [selectedTexture, setSelectedTexture] = useState("");
  useEffect(() => {
    const modelViewerTexture1 = document.querySelector("model-viewer#helmet");

    const createAndApplyTexture = async (channel, textureUrl) => {
      const texture = await modelViewerTexture1.createTexture(textureUrl);
      const material = modelViewerTexture1.model.materials[index];
      if (channel.includes("base") || channel.includes("metallic")) {
        material.pbrMetallicRoughness[channel].setTexture(texture);
      } else {
        material[channel].setTexture(texture);
      }
    };
    console.log(selectedTexture);
    if (modelViewerTexture1.model) {
      createAndApplyTexture("baseColorTexture", selectedTexture);
    }
  }, [selectedTexture, index]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcategoryitems",
        {
          subcategory: param.id,
        }
      );
      //  console.log('Wishlist:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [param]);

  const changeWallpaper = async (imageurl) => {
    // var can = document.getElementById("imgCanvas");
    // var img = document.getElementById("imageid");
    // var ctx = can.getContext("2d");
    // ctx.drawImage(img, 10, 10);
    // var encodedBase = can.toDataURL();
    getBase64Image(document.getElementById("imageid"), function (base64) {
      // base64 in here.
      console.log(base64);
    });
  };
  function convert(oldImag, callback) {
    var img = new Image();
    img.onload = function () {
      callback(img);
    };
    img.setAttribute("crossorigin", "anonymous");
    img.src = oldImag.src;
  }
  function getBase64Image(img, callback) {
    convert(img, function (newImg) {
      var canvas = document.createElement("canvas");
      canvas.width = newImg.width;
      canvas.height = newImg.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, 0, 0);
      var base64 = canvas.toDataURL("image/png");
      callback(base64);
    });
  }
  const handleSeat = () => {
    setIndex(1);
    setSelectedTexture("");
    setActiveTab(1);
  };
  const handleBase = () => {
    setIndex(0);
    setSelectedTexture("");
    setActiveTab(0);
  };
  const handleArmRest = () => {
    setIndex(2);
    setSelectedTexture("");
    setActiveTab(2);
  };

  const handlemodalclose = () => {
    document.querySelector(".modalscan").style.display = "none";
  };
  return (
    <>
      <div className="App">
        <model-viewer
          id="helmet"
          camera-controls
          touch-action="pan-y"
          src="https://jobpostingbucket.s3.ap-south-1.amazonaws.com/Sofa+2.glb"
          ar
          ar-scale="fixed"
          alt="A 3D model of a helmet"
          ref={modelViewerRef}
          animation-name="Dance"
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          xr-environment>
          <div className="view_in_ar_wallpapers">
            <div id="slider1" className="hori_scroll_container_child">
              <div
                //   className="hori_scroll_container_child1"
                className="hori_scroll_container_wallpapers"
                onClick={() => changeWallpaper(texture1)}>
                <img
                  src={texture1}
                  alt="/"
                  className="hori_scroll_container_child1_image1"
                />
              </div>
              <div
                //   className="hori_scroll_container_child1"
                className="hori_scroll_container_wallpapers"
                onClick={() => changeWallpaper(texture2)}>
                <img
                  src={texture2}
                  alt="/"
                  className="hori_scroll_container_child1_image1"
                />
              </div>
              <div
                //   className="hori_scroll_container_child1"
                className="hori_scroll_container_wallpapers"
                onClick={() =>
                  changeWallpaper(
                    "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/fabric4.jpg"
                  )
                }>
                <img
                  src="https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/fabric4.jpg"
                  id="imageid"
                  alt="/"
                  className="hori_scroll_container_child1_image1"
                />
                <canvas id="imgCanvas" />
              </div>
            </div>
          </div>

          <div className="view_in_ar_mesh">
            <div
              onClick={handleBase}
              className={activeTab === 0 ? "active" : ""}>
              <button>Base</button>
            </div>
            <div
              onClick={handleSeat}
              className={activeTab === 1 ? "active" : ""}>
              <button>Seat</button>
            </div>
            <div
              onClick={handleArmRest}
              className={activeTab === 2 ? "active" : ""}>
              <button>Arm Rest</button>
            </div>
          </div>
        </model-viewer>
      </div>
    </>
  );
}

export default UpholstryMobile;
