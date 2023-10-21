import Navbar from './Navbar';
import Footertest from './Footertest';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation ,useParams,useHistory} from "react-router-dom";

function ProductDetailAR() {
      const [productData, setProductData] = useState(null);
  const [glbFile, setGlbFile] = useState("");
  const [usdzFile, setUsdzFile] = useState("");
  const param = useParams();

  const [isGlb, setIsGlb] = useState(false);
  const [viewInARitem, setViewInARitem] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsingleproduct?productid=${param.id}`
        );
        const data = response.data.productdetails[0];
        setGlbFile(response.data.glb);
        setUsdzFile(response.data.usdz);
        console.log(data);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [param]);
  return (
   <>
      <Navbar />
    <div className="hero_container">
       <div class="product_detail_ar_container">
      <div class="product_detail_ar_container_child">
        <div class="product_detail_ar_container_child_child">
          <div class="product_detail_ar_container_child_child_grid">
            <div class="product_detail_ar_container_grid_child">
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
            </div>
            <div class="product_detail_ar_container_grid_child1">
              <h2 class="product_detail_ar_container_grid_child1_text1">
                {productData?.productname
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h2>

              

                <p class="product_detail_ar_container_grid_child1_text2_child">₹{productData?.offerprice}</p>

              <div className="product_detail_ar_container_grid_child1_text2">
                <div className="product_detail_ar_container_grid_child1_text2_child">
                  Description
                </div>
                <div className="product_detail_ar_container_grid_child1_text2_child1">
                  {productData?.additional}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footertest />
    </>
  );
}

export default ProductDetailAR