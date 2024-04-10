import React from "react";

import Video from "/images/VID-20230830-WA0292 (1).mp4";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useMyContext } from "../Context/store";
import DropdownMenu from "../components/DropdownMenu";
import Navbarhome from "../components/Navbarhome";
import Footercomponent from "../components/Footercomponent";
function Visualizer() {
  const {
    image,
    setImage,
    temporgimage,
    setTempOrgImage,
    wallimagewidth,
    setWallImageWidth,
    wallimageheight,
    setWallImageHeight,
  } = useMyContext();
  const [demoimages, setDemoImages] = useState([]);
  const [base64array, setBase64Array] = useState([]);
  const [orgimg, setOrgImg] = useState();
  const [displaydiv, setDisplayDiv] = useState(false);
  const [segmentimg, setSegmentImg] = useState(false);
  const [processimg, setProcessImg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [detection, setDetection] = useState();
  const [demoapibrand, setDemoApiBrand] = useState();
  const imgurlnew = "";
  const demoimageurl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getdemoimageurl";
  const history = useHistory();
  const handleUrlToBase64 = (val) => {
    let maxWidth;
    let maxHeight;
    let newWidth;
    let newHeight;
    let resizedDataURL;

    return new Promise((resolve) => {
      const img = new Image();

      img.src = val + "?r=" + Math.floor(Math.random() * 100000);
      img.setAttribute("crossOrigin", "Anonymous");

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        setWallImageWidth(img.width);
        setWallImageHeight(img.height);

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        resizedDataURL = canvas.toDataURL("image/jpeg");

        resolve(resizedDataURL);
      };
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tempRoomClick = async (val) => {
    await handleUrlToBase64(val).then((res) => {
      setTempOrgImage(res);

      setImage(val);
      setOrgImg(val);
      setDisplayDiv(true);
      setSegmentImg(false);
      setProcessImg("");
      history.push(`/arView/visualizer2d`);
    });
  };
  const handleimageclick = async (room, val) => {
    const img = new Image();

    img.src = val + "?r=" + Math.floor(Math.random() * 100000);
    img.setAttribute("crossOrigin", "Anonymous");

    img.onload = function () {
      setWallImageWidth(img.width);
      setWallImageHeight(img.height);
    };
    const newarray = await filterDuplicateObjects(base64array);

    newarray.forEach((item) => {
      if (item.roomname === room) {
        setTempOrgImage(item.base64url);
      }
    });
    setImage(val);
    setOrgImg(val);
    setDisplayDiv(true);
    setSegmentImg(false);
    setProcessImg("");
    localStorage.setItem("room", JSON.stringify(room));
    history.push(`/arView/visualizer2d`, {
      state: { itemname: room },
    });
  };
  function filterDuplicateObjects(arr) {
    const uniqueSet = new Set();

    return arr.filter((obj) => {
      const key = JSON.stringify(obj);
      const isUnique = !uniqueSet.has(key);

      if (isUnique) {
        uniqueSet.add(key);
      }

      return isUnique;
    });
  }
  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const imagefilechange = (e) => {
    let val = document.getElementById("b1").value;
    let indx = val.lastIndexOf(".") + 1;
    let filetype = val.substr(indx, val.length).toLowerCase();

    if (filetype === "jpg" || filetype === "png" || filetype === "jpeg") {
      let files = Array.from(e.target.files);
      files.forEach((file) => {
        fileToBase64(file, (err, result) => {
          if (result) {
            const img = new Image();
            img.src = result;

            img.onload = function () {
              const width = img.width;
              const height = img.height;

              setWallImageWidth(width);
              setWallImageHeight(height);
            };
            setTempOrgImage(result);
            setImage(result);
            setOrgImg(result);
            setDisplayDiv(true);

            setSegmentImg(false);
            setProcessImg("");
            history.push(`/arView/visualizer2d`);
          }
        });

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
          }
        };

        reader.readAsDataURL(file);
      });
    } else {
      window.alert("Only jpeg,png,jpg files accepted");
    }
  };
  useEffect(() => {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src =
      "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/fabric5.jpg";

    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      let base64Data = canvas.toDataURL("image/jpeg");
    };
  }, []);

  useEffect(() => {
    axios.get(demoimageurl).then((res) => {
      setDemoImages(res.data);
      let newurl = res.data[0].imgurl;
      for (let i = 0; i < res.data.length; i++) {
        getS3ImageAsBase64(res.data[i].imgurl, function (base64Data) {
          if (!base64array.includes(res.data[i])) {
            setBase64Array((prevItems) => [
              ...prevItems,
              {
                base64url: base64Data,
                roomname: res.data[i].room,
              },
            ]);
          }
        });
      }
    });
  }, []);
  function getS3ImageAsBase64(s3Url, callback) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = s3Url;

    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      let base64Data = canvas.toDataURL("image/jpeg");

      callback(base64Data);
    };
  }
  return (
    <>
      <Navbarhome />
      <DropdownMenu />
      <div className="hero_container">
        <div className="demo-container">
          <div className="title_visualizer">
            See <strong>Wallpaper</strong> in your room
          </div>
          <div className="content">
            <div className="upload">
              <div className="item-group">
                <div className="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="rgba(0, 0, 0, 0.87)"
                    viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.87)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"></path>
                    <circle
                      cx="128"
                      cy="132"
                      r="36"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.87)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"></circle>
                  </svg>
                  <div className="hori_scroll_container_child1_text">
                    Upload a picture of your room
                  </div>
                </div>
                <div className="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="rgba(0, 0, 0, 0.87)"
                    viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.87)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"></path>
                    <polyline
                      points="222.9 74.6 128.9 128 33.1 74.6"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.87)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"></polyline>
                    <line
                      x1="128.9"
                      y1="128"
                      x2="128"
                      y2="234.8"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.87)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"></line>
                  </svg>
                  <div className="hori_scroll_container_child1_text">
                    Try our products in your room
                  </div>
                </div>
              </div>

              <div className="btn_visualizer red">
                <label
                  htmlFor="b1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 12c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5V9h3c.825 0 1.5-.675 1.5-1.5S11.325 6 10.5 6h-3V3c0-.825-.675-1.5-1.5-1.5S4.5 2.175 4.5 3v3h-3C.675 6 0 6.675 0 7.5S.675 9 1.5 9h3v3z"
                      fill="#fff"
                    />
                    <circle cx="19.5" cy="21" r="4.5" fill="#fff" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.745 9H31.5c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3h-24c-1.65 0-3-1.35-3-3V14.58c.45.255.945.42 1.5.42 1.65 0 3-1.35 3-3v-1.5h1.5c1.65 0 3-1.35 3-3 0-.555-.165-1.05-.42-1.5h9.6c.84 0 1.65.36 2.205.975L26.745 9zM12 21c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5-4.14 0-7.5 3.36-7.5 7.5z"
                      fill="#fff"
                    />
                  </svg>
                  <input
                    type="file"
                    id="b1"
                    name="myfile"
                    style={{ display: "none" }}
                    onChange={imagefilechange}
                  />
                  <div className="hori_scroll_container_child1_text">
                    Upload
                  </div>
                </label>
              </div>
            </div>
            <div className="video">
              <video
                data-autoplay
                autoPlay
                data-object-fit="cover"
                playsInline
                muted
                loop
                type="video/mp4"
                src={Video}
              />
            </div>
          </div>
          <div className="room-container">
            <div className="subtitle">
              Don't have a picture? Try our demo rooms instead
            </div>
            <div className="room-select">
              {demoimages &&
                demoimages.map((item) => (
                  <div
                    className="room"
                    onClick={() => tempRoomClick(item.imgurl)}>
                    <div className="image">
                      <img src={item.imgurl} alt="room" />
                    </div>

                    <div className="label">{item.room}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footercomponent />
    </>
  );
}
export default Visualizer;
