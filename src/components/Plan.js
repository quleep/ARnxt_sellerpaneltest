import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Navbarhome from "./Navbarhome";
import Footertest from "./Footertest";
import Footercomponent from "./Footercomponent";

const Plan = () => {
  const userEmail = sessionStorage.getItem("user");

  const emailID = JSON.parse(userEmail);
  let p_id = emailID.userid;

  const paymenturl =
    "https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/order";
  const verifyurl =
    "https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment";

  const [pricecheckbasic, setPriceCheckBasic] = useState(false);
  const [pricecheckpremium, setPriceCheckPremium] = useState(false);
  const [pricecheckpro, setPriceCheckPro] = useState(false);
  const [pricecheckcustom, setPriceCheckCustom] = useState(false);


  const handleToggleClickBasic = () => {
    setPriceCheckBasic(!pricecheckbasic);
  };
  const handleToggleClickPremium = () => {
    setPriceCheckPremium(!pricecheckpremium);
  };
  const handleToggleClickPro = () => {
    setPriceCheckPro(!pricecheckpro);
  };
  const handleToggleClickCustom = ()=>{
    setPriceCheckCustom(!pricecheckcustom)
  }
  const handleBuyBasic = (value) => {
    let subsid = value === "8999" ? "Sub8999" : "Sub29999";
    let planid = value === "8999" ? "Plan8999" : "Plan29999";
    let plan_name = "Starter plan";
    let desc =
      value === "8999" ? "Starter plan (6 months)" : "Starter plan (12 months)";

    const requestbody = {
      amount: value,
      plan_Id: planid,
      subscription_Id: subsid,
      planname: plan_name,
      desc: desc,
    };

    axios
      .post(paymenturl, requestbody)
      .then((response) => {
        let options = {
          key: "rzp_live_YbfBrZC0QAX9az",
          amount: value,
          currency: "INR",
          name: "Arnxt.com",
          description: "Payment for Starter plan",
          image:
            "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/arnxtreg.png",
          order_id: response.data.id,
          callback_url: `https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment?mid=${p_id}`,
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        let rzp1 = new window.Razorpay(options);

        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBuyPremium = (value) => {
    let subsid = value === "35999" ? "Sub35999" : "Sub129999";
    let planid = value === "35999" ? "Plan35999" : "Plan129999";
    let plan_name = "Basic plan";
    let desc =
      value === "35999" ? "Basic plan (6 months)" : "Basic plan (12 months)";

    const requestbody = {
      amount: value,
      plan_Id: planid,
      subscription_Id: subsid,
      planname: plan_name,
      desc: desc,
    };

    axios
      .post(paymenturl, requestbody)
      .then((response) => {
        let options = {
          key: "rzp_live_YbfBrZC0QAX9az",
          amount: value,
          currency: "INR",
          name: "Arnxt.com",
          description: "Payment for Basic plan",
          image:
            "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/arnxtreg.png",
          order_id: response.data.id,
          callback_url: `https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment?mid=${p_id}`,
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        let rzp1 = new window.Razorpay(options);

        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBuyPro = (value) => {
    let subsid = value === "99999" ? "Sub99999" : "Sub369999";
    let planid = value === "99999" ? "Plan99999" : "Plan369999";
    let plan_name = "Premium plan";
    let desc =
      value === "99999"
        ? "Premium plan (6 months)"
        : "Premium plan (12 months)";

    const requestbody = {
      amount: value,
      plan_Id: planid,
      subscription_Id: subsid,
      planname: plan_name,
      desc: desc,
    };

    axios
      .post(paymenturl, requestbody)
      .then((response) => {
        let options = {
          key: "rzp_live_YbfBrZC0QAX9az",
          amount: value,
          currency: "INR",
          name: "Arnxt.com",
          description: "Payment for premium plan",
          image:
            "https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/arnxtreg.png",
          order_id: response.data.id,
          callback_url: `https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment?mid=${p_id}`,
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        let rzp1 = new window.Razorpay(options);

        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbarhome />
      <div class="section-prices">
        <h2 class="section-header">Our Pricing</h2>
        <div class="list-boxs">
          <div class="card starter">
            <div class="head">
              <div className="pricechangedashboard">
                <div className="">
                  <p>Quarterly</p>
                </div>
                <div className="toggleswitch">
                  <input
                    type="checkbox"
                    className=""
                    onClick={handleToggleClickBasic}
                  />
                </div>

                <div className="">
                  <p>Annually</p>
                </div>
              </div>
            </div>
            <div class="head">Starter</div>
            <div
              class="ticket"
              style={
                pricecheckbasic
                  ? { backgroundColor: "#275e3e" }
                  : { backgroundColor: "rgb(44, 62, 224)" }
              }>
              {pricecheckbasic ? "₹ 29,999" : "₹ 8,999"}
            </div>
            <div class="body">
              <p>
                No of Products : 25 <br />
                Number of 3D views/month :{" "}
                {pricecheckbasic ? "50,000" : "10,000"} <br />
                QR code access
               
              </p>
              <button
                class="btn"
                onClick={() =>
                  handleBuyBasic(pricecheckbasic ? "29999" : "8999")
                }>
                Buy Now
              </button>
            </div>
          </div>
          <div class="card standard">
            <div className="head">
              <div className="pricechangedashboard">
                <div className="">
                  <p>Quarterly</p>
                </div>
                <div className="toggleswitch">
                  <input
                    type="checkbox"
                    className=""
                    onClick={handleToggleClickPremium}
                  />
                </div>

                <div className="">
                  <p>Annually</p>
                </div>
              </div>
            </div>
            <div class="head">Basic</div>
            <div
              class="ticket"
              style={
                pricecheckpremium
                  ? { backgroundColor: "#275e3e" }
                  : { backgroundColor: "rgb(44, 62, 224)" }
              }>
              {pricecheckpremium ? "₹ 1,29,999" : "₹ 49,999"}
            </div>
            <div class="body">
              <p>
                No of Products : 100
                <br />
                Number of 3D views/month :{" "}
                {pricecheckpremium ? "2,40,000" : "60,000"}   <br />
                QR code access
              </p>
              <button
                class="btn"
                onClick={() =>
                  handleBuyPremium(pricecheckpremium ? "129999" : "49999")
                }>
                Buy Now
              </button>
            </div>
          </div>
          <div class="card premium">
            <div className="head">
              <div className="pricechangedashboard">
                <div className="">
                  <p>Quarterly</p>
                </div>
                <div className="toggleswitch">
                  <input
                    type="checkbox"
                    className=""
                    onClick={handleToggleClickPro}
                  />
                </div>

                <div className="">
                  <p>Annually</p>
                </div>
              </div>
            </div>
            <div class="head">Premium</div>
            <div
              class="ticket"
              style={
                pricecheckpro
                  ? { backgroundColor: "#275e3e" }
                  : { backgroundColor: "rgb(44, 62, 224)" }
              }>
              {pricecheckpro ? "₹ 3,69,999" : "₹ 99,999"}
            </div>
            <div class="body">
            <p>
                No of Products : 500
                <br />
                Number of 3D views/month :{" "}
                {pricecheckpro ? "Unlimited" : "2,00,000"}   <br />
                QR code access  <br />
                Dedicated account manager
              </p>
              <button
                class="btn"
                onClick={() =>
                  handleBuyPro(pricecheckpro ? "369999" : "99999")
                }>
                Buy Now
              </button>
            </div>
          </div>


          <div class="card premium">
            <div className="head">
              <div className="pricechangedashboard">
                <div className="">
                  <p>Quarterly</p>
                </div>
                <div className="toggleswitch">
                  <input
                    type="checkbox"
                    className=""
                    onClick={handleToggleClickCustom}
                  />
                </div>

                <div className="">
                  <p>Annually</p>
                </div>
              </div>
            </div>
            <div class="head">Business pro</div>
            <div
              class="ticket"
              style={
                pricecheckcustom
                  ? { backgroundColor: "#275e3e" }
                  : { backgroundColor: "rgb(44, 62, 224)" }
              }>
              {pricecheckcustom ? "custom" : "custom"}
            </div>
            <div class="body">
            <p>
                No of Products : Unlimited
                <br />
                Number of 3D views/month :{" "}
                {pricecheckcustom ? "Unlimited" : "Unlimited"}   <br />
                QR code access  <br />
                Dedicated account manager
              </p>
              {/* <button
                class="btn"
                onClick={() =>
                  handleBuyPro(pricecheckcustom ? "369999" : "99999")
                }>
                Buy Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
