import Footertest from "./Footertest";
import Navbar from "./Navbar";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CompareIcon } from "../assets/icon/compare.svg";
import { ReactComponent as ChangeIcon } from "../assets/icon/change.svg";
import { ReactComponent as ListIcon } from "../assets/icon/list.svg";
import { ReactComponent as SmallIcon } from "../assets/icon/smail_icons.svg";
import { ReactComponent as SearchIcon } from "../assets/icon/search.svg";
import { ReactComponent as FavoriteIcon } from "../assets/icon/favorite.svg";
import { ReactComponent as FavoriteIcon2 } from "../assets/icon/favorite_small.svg";
import { ReactComponent as ArrowUp } from "../assets/icon/up-arrow.svg";
import logo from "../assets/image/my_landing_page_logo_background_image_en-us.png";
import axios from "axios";
import { useMyContext } from "../Context/store";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
function Visualizer2D() {
  const {
    image,
    setImage,
    temporgimage,
    setTempOrgImage,
    roomData,
    wallimagewidth,
    setWallImageWidth,
    wallimageheight,
    setWallImageHeight,
  } = useMyContext();
  const addviewsurl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addviewscount";
  const scrollContainerRef = useRef();

  const types = {
    name: "Rugs",
    styles: [
      {
        id: 1,
        name: "Taupe Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "5' x 7'"],
        image: "/static/media/1.ed4e8d18b267ab4f6ca7.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 2,
        name: "Taupe Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "5' x 7'"],
        image: "/static/media/2.ed4e8d18b267ab4f6ca7.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 3,
        name: "Multi Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "9' x 12'"],
        image: "/static/media/3.389be401e154edce3083.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 4,
        name: "Navy Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "5' x 7'"],
        image: "/static/media/4.9ddc73d9a97ab64c8fba.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 5,
        name: "Navy Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "5' x 7'"],
        image: "/static/media/5.9ddc73d9a97ab64c8fba.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 6,
        name: "Multi Rug",
        company: "Demo Company",
        size: ["3' 1 4/5\" x 4' 6 1/3\"", "9' x 12'"],
        image: "/static/media/6.389be401e154edce3083.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 7,
        name: "Demo rug 11",
        company: "Demo Company",
        size: ["5' 10\" x 7' 8\""],
        image: "/static/media/7.582cbfe7a08d81e9c9f2.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 8,
        name: "Demo rug 5",
        company: "Demo Company",
        size: ["8' 11\" x 12'"],
        image: "/static/media/8.0a82de71eafd4c184b07.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 9,
        name: "Demo rug 4",
        company: "Demo Company",
        size: ["8' x 11' 6\""],
        image: "/static/media/9.58878dabb1d9d777b8ce.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 10,
        name: "Demo rug 10",
        company: "Demo Company",
        size: ["3' 8\" x 4' 9\""],
        image: "/static/media/10.f2c5772e0d0312091385.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 11,
        name: "Demo rug 8",
        company: "Demo Company",
        size: ["4' 3\" x 6' 5\""],
        image: "/static/media/11.836041e41e6f9ba84f9b.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 12,
        name: "Demo rug 1",
        company: "Demo Company",
        size: ["4' 7\" x 7' 4\""],
        image: "/static/media/12.6dcf42f7192004b37839.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 13,
        name: "Demo rug 9",
        company: "Demo Company",
        size: ["6' 3\" x 9' 8\""],
        image: "/static/media/13.88fb85cbc4f19a53254c.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 14,
        name: "Demo rug 2",
        company: "Demo Company",
        size: ["4' 5\" x 6' 5\""],
        image: "/static/media/14.81f6bf7ec5637d174cb1.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 15,
        name: "Demo rug 3",
        company: "Demo Company",
        size: ["4' 11\" x 8'"],
        image: "/static/media/15.c1f09b48f92c8ddc7b53.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 16,
        name: "Demo rug 6",
        company: "Demo Company",
        size: ["9' 8\" x 13' 3\""],
        image: "/static/media/16.4d04c875b54a3582264d.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 17,
        name: "Demo rug 7",
        company: "Demo Company",
        size: ["4' 7\" x 6' 3\""],
        image: "/static/media/17.39fa549e3e6f873e05f8.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 18,
        name: "Demo Epoxy 1",
        company: "Demo Company",
        size: ["6' 6 5/7\" x 6' 6 5/7\""],
        image: "/static/media/18.b3124a47371db99b5bdf.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 19,
        name: "Demo rug 12",
        company: "Demo Company",
        size: ["4' x 8' 9\""],
        image: "/static/media/19.71ec12121ad77249670e.jpg",
        length: 1,
        selection: 0,
        favorite: false,
      },
      {
        id: 20,
        name: "Floral Rug",
        company: "Demo Company",
        size: ["4' 11 1/10\" x 4' 11 1/10\"", "6' x 6'"],
        image: "/static/media/20.10b52e2bdf22d459a55f.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
      {
        id: 21,
        name: "Floral Rug",
        company: "Demo Company",
        size: ["4' 11 1/10\" x 4' 11 1/10\"", "6' x 6'"],
        image: "/static/media/21.10b52e2bdf22d459a55f.jpg",
        length: 2,
        selection: 0,
        favorite: false,
      },
    ],
  };

  const [room, setRoom] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  const [type, setType] = useState(0);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [providedData, setProvidedData] = useState(null);
  const [segmentimg, setSegmentImg] = useState(false);

  const [list, setList] = useState(types.styles);
  const [filterList, setFilter] = useState(list);
  const [select, setSelect] = useState(filterList[0]);
  const StyleRef = useRef();
  const ImageRef = useRef();
  const [processimg, setProcessImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [pageno, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [horizontalScrollData, setHorizontalScrollData] = useState([]);
  const [horizontalScrollPageNo, setHorizontalScrollPageNo] = useState(1);
  const [horizontalScrollLoading, setHorizontalScrollLoading] = useState(false);
  const StyleRef1 = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("room"));
    setRoom(item);
  }, []);
  useEffect(() => {
    if (favorite) {
      const fav = list.filter((item) => item.favorite === true);
      setFilter(fav);
    } else {
      setFilter(list);
    }
  }, [favorite, list]);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const image = e.target;
    const x = e.nativeEvent.offsetX / image.offsetWidth;
    const y = e.nativeEvent.offsetY / image.offsetHeight;

    setCursorPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const subcategory = "Wallpapers";

      try {
        const url = `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/fetchsubcatitems?subcategory=${subcategory}&pageno=${pageno}`;
        const response = await axios.get(url);

        const data = response.data;
        setProvidedData((prevData) =>
          prevData ? [...prevData, ...data] : data
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageno]);
  useEffect(() => {
    const fetchHorizontalScrollData = async () => {
      const subcategory = "Wallpapers";

      try {
        const url = `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/fetchsubcatitems?subcategory=${subcategory}&pageno=${horizontalScrollPageNo}`;
        const response = await axios.get(url);

        const data = response.data;

        setHorizontalScrollData((prevData) =>
          prevData ? [...prevData, ...data] : data
        );
        setHorizontalScrollLoading(false);
      } catch (error) {
        console.error("Error fetching horizontal scroll data:", error);
        setHorizontalScrollLoading(false);
      }
    };

    fetchHorizontalScrollData();
  }, [horizontalScrollPageNo]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop +
          scrollContainerRef.current.clientHeight >=
          scrollContainerRef.current.scrollHeight
      ) {
        if (!horizontalScrollLoading) {
          setHorizontalScrollPageNo(horizontalScrollPageNo + 1);
          setHorizontalScrollLoading(true);
        }
      }
    };

    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [horizontalScrollPageNo, horizontalScrollLoading]);

  const handleScroll1 = () => {
    const element = StyleRef.current;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setLoading(true);
      setPageNo(pageno + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);

  const onChangeFavorite = (id) => {
    console.log("item", id);
    const list2 = list.map(function (item) {
      if (item.id !== id) {
        return item;
      } else {
        const item2 = {
          ...item,
          favorite: !item.favorite,
        };
        return item2;
      }
    });
    setList(list2);
  };

  const onChangeSelection = (id, index) => {
    const list2 = list.map(function (item) {
      if (item.id !== id) {
        return item;
      } else {
        const item2 = {
          ...item,
          selection: index,
        };
        return item2;
      }
    });
    setList(list2);
  };

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const ScrollToTop = () => {
    StyleRef.current.scrollTop = 0;
  };

  const onChange = (item) => {
    setSelect(item);
  };

  const calc = () => {
    const num = 3 * parseInt((select.id - 1) / 3) + 3;
    return num;
  };

  const getKey = (type, index) => {
    const key = `${type}-${index}`;
    return key;
  };

  const onScroll = (e) => {
    const delta = e.deltaY * -0.002;
    console.log(delta, e.clientX);

    const newScale = position.scale + delta;
    const ratio = 1 - newScale / position.scale;
    if (newScale < 1) return;
    setPosition({
      scale: newScale,
      x: position.x + (e.clientX - position.x - 30) * ratio,
      y: position.y + (e.clientY - position.y - 49) * ratio,
    });
  };
  const resizeImage = async (val, designstyle) => {
    let maxWidth;
    let maxHeight;
    return new Promise((resolve) => {
      const img = new Image();

      img.src = val + "?r=" + Math.floor(Math.random() * 100000);
      img.setAttribute("crossOrigin", "Anonymous");

      img.onload = function () {
        let resizedDataURL;
        let newWidth, newHeight;

        if (img.width > 900 && img.width < 1200) {
          maxWidth = wallimagewidth / 2;

          maxHeight = wallimageheight / 2;
        } else if (img.width <= 900) {
          maxWidth = wallimagewidth / 3;

          maxHeight = wallimageheight / 3;
        } else if (img.width < 1650 && img.width > 1200) {
          maxWidth = wallimagewidth / 1.5;

          maxHeight = wallimageheight / 1.5;
        } else if (img.width > 1650 && img.width < 3000) {
          maxWidth = wallimagewidth / 4;

          maxHeight = wallimageheight / 4;
        } else if (img.width > 3000 && img.width < 5000) {
          maxWidth = wallimagewidth / 6;

          maxHeight = wallimageheight / 6;
        } else if (img.width > 5000 && img.width < 7000) {
          maxWidth = wallimagewidth / 3;

          maxHeight = wallimageheight / 3;
        } else if (img.width > 7000) {
          maxWidth = wallimagewidth / 1.5;

          maxHeight = wallimageheight / 1.5;
        } else {
          maxWidth = img.width;

          maxHeight = img.height;
        }

        if (img.width > img.height) {
          newWidth = maxWidth;
          newHeight = maxHeight;
        } else {
          newHeight = maxHeight;
          newWidth = (maxHeight * img.width) / img.height;
        }
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        resizedDataURL = canvas.toDataURL("image/jpeg");
        resolve(resizedDataURL);
      };
    });
  };
  const handlewallpaperclick = async (e, val) => {
    setIsLoading(true);
    let newres;
    await resizeImage(val).then((res) => {
      newres = res;
    });
    console.log(newres);

    const body = {
      wallimg: temporgimage,
      designimg: newres,
      detectionmode: "walls",
    };
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "auth-token":
          "c0110aa4490cd8a4e5c024c4779d976f6927b6b0e4b12c2675e9558a453e933c",
      },
    };
    await axios
      .post("https://wallserver.arnxt.com/api/v1/infer", body, config)
      .then((res) => {
        console.log(res.data);
        setSegmentImg(true);
        setProcessImg(res.data);
      })
      .then((res) => {})
      .catch((error) => {
        console.log(error);
        window.alert("Please try again...");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header />
      <DropdownMenu />
      <div className="hero_container">
        <div className="rooms-container">
          <div className="main">
            <div className="left-panel">
              <div className="subtitle">
                <div className="text">Wallpapers</div>
                <div className="types">
                  <div
                    className={
                      type === 0 ? "btn_visualizer active" : "btn_visualizer"
                    }
                    onClick={() => setType(0)}>
                    <ListIcon />
                  </div>
                  <div
                    className={
                      type === 1 ? "btn_visualizer active" : "btn_visualizer"
                    }
                    onClick={() => setType(1)}>
                    <SmallIcon />
                  </div>
                </div>
              </div>

              <div className="filter">
                <div
                  className="filter btn_visualizer"
                  onClick={() => setFavorite(false)}>
                  Filters
                </div>
                {/* <div
                  className="favorite btn_visualizer"
                  onClick={() => setFavorite(true)}>
                  <FavoriteIcon />
                  <div className="num">0</div>
                </div> */}
              </div>

              <div
                className={type === 0 ? "styles" : "styles small"}
                onScroll={handleScroll1}
                ref={StyleRef}>
                <div className="scroll" id="slider1">
                  {providedData?.map((item) => (
                    <>
                      <div
                        key={getKey("item", item.product_Id)}
                        className={
                          item.product_Id === select.product_Id
                            ? "card active"
                            : "card"
                        }
                        onClick={() => onChange(item)}>
                        <div
                          className="details"
                          onClick={(e) =>
                            handlewallpaperclick(e, item.imageurl[0])
                          }>
                          <div className="image">
                            <img src={item.imageurl[0]} alt="Rug" />
                            <div
                              className={
                                item.favorite
                                  ? "btn_visualizer active"
                                  : "btn_visualizer"
                              }
                              onClick={() => onChangeFavorite(item.product_Id)}>
                              <FavoriteIcon2 />
                            </div>
                          </div>
                          <div className="detail">
                            <div className="top">
                              <div
                                className="normal_text"
                                style={{ textTransform: "uppercase" }}>
                                {item.brand}
                              </div>
                              <div className="semibold_text">
                                {item.productname.charAt(0).toUpperCase() +
                                  item.productname.slice(1)}
                              </div>
                            </div>
                          </div>
                        </div>
                        {item.lengthprod > 1 && (
                          <div className="size">
                            <div className="detail" key="size">
                              Size: Size: <strong>{item.breadthprod}</strong>
                            </div>
                          </div>
                        )}
                      </div>
                      {calc() === item.product_Id && (
                        <div className="card detail">
                          <div className="details">
                            <div className="detail">
                              <div className="top">
                                <div className="text">{select.brand}</div>
                                <div className="name">{select.productname}</div>
                              </div>
                            </div>
                          </div>
                          <div className="size">
                            <div className="detail">
                              Size: <strong>{select.breadthprod}</strong>
                            </div>
                            {select.lengthprod > 1 && (
                              <div className="size-type">
                                {select.lengthprod.map((size, index) => (
                                  <div
                                    key={getKey("small", index)}
                                    className={
                                      index === select.selection
                                        ? "btn_visualizer active"
                                        : "btn_visualizer"
                                    }
                                    onClick={() =>
                                      onChangeSelection(
                                        select.product_Id,
                                        index
                                      )
                                    }>
                                    {size}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                  {loading && <div>Loading...</div>}
                  {!loading && providedData?.length === 0 && (
                    <p>No more data to load.</p>
                  )}
                  {scrollTop !== 0 && (
                    <div className="btn_visualizer back" onClick={ScrollToTop}>
                      <ArrowUp />
                      Back To Top
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="main-panel">
              <div
                ref={ImageRef}
                className={`image ${isHovered ? "zoomed" : ""}`}
                onMouseMove={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={
                  isHovered
                    ? {
                        transform: "scale(2)",
                        cursor: "crosshair",
                        transformOrigin: `${cursorPosition.x * 100}% ${
                          cursorPosition.y * 100
                        }%`,
                      }
                    : {}
                }>
                <img
                  src={
                    segmentimg ? `data:image/png;base64, ${processimg}` : image
                  }
                  alt="room"
                  className="room"
                />
              </div>

              {isLoading ? (
                <div className="loader-container">
                  <div className="loader_visualizer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="hori_scroll_container_visualizer">
            <div
              id="slider"
              className="hori_scroll_container_child_visualizer"
              ref={scrollContainerRef}>
              {horizontalScrollData?.map((item) => (
                <div
                  key={item.id}
                  className="hori_scroll_container_child1_visualizer"
                  onClick={(e) => handlewallpaperclick(e, item.imageurl[0])}>
                  <img
                    src={item.imageurl[0]}
                    alt="/"
                    className="hori_scroll_container_child1_image_visualizer"
                  />
                  <p className="hori_scroll_container_child1_text_visualizer">
                    {item.productname.charAt(0).toUpperCase() +
                      item.productname.slice(1)}
                  </p>
                </div>
              ))}
              {!horizontalScrollLoading &&
                horizontalScrollData.length === 0 && (
                  <p>No more data to load.</p>
                )}
            </div>
          </div>
        </div>
      </div>
      <Footertest />
    </>
  );
}

export default Visualizer2D;
