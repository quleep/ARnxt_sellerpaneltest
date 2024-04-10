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
    subCategory,
    setSubCategory,
    subCategorydetails,
    setSubCategoryDetails,
    finalData,
    setFinalData,
  } = useMyContext();

  const history = useHistory();

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
      );
      const orderedCategories = [
        "Furniture",
        "Walls",
        "Floors",
        "Furnishing",
        "Decorative",
        "Upholstery",
        "Sanitary",
        "Electronics",
        "Electrical",
        "Bathroom",
      ];

      const sortedData = response.data.sort((a, b) => {
        return (
          orderedCategories.indexOf(a.category) -
          orderedCategories.indexOf(b.category)
        );
      });

      setCategoriesDetails(sortedData);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };
  const fetchsubCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcatdetailstable"
      );

      setSubCategoryDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };
  useEffect(() => {
    const electronicsCategory = categoriesDetails.find(
      (item) => item.category === subCategory
    );

    if (electronicsCategory && Array.isArray(subCategorydetails)) {
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
      setFinalData(newObject.subcategory);
    }
  }, [subCategory, categoriesDetails, subCategorydetails]);
  const nextCategoryPage = (category) => {
    history.push(`/arView/category/${category}`, { state: { category } });
  };
  const nextPage = (itemname) => {
    history.push(`/arView/categories/${itemname}`, { state: { itemname } });
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
        <div></div>
      </div>
      {nav && subCategory !== "Walls" && subCategory !== "Upholstery" ? (
        <div
          className="subCategory"
          onMouseLeave={() => setNav(false)}
          onMouseOver={() => setNav(true)}>
          <div id="slider" className="hori_scroll_container_header">
            {finalData?.map((item1) => (
              <div
                key={item1.id}
                className="hori_scroll_container_header_child"
                onClick={() => nextPage(item1.itemname)}>
                <p onClick={() => nextPage(item1.itemname)}>{item1.itemname}</p>

                {item1?.subcategorydetails?.map((item) => (
                  <div
                    className="subCategory_div"
                    onClick={() => nextPage(item1.itemname)}>
                    {item.itemname.charAt(0).toUpperCase() +
                      item.itemname.slice(1)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DropdownMenu;
