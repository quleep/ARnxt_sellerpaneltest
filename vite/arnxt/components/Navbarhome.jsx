import React, { useEffect, useState, useTransition } from "react";
import {
  FaAlignJustify,
  FaLessThan,
  FaLine,
  FaRegWindowClose,
  FaUser,
} from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { BsBellFill, BsMessenger, BsQuestion } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { getUser } from "../service/AuthService";

const Navbarhome = () => {
  const merchantprofileurl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getuserprofilearnxt";

  const history = useHistory();
  const [username, setUserName] = useState();
  const [querydata, setQueryData] = useState();
  const [querydetails, setQueryDetails] = useState([]);
  const handleclick = () => {
    document.getElementById("newmodal").classList.add("active");
  };
  const handlemodalclose = () => {
    document.getElementById("newmodal").classList.remove("active");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlelogout = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      history.push("/");
    } else {
      history.push("/arview");
    }
  };

  const userEmail = sessionStorage.getItem("user");

  const emailID = JSON.parse(userEmail);

  let p_id = emailID?.userid;

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

  useEffect(() => {
    if (p_id !== undefined) {
      console.log(p_id);
      const body = {
        userid: p_id,
      };

      axios
        .post(merchantprofileurl, body)
        .then((res) => {
          setQueryData(res.data[0].querydata);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handlegetquerydetails = async (
    productid,
    brand,
    query,
    queryid,
    merchantid,
    userid,
    reply
  ) => {
    try {
      const response = await axios.get(
        `https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsingleproduct?productid=${productid}`
      );
      const data = response.data.productdetails[0];

      setQueryDetails([
        {
          productimage: data.imageurl[0],
          brand: brand,
          query: query,
          queryid: queryid,
          merchantid: merchantid,
          userid: userid,
          reply: reply,
        },
      ]);

      document.getElementById("allquerycontainer").style.display = "none";
      document.getElementById("singlequerycontainer").style.display = "flex";
    } catch (error) {
      console.error(error);
    }
  };

  const handlegobackmodal = () => {
    document.getElementById("allquerycontainer").style.display = "block";
    document.getElementById("singlequerycontainer").style.display = "none";
  };

  return (
    <div>
      <div className="mainnavbarcontainer">
        <div id="openquerynotification" class="modal-window">
          <div>
            <a href="#" title="Close" class="modal-close">
              <AiOutlineClose />
            </a>

            <div id="allquerycontainer">
              <p className="semibold_text">Your queries</p>

              {querydata?.map((item) => (
                <div className="singlequerycard">
                  <p>* {item.query}</p>
                  <button
                    className="querysubmitbutton"
                    onClick={() =>
                      handlegetquerydetails(
                        item.productId,
                        item.brand,
                        item.query,
                        item.queryid,
                        item.merchantid,
                        item.userid,
                        item.reply
                      )
                    }>
                    See details
                  </button>
                </div>
              ))}
            </div>
            <div id="singlequerycontainer">
              {
                <div className="singlequerycard">
                  <h3 className="semibold_text">Query details</h3>
                  <img src={querydetails[0]?.productimage} />

                  <p>Query : {querydetails[0]?.query}</p>
                  <p>Brand : {querydetails[0]?.brand}</p>
                  {querydetails[0]?.reply === undefined ? (
                    <p> No replies yet ! will get back to you soon </p>
                  ) : (
                    <p> Reply : {querydetails[0]?.reply}</p>
                  )}

                  <button
                    className="querysubmitbutton"
                    onClick={handlegobackmodal}>
                    {" "}
                    <FaLessThan /> Go back
                  </button>
                </div>
              }
            </div>

            {/*                      
                       <button className="querysubmitbutton" >Submit</button> */}
          </div>
        </div>
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
                <a href="/pricing"> PRICING</a>
              </li>
           

              <li>
                <a href="/contact">CONTACT US</a>
              </li>
              {isLoggedIn && emailID?.user === "Client" ? (
                <li>
                  <a href="/dashboard">DASHBOARD</a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="mainnavbarlogincontainer">
          <div className="mainnavbarlogincontainerinside">
            {isLoggedIn && emailID?.user === "User" ? (
              <a href="#openquerynotification">
                <div class="bell-icon">
                  <span class="bell-value">{querydata?.length}</span>
                  <i class="fa fa-bell"></i>
                </div>
              </a>
            ) : (
              ""
            )}

            {isLoggedIn ? (
              <div className="mobileviewnavicontainer">
                <div>
                  {" "}
                  <FaUser style={{ marginRight: "10px" }} /> {username}{" "}
                </div>
              </div>
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
              <div className="mobileviewnavicontainer">
                <div>
                  {" "}
                  <FaUser style={{ marginRight: "10px" }} /> {username}{" "}
                </div>
              </div>
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
                    <div className="mobileviewnavicontainer">
                      <div>
                        {" "}
                        <FaUser style={{ marginRight: "10px" }} /> {username}{" "}
                      </div>
                    </div>
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
                  <a href="/pricing"> PRICING</a>
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
