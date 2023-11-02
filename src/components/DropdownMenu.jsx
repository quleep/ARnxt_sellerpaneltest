import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../Context/store";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
    nav, setNav
  } = useMyContext();
    const [subCategory, setSubCategory] = useState("");
 
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
                }}
              >
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
      {nav ? (
        <div className="subCategory" onMouseLeave={() => setNav(false)}   onMouseOver={() => {
                  setNav(true);
                }}>
            <div className="uldiv">
              <p>
                {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
              </p>
              <Link to="/sofas">
                <ul>
                  <li>3-Seater sofas</li>
                  <li>2-Seater Sofas</li>
                  <li>1-seater Sofas</li>
                  <li>Sofa Sets</li>
                  <li>Sectional Sofas</li>
                  <li>Recliners</li>
                  <li>Chaise Loungers</li>
                  <li>Sofa Cum beds</li>
                  <li>Futons</li>
                       <li>3-Seater sofas</li>
                  <li>2-Seater Sofas</li>
                  <li>1-seater Sofas</li>
                  <li>Sofa Sets</li>
                  <li>Sectional Sofas</li>
                  <li>Recliners</li>
                  <li>Chaise Loungers</li>
                  <li>Sofa Cum beds</li>
                  <li>Futons</li>
                </ul>
              </Link>
            </div>
          <div className="uldiv">
              <p>
                {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
              </p>
              <Link to="/sofas">
                <ul>
                  <li>3-Seater sofas</li>
                  <li>2-Seater Sofas</li>
                  <li>1-seater Sofas</li>
                  <li>Sofa Sets</li>
                  <li>Sectional Sofas</li>
                  <li>Recliners</li>
                  <li>Chaise Loungers</li>
                  <li>Sofa Cum beds</li>
                  <li>Futons</li>
                       <li>3-Seater sofas</li>
                  <li>2-Seater Sofas</li>
                  <li>1-seater Sofas</li>
                  <li>Sofa Sets</li>
                  <li>Sectional Sofas</li>
                  <li>Recliners</li>
                  <li>Chaise Loungers</li>
                  <li>Sofa Cum beds</li>
                  <li>Futons</li>
                  
                </ul>
              </Link>
            </div>
        </div>
      ) : null}
    </>
  );
}

export default DropdownMenu;
