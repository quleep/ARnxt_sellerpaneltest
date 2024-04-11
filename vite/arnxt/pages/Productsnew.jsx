import React, { useEffect, useState } from "react";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import swal from "sweetalert";
import { PopupButton } from "react-calendly";

import axios from "axios";

// importing images
import { Metadata } from "../components/MetaData";
import Navbartest from "../components/Navbartest";

const Productsnew = ({ history }) => {
  const [Shopsno, setShopsNo] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [Merchantaddress, setMerchantAddress] = useState("");
  const [Merchantcategory, setMerchantCategory] = useState("");
  const [Merchantemail, setMerchantEmail] = useState("");
  const [MerchantPhNo, setMerchantPhNo] = useState("");
  const [Merchanttype, setMerchantType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [Acquireddate, setAcquiredDate] = useState("");
  const [brand, setBrand] = useState("");
  const [dimension, setDimension] = useState("");
  const [Purchaselink, setPurchaseLink] = useState("");
  const [productname, setProductName] = useState("");
  const [productdescription, setProductDescription] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [message, setMessage] = useState(null);
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [additional, setAdditional] = useState("");
  const [curr, setCurr] = useState("");
  const [colorvalue, setColorValue] = useState();
  const [mrp, setMrp] = useState();
  const [collection, setCollection] = useState();
  const [primarymaterial, setPrimaryMaterial] = useState();
  const [roomtype, setRoomType] = useState();
  const [weight, setWeight] = useState();
  const [warranty, setWarranty] = useState();
  const [sku, setSku] = useState();
  const [discount, setDiscount] = useState();
  const [tag, setTag] = useState();
  const [Specification, setSpecification] = useState();
  const [brandoverview, setBrandOverview] = useState();
  const [sellerinfo, setSellerInfo] = useState();
  const [care, setCare] = useState();
  const [pcategory, setPcategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [firstsub, setFirstSub] = useState();
  const [tagarray, setTagArray] = useState("");

  const [offerprice, setOfferPrice] = useState();

  const [tagvalue, setTagValue] = useState([]);
  const [error, setError] = useState();
  const [suggest, setSuggest] = useState([]);
  const [verifytag, setVerifyTag] = useState([]);
  const [repeatvalue, setRepeatValue] = useState();
  const [colortextvalue, setColortextvalue] = useState();
  const [finalcolor, setFinalColor] = useState();

  const [imagesarray, setImagesArray] = useState([]);

  const [testtext, setTestText] = useState();

  const [filevalid, setFileValid] = useState(false);

  const [newarray, setNewArray] = useState([]);

  const [modelsearch, setModelSearch] = useState();

  const [length, setLength] = useState("");

  const [proid, setProid] = useState("");

  const registerUrl =
    "https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/productsalldetails";
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const imagesendurl =
    "https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/imageurl";

  const savedimurl =
    "https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/sendimageurl";
  const searchmodels =
    "https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/getmodelsbyname";

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [imageArray, setImageArray] = useState([]);
  const [imageupload, setImageUpload] = useState(false);

  const [searchedmodels, setSearchedModels] = useState();
  const userEmail = sessionStorage.getItem("user");

  const emailID = JSON.parse(userEmail);
  let p_id = emailID.userid;
  const u_id = emailID.name;

  let uidnew = u_id.split(" ");

  let uname = uidnew[0];

  let date = new Date();

  let lastId = 0;

  function getId() {
    let currentId = new Date().getTime();
    if (lastId == currentId) {
      currentId++;
    }
    lastId = currentId;
    return lastId;
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

  const fs = require("fs");
  const removeItem = (img) => {
    setImages((oldArray) => oldArray.filter((item) => item !== img));
  };

  const onChange = (e) => {
    let val = document.getElementById("b1").value;
    let indx = val.lastIndexOf(".") + 1;
    let filetype = val.substr(indx, val.length).toLowerCase();

    if (filetype === "jpg" || filetype === "png" || filetype === "jpeg") {
      let files = Array.from(e.target.files);
      files.forEach((file) => {
        fileToBase64(file, (err, result) => {
          if (result) {
            setFile(result);
            setFileName(file);
          }
        });

        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((oldArray) => [...oldArray, reader.result]);
            setImages((oldArray) => [...oldArray, file]);
          }
        };

        reader.readAsDataURL(file);
      });

      setFileValid(true);
    } else {
      setMessage("File Format accepted are .jpeg .jpg .png");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  let pro_id;
  let imagelength;
  let imagebreadth;
  let imageheight;

  let discountnew;
  discountnew = ((mrp - offerprice) / mrp) * 100;

  {
    /*  
  for(let i=0; i<images.length;i++){

   
      
    const url= 'https://g98tqv1tn6.execute-api.ap-south-1.amazonaws.com/default/ImagesUploaderArnxt';
    fetch(url,{
      method: "POST",
      body: images[i].name
    
  
  
    }).then((res)=>res.json())
       .then((res)=>{
        
      
      
  
        
      
      
      
        fetch(res.uploadURL, {
          
          method: "PUT",
          headers: {
            "ContentType": "image/jpeg",
          
          },
    
        body: images[i]
        
    
        })
           .then((res)=>{
          
           
            
      
            if(res.status === 200){
  
  
            
  
                let resnew= res.url.split('?')
                let imgurl= resnew[0]
  
               
  
                setImagesArray(oldArray => [...oldArray, imgurl])
        
              
  
           
  
  
              
           
              
              }
          
           })
           .catch((err)=>console.log(err))
         
       })
       .catch((err)=>console.log(err))
      
      
  
  

  


}

*/
  }

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      const url =
        "https://g98tqv1tn6.execute-api.ap-south-1.amazonaws.com/default/ImagesUploaderArnxt";
      fetch(url, {
        method: "POST",
        body: images[i].name,
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(res.uploadURL, {
            method: "PUT",
            headers: {
              ContentType: "image/jpeg",
            },

            body: images[i],
          })
            .then((res) => {
              if (res.status === 200) {
                let resnew = res.url.split("?");
                let imgurl = resnew[0];

                setImagesArray((oldArray) => [...oldArray, imgurl]);
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [images]);

  imagesarray &&
    imagesarray.map((item) => {
      if (!newarray.includes(item)) setNewArray([...newarray, item]);
    });

  function uploadImages(e) {
    e.preventDefault();

    getId();
    setProid(lastId);

    if (images.length < 6) {
      setMessage("please select at least 6 images");
      setTimeout(() => {
        setMessage("");
      }, 4000);
      return;
    }

    const productdetails = {
      product_Id: lastId,
      merchant_Id: p_id,

      model_Id: "",

      merchantName: merchantName,
      Shopsno: Shopsno,
      MerchantPhNo: MerchantPhNo,
      Merchantaddress: Merchantaddress,

      Merchantemail: Merchantemail,
      Merchanttype: Merchanttype,
      Purchaselink: Purchaselink,
      brand: brand,
      lengthprod: length,
      breadthprod: breadth,
      height: height,

      productname: productname.toLowerCase(),

      mrp: mrp,
      offerprice: offerprice,
      collection: collection,
      primarymaterial: primarymaterial,
      roomtype: roomtype,
      weight: weight,
      warranty: warranty,
      sku: sku,
      discount: discountnew,
      colorvalue: finalcolor,
      tags: verifytag,
      category: pcategory,
      subcategory: subcategory,
      Specification: Specification,
      brandoverview: brandoverview,
      sellerinfo: sellerinfo,
      care: care,
      imageurl: newarray,

      currency: currency,
      registration_Time: new Date().toString(),
      additional: additional,
    };

    const merchantbody = {
      merchant_Id: Number(p_id),
      merchantname: u_id,
      product_Id: lastId,
      registration_Time: new Date().toString(),
    };

    axios
      .post(registerUrl, productdetails)
      .then((res) => {
        axios
          .post(imagesendurl, merchantbody)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
        swal({
          title: " Submitted Successfully!",

          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        setTimeout(() => {
          setMessage("");
        }, 3000);

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  {
    /*
    
     
    */
  }

  {
    /*

  const productdetails= {
    product_Id: lastId,
    merchant_Id: p_id,
  
    model_Id: '',
   
    imageurl: imagesarray,
    merchantName: merchantName,
    Shopsno: Shopsno,
    MerchantPhNo: MerchantPhNo,
    Merchantaddress:  Merchantaddress,
  
    Merchantemail: Merchantemail,
    Merchanttype: Merchanttype,
    Purchaselink: Purchaselink,
    brand: brand,
    lengthprod: length,
    breadthprod: breadth,
    height: height,

    productname: productname,
   
    mrp : mrp,
    offerprice: offerprice,
    collection : collection,
    primarymaterial: primarymaterial,
    roomtype: roomtype,
    weight: weight,
    warranty: warranty,
    sku: sku,
    discount: discountnew,
    colorvalue: finalcolor,
    tags: verifytag,
    category: pcategory,
    subcategory: subcategory,
    Specification: Specification,
    brandoverview: brandoverview,
    sellerinfo: sellerinfo,
    care: care,

    currency: currency,
    registration_Time: new Date().toString(),
    additional: additional,



  }

  axios.post(registerUrl, productdetails).then(res=>{
    console.log(res)
    swal({
      title: " Submitted Successfully!",
    
      icon:"success",
     

  })
  setTimeout(()=>{
    window.location.reload()
  
  },2000)


  
    
    
    setTimeout(()=>{
      setMessage('')
    },3000)
  
    console.log(res)
  }).catch(error=>{
    console.log(error)
  })


*/
  }

  let output;

  const submitHandler = (event) => {
    event.preventDefault();

    if (imageupload) {
      const requestConfig = {
        headers: {
          "Content-Type": "Application/json",
        },
      };

      let id = new Date();
      let sec = id.getMilliseconds();
      const mainbody = {
        merchantName: merchantName,
        Shopsno: Shopsno,
        MerchantPhNo: MerchantPhNo,
        Merchantaddress: Merchantaddress,

        Merchantemail: Merchantemail,
        Merchanttype: Merchanttype,
        Purchaselink: Purchaselink,
        brand: brand,
        lengthprod: length,
        breadthprod: breadth,
        height: height,

        productname: productname,
        productdescription: productdescription,
        productprice: productprice,
        currency: currency,
        acquiredDate: Date.toString(),
        additional: additional,
        merchant_Id: p_id,
        product_Id: proid,
      };

      axios
        .post(registerUrl, mainbody)
        .then((response) => {
          const body = {
            userid: p_id,
            imagelength: length,
            imagebreadth: breadth,
            height: height,
            product_Id: proid,
          };

          axios
            .post(savedimurl, body)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
          slide1.style.marginLeft = "-100%";
          bold[3].classList.add("active");
          checkProgress[3].classList.add("active");
          progress[3].classList.add("active");
          swal({
            title: " Submitted Successfully!",

            icon: "success",
          });
          window.location.reload();
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            setMessage(error.response.data.message);
          } else {
            setMessage("sorry backend server is down");
          }
        });
    }
  };

  const slide1 = document.querySelector(".slide-page");
  const progress = document.querySelectorAll(".step p");
  const checkProgress = document.querySelectorAll(".step .check");
  const bold = document.querySelectorAll(".step .bullet");
  let phn = /^\d{10}$/;

  const slidenextfirst = (e) => {
    e.preventDefault();

    if (
      merchantName === "" ||
      Shopsno === "" ||
      Merchantemail === "" ||
      Merchantaddress === "" ||
      Merchanttype === "" ||
      MerchantPhNo === ""
    ) {
      setMessage(` All fields are Required`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    if (MerchantPhNo.match(phn)) {
      setMerchantPhNo(MerchantPhNo);
    } else {
      setMessage("please enter 10 digit no");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    slide1.style.marginLeft = "-25%";
    bold[0].classList.add("active");
    checkProgress[0].classList.add("active");
    progress[0].classList.add("active");
  };

  useEffect(() => {
    if (!colorvalue && colortextvalue) {
      setFinalColor(colortextvalue);
    }
    if (!colortextvalue && colorvalue) {
      setFinalColor(colorvalue);
    }
    if (!colorvalue && !colortextvalue) {
      setFinalColor("");
    }
  }, [colorvalue, colortextvalue]);

  const slidenextsecond = (e) => {
    e.preventDefault();

    if (
      productname === "" ||
      brand === "" ||
      mrp === "" ||
      offerprice === "" ||
      length === "" ||
      breadth === "" ||
      height === "" ||
      primarymaterial === "" ||
      roomtype === "" ||
      weight === "" ||
      warranty === "" ||
      sku === "" ||
      verifytag.length === 0 ||
      finalcolor === "" ||
      pcategory === "" ||
      subcategory === "" ||
      Specification === "" ||
      brandoverview === "" ||
      sellerinfo === "" ||
      care === ""
    ) {
      setMessage(`Please fill the required fields`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    if (currency === "") {
      setCurrency("₹ INR");
    }

    slide1.style.marginLeft = "-50%";
    bold[1].classList.add("active");
    checkProgress[1].classList.add("active");
    progress[1].classList.add("active");
  };
  const slidenextthird = (e) => {
    e.preventDefault();
    if (!imageupload) {
      setMessage("Please send the Images first");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    slide1.style.marginLeft = "-75%";
    bold[2].classList.add("active");
    checkProgress[2].classList.add("active");
    progress[2].classList.add("active");
  };
  const slidenextfourth = (event) => {
    event.preventDefault();
  };
  const slidepreviousfirst = (e) => {
    e.preventDefault();

    slide1.style.marginLeft = "-0%";
    bold[0].classList.remove("active");
    checkProgress[0].classList.remove("active");
    progress[0].classList.remove("active");
  };
  const slideprevioussecond = (e) => {
    e.preventDefault();

    slide1.style.marginLeft = "-25%";
    bold[1].classList.remove("active");
    checkProgress[1].classList.remove("active");
    progress[1].classList.remove("active");
  };
  const slidepreviousthird = (e) => {
    e.preventDefault();

    slide1.style.marginLeft = "-50%";
    bold[2].classList.remove("active");
    checkProgress[2].classList.remove("active");
    progress[2].classList.remove("active");
  };

  initMultiStepForm();

  function initMultiStepForm() {
    const progressNumber = document.querySelectorAll(".step").length;
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

    if (progressNumber !== stepsNumber) {
      console.warn(
        "Error, number of steps in progress bar do not match number of pages"
      );
    }

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
      console.log(nextButtons.length);
      nextButtons[i].addEventListener("click", function (event) {
        event.preventDefault();

        // inputsValid = true;

        slidePage.style.marginLeft = `-${(100 / stepsNumber) * current}%`;

        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
      });
    }
  }

  const [display, setDisplay] = useState(false);

  let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  useEffect(() => {
    setDisplay(true);
  }, []);

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    history.push("/");
  };

  const infomousein = () => {
    document.querySelector(".leninfo").style.display = "block";
  };
  const infomouseout = () => {
    document.querySelector(".leninfo").style.display = "none";
  };

  const lengthdisplay = () => {
    document.querySelector(".breadthtextlength").style.display = "block";
    document.querySelector(".breadthtextbreadth").style.display = "none";
    document.querySelector(".breadthtextheight").style.display = "none";
  };

  const breadthdisplay = () => {
    document.querySelector(".breadthtextbreadth").style.display = "block";
    document.querySelector(".breadthtextlength").style.display = "none";
    document.querySelector(".breadthtextheight").style.display = "none";
  };
  const heightdisplay = () => {
    document.querySelector(".breadthtextheight").style.display = "block";
    document.querySelector(".breadthtextlength").style.display = "none";
    document.querySelector(".breadthtextbreadth").style.display = "none";
  };

  let citiesByState = {
    Furniture: [
      "Bar stools",
      "Cabinets",
      "Wardrobe",
      "Side table",
      "Dining table",
      "Coffee table",
      "Bed",
      "Sideboard",
      "Chair",
      "Centre table",
      "Bedside table",
      "stool",
      "Bean bag",
      "Sofa",
      "Bookshelf",
      "Study table",
      "Bench",
      "Table",
    ],
    Bathroom: ["Commode", "Shower", "Faucet", "Bathtub", "Basin"],
    Furnishing: ["Rugs", "Blinds", "Quilts", "Bedsheets"],
    Electrical: [
      "Light",
      "Chandelier",
      "Switch",
      "Floor lamp",
      "Fan",
      "Water filter",
    ],
    Electronics: ["Ac", "Microwave", "Washing Machine", "Refrigerator", "Tv"],
    Decorative: ["Metal art", "Painting"],
    Walls: [
      "Animal wallpapers",
      "Abstract",
      "Botanical",
      "Floral",
      "Geometric",
      "Kids",
      "Modern",
    ],
    Floors: [
      "Bathroom floors",
      "Kitchen floors",
      "Outdoor floors",
      "Living room",
      "Bedroom",
      "Commercial spaces",
    ],
  };

  const dat = new Date();
  console.log(Date.parse(dat));

  function makeSubmenu(value) {
    setPcategory(value);

    if (value.length === 0)
      document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
      let citiesOptions = "";
      for (let cityId in citiesByState[value]) {
        let firstvalue = citiesByState[value];
        setSubcategory(firstvalue[0]);

        citiesOptions +=
          "<option  >" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("citySelect").innerHTML = citiesOptions;
    }
  }

  function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
  }

  let newval;
  let newtestarr;
  let testarr = [];
  let arrfinal;
  let tagsarr;

  let newarrfinal = [];
  let selectElement;

  useEffect(() => {
    selectElement = document.getElementById("tags");
    if (selectElement) {
      let optionNames = [...selectElement.options].map((o) => o.value);
      setTagValue(optionNames);
    }
  }, []);

  const onChangetag = (value) => {
    setTag(value);

    if (value === "") setSuggest([]);
    else {
      let suggesttag = tagvalue.filter((item) => item.includes(value));
      setSuggest(suggesttag);
    }
  };

  const clickTagsnew = (val) => {
    setSuggest([]);
    setTag("");

    settag(val);
  };

  const settag = (val) => {
    let newtag = verifytag.includes(val);

    if (!newtag) {
      setVerifyTag([...verifytag, val]);
    }
  };

  let tagsoptions = [
    "newest",
    "best deals",
    "top picks",
    "featured",
    "soft firmness",
    "hard firmness",
    "enterance",
  ];

  let tagarr;
  let newtagarr;

  const tagsChange = (e) => {
    console.log(e);

    newtagarr = tagsoptions.includes(e);
    if (newtagarr) {
      let newval = verifytag.includes(e);
      {
        if (!newval) {
          setVerifyTag([...verifytag, e]);
          document.querySelector(".tags").value = "";
        } else {
          document.querySelector(".tags").value = "";
        }
      }
    }
  };

  const removeSuggest = (val) => {
    setVerifyTag((oldArray) => oldArray.filter((item) => item != val));
  };

  const modelsearchHandler = (e) => {
    e.preventDefault();

    const body = {
      productname: modelsearch.toLowerCase(),
    };
    axios
      .post(searchmodels, body)
      .then((res) => {
        setSearchedModels(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbartest />
      <Metadata title={"Products add"} />
      <div className="" style={{ backgroundColor: "" }}>
        <nav
          id="navbarExample"
          className="navbar navbar-expand-lg fixed-top navbar-dark py-3"
          aria-label="Main navigation"
          style={{ backgroundColor: "#001E6C", height: "90px" }}>
          <div className="container">
            <a className="navbar-brand logo-text" href="/">
              {" "}
              <img
                className="img-fluid"
                style={{ height: "60px" }}
                src="assets/images/logo.png"
                alt="alternative"
              />{" "}
            </a>
            <div className="username_div">
              <h3 className="user_namewelcome">Welcome {uname}</h3>
            </div>

            <div className="uploadnav">
              <div className="user_dashboard">
                <div className="trackupload">
                  <div className="usernamemob">
                    <h3 className="user_name">Welcome {uname}</h3>
                  </div>
                  <div style={{ flex: "1" }}>
                    <h3 className="user_name">Track Your Upload</h3>
                  </div>
                  <div style={{ flex: "1" }}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "30%", backgroundColor: "red" }}>
                        <div className="progress-value">30%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="freetrialdiv">
                  <h3 className="user_name">Free trial ends in:</h3>{" "}
                  <span style={{ marginTop: "3px" }}>
                    <p
                      id={display ? "timer" : ""}
                      className="user_name"
                      style={{ color: "red" }}></p>
                  </span>
                </div>
              </div>
            </div>

            <div className="logoutdiv">
              <button className="btnall" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="video_div">
        <div className="video_title">
          <h3 className="user_nameadd">For any support contact us</h3>
          <PopupButton
            className="btnall"
            url="https://calendly.com/arnxt-meet/30min"
            rootElement={document.getElementById("root")}
            text="Contact us"
          />
        </div>
        <div className="video_title2">
          <h3 className="user_nameadd">
            Quick video for uploading your product to app
          </h3>
        </div>
        <div className="video_container"></div>
      </div>

      <div className="productsupload_div">
        <div className="productsupload">
          <h4
            style={{
              fontSize: "25px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: "bold",
            }}>
            Upload your product details
          </h4>
        </div>
        <div className="successupload">
          <h5>*First 2 successful models will be displayed on app. </h5>
        </div>

        <div className="containerform">
          <div className="progress-bar" style={{}}>
            <div className="step">
              <p className="products_para">Partner Details</p>
              <div className="bullet"></div>
              <div className="check fas fa-check"></div>
            </div>
            <div className="step">
              <p className="products_para">Product Details</p>
              <div className="bullet"></div>
              <div className="check fas fa-check"></div>
            </div>

            <div className="step">
              <p className="products_para">Images</p>
              <div className="bullet"></div>
              <div className="check fas fa-check"></div>
            </div>

            {/*
                <div className="step">
                    <p className='products_para'>Submit</p>
                    <div className="bullet">
                        
                    </div>
                    <div className="check fas fa-check"></div>
                </div>
  */}
          </div>
          <div className="form-outer">
            <form className="produploadform">
              <div className="page slide-page">
                <div className="products_paratitle">Partner Details:</div>

                <div className="field">
                  <div className="label">
                    {" "}
                    <p className="products_para">Partner(Shop) Name</p>
                  </div>
                  <input
                    type="text"
                    value={merchantName}
                    onChange={(event) => setMerchantName(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>
                <div className="field">
                  <div className="label">
                    <p className="products_para">No of shops</p>
                  </div>
                  <input
                    type="number"
                    value={Shopsno}
                    onChange={(event) => setShopsNo(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>

                <div className="field">
                  <div className="label">
                    <p className="products_para">Partner email</p>
                  </div>
                  <input
                    type="email"
                    value={Merchantemail}
                    onChange={(event) => setMerchantEmail(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>
                <div className="field">
                  <div className="label">
                    <p className="products_para">Partner address</p>
                  </div>
                  <input
                    type="text"
                    value={Merchantaddress}
                    onChange={(event) => setMerchantAddress(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>
                <div className="field">
                  <div className="label">
                    <p className="products_para">Partner type</p>

                    <select
                      onChange={(event) => setMerchantType(event.target.value)}
                      style={{
                        width: "120px",
                        height: "30px",
                        marginLeft: "60px",
                        marginTop: "30px",
                        fontFamily: "Manrope, san-serif",
                      }}
                      className="label">
                      <option selected>Choose...</option>
                      <option>Manufacturer</option>
                      <option>Distributer</option>
                      <option>Retailer</option>
                      <option>Exporter</option>
                      <option>Importer</option>
                    </select>
                  </div>
                </div>

                <div className="field" style={{ marginTop: "-30px" }}>
                  <div className="label">
                    <p className="products_para">Contact no</p>
                  </div>
                  <input
                    type="number"
                    maxLength="10"
                    value={MerchantPhNo}
                    onChange={(event) => setMerchantPhNo(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>
                <div className="field">
                  <button className="" onClick={slidenextfirst}>
                    Next
                  </button>
                </div>
                <p style={{}}>
                  {message && (
                    <p
                      style={{
                        color: "red",
                        marginLeft: "50px",
                        fontSize: "20px",
                      }}>
                      {" "}
                      <FaExclamationCircle /> {message}{" "}
                    </p>
                  )}
                </p>
              </div>

              <div className="page">
                <div className="products_paratitle">Product Details</div>

                <div className="productmaincontainer">
                  <div className="productinsidecontainer">
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Product Name <span className="required-field"></span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Brand <span className="required-field"></span>
                        </label>
                        <input
                          list="brand"
                          name="brand"
                          onChange={(e) => setBrand(e.target.value)}
                        />
                        <datalist class="" id="brand">
                          <option value="Vimani" />
                          <option value="Sternhagen Germany" />
                          <option value="Nitco" />
                          <option value="LightBerry" />
                          <option value="ottomate" />
                          <option value="wall fashion" />
                          <option value="johnson" />
                          <option value="excel" />
                          <option value="nexion" />
                          <option value="lasvagas" />
                          <option value="jaquar" />
                          <option value="jaldhi" />
                          <option value="agl" />
                          <option value="hometown" />
                          <option value="intradings" />
                          <option value="nikamal" />
                          <option value="havells" />
                          <option value="schneider electric" />
                          <option value="simero" />
                          <option value="iifb" />
                          <option value="marshalls" />
                          <option value="century" />
                          <option value="bajaj" />
                          <option value="LG" />
                          <option value="Samsung" />
                          <option value="godrej" />
                          <option value="simpolo" />
                        </datalist>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          MRP<span className="required-field"></span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setMrp(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Offer price<span className="required-field"></span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setOfferPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Currency <span className="required-field"></span>
                        </label>
                        <select
                          id=""
                          value={currency}
                          onChange={(event) => setCurrency(event.target.value)}
                          className="productcurrency">
                          <option selected id="curvalue" value="₹ INR">
                            ₹ INR
                          </option>
                          <option value="usd">$ USD</option>

                          <option value="euro"> EURO</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Length (Inch) <span className="required-field"></span>
                        </label>
                        <input
                          type="number"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          onFocus={lengthdisplay}
                        />
                      </div>
                      <p className="breadthtextlength">
                        Length should be greater or equal to 0
                      </p>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Breadth (Inch){" "}
                          <span className="required-field"></span>
                        </label>
                        <input
                          value={breadth}
                          type="number"
                          onChange={(e) => setBreadth(e.target.value)}
                          onFocus={breadthdisplay}
                        />
                      </div>
                      <p className="breadthtextbreadth">
                        Breadth should be greater or equal to 0
                      </p>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Height (Inch) <span className="required-field"></span>
                        </label>
                        <input
                          value={height}
                          type="number"
                          onChange={(e) => setHeight(e.target.value)}
                          onFocus={heightdisplay}
                        />
                      </div>
                      <p className="breadthtextheight">
                        height should be greater or equal to 0
                      </p>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>Collection</label>
                        <input
                          list="collection"
                          name="collection"
                          onChange={(e) => setCollection(e.target.value)}
                        />
                        <datalist class="" id="collection">
                          <option value="Crystal" />
                          <option value="lyra" />
                          <option value="inspire" />
                          <option value="biba" />
                          <option value="jenica" />
                          <option value="evolution3" />
                          <option value="gravity" />
                          <option value="funtime" />
                          <option value="pinaka" />
                        </datalist>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Primary Material{" "}
                          <span className="required-field"></span>
                        </label>
                        <input
                          list="material"
                          name="material"
                          onChange={(e) => setPrimaryMaterial(e.target.value)}
                        />
                        <datalist class="" id="material">
                          <option value="Fabric" />
                          <option value="Leatherette" />
                          <option value="Solid Wood" />
                          <option value="Leather" />
                          <option value="Cann" />
                          <option value="Engineered wood" />
                          <option value="Metal" />
                          <option value="Plastic" />
                          <option value="Glass" />
                          <option value="stone" />
                          <option value="marble" />
                          <option value="Solid Wood" />
                        </datalist>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Room type <span className="required-field"></span>
                        </label>
                        <input
                          list="room"
                          name="room"
                          onChange={(e) => setRoomType(e.target.value)}
                        />
                        <datalist class="" id="room">
                          <option value="Living Room" />
                          <option value="kitchen" />
                          <option value="Bed Room" />
                          <option value="Bathroom" />
                        </datalist>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Weight (kg) <span className="required-field"></span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Warranty(years){" "}
                          <span className="required-field"></span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setWarranty(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          SKU <span className="required-field"></span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setSku(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="productinputdiv">
                        <label>
                          Color <span className="required-field"></span>
                        </label>
                        <div className="colorcontainer">
                          <input
                            type="color"
                            id="colordiv"
                            onChange={(e) => setColorValue(e.target.value)}
                            style={{ width: "30px" }}
                          />
                          <p style={{ padding: "10px" }}>Or</p>
                          <input
                            type="text"
                            id=""
                            placeholder="color"
                            onChange={(e) => setColortextvalue(e.target.value)}
                            style={{ width: "120px" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/*
                          

                          <div>
                            <div className='productinputdiv'  style={{display:'none'}}>
                               <label  >Tags <span className="required-field"></span></label>
                                <input style={{width:'150px'}}  value={tag} onChange={(e)=>onChangetag(e.target.value)} />
                                  <div style={{width:'200px', height:'auto', border:'1px solid red'}} >
                                 {
                               suggest && suggest.map((item,i)=>(
                                <li style={{listStyleType:'none'}}
                                onClick={()=>clickTagsnew(item)}
                                
                                
                                >{item}</li>
                               ))
                              }


                              </div>
                              {
                                verifytag && verifytag.map(item=>(
                                  <p>{item}</p>
                                ))
                              }


                            </div>
                          </div>
                            */}
                    <div>
                      <div className="suggestdiv">
                        {verifytag.map((item) => (
                          <p>
                            {item}
                            <span onClick={() => removeSuggest(item)}>
                              <FaTimes />
                            </span>
                          </p>
                        ))}
                      </div>
                      <div className="productinputdiv">
                        <label>
                          Tags <span className="required-field"></span>
                        </label>

                        <input
                          list="tags"
                          className="tags"
                          onChange={(e) => tagsChange(e.target.value)}
                        />
                        <datalist class="" id="tags">
                          {tagsoptions.map((item) => (
                            <option value={item} />
                          ))}
                        </datalist>
                      </div>
                    </div>

                    <div>
                      <div className="productinputdiv">
                        <label>
                          Category <span className="required-field"></span>
                        </label>
                        <select
                          className="productcurrency"
                          id="countrySelect"
                          size="1"
                          onChange={(e) => makeSubmenu(e.target.value)}>
                          <option
                            value=""
                            selected="selected"
                            className="optiongot">
                            Choose
                          </option>
                          <option value="Furniture" id="catoption">
                            Furniture
                          </option>
                          <option value="Bathroom">Bathroom</option>
                          <option value="Furnishing">Furnishing</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Decorative">Decorative</option>
                          <option value="Walls">Walls</option>
                          <option value="Floors">Floors</option>
                          <option value="Upholstery">Upholstery</option>
                          <option value="wall paint">wall paint</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Sub Category <span className="required-field"></span>
                        </label>
                        <select
                          onChange={(e) => setSubcategory(e.target.value)}
                          className="productcurrency"
                          id="citySelect"
                          size="1">
                          <option value={subcategory} id="subcatvalue"></option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>Website </label>
                        <input
                          type="text"
                          onChange={(e) => setPurchaseLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="productinputdiv">
                        <label>
                          Specification <span className="required-field"></span>
                        </label>
                        <textarea
                          type="text"
                          onChange={(e) => setSpecification(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>
                          Brand Overview{" "}
                          <span className="required-field"></span>
                        </label>
                        <textarea
                          type="text"
                          onChange={(e) => setBrandOverview(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="productinputdiv">
                        <label>
                          Seller Info <span className="required-field"></span>
                        </label>
                        <textarea
                          type="text"
                          onChange={(e) => setSellerInfo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="productinputdiv">
                        <label>Additional Info</label>
                        <textarea
                          type="text"
                          onChange={(e) => setAdditional(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="productinputdiv">
                        <label>
                          Care & Maintenance{" "}
                          <span className="required-field"></span>
                        </label>
                        <textarea
                          type="text"
                          onChange={(e) => setCare(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/*
                        <div className="field">
                            <div className="label"><p  className='products_para'>Product name</p></div>
                            <input type="text"
                            onChange={event=> setProductName(event.target.value) }   style={{border:'1px solid black'}}  />
                        </div>
                        
                        <div className="field">
                            <div className="label"><p  className='products_para'>Brand</p></div>
                            <input type="text" 
                            value={brand} onChange={event=> setBrand(event.target.value) }  style={{border:'1px solid black'}}  />
                        </div>
                      
                        <div className="label"><p  className='products_paradimension'>Dimensions (inch)  </p></div>
                        <div className="field">
                       

                            <div className="label"><p  className='products_para'>Length</p></div>
                            <input type="number"  className='inputfielddim' onFocus={lengthdisplay} 
                            value={length} onChange={event=> setLength(event.target.value) }   />
                            <p className='tooltiptext1' >Length should be greater or equal to 0</p>
                           
                        </div>
                        

                       
                        <div className="field">
                            <div className="label"><p  className='products_para'>Breadth</p></div>
                            <input type="number"  className='inputfielddim'  onFocus={breadthdisplay}
                            value={breadth} onChange={event=> setBreadth(event.target.value) }   />
                             <p className='tooltiptext2' >Breadth should be greater or equal to 0</p>
                        </div>
                        <div className="field">
                            <div className="label"><p  className='products_para'>Height</p></div>
                            <input type="number" className='inputfielddim'  onFocus={heightdisplay}
                            value={height} onChange={event=> setHeight(event.target.value) }   />
                             <p className='tooltiptext3' >height should be greater or equal to 0</p>
                        </div>
                        <div className="field">
                            <div className="label"><p className='products_paraurl'>Website</p> </div>
                            <input type="text" 
                            value={Purchaselink} onChange={event=> setPurchaseLink(event.target.value) }
                            style={{border:'1px solid black'}}  />
                        </div>
                        <div className="field">
                            <div className="label"><p className='products_para' >Price</p></div>
                            <input type="number" value={productprice}
                               onChange={event=>setProductPrice(event.target.value)} style={{border:'1px solid black'}} />
                        </div>
                        <div className="field">
                            <div className="label">  <p className='products_para' >Currency</p> 

                            
    
    <select id="" 
    value={currency}
    onChange={event=>setCurrency(event.target.value)}
    style={{width:'120px', height:'30px', marginLeft:'40px', marginTop:'30px',fontFamily:'Manrope, san-serif'}}
     className="label" 
  >
      <option selected id='curvalue' value="₹ INR" >₹ INR</option>
      <option>$ USD</option>
      
      <option> EURO</option>
     

    </select>
    </div>
    </div>
                            <div className="field" style={{marginTop:'-30px'}}>
                            <div className="label"> <p className='products_para'>Description</p> </div>
                            <input type="text" 
                             value={productdescription}
                             onChange={event=> setProductDescription(event.target.value)}
                            style={{border:'1px solid black'}} />
                        </div>
*/}

                <div className="field btns" style={{ marginLeft: "40px" }}>
                  <button
                    className=""
                    style={{ marginRight: "10px" }}
                    onClick={slidepreviousfirst}>
                    Back
                  </button>
                  <button className="" onClick={slidenextsecond}>
                    Next
                  </button>
                </div>
                <p style={{}}>
                  {message && (
                    <p
                      style={{
                        color: "red",
                        marginLeft: "50px",
                        fontSize: "20px",
                      }}>
                      {" "}
                      <FaExclamationCircle /> {message}{" "}
                    </p>
                  )}
                </p>
              </div>

              <div className="page" style={{}}>
                <div className="products_paratitle">
                  Upload Product Images(.jpg, .png, .jpeg)
                </div>
                <div className="imageproduct">
                  <p className="imagedesc">
                    min 2 images/product are required, for better results upload
                    atleast 6 images(top, bottom and side view)
                  </p>
                </div>
                <div style={{ display: "none" }}>
                  <input
                    type="text"
                    onChange={(e) => setModelSearch(e.target.value)}
                  />
                  <button onClick={modelsearchHandler}>Search</button>

                  <select>
                    {searchedmodels &&
                      searchedmodels.map((item) => (
                        <option>{item.model_Id}</option>
                      ))}
                  </select>
                </div>

                <div className="field">
                  <label className="products_para">Select Images</label>
                  <input
                    type="file"
                    style={{ border: "none" }}
                    onChange={onChange}
                    id="b1"
                    accept="image/*"
                    multiple
                  />
                </div>

                <div className="images_div" style={{}}>
                  {images.map((img) => (
                    <div>
                      <img
                        src={URL.createObjectURL(img)}
                        key={img}
                        alt="image preview"
                        style={{
                          width: "100%",
                          height: " 100%",
                          marginRight: "",
                          borderRadius: "10px",
                        }}
                      />
                      <span onClick={() => removeItem(img)}>
                        {" "}
                        <h3 className="images_delete">
                          <FaTimes />
                        </h3>{" "}
                      </span>
                    </div>
                  ))}
                  <div></div>
                </div>

                <p style={{}}>
                  {message && (
                    <p
                      className={
                        imageupload ? "uploadmessagegreen" : "uploadmessagered"
                      }>
                      {" "}
                      <FaExclamationCircle /> {message}{" "}
                    </p>
                  )}
                </p>

                <div className="field btns">
                  <div className="imagepagepre">
                    <button
                      className=""
                      style={{ marginRight: "10px" }}
                      onClick={slideprevioussecond}>
                      Back
                    </button>
                  </div>

                  <div className="btnsubmit">
                    <div className="field btns">
                      <button onClick={uploadImages}>Submit</button>
                    </div>
                  </div>

                  {/*   
                             <div  className='imagepagenext'>
                            <button className="" style={   {marginLeft:'5px'}}     onClick={slidenextthird}> Next</button>


                             </div>
                                  */}
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                    {" "}
                    <p className="products_para">Additional details:</p>
                  </div>
                  <input
                    type="text"
                    value={additional}
                    onChange={(event) => setAdditional(event.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>

                <div className="field btns">
                  <button
                    className=""
                    style={{ marginRight: "10px" }}
                    onClick={slidepreviousthird}>
                    Back
                  </button>

                  <button onClick={submitHandler}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsnew;
