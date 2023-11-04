import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMyContext } from "../Context/store";
import { useHistory, useLocation } from "react-router-dom";

export default function Header() {
  const [showNavbar, setShowNavbar] = React.useState(false);
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

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const nextPage = () => {
    history.push(`/`);
  };
  return (
    <nav className="navbar_visualizer" onMouseOver={() => setNav(false)}>
      <div className="logo_visualizer">
        <div className="logo_visualizer_image" onClick={() => nextPage()}>
          <img
            style={{ height: "65px" }}
            src="https://visualiser.arnxt.com/static/media/arnxtreg.1d3559321d4d3c36c710.png"
            alt="logo"
          />
        </div>
      </div>
    </nav>
  );
}
