import Navbar from "./Navbar";
import Footertest from "./Footertest";
import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { BsBox } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import QRCode from "react-qr-code";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";
function ProductDetailAR() {
  const [productData, setProductData] = useState(null);
  const [glbFile, setGlbFile] = useState("");
  const [usdzFile, setUsdzFile] = useState("");
  const param = useParams();
  const [modal, setModal] = useState(false);
  const [isGlbKeyPresent, setIsGlbKeyPresent] = useState(false);
  const [isGlb, setIsGlb] = useState(false);
  const [viewInARitem, setViewInARitem] = useState([]);
  const history = useHistory();

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
    console.log("diffrentor", isGlbKeyPresent);
  }, [isGlbKeyPresent]);
  const handlemodalclose = () => {
    document.querySelector(".modalscan").style.display = "none";
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
  return (
    <>
      <Navbarhome/>
      <DropdownMenu />
      <div className="hero_container">
        <div class="product_detail_ar_container">
          <div class="product_detail_ar_container_child">
            <div class="product_detail_ar_container_child_child">
              <div class="product_detail_ar_container_child_child_grid">
                <div class="product_detail_ar_container_grid_child">
                  {isGlbKeyPresent ? (
                    <model-viewer
                      id="duck"
                      camera-controls
                      touch-action="pan-y"
                      ar
                      ar-scale="fixed"
                      ar-modes="webxr scene-viewer quick-look"
                      shadow-intensity="1"
                      src={glbFile}
                      ios-src={usdzFile}
                      xr-environment
                      alt="A 3D model of a duck"></model-viewer>
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

                  <div className="product_detail_ar_container_grid_child1_text2">
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
