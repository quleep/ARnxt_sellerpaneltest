import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useHistory, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaGreaterThan } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ViewAR = () => {
  const [brandsData, setBrandsData] = useState([]);
  const [brandRooms, setBrandRooms] = useState(null);
  const [categoriesDetails, setCategoriesDetails] = useState([]);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get(
        "https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/rooms"
      )
      .then((response) => {
        const shuffledData = shuffleArray(response.data.data);

        setRoomData(shuffledData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcategorydetails"
      );
      console.log("categ", response.data);

      const shuffledData = shuffleArray(response.data);

      setCategoriesDetails(shuffledData);
    } catch (error) {
      console.error("Error in fetching data: ", error);
      // Handle the error
    }
  };
  // Function to shuffle an array randomly
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
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

      const filteredData = response.data.filter((item) =>
        brandFilter.includes(item["brandId"].toLowerCase())
      );
      const shuffledData = shuffleArray(filteredData);
      setBrandsData(shuffledData);

      console.log(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    brands();

    fetchCategoriesData();
  }, []); // Empty dependency array ensures this runs only once after initial render
  useEffect(() => {
    // Transform the data
    const transformedData = brandsData?.map((item) => {
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

    // Update the original data with the transformed data
    setBrandRooms(transformedData);
    // Display the updated JSON data
  }, [brandsData]);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  const slideLeft1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
    <>
      <Navbar />
      <div className="hero_container">
        <div className="bold_text_container">
          <div className="bold_text">Rooms</div>
        </div>
        <div className="hori_scroll_container">
          <MdChevronLeft
            className="hori_scroll_left_arrow"
            onClick={slideLeft}
            size={40}
          />
          <div id="slider" className="hori_scroll_container_child">
            {roomData.map((item) => (
              <div
                key={item.id}
                className="hori_scroll_container_child1"
                onClick={() => router.push(`/rooms/${item.roomname}`)}>
                <img
                  src={item.iconurl}
                  alt="/"
                  className="hori_scroll_container_child1_image"
                />
                {/* Add the text here */}
                <p className="hori_scroll_container_child1_text">
                  {item.roomname.charAt(0).toUpperCase() +
                    item.roomname.slice(1)}
                </p>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="hori_scroll_left_arrow"
            onClick={slideRight}
            size={40}
          />
        </div>
        <div className="bold_text_container">
          <div className="bold_text">Categories</div>
        </div>
        <div className="hori_scroll_container">
          <MdChevronLeft
            className="hori_scroll_left_arrow"
            onClick={slideLeft1}
            size={40}
          />
          <div id="slider1" className="hori_scroll_container_child">
            {categoriesDetails.map((item) => (
              <div
                key={item.category}
                className="hori_scroll_container_child1"
                onClick={() => router.push(`/categories/${item.category}`)}>
                <img
                  src={item.categoryimage}
                  alt="/"
                  className="hori_scroll_container_child1_image"
                />
                <p className="hori_scroll_container_child1_text">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </p>
              </div>
            ))}
          </div>

          <MdChevronRight
            className="hori_scroll_left_arrow"
            onClick={slideRight1}
            size={40}
          />
        </div>
        <div className="bold_text_container">
          <div className="bold_text">Brands</div>
        </div>
        <div className="hori_scroll_container">
          <MdChevronLeft
            className="hori_scroll_left_arrow"
            onClick={slideLeft2}
            size={40}
          />
          <div id="slider2" className="hori_scroll_container_child">
            {brandsData?.map((item) => (
              <div
                key={item.brandId}
                className="hori_scroll_container_child1"
                onClick={() => router.push(`/brands/${item.brandId}`)}>
                <img
                  src={item.iconUrl}
                  alt="/"
                  className="hori_scroll_container_child1_image_brands"
                />
              </div>
            ))}
          </div>

          <MdChevronRight
            className="hori_scroll_left_arrow"
            onClick={slideRight2}
            size={40}
          />
        </div>
      </div>
      <Footertest />
    </>
  );
};

export default ViewAR;
