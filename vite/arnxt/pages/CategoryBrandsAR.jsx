import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import DropdownMenu from "../components/DropdownMenu";
import Navbarhome from "../components/Navbarhome";
import Footercomponent from "../components/Footercomponent";
function CategoryBrandsAR() {
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
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [param]);
  const nextPage = (product_Id, item, event) => {
    const newTab = event.ctrlKey || event.metaKey; // Check for Control key on Windows or Command key on macOS
    const target = newTab ? "_blank" : "_self"; // Open in new tab if Control key is pressed, otherwise in the same tab
    window.open(`/arView/productdetail/${product_Id}`, target);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbarhome />
      <DropdownMenu />
      <div className="hero_container">
        <div class="rooms_category_container">
          <div class="rooms_category_container1">
            <div class="rooms_category_container_grid">
              {products.map((item) => (
                <div
                  class="rooms_category_container_grid_child1"
                  onClick={(e) => nextPage(item.product_Id, item, e)}>
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
      <Footercomponent />
    </>
  );
}

export default CategoryBrandsAR;
