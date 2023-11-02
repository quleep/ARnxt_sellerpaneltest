import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMyContext } from "../Context/store";

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
        nav, setNav

  } = useMyContext();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar_visualizer" onMouseOver={() => setNav(false)}>
      <div className="logo_visualizer">
        <div className="logo_visualizer_image">
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
