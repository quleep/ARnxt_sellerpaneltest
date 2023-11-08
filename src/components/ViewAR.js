import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useHistory, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaGreaterThan } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import { useMyContext } from "../Context/store";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ViewAR = () => {
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
  const history = useHistory();
  const [index, setIndex] = React.useState(0);
  const [searchProduct, setSearchProduct] = useState(null);
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
  const timeoutRef = React.useRef(null);
  const [appName] = useState("React Search Bar");
  const [list, setList] = useState(undefined);
  const searchmodelurl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/searchmodel";

  const [searchTerm, setSearchTerm] = useState("");
  const [bannerImages, setBannerImages] = useState([]);

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
    axios
      .get(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbannertable"
      )
      .then((response) => {
        setBannerImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching banner images:", error);
      });
  }, []);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, bannerImages, delay]);

  const nextPage = (roomName) => {
    history.push(`/arView/rooms/${roomName}`, { state: { roomName } });
  };
  const nextCategoryPage = (category) => {
    history.push(`/arView/category/${category}`, { state: { category } });
  };

  const nextBrandPage = (brandId) => {
    history.push(`/arView/brands/${brandId}`, { state: { brandId } });
  };
  useEffect(() => {
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

      setCategoriesDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };
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

      const brandFilter = response1.data; 

      const filteredData = response.data.filter((item) =>
        brandFilter.includes(item["brandId"].toLowerCase())
      );
      const shuffledData = shuffleArray(filteredData);
      setBrandsData(shuffledData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    brands();

    fetchCategoriesData();
  }, []); 
  useEffect(() => {
    const transformedData = brandsData?.map((item) => {
      const brandIdLowerCase = item["brand-id"].toLowerCase();

      const iconUrlNewVariable = item["iconUrl"];

      return {
        brandId: brandIdLowerCase,
        iconUrlNewVariable: iconUrlNewVariable,
      };
    });

    setBrandRooms(transformedData);
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
  const nextPage1 = (product_Id) => {
    history.push(`/arView/productdetail/${product_Id}`, {
      state: { product_Id },
    });
  };
  return (
    <div>
      <Header />
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
           <BsSearch
            className="searchInput_button"
            size={23}
          />
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

      <div className="slideshow" onMouseOver={() => setNav(false)}>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {bannerImages.map((item, idx) => (
            <img
              key={item.Id}
              className="slide_visualizer"
              src={item.image}
              alt={`carousel_image_${idx}`}
            />
          ))}
        </div>

        <div className="slideshowDots">
          {bannerImages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}></div>
          ))}
        </div>
      </div>
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
                onClick={() => nextPage(item.roomname)}>
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
                onClick={() => nextCategoryPage(item.category)}>
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
            {brandsData?.map((item,key) => (
              <div
                key={item.iconUrl}
                className="hori_scroll_container_child1"
                onClick={() => nextBrandPage(item.brandId)}>
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
    </div>
  );
};
function Header1(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

function SearchBar(props) {
  return (
    <div>
      <input onChange={props.search} placeholder="Search Pokemon" />
    </div>
  );
}

function SearchResult(props) {
  return (
    <div>
      <ul>
        {props.data.map((value) => {
          return <Item key={value} val={value} />;
        })}
      </ul>
    </div>
  );
}

function Item(props) {
  return <li>{props.val}</li>;
}
export default ViewAR;
