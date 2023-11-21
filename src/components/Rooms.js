import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Footertest from "./Footertest";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";
function Rooms() {
  const [categories, setCategories] = useState([]);
  const [foundSubcategories, setFoundSubcategories] = useState([]);
  const [brandsData, setBrandsData] = useState(null);
  const [props, setProps] = useState("");

  const location = useLocation();
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    const decodedParam = decodeURIComponent(param.id);

    const apiUrl = `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandrooms?room=${decodedParam}`;

    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl); // Use GET request for query parameters
        // Handle the response data here
        console.log("props", response.data);

        const response2 = await axios.get(
          "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandtable"
        );
        const response1 = await axios.get(
          "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getallbrands"
        );

        const brandFilter = response1.data; // Array of brand-ids to filter by (all lowercase)

        const filteredData = response2.data.filter((item) =>
          brandFilter.includes(item["brandId"].toLowerCase())
        );
        const transformedData = filteredData?.map((item) => {
          // Store brandId in lowercase
          const brandIdLowerCase = item["brand-id"].toLowerCase();

          // Store iconUrl in a new variable
          const iconUrlNewVariable = item["iconUrl"];

          // Create a new object with the transformed values
          return {
            brandId: brandIdLowerCase,
            iconUrlNewVariable: iconUrlNewVariable,
          };
        });
        console.log(transformedData);
        // Update the original data with the transformed data
        setBrandsData(transformedData);
      } catch (error) {
        // Handle any errors here
        console.error(error);
      }
    };

    fetchData();
  }, [props]);
   useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  useEffect(() => {
    const decodedParam = decodeURIComponent(param.id);
    console.log(decodedParam);
    // Make the POST request using Axios with an empty request body
    axios
      .post(
        `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorybyrooms?room=${decodedParam}`
      )
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props]);

  const foundcategories = async () => {
    const response = await axios.get(
      "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
    );

    // const shuffledData = shuffleArray(response.data);

    const subcategories = response.data.flatMap(
      (category) => category.subcategory
    );

    const foundSubcategories = subcategories.filter((subcategory) =>
      categories.includes(subcategory.itemname)
    );

    console.log("dd", foundSubcategories);
    setFoundSubcategories(foundSubcategories);
  };
  useEffect(() => {
    foundcategories();
  }, [categories]);
  const nextPage = (itemname) => {
    history.push(`/arView/categories/${itemname}`, { state: { itemname } });
  };
  const nextBrandPage = (brandId) => {
    history.push(`/arView/brands/${brandId}`, {
      state: { brandId },
    });
  };
  return (
    <>
       <Navbarhome/>
      <DropdownMenu />
      <div className="hero_container">
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill>
          <Tab eventKey="home" title="Category">
            <div class="rooms_category_container">
              <div class="rooms_category_container1">
                <div class="rooms_category_container_grid">
                  {foundSubcategories.map((item) => (
                    <div
                      class="rooms_category_container_grid_child1"
                      onClick={() => nextPage(item.itemname)}>
                      <div class="rooms_category_container_grid_child2">
                        <img
                          src={item.itemvalue}
                          alt="Front of men&#039;s Basic Tee in black."
                          class="rooms_category_container_grid_child2_image"
                        />
                      </div>
                      <div class="rooms_category_container_grid_child3">
                        <div>
                          <h3 class="hori_scroll_container_child1_text">
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"></span>
                            {item.itemname}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Brands">
            <div class="rooms_category_container">
              <div class="rooms_category_container1">
                <div class="rooms_category_container_grid">
                  {brandsData?.map((item) => (
                    <div
                      class="rooms_brands_container_grid_child1"
                      onClick={() => nextBrandPage(item.brandId)}>
                      <div class="rooms_brands_container_grid_child2">
                        <img
                          src={item.iconUrlNewVariable}
                          alt="Front of men&#039;s Basic Tee in black."
                          class="rooms_category_container_grid_child2_image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <Footercomponent />
    </>
  );
}

export default Rooms;
