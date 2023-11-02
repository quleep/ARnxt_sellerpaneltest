import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useHistory, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaGreaterThan } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useMyContext } from "../Context/store";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data2 from "./TemplateData.json";

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
  const timeoutRef = React.useRef(null);
  const [appName] = useState("React Search Bar");
  const [list, setList] = useState(undefined);
  const data1 = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch'd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
  ];
  const [searchTerm, setSearchTerm] = useState("");

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const searchData = (e) => {
    const queryData = [];
    if (e.target.value !== "") {
      data1.forEach((person) => {
        if (person.toLowerCase().indexOf(e.target.value) !== -1) {
          if (queryData.length < 10) {
            queryData.push(person);
          }
        }
      });
    }
    setList(queryData);
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
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
      console.log("categ", response.data);

      setCategoriesDetails(response.data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
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
    <div>
      <Header />
      <DropdownMenu />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {searchTerm === ""
            ? null
            : data2
                .filter((val) =>
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((val) => (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                  </div>
                ))}
        </div>
      </div>

      <div className="slideshow" onMouseOver={() => setNav(false)}>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {/* {categoriesDetails.map((item) => (
          <img
            className="slide"
                  src={item.categoryimage}
          ></img>
        ))} */}
          <img
            className="slide"
            src="https://ii3.pepperfry.com/media/wysiwyg/banners/HeroBanners_02_2X_280722.jpg"
            alt="carousel_image"
          />

          <img
            className="slide"
            src="https://ii3.pepperfry.com/media/wysiwyg/banners/HeroBanner03_2X_300822.jpg"
            alt="carousel_image"
          />

          <img
            className="slide"
            src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2X_290822_nd.gif"
            alt="carousel_image"
          />

          <img
            className="slide"
            src="https://ii1.pepperfry.com/media/wysiwyg/banners/HeroBanner04_2X_300822.jpg"
            alt="carousel_image"
          />
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
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
            {brandsData?.map((item) => (
              <div
                key={item.brandId}
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
