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
function VisualizerMobile() {
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
  window.scrollTo(0, 0)
}, [])
  const tempRoomClick = async (val) => {
    await handleUrlToBase64(val).then((res) => {
      setTempOrgImage(res);

      setImage(val);
      setOrgImg(val);
      setDisplayDiv(true);
      setSegmentImg(false);
      setProcessImg("");
      history.push(`/arView/visualizer2d_mobile`);
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
      console.log(canvas);

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      let base64Data = canvas.toDataURL("image/jpeg");
      console.log(base64Data);
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
      <div className="demo-container">
        <div className="title_visualizer">
          See <strong>Wallpaper</strong> in your room
        </div>
        <div className="content">
          <div className="upload">
            <div className="item-group">
              <div className="item">
                <CameraIcon />
                <div className="hori_scroll_container_child1_text">
                  Upload a picture of your room
                </div>
              </div>
              <div className="item">
                <ProductIcon />
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
                <PhotoIcon />
                <input
                  type="file"
                  id="b1"
                  name="myfile"
                  style={{ display: "none" }}
                  onChange={imagefilechange}
                />
                <div className="hori_scroll_container_child1_text">Upload</div>
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
    </>
  );
}
export default VisualizerMobile;
