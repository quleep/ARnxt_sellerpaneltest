import React, { useEffect, useState, useTransition } from "react";
import {
  FaAlignJustify,
  FaLine,
  FaRegWindowClose,
  FaUser,
} from "react-icons/fa";
import { getUser } from "../service/AuthService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbarhome = () => {
  const history = useHistory();
  const [username, setUserName] = useState();
  const handleclick = () => {
    document.getElementById("newmodal").classList.add("active");
  };
  const handlemodalclose = () => {
    document.getElementById("newmodal").classList.remove("active");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const uservalue = getUser();
    if (uservalue === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      const newvalueuser = uservalue.name.split(" ");

      setUserName(newvalueuser[0]);
    }
  }, []);
  const handlelogout = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      history.push("/");
    } else {
      history.push("/arview");
    }
  };

  return (
    <div>
      <div className="mainnavbarcontainer">
        <div className="mainnavbarlogocontainer">
          <div className="mainnavbarlogoinsidediv">
            <a href="/">
              <img src="/assets/images/arNXTnew.png" />{" "}
            </a>
          </div>
        </div>
        <div className="mainnavbarcontentcontainer">
          <div className="mainnavbarcontentinsidediv">
            <ul>
              <li>
                <a href="/arview">VISUALISER</a>
              </li>

              <li>
                <a href="/price"> PRICING</a>
              </li>
              <li>
                <a href="/blog">BLOGS</a>
              </li>

              <li>
                <a href="/contact">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainnavbarlogincontainer">
          <div className="mainnavbarlogincontainerinside">
            {isLoggedIn ? (
              <a>
                <FaUser /> {username}
              </a>
            ) : (
              <a href="/login">LOG IN</a>
            )}

            <a>
              <button onClick={handlelogout}>
                {" "}
                {isLoggedIn ? "LOGOUT" : "FREE TRIAL"}{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mainnavbarcontainermobile">
        <div className="mainnavbarlogocontainermobile">
          <div className="mainnavbarlogoinsidediv">
            <a href="/">
              <img src="/assets/images/arNXTnew.png" />{" "}
            </a>
          </div>
        </div>
        <div className="mainnavbarcontentcontainermobile"></div>
        <div className="mainnavbarlogincontainermobile">
          <div className="mainnavbarlogincontainerinside">
            {isLoggedIn ? (
              <a>
                <FaUser /> {username}
              </a>
            ) : (
              <a href="/login">LOG IN</a>
            )}

            <a>
              <button onClick={handlelogout}>
                {" "}
                {isLoggedIn ? "LOGOUT" : "FREE TRIAL"}{" "}
              </button>
            </a>
            <FaAlignJustify
              onClick={handleclick}
              className="mainnavbarcontainericon"
            />
          </div>
        </div>
        <div className="modalmainnavbarmobile" id="newmodal">
          <div className="modal-contentmainnavbarmobile">
            <div className="mainnavbarcontainermobile">
              <div className="mainnavbarlogocontainermobile">
                <div className="mainnavbarlogoinsidediv">
                  <a href="/">
                    <img src="/assets/images/arNXTnew.png" />{" "}
                  </a>
                </div>
              </div>
              <div className="mainnavbarcontentcontainermobile"></div>
              <div className="mainnavbarlogincontainermobile">
                <div className="mainnavbarlogincontainerinside">
                  {isLoggedIn ? (
                    <a>
                      <FaUser /> {username}
                    </a>
                  ) : (
                    <a href="/login">LOG IN</a>
                  )}

                  <a>
                    <button onClick={handlelogout}>
                      {" "}
                      {isLoggedIn ? "LOGOUT" : "FREE TRIAL"}{" "}
                    </button>
                  </a>

                  <FaRegWindowClose
                    onClick={handlemodalclose}
                    className="mainnavbarcontainericon"
                  />
                </div>
              </div>
            </div>
            <div className="mainnavbardropdowncontainer">
              <ul>
                <li>
                  <a href="/arview">VISUALISER</a>
                </li>
                <li>
                  <a href="/price"> PRICING</a>
                </li>
                <li>
                  <a href="/blog">BLOGS</a>
                </li>

                <li>
                  <a href="/contact">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarhome;
