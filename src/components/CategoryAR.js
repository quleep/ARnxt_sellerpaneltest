import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Footertest from "./Footertest";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useMyContext } from "../Context/store";

function CategoryAR() {
  const { brandRooms, setBrandRooms } = useMyContext();

  const [categories, setCategories] = useState([]);
  const [foundSubcategories, setFoundSubcategories] = useState([]);
  const [brandsData, setBrandsData] = useState(null);
  const [brandsData1, setBrandsData1] = useState(null);

  const [categoriesDetails, setCategoriesDetails] = useState([]);
  const [subCategory, setSubcategory] = useState(null);

  const location = useLocation();
  const param = useParams();
  const history = useHistory();
  const apiUrl = `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandcategory?category=${param.id}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl); // Use GET request for query parameters
        // Handle the response data here
        console.log(response.data);
        // console.log('brandsdata', brandRooms);
        // Filter brandIds and iconUrls based on the first array
        const filteredData = brandRooms?.filter((item) =>
          response.data.includes(item.brandId)
        );

        // Display the filtered data
        console.log("brsnd", filteredData);
        setBrandsData1(filteredData);
      } catch (error) {
        // Handle any errors here
        console.error(error);
      }
    };

    fetchData();
  }, [param, brandRooms]);
  useEffect(() => {
    brands();
  }, []);
  const brands = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandtable"
      );
      const response1 = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getallbrands"
      );

      console.log("brandsarray", response);
      const brandFilter = response1.data; // Array of brand-ids to filter by (all lowercase)

      const filteredData = response.data.filter(
        (item) =>
          item &&
          item["brandId"] &&
          brandFilter.includes(item["brandId"].toLowerCase())
      );
      setBrandsData(filteredData);

      console.log(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Transform the data
    const transformedData = brandsData?.map((item) => {
      // Store brandId in lowercase
      const brandIdLowerCase = item["brand-id"]?.toLowerCase();

      // Store iconUrl in a new variable
      const iconUrlNewVariable = item["iconUrl"];

      // Create a new object with the transformed values
      return {
        brandId: brandIdLowerCase,
        iconUrlNewVariable: iconUrlNewVariable,
      };
    });

    // Update the original data with the transformed data
    setBrandRooms(transformedData);
    // Display the updated JSON data
  }, [brandsData]);
  // Decode the URL-encoded parameter
  // Outputs "Dining Room"

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
      );
      console.log("categ", response.data);

      setCategoriesDetails(response.data);
      console.log(param.id);
      const matchingCategory = response.data.filter(
        (item) => item.category === param.id
      );
      console.log(matchingCategory);
      setCategoriesDetails(matchingCategory);
    } catch (error) {
      console.error("Error in fetching data: ", error);
      // Handle the error
    }
  };
  useEffect(() => {
    fetchCategoriesData();
  }, [param]);
  const nextBrandPage = (brandId) => {
    history.push(`/arView/categoryBrands/${brandId}`, {
      state: { brandId },
    });
  };
  const nextPage = (itemname) => {
    if (param.id === "Walls") {
      // Navigate to another page if the condition is met
      history.push(`/arView/visualizer`, {
        state: { itemname: param.id },
      });
    } else {
      history.push(`/arView/categories/${itemname}`, {
        state: { itemname },
      });
    }
  };

  return (
    <>
      <Navbar />
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
                  {categoriesDetails[0]?.subcategory.map((item) => (
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
                          src={item.iconUrl}
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
      <Footertest />
    </>
  );
}

export default CategoryAR;
