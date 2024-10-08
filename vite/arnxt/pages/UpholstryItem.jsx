import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsBox } from "react-icons/bs";
import QRCode from "react-qr-code";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import DropdownMenu from "../components/DropdownMenu";
import Navbarhome from "../components/Navbarhome";
import Footercomponent from "../components/Footercomponent";
function UpholstryItem() {
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
  const [list, setList] = useState(types.styles);
  const [data, setData] = useState(null);

  const [filterList, setFilter] = useState(list);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(true);

  const [products, setProducts] = useState([]);
  const [productsDupli, setProductsDupli] = useState([]);
  const StyleRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const scrollContainerRef = useRef();
  const [select, setSelect] = useState(filterList[0]);
  const [fabric, setFabric] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // State for Sofa2
  const [sofa2, setSofa2] = useState("");
  const param = useParams();
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [type, setType] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [scale, setScale] = useState(1);

  const modelViewerRef = useRef(null);
  const [selectedTexture, setSelectedTexture] = useState("");
  useEffect(() => {
    const modelViewerTexture1 = document.querySelector("model-viewer#helmet");

    const createAndApplyTexture = async (channel, textureUrl) => {
      const randomSuffix = `?random=${Math.random()}`;
      const updatedTextureUrl = textureUrl + randomSuffix;
      const texture = await modelViewerTexture1.createTexture(
        updatedTextureUrl
      );
      const material = modelViewerTexture1.model.materials[index];
      if (channel.includes("base") || channel.includes("metallic")) {
        material.pbrMetallicRoughness[channel].setTexture(texture);
      } else {
        material[channel].setTexture(texture);
      }
    };

    if (modelViewerTexture1?.model) {
      createAndApplyTexture("baseColorTexture", selectedTexture);
    }
  }, [selectedTexture, index]);

  useEffect(() => {
    const modelViewerTexture = document.querySelector("model-viewer#helmet");

    if (!modelViewerTexture) return;

    const updateTextureProperties = () => {
      const sampler =
        modelViewerTexture.model.materials[index].pbrMetallicRoughness[
          "baseColorTexture"
        ].texture.sampler;

      sampler.setScale({ x: scale, y: scale });
    };

    updateTextureProperties();

    modelViewerTexture.addEventListener("load", updateTextureProperties);

    return () => {
      modelViewerTexture.removeEventListener("load", updateTextureProperties);
    };
  }, [scale, index]);
  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const ScrollToTop = () => {
    StyleRef.current.scrollTop = 0;
  };
  const textureChangeMobile = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
      setIsDrawerOpen1(true);
    } else {
      setIsDrawerOpen(true);
      setIsDrawerOpen1(true);
    }
  };
  const scaleChangeMobile = () => {
    if (isDrawerOpen1) {
      setIsDrawerOpen(true);
      setIsDrawerOpen1(false);
    } else {
      setIsDrawerOpen(true);
      setIsDrawerOpen1(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);
  const calc = () => {
    const num = 3 * parseInt((select.id - 1) / 3) + 3;
    return num;
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcategoryitems",
        {
          subcategory: fabric,
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fabric]);
  useEffect(() => {
    const [fabricData, sofa2Data] = param.id.split("_");

    setFabric(fabricData);
    setSofa2(sofa2Data);
  }, [param]);
  const onChangeFavorite = (id) => {
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
  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getupholsterydata"
        );

        setData(response.data);
        const sofa2Item = response.data.find((item) => item.itemname === sofa2);
        setSelectedItem(sofa2Item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sofa2]);
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
  const changeWallpaper = (imageUrl, index) => {
    setSelectedTexture(imageUrl);
    setSelectedImageIndex(index);
  };
  const handleSeat = () => {
    setIndex(1);
    setSelectedTexture("");
    setActiveTab(1);
  };
  const handleBase = () => {
    setIndex(0);
    setSelectedTexture("");
    setActiveTab(0);
  };
  const handleArmRest = () => {
    setIndex(2);
    setSelectedTexture("");
    setActiveTab(2);
  };

  const handlemodalclose = () => {
    document.querySelector(".modalscan").style.display = "none";
  };
  const handleScroll1 = () => {
    const element = StyleRef.current;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);
  const getKey = (type, index) => {
    const key = `${type}-${index}`;
    return key;
  };

  const onChange = (item) => {
    setSelect(item);
  };

  return (
    <>
      <Navbarhome />
      <DropdownMenu />

      <div className="hero_container">
        <div className="rooms-container">
          <div className="main">
            <div className="left-panel">
              <div className="subtitle">
                <div className="text dmsans">{fabric}</div>
                <div className="types">
                  <div
                    className={
                      type === 0 ? "btn_visualizer active" : "btn_visualizer"
                    }
                    onClick={() => setType(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="40"
                        y1="128"
                        x2="216"
                        y2="128"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></line>
                      <line
                        x1="40"
                        y1="64"
                        x2="216"
                        y2="64"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></line>
                      <line
                        x1="40"
                        y1="192"
                        x2="216"
                        y2="192"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></line>
                    </svg>
                  </div>
                  <div
                    className={
                      type === 1 ? "btn_visualizer active" : "btn_visualizer"
                    }
                    onClick={() => setType(1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <circle
                        cx="76"
                        cy="76"
                        r="36"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></circle>
                      <circle
                        cx="180"
                        cy="76"
                        r="36"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></circle>
                      <circle
                        cx="76"
                        cy="180"
                        r="36"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></circle>
                      <circle
                        cx="180"
                        cy="180"
                        r="36"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-2 border-2 border-sky-500 rounded-md p-3 gap-1 mr-2">
                <div className="dmsans text-gray-700 font-semibold">
                  {" "}
                  Change Pattern(Scale):
                </div>
                <input
                  type="range"
                  min="0"
                  max="4.0"
                  value={scale}
                  step="0.01"
                  onChange={handleScaleChange}
                />
              </div>
              <div className="view_in_ar_mesh">
                <div
                  onClick={handleBase}
                  className={activeTab === 0 ? "active" : ""}>
                  <button>Base</button>
                </div>
                <div
                  onClick={handleSeat}
                  className={activeTab === 1 ? "active" : ""}>
                  <button>Seat</button>
                </div>
                <div
                  onClick={handleArmRest}
                  className={activeTab === 2 ? "active" : ""}>
                  <button>Arm Rest</button>
                </div>
              </div>

              <div
                className={type === 0 ? "styles" : "styles small"}
                onScroll={handleScroll}
                ref={StyleRef}>
                <div className="scroll" id="slider1">
                  {products?.map((item) => (
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
                          onClick={() => changeWallpaper(item.imageurl[0])}>
                          <div className="image">
                            <img src={item.imageurl[0]} alt="Rug" />
                            <div
                              className={
                                item.favorite
                                  ? "btn_visualizer active"
                                  : "btn_visualizer"
                              }
                              onClick={() => onChangeFavorite(item.product_Id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 256 256">
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"></rect>
                                <path d="M176,32a60,60,0,0,0-48,24A60,60,0,0,0,20,92c0,71.9,99.9,128.6,104.1,131a7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,3.9-1,314.3,314.3,0,0,0,51.5-37.6C218.3,154,236,122.6,236,92A60,60,0,0,0,176,32Z"></path>
                              </svg>
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

                  {scrollTop !== 0 && (
                    <div className="btn_visualizer back" onClick={ScrollToTop}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="48 160 128 80 208 160"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"></polyline>
                      </svg>
                      Back To Top
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="main-panel_upholstry">
              <div className="App relative">
                {selectedItem ? (
                  <model-viewer
                    id="helmet"
                    camera-controls
                    touch-action="pan-y"
                    src={selectedItem?.modeldata}
                    ar
                    ar-scale="fixed"
                    alt="A 3D model of a helmet"
                    ref={modelViewerRef}
                    animation-name="Dance"
                    ar-modes="webxr scene-viewer quick-look"
                    shadow-intensity="1">
                    <div
                      className="md:hidden absolute bottom-5 left-2 h-10 px-4 cursor-pointer w-44 flex justify-center rounded-md padding-button items-center bg-yellow-300 z-50 gap-2 shadow-md"
                      onClick={() => scaleChangeMobile()}>
                      <div className="text-[12px] font-semibold">
                        Change Scale
                      </div>
                      <img
                        src="/assets/images/scale.png"
                        className={` h-4 w-4 object-contain  ${
                          !isDrawerOpen1 && "rotate-180"
                        } transition hover:scale-105 ease-in-out duration-300`}
                      />
                    </div>
                    <div
                      className="md:hidden absolute bottom-16 left-2 h-10 px-4 cursor-pointer w-44 flex justify-center rounded-md padding-button items-center bg-yellow-300 z-50 gap-2 shadow-md"
                      onClick={() => textureChangeMobile()}>
                      <div className="text-[12px] font-semibold">
                        Change Texture
                      </div>
                      <img
                        src="/assets/images/color-adjustment.png"
                        className={` h-4 w-4 object-contain  ${
                          !isDrawerOpen && "rotate-180"
                        } transition hover:scale-105 ease-in-out duration-300`}
                      />
                    </div>
                    <div
                      className={`md:hidden absolute glass top-[125px] -right-[175px] z-40 flex flex-col overflow-auto p-2 transition-transform ${
                        isDrawerOpen ? "" : "-translate-x-[220%]" // Adjust the margin value as needed
                      } bg-transparent w-fit`}>
                      <div class="flex flex-col justify-between gap-1">
                        <div
                          onClick={handleBase}
                          className={`${
                            activeTab === 0 ? "border-2 border-sky-500" : ""
                          } bg-gray-100 p-2 rounded-md`}>
                          <button className="text-sm"> Base</button>
                        </div>
                        <div
                          onClick={handleSeat}
                          className={`${
                            activeTab === 1 ? "border-2 border-sky-500" : ""
                          } bg-gray-100 p-2 rounded-md`}>
                          <button className="text-sm">Seat</button>
                        </div>
                        <div
                          onClick={handleArmRest}
                          className={`${
                            activeTab === 2 ? "border-2 border-sky-500" : ""
                          } bg-gray-100 p-2 rounded-md`}>
                          <button className="text-sm">Arm Rest</button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`md:hidden absolute glass -top-[80px] right-[10px] z-40 flex flex-col overflow-auto p-3 transition-transform gap-1 ${
                        isDrawerOpen1 ? "" : "translate-y-[160%]" // Adjust the margin value as needed
                      } bg-transparent w-fit`}>
                      <div className="dmsans text-gray-700 text-sm font-semibold">
                        {" "}
                        Change Pattern(Scale):
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="4.0"
                        value={scale}
                        step="0.01"
                        onChange={handleScaleChange}
                      />
                    </div>
                    <div
                      className={`md:hidden absolute w-full -top-[200px] left-0 z-40 h-fit flex flex-col overflow-auto p-2 transition-transform ${
                        isDrawerOpen ? "" : "translate-y-[200%]" // Adjust the margin value as needed
                      } bg-transparent w-full dark:bg-gray-100`}>
                      <div class="flex flex-col m-auto p-auto glass">
                        <div class="flex  overflow-x-auto hide-scroll-bar">
                          <div class="flex flex-nowrap py-2 ">
                            {products?.map((item, index) => (
                              <div
                                key={item.id}
                                className={`hori_scroll_container_child1_visualizer`}
                                onClick={() =>
                                  changeWallpaper(item.imageurl[0], index)
                                }>
                                <img
                                  src={item.imageurl[0]}
                                  alt="/"
                                  className={`hori_scroll_container_child1_image_visualizer ${
                                    selectedImageIndex === index
                                      ? "selected"
                                      : ""
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="view_in_ar_container">
                      <a href="#open-modal" className="btn-link">
                        <BsBox className="icon" /> View In Your Room
                      </a>
                    </div>
                    <div id="open-modal" class="modal-window ">
                      <div className="qrcodescandiv">
                        <a href="#" title="Close" class="modal-close">
                          <AiOutlineClose />
                        </a>
                        <QRCode
                          value={`arnxt.com/arView/upholstry/${param.id}`}
                        />
                        <p className="semibold_text">
                          Scan the QR code with your mobile device to view the
                          product in your space.
                        </p>
                      </div>
                    </div>
                    <div class="modalscan">
                      <div class="modal-wrapscan">
                        <span
                          className="closemodalscan"
                          onClick={handlemodalclose}>
                          <FaTimes style={{ color: "red", fontSize: "20px" }} />
                        </span>
                        <span>
                          <div></div>

                          <QRCode
                            value={`arnxt.com/arview/productdetail/${param.id}`}
                          />
                        </span>
                        <p className="dataupload">
                          Scan the QR code with your mobile device to view the
                          product in your space.
                        </p>
                      </div>
                    </div>
                  </model-viewer>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpholstryItem;
