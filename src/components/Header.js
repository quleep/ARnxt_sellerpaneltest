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
            style={{ height: "45px", paddingRight: "30px" }}
            src="https://jobpostingbucket.s3.ap-south-1.amazonaws.com/logo+with+text.png"
            alt="logo"
          />
        </div>
      </div>
    </nav>
  );
}
