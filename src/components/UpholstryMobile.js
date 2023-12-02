import React from "react";
import Footertest from "./Footertest";
import Navbar from "./Navbar";
import { ReactComponent as CameraIcon } from "../assets/icon/camera.svg";
import { ReactComponent as ProductIcon } from "../assets/icon/product.svg";
import { ReactComponent as PhotoIcon } from "../assets/icon/ic_add_a_photo.svg";
import Logo from "../assets/image/my_landing_page_logo_background_image_en-us.png";
import Video from "../images/VID-20230830-WA0292 (1).mp4";
import { Rooms } from "../assets/room";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useMyContext } from "../Context/store";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";
import Navbarhome from "./Navbarhome";
import Footercomponent from "./Footercomponent";
function UpholstryMobile() {
  const [data, setData] = useState(null);
  const history = useHistory();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getupholsterydata"
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nextPage = (itemname) => {
    const separator = "_"; // You can change this to any symbol you prefer
    const url = `/arView/upholstry/${param.id}${separator}${itemname}`;

    history.push(url, {
      state: { itemname: itemname, paramId: param.id },
    });
  };

  return (
    <>
      <div className="hero_container">
        <div className="demo-container">
          <div className="room-container">
            <div className="subtitle">
              Choose the type of sofa for upholstery:
            </div>
            <div className="room-select">
              {data &&
                data.map((item) => (
                  <div className="room" onClick={() => nextPage(item.itemname)}>
                    <div className="image">
                      <img src={item.imageurl} alt="room" />
                    </div>

                    <div className="label">{item.type}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpholstryMobile;
