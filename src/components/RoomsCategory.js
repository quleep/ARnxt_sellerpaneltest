import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import All from "../../src/assets/image/allCat.png";

function RoomsCategory() {
  const [products, setProducts] = useState([]);
  const param = useParams();
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(null);
  const [subcatDetails, setSubcatDetails] = useState([]);

  const handleItemClick = async (item) => {
    setSelectedItem(item.itemname);
    try {
      const response = await axios.post(
        `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getitembysubcatdetails?subcatname=${item.itemname}`
      );

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
   useEffect(() => {
  window.scrollTo(0, 0)
}, [param])
  const fetchData = async () => {
    setSelectedItem("all");

    try {
      const response = await axios.post(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcategoryitems",
        {
          subcategory: param.id,
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
  useEffect(() => {
    const fetchSubcatData = async () => {
      try {
        const response = await axios.post(
          `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsinglesubcatdetails?subcat=${param.id}`
        );
        console.log("subcategory detaol", response.data[0].subcategorydetails);
        setSubcatDetails(response.data[0].subcategorydetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubcatData();
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
        <div>
          <div className="item-list_visualizer">
            <div
              className={`item_visualizer ${
                selectedItem === "all" ? "selected_visualizer" : ""
              }`}
              onClick={() => fetchData()}>
              <img src={All} alt="Front of men&#039;s Basic Tee in black." />
              <p>All</p>
            </div>
            {subcatDetails.map((item, id) => (
              <div
                key={item.itemname}
                className={`item_visualizer ${
                  selectedItem === item.itemname ? "selected_visualizer" : ""
                }`}
                onClick={() => handleItemClick(item)}>
                <img
                  src={item.itemvalue}
                  alt="Front of men&#039;s Basic Tee in black."
                />
                <p>{item.itemname}</p>
              </div>
            ))}
          </div>
        </div>
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
                  <div class="rooms_categories_container_grid_child3_brand">
                    <p
                      class="product_detail_ar_container_grid_child1_brandText"
                      style={{ textTransform: "uppercase" }}>
                      {item.brand
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
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

export default RoomsCategory;
