import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
function RoomBrands() {
  const [products, setProducts] = useState([]);
  const param = useParams();
  const history = useHistory();
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbranddetails",
        {
          brand: param.id.toLowerCase(),
        }
      );
      console.log("brand:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
  window.scrollTo(0, 0)
}, [param])
  useEffect(() => {
    fetchData();
  }, [param]);
  const nextPage = (product_Id) => {
    history.push(`/arView/productdetail/${product_Id}`, {
      state: { product_Id },
    });
  };
  return (
    <>
           <Header />
      <DropdownMenu />
      <div className="hero_container">
        <div class="rooms_category_container">
          <div class="rooms_category_container1">
            <div class="rooms_category_container_grid">
              {products.map((item) => (
                <div
                  class="rooms_category_container_grid_child1"
                  onClick={() => nextPage(item.product_Id)}>
                  <div class="rooms_category_container_grid_child2">
                    <img
                      src={item.imageurl[0]}
                      alt="Front of men&#039;s Basic Tee in black."
                      class="rooms_category_container_grid_child2_image"
                    />
                  </div>
                  <div class="rooms_categories_container_grid_child3">
                    <div>
                      <h3 class="hori_scroll_container_child1_text">
                        {item.productname
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </h3>
                    </div>
                    <p class="hori_scroll_container_child1_text">
                      ₹{item.offerprice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footertest />
    </>
  );
}
export default RoomBrands;
