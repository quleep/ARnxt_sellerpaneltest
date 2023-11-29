import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Footertest from "./Footertest";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useMyContext } from "../Context/store";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import { BsSearch } from "react-icons/bs";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";

function CategoryAR() {
  const { brandRooms, setBrandRooms } = useMyContext();

  const [categories, setCategories] = useState([]);
  const [foundSubcategories, setFoundSubcategories] = useState([]);
  const [brandsData, setBrandsData] = useState(null);
  const [brandsData1, setBrandsData1] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProduct, setSearchProduct] = useState(null);

  const [categoriesDetails, setCategoriesDetails] = useState([]);
  const [subCategory, setSubcategory] = useState(null);
  const searchmodelurl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/searchmodel";
  const location = useLocation();
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    const body = {
      searchdata: searchTerm,
    };

    axios
      .post(searchmodelurl, body)
      .then((res) => {
        setSearchProduct(res.data);
      })
      .catch((error) => [console.log(error)]);
  }, [searchTerm]);
  useEffect(() => {
    brands();
  }, [param]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const brands = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandtable"
      );
      const response1 = await axios.post(
        `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandcategory?category=${param.id}`
      );

      console.log("brandsarray", response);
      const brandFilter = response1.data;

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
    const transformedData = brandsData?.map((item) => {
      const brandIdLowerCase = item["brand-id"]?.toLowerCase();

      const iconUrlNewVariable = item["iconUrl"];

      return {
        brandId: brandIdLowerCase,
        iconUrlNewVariable: iconUrlNewVariable,
      };
    });

    setBrandRooms(transformedData);
  }, [brandsData]);

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
      history.push(`/arView/visualizer`, {
        state: { itemname: param.id },
      });
    } else if (param.id === "Upholstery") {
      history.push(`/arView/upholstry_item/${itemname}`, {
        state: { itemname: param.id },
      });
    } else {
      history.push(`/arView/categories/${itemname}`, {
        state: { itemname },
      });
    }
  };
  const nextPage1 = (product_Id) => {
    history.push(`/arView/productdetail/${product_Id}`, {
      state: { product_Id },
    });
  };
  return (
    <>
      <Navbarhome />
      <DropdownMenu />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search products here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <BsSearch className="searchInput_button" size={23} />
        </div>
        <div className="template_Container">
          {searchTerm === "" ? null : searchProduct?.length === 0 ? (
            <div className="no-product-found">No product found</div>
          ) : (
            searchProduct?.slice(0, 4).map((val) => (
              <div
                className="template"
                key={val.id}
                onClick={() => nextPage1(val.product_Id)}>
                <img src={val.imageurl[0]} alt="" />
                <div>
                  <h3>{val.specification}</h3>
                  <p className="price">₹{val.offerprice}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
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
      <Footercomponent />
    </>
  );
}

export default CategoryAR;
