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
              subCategory, setSubCategory,subCategorydetails, setSubCategoryDetails,finalData, setFinalData

  } = useMyContext();


  const history = useHistory();

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
      );
      console.log("categ ", response.data);

      setCategoriesDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
      // Handle the error
    }
  };
  const fetchsubCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcatdetailstable"
      );
      console.log("categ detail", response.data);

      setSubCategoryDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
      // Handle the error
    }
  };

  useEffect(() => {
    const electronicsCategory = categoriesDetails.find(
      (item) => item.category === subCategory
    );

    if (electronicsCategory) {
      const subcategoryDetailsMap = {};
      subCategorydetails.forEach((item) => {
        subcategoryDetailsMap[item.subcategoryname] = item.subcategorydetails;
      });

      const newObject = {
        category: subCategory,
        subcategory: electronicsCategory.subcategory.map((subcategoryItem) => {
          if (subcategoryDetailsMap[subcategoryItem.itemname]) {
            return {
              ...subcategoryItem,
              subcategorydetails:
                subcategoryDetailsMap[subcategoryItem.itemname],
            };
          }
          return subcategoryItem;
        }),
        categoryimage: electronicsCategory.categoryimage,
      };
      console.log(newObject);
      // Update the state with the new object
      setFinalData([newObject]);
    }
  }, [subCategory,categoriesDetails,subCategorydetails]);
  const nextCategoryPage = (category) => {
    history.push(`/arView/category/${category}`, { state: { category } });
  };
  useEffect(() => {
    fetchCategoriesData();
    fetchsubCategoriesData();
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
                onClick={() => nextCategoryPage(item.category)}>
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
          <div className="uldiv">
               {finalData.map((item) => (
            <div>
               <p>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
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
          ))}
             
            </div>
        </div>
      ) : null} */}
    </>
  );
}

export default DropdownMenu;
