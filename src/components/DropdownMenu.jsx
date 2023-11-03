import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../Context/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function DropdownMenu() {
  const {
    userId,
    setUserId,
    data,
    setData,
    roomData,
    setRoomData,
    categoriesDetails,
    setCategoriesDetails,
    brandsData,
    setBrandsData,
    brandRooms,
    setBrandRooms,
    nav,
    setNav,
  } = useMyContext();
  const [subCategory, setSubCategory] = useState("");
  const history = useHistory();

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
      );
      console.log("categ", response.data);

      setCategoriesDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
      // Handle the error
    }
  };
  const nextCategoryPage = (category) => {
    history.push(`/arView/category/${category}`, { state: { category } });
  };
  useEffect(() => {
    fetchCategoriesData();
  }, []);
  return (
    <>
      <div className="tabbarParent">
        <div className="mainDiv">
          {categoriesDetails.map((item) => (
            <div className="category">
              <p
                onMouseOver={() => {
                  setNav(true);
                  setSubCategory(item.category);
                }}   onClick={() => nextCategoryPage(item.category)}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* {nav ? (
        <div
          className="subCategory"
          onMouseLeave={() => setNav(false)}
          onMouseOver={() => setNav(true)}>
          {categoriesDetails
            .filter((item) => item.category === subCategory)
            .map((item, index) => (
              <div className="uldiv" key={index}                                 onClick={() => nextCategoryPage(item.category)}>
                {item.subcategory.map((subcat, subIndex) => (
                  <p key={subIndex}>
                    {subcat.itemname.charAt(0).toUpperCase() +
                      subcat.itemname.slice(1)}
                  </p>
                ))}
              </div>
            ))}
        </div>
      ) : null} */}
    </>
  );
}

export default DropdownMenu;
