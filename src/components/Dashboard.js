import React, { useEffect, useRef, useState } from 'react'
import { FaTimes,FaExclamationCircle,FaInfoCircle, FaCheck, FaSpinner } from 'react-icons/fa';
import validator from 'validator';
import swal from 'sweetalert';
import axios from 'axios';
import JSZip from 'jszip';
import fs from 'fs';

import DataTable, { createTheme } from "react-data-table-component";
import { IoIosArrowDown } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';

import { tableCustomStyles } from './tableStyle';

import { RiAddLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';




const imagesendurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/imageurl';
const registerUrl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/productsalldetails';


const savedimurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/sendimageurl'
const searchmodels= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/getmodelsbyname'
const urlimagesend= 'https://qt028wy4w7.execute-api.ap-south-1.amazonaws.com/default/ARnxt_models_new'
const uploadmodelfbx= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/uploadmodelfbx'
const selfuploadurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/selfuploadmerchant'
const saveformdataurl='https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/saveformdata'
const fetchsaveddataurl='https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/getsavedform'
const deletesavedataurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/deletesavedata'
const merchantprofileurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/getmerchantprofile'
const updatemerchantprofileurl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/updatemerchantprofile'

const getoneproducturl= 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/getoneproduct'

const zipextracturl= ' https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/extractzip '




const Dashboard = () => {

  const modelRef =  useRef();

  const [saveddata, setSavedData] = useState();
  const [finalarraydata, setFinalArrayData] = useState([])

  const [weightproduct, setWeightProduct] = useState('')

  const [newimagearray, setNewImageArray] = useState([])

  const [searchmodeldata, setSearchModelData] = useState();

  const [modelsearch, setModelSearch] = useState();
  const [imgarray, setImgArray] = useState();

  const [partnersavedata, setPartnerSaveData] = useState();

  const [subcategory, setSubcategory] = useState();
  const [pcategory, setPcategory] = useState('');
  const [verifytag, setVerifyTag] = useState([]);
  const [colortag, setColorTag] = useState([]);
  const [images, setImages] = useState([]);
  const [imagepreview, setImagesPreview] = useState([]);
  const [file, setFile] = useState();
  const [filename, setFileName] = useState();
  const [newarray, setNewArray] = useState([]);
  const [imagesarray, setImagesArray] = useState([]);

  const [fbxurl, setFbxUrl] = useState('');
  const [glburl, setGlbUrl] = useState('');
  const [gltfurl, setGltfUrl] = useState('');
  const [imageurl, setImageUrl] = useState('');

  const [merchantprofile, setMerchantProfile] = useState();

  const [partnerstate, setPartnerState] = useState('');
  const [partnercity, setPartnerCity] = useState('');
  const [partnerpin, setPartnerPin] = useState('')
  const [partnershopname, setPartnerShopName] = useState('');




  const [Shopsno, setShopsNo]= useState('');
  const [merchantName, setMerchantName]= useState('');
  const [Merchantaddress, setMerchantAddress]= useState('');
  const [Merchantcategory, setMerchantCategory]= useState('');
  const [Merchantemail, setMerchantEmail]= useState('');
  const [MerchantPhNo, setMerchantPhNo]= useState('');
  const [Merchanttype, setMerchantType]= useState('');
  const [remarks, setRemarks] = useState('');
  const [Acquireddate, setAcquiredDate]= useState('');
  const [brand, setBrand] = useState('');
  const [dimension, setDimension]= useState('');
  const [Purchaselink, setPurchaseLink]= useState('');
  const [productname, setProductName]= useState('');
  const [productdescription, setProductDescription]= useState('');
  const [productprice, setProductPrice]= useState('');
  const [currency, setCurrency]= useState('');
  const [message,setMessage]= useState(null);
  const [breadth, setBreadth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');

  const [additional, setAdditional] = useState('');
  const [curr, setCurr] = useState('');
  const [colorvalue, setColorValue]=useState();
  const [mrp, setMrp] = useState('');
  const [collection, setCollection] = useState();
  const [primarymaterial, setPrimaryMaterial] = useState('');
  const [roomtype, setRoomType] = useState('');
  const [weight, setWeight] = useState('');
  const [warranty, setWarranty] = useState('');
  const [sku, setSku] = useState('');
  const [discount, setDiscount] = useState();
  const [tag, setTag] = useState();
  const [Specification, setSpecification] = useState('');
  const [brandoverview, setBrandOverview] = useState('');
  const [sellerinfo, setSellerInfo] = useState('');
  const [care, setCare] = useState('');

  const [proid, setProid]= useState('');

 
  const [firstsub, setFirstSub] = useState();
  const [tagarray, setTagArray] = useState('');

  const [offerprice, setOfferPrice] = useState('');

  const [tagvalue, setTagValue] = useState([])
  const [error, setError] = useState();
  const [suggest, setSuggest] = useState([]);
 
  const [repeatvalue, setRepeatValue] = useState();
  const [colortextvalue, setColortextvalue] = useState();
  const [finalcolor, setFinalColor] = useState();
  const [subcatdetails, setSubCatDetails] = useState('');
  const [modelid, setModelId] = useState('')

  const [partnername, setPartnerName] = useState('');
  const [partnershopsno, setPartnerShopNO] = useState('');
  const [partneremail, setPartnerEmail] = useState('');
  const [partneraddress, setPartnerAddress] = useState('');
  const [partnertype, setPartnerType] = useState('');
  const [partnerno, setPartnerNo] = useState('');
  const [partnerproduct, setPartnerProduct] = useState('');
  const [partnerbrand, setPartnerBrand] = useState('');
  const [partnermodelid, setPartnerModelid] = useState('');
  const [partnermrp, setPartnerMrp] = useState('');
  const [partnerofferprice, setPartnerOfferPrice] = useState('');
  const [partnerCurrency, setPartnerCurrency] = useState('');
  const [partnerlength, setPartnerLength] = useState('');
  const [partnerbreadth, setPartnerBreadth] = useState('');
  const [partnerheight, setPartnerHeight] = useState('');
  const [partnercollection, setPartnerCollection] = useState('');
  const [partnerprimarymaterial, setPartnerPrimaryMaterial] = useState('');
  const [partnerroomtype, setPartnerRoomType] = useState('');
  const [partnerweight, setPartnerWeight] = useState('');
  const [partnerwarranty, setPartnerWarranty] = useState('');
  const [partnersku, setPartnerSku] = useState('');
  const [partnerwebsite, setPartnerWebsite] = useState('');
  const [partnercategory, setPartnerCategory] = useState('');
  const [partnersubcategory, setPartnerSubCategory] = useState('');
  const [partnersubcatdetails, setPartnerSubCatDetails] = useState('');
  const [partnertags, setPartnerTags] = useState([]);
  const [partnercolors, setPartnerColors] = useState([]);
  const [partnerspecification, setPartnerSpecification] = useState('');
  const [partnerbrandoverview, setPartnerBrandOverview] = useState('');
  const [partnersellerinfo, setPartnerSellerInfo] = useState('');
  const [partnercare, setPartnerCare] = useState('');
  const [partneradditional, setPartnerAdditional]= useState('');

 const [gstno, setGstNo] = useState('')
 const [bankname, setBankName] = useState('')
 const [accountno, setAccountNo] = useState('')
 const [ifsc, setIfsc] = useState('')
 const [partnernoofshops, setPartnerNoOfShops] = useState('');

 const [searchproductdata, setSearchProductData] = useState();

 const [dropDown, showDropDown] = useState(false)
 const [subdropdown, showSubDropDown] = useState(false)

 const [currencydrop, showCurrencyDrop] = useState(false)
 const [desgindrop, showDesignDrop] = useState(false)
 const [designroom, showDesignRoom] = useState(false)

 const [select, setSelect] = useState('Category')

 const [subcatselect, setSubCatSelect] = useState('Sub-category')

 const [currencyselect, setCurrencySelect] = useState('INR')
 const [designselect, setDesignSelect] = useState('Design styles')
 const [roomsdrop, setRoomsDrop] = useState('Room Type')

 const [buttonclick, setButtonClick] = useState(false)



 const [tagText, setTagText] = useState('');
 const [tags, setTags] = useState([]);
 const [reRender, setReRender] = useState(false)
 const [tagcolor, setTagColor] = useState('')
 const [colortags, setColorTags] = useState([])
 const [colorreRender, setColorReRender] = useState(false)

 const [showPopup, setShowPopup] = useState(false)

 const [roomtypetag, setRoomTypeTag] = useState([])
 const [roomtypetext, setRoomTypeText] = useState('')
 const [roomtypereRender, setRoomTypeReRender] = useState(false)

 const [reloaddata, setReloadData] = useState()

 const [unit, setUnit] = useState('')
 const [weightunit, setWeightUnit] = useState('')
 const [activelist, setActiveList] = useState(false)
 const [selectedrooms, setSelectedRooms] = useState([])
 
 

 const colorforceRender = () => {
  setColorReRender(!colorreRender)
}

const handleAddColorTag = (e) => {
 colorforceRender()
  if (e.key === 'Enter') {
      setTagColor('')
      if (tagcolor !== '') {
          setColorTags([...colortags, tagcolor.toLowerCase()])
      }
      else {
          console.log('empty')
      }
  }
}
const handleColorDeleteTag = (index) => {
  colorforceRender()
  colortags.splice(index, 1)
}


 const forceRender = () => {
     setReRender(!reRender)
 }

 const handleAddTag = (e) => {
     forceRender()
     if (e.key === 'Enter') {
         setTagText('')
         if (tagText !== '') {
             setTags([...tags, tagText.toLowerCase()])
         }
         else {
             console.log('empty')
         }
     }
 }
 const handleDeleteTag = (index) => {
     forceRender()
     tags.splice(index, 1)
 }


  const roomTypeRender = () => {
     setRoomTypeReRender(!roomtypereRender)
 }

 const handleRoomTypeTag = (e) => {
    roomTypeRender()
     if (e.key === 'Enter') {
         setRoomTypeText('')
         if (roomtypetext !== '') {
             setRoomTypeTag([...roomtypetag, roomtypetext])
         }
         else {
             console.log('empty')
         }
     }
 }
 const handleDeleteRoomTag = (index) => {
     roomTypeRender()
     roomtypetag.splice(index, 1)
 }



 let names = ['Furniture', 'Bathroom', 'Furnishing', 'Electrical', 'Electronics', 'Decorative', 'Walls','Floors','Upholstery','Wall paint']

 let currencyarray= ['INR','EURO','USD']
 let designstylearray= ['3D Geometric', 'Animal','Botanical', 'Geometric']
 let roomTypeArray= ['Living Room', 'Bed Room','Kids Room', 'Dining Room','Office','Kitchen', 'Bathroom', 'Entrance']



 const namescategory=[
  {
    categoryitem: "Furniture",
    subcategory: [
      "Bar stools", "Cabinets", "Wardrobe", "Side table", "Dining table","Coffee table",
  "Bed", "Sideboard", "Chair", "Centre table", "Bedside table","stool", "Bean bag","Sofa","Bookshelf",
  "Study table", "Bench","Table"
    ]

  },
  {
    categoryitem: "Bathroom",
    subcategory: [
      "Commode", "Shower","Faucet","Bathtub", "Basin"

    ]

  },
  {
    categoryitem: "Furnishing",
    subcategory: [
      "Rugs", "Blinds","Quilts","Bedsheets","Curtains"

    ]

  },
  {
    categoryitem: "Electrical",
    subcategory: [
      "Light", "Chandelier","Switch","Floor lamp","Fan", "Water filter","Chimney"

    ]

  },
  {
    categoryitem: "Electronics",
    subcategory: [
      "Ac", "Microwave","Washing Machine","Refrigerator", "Tv"

    ]

  },
  {
    categoryitem: "Decorative",
    subcategory: [
      "Metal art", "Painting"

    ]

  },
  {
    categoryitem: "Walls",
    subcategory: [
      "Wallpapers","WallMurals"

    ]

  },
  {
    categoryitem: "Floors",
    subcategory: [
      "Tiles", "Marbles" ,"Wooden Floors"

    ]

  },
  {
    categoryitem: "Upholstery",
    subcategory: [
      "Commode", "Shower","Faucet","Bathtub", "Basin"

    ]

  },
  {
    categoryitem: "Wall paints",
    subcategory: [
     

    ]

  },
  
  
      


 ]



 
 

 const [opentab, setOpenTab] = useState(false)


 const [isActive, setIsActive] = useState(1)
 const handleActive = (btn) => setIsActive(btn)

 const [accActive, setAccActive] = useState()


 let citiesByState={
  Furniture:["Bar stools", "Cabinets", "Wardrobe", "Side table", "Dining table","Coffee table",
  "Bed", "Sideboard", "Chair", "Centre table", "Bedside table","stool", "Bean bag","Sofa","Bookshelf",
  "Study table", "Bench","Table"
],
Bathroom: ["Commode", "Shower","Faucet","Bathtub", "Basin"],
Furnishing: ["Rugs", "Blinds","Quilts","Bedsheets"],
Electrical: ["Light", "Chandelier","Switch","Floor lamp","Fan", "Water filter"],
Electronics: ["Ac", "Microwave","Washing Machine","Refrigerator", "Tv"],
Decorative: ["Metal art", "Painting"],
Walls: ["Animal wallpapers", "Abstract","Botanical", "Floral","Geometric", "Kids","Modern"],
Floors: ["Bathroom floors", "Kitchen floors","Outdoor floors", "Living room", "Bedroom", "Commercial spaces"]
}


 let accordionData = [{

  title: "Product details",
  accordionContent: 'productdetails'


    
 },
 {
     title: "Material details",
     accordionContent: "materialdetails"
 },
 {
     title: "Upload Images",
     accordionContent: "imagedetails"
 },
 ]
 const handleActiveAccord = (index) => {

 
     if (accActive === index) {
         setAccActive()
     }
     else {
         setAccActive(index)
         setOpenTab(true)
     }
 }


  
 
 const zip = new JSZip();
 
  const userEmail= sessionStorage.getItem('user')

  const emailID= JSON.parse(userEmail)
  let p_id= emailID.userid
  const u_id =emailID.name
  
  let uidnew= u_id.split(' ')
 
   let uname= uidnew[0]



  let date = new Date();

  let lastId = 0;

  function getId(){
    let currentId = new Date().getTime();
    if (lastId == currentId) {
      currentId++;
    }
    lastId = currentId;
    return lastId;
}


let discountnew;
discountnew = (mrp - offerprice)/mrp*100


let discountpartner;
discountpartner = (partnermrp - partnerofferprice)/partnermrp*100
useEffect(()=>{

  


},[images])




   
imagesarray &&
 imagesarray.map(item=>{
     if(!newarray.includes(item))
     setNewArray([...newarray, item])
  
 })




 




  function makeSubmenu(value) {


    setPcategory(value);
   
    
  
  if(value.length  === 0) document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
  let citiesOptions = "";
  for( let cityId in citiesByState[value]) {
   
  let firstvalue= citiesByState[value]
  setSubcategory(firstvalue[0])
  
  citiesOptions+="<option  >"+citiesByState[value][cityId]+"</option>";
  }
  document.getElementById("citySelect").innerHTML = citiesOptions;
  }
  
  }

  function makeSubmenuPartner(value) {


    setPartnerCategory(value);
   
    
  
  if(value.length  === 0) document.getElementById("partnersubcatselect").innerHTML = "<option></option>";
  else {
  let citiesOptions = "";
  for( let cityId in citiesByState[value]) {
   
  let firstvalue= citiesByState[value]
  setPartnerSubCategory(firstvalue[0])
  
  citiesOptions+="<option  >"+citiesByState[value][cityId]+"</option>";
  }
  document.getElementById("partnersubcatselect").innerHTML = citiesOptions;
  }
  
  }



  




const profileHandler=(e)=>{
  e.preventDefault()

  
  document.querySelector('.profilediv').style.display= 'block'
  document.querySelector('.tabsContainer').style.display = 'none'

  document.querySelector('.sidebarmain').style.display= 'none'
  document.querySelector('.merchantdiv').style.display= 'none'
  document.querySelector('.selfcontainer').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'none'






  const body={
    merchantid: p_id
  }

  axios.post(merchantprofileurl, body).then(res=>{
   setMerchantProfile(res.data)
  }).catch(error=>{
    console.log(error)
  })


}

const merchantHandler=(e)=>{
  e.preventDefault()
  document.querySelector('#tabbar2').style='border-bottom: 4px solid green'
  document.querySelector('#tabbar1').style='border-bottom: none'
  document.querySelector('#tabbar3').style='border-bottom: none'



  
  document.querySelector('.merchantdiv').style.display= 'block'
  document.querySelector('.profilediv').style.display= 'none'
  document.querySelector('.selfcontainer').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'none'


  const body={
    merchantid: Number(p_id)
  }
  axios.post(fetchsaveddataurl, body).then(res=>{
    setSavedData(res.data)
  }).catch(error=>{
    console.log(error)
  })

}


const selfselectHandler=(e)=>{
  e.preventDefault();
  document.querySelector('#tabbar1').style='border-bottom: 4px solid green'
  document.querySelector('#tabbar2').style='border-bottom: none'
  document.querySelector('#tabbar3').style='border-bottom: none'

  

  document.querySelector('.profilediv').style.display= 'none'
  document.querySelector('.merchantdiv').style.display= 'none'
  document.querySelector('.selfcontainer').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'block'



}


const selfuploadHandler=(e)=>{
  e.preventDefault()
  document.querySelector('#tabbar3').style='border-bottom: 4px solid green'
  document.querySelector('#tabbar1').style='border-bottom: none'
  document.querySelector('#tabbar2').style='border-bottom: none'



  document.querySelector('.selfcontainer').style.display= 'block'
  
  document.querySelector('.merchantdiv').style.display= 'none'
  document.querySelector('.profilediv').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'none'


  const body={
    merchantid: Number(p_id)
  }
  axios.post(fetchsaveddataurl, body).then(res=>{
    setPartnerSaveData(res.data)
  }).catch(error=>{
    console.log(error)
  })

}

const removeSuggest=(val)=>{
  setVerifyTag((oldArray)=>oldArray.filter((item)=>
  item != val
    ))


}
const removepartnertags=(val)=>{
  setPartnerTags((oldArray)=>oldArray.filter((item)=>
  item != val
    ))


}

const removeColor=(val)=>{
  setColorTag((oldArray)=>oldArray.filter((item)=>
  item != val
    ))


}
const removepartnercolor=(val)=>{
  setPartnerColors((oldArray)=>oldArray.filter((item)=>
  item != val
    ))


}



let tagsoptions= ["newest",'best deals','top picks','featured','soft firmness', 'hard firmness', 'enterance']

let coloroptions= ['red', 'green', 'blue','yellow', 'orange', 'megenta','black', 'brown']

let newcolorarr;
const colorChange=(e)=>{
  newcolorarr = coloroptions.includes(e)
  if(newcolorarr){
 
   let color= colortag.includes(e)
   {
     if(!color){
       setColorTag([...colortag, e])
         document.querySelector('.colors').value= ''
 
     }
     else{
       document.querySelector('.colors').value =''
     }
   }
   
 
  }

}

let newpartnercolor;

const partnercolorChange=(e)=>{
  newpartnercolor = coloroptions.includes(e)
  if(newpartnercolor){
 
   let color= partnercolors.includes(e)
   {
     if(!color){
       setPartnerColors([...partnercolors, e])
         document.querySelector('.partnercolors').value= ''
 
     }
     else{
       document.querySelector('.partnercolors').value =''
     }
   }
   
 
  }

}
let newtagarr;

const tagsChange=(e)=>{
  
  newtagarr = tagsoptions.includes(e)
 if(newtagarr){

  let newval= verifytag.includes(e)
  {
    if(!newval){
      setVerifyTag([...verifytag, e])
        document.querySelector('.tags').value= ''

    }
    else{
      document.querySelector('.tags').value =''
    }
  }
  

 }


}

let newpartnerarr;

const partnertagsChange=(e)=>{
  
  newpartnerarr = tagsoptions.includes(e)
 if(newpartnerarr){

  let newval= partnertags.includes(e)
  {
    if(!newval){
      setPartnerTags([...partnertags, e])
        document.querySelector('.partnertags').value= ''

    }
    else{
      document.querySelector('.partnertags').value =''
    }
  }
  

 }


}


const fileToBase64 = (file, cb) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    cb(null, reader.result)
  }
  reader.onerror = function (error) {
    cb(error, null)
  }
}

const imagefilechange=(e)=>{
 
  let val= document.getElementById('b1').value;
  let indx = val.lastIndexOf(".") + 1;
  let filetype = val.substr(indx, val.length).toLowerCase();
  
  if(filetype === "jpg"  || filetype === "png" || filetype === "jpeg" )
  {

  
  
 
  
 let files = Array.from(e.target.files) 
 files.forEach(file => {
  fileToBase64(file, (err, result) => {
    console.log(file)
    console.log(result)
    if (result) {
      setFile(result)
      setFileName(file)


    
    
     
    }
  })
 


  
  

  const reader = new FileReader();

  reader.onload = () => {
      if (reader.readyState === 2) {
         
          setImagesPreview(oldArray => [...oldArray, reader.result])
          setImages(oldArray => [...oldArray, file])

         

         
          }
     
     
  }
    

  
  reader.readAsDataURL(file)
  
})










  }

  else{
    setMessage('File Format accepted are .jpeg .jpg .png');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }



}

{
  /*

 
  */
}





const removeImage=(val)=>{
  setImages((oldArray)=>oldArray.filter((item)=> item !== val))

}


const lengthdisplay =()=>{
  document.querySelector('.lentext').classList.remove('lentextnew')
  document.querySelector('.lentext').innerHTML= 'Length should be 0 or greater'
  document.querySelector('.breadthtext').innerHTML= ''
  document.querySelector('.heighttext').innerHTML= ''




 
}
const partnerlengthdisplay =()=>{
  document.querySelector('.partnerlentext').classList.remove('partnerlentextnew')
  document.querySelector('.partnerlentext').innerHTML= 'Length should be 0 or greater'
  document.querySelector('.partnerbreadthtext').innerHTML= ''
  document.querySelector('.partnerheighttext').innerHTML= ''




 
}
const breadthdisplay =()=>{
  document.querySelector('.breadthtext').classList.remove('breadthtextnew')
  
  document.querySelector('.breadthtext').innerHTML= 'Breadth should be 0 or greater'
  document.querySelector('.lentext').innerHTML= ''
  document.querySelector('.heighttext').innerHTML= ''

  

 
}
const partnerbreadthdisplay =()=>{
  document.querySelector('.partnerbreadthtext').classList.remove('partnerbreadthtextnew')
  
  document.querySelector('.partnerbreadthtext').innerHTML= 'Breadth should be 0 or greater'
  document.querySelector('.partnerlentext').innerHTML= ''
  document.querySelector('.partnerheighttext').innerHTML= ''

  

 
}
const heightdisplay =()=>{
  document.querySelector('.heighttext').classList.remove('heighttextnew')

  document.querySelector('.heighttext').innerHTML= 'Height should be 0 or greater'
  document.querySelector('.lentext').innerHTML= ''
  document.querySelector('.breadthtext').innerHTML= ''
 

 
}
const partnerheightdisplay =()=>{
  document.querySelector('.partnerheighttext').classList.remove('partnerheighttextnew')

  document.querySelector('.partnerheighttext').innerHTML= 'Height should be 0 or greater'
  document.querySelector('.partnerlentext').innerHTML= ''
  document.querySelector('.partnerbreadthtext').innerHTML= ''
 

 
}


let phn =/^\d{10}$/;
let validphone= /^\d{10}$/;
if(currency === ''){
  setCurrency('₹ INR')
}

if(partnerCurrency === ''){
  setPartnerCurrency('INR')
}

const saveform=(e)=>{
  e.preventDefault();




 
 



 
 if(partnerproduct === ''){
   document.querySelector('.partnerproductname').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerproductname').innerHTML= 'required'
   return
 
 }else{
   document.querySelector('.partnerproductname').style = ''
   document.querySelector('#requiredpartnerproductname').innerHTML= ''
 
 }
 
 if(partnerbrand === ''){
   document.querySelector('.partnerbrandname').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerbrandname').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerbrandname').style = ''
   document.querySelector('#requiredpartnerbrandname').innerHTML= ''
 
 }
 if(partnermodelid === ''){
   document.querySelector('.partnermodelid').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnermodelid').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnermodelid').style = ''
   document.querySelector('#requiredpartnermodelid').innerHTML= ''
 
 }
 
 
 
 if(partnermrp === ''){
  
   document.querySelector('.partnermrpprice').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnermrp').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnermrpprice').style = ''
   document.querySelector('#requiredpartnermrp').innerHTML= ''
 
 }
 if(partnerofferprice === ''){
   document.querySelector('.partnerofferprice').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerofferprice').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerofferprice').style = ''
   document.querySelector('#requiredpartnerofferprice').innerHTML= ''
 
 }
 
 
 
 if(partnerlength === ''){
   document.querySelector('.partnerlength').style = 'border: 2px solid red'
  
 
   document.querySelector('.partnerlentext').classList.add('partnerlentextnew')
 
   document.querySelector('.partnerlentext').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerlength').style = ''
   document.querySelector('.partnerlentext').innerHTML= ''
 
 }
 if(partnerbreadth === ''){
   document.querySelector('.partnerbreadth').style = 'border: 2px solid red'
   document.querySelector('.partnerbreadthtext').classList.add('partnerbreadthtextnew')
   document.querySelector('.partnerbreadthtext').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerbreadth').style = ''
 
   document.querySelector('.partnerbreadthtext').innerHTML= ''
 
 }
 if(partnerheight === ''){
   document.querySelector('.partnerheight').style = 'border: 2px solid red'
   document.querySelector('.partnerheighttext').classList.add('partnerheighttextnew')
 
   document.querySelector('.partnerheighttext').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerheight').style = ''
   document.querySelector('.partnerheighttext').innerHTML= ''
 
 }
 
 if(partnerprimarymaterial === ''){
   document.querySelector('.partnerprimarymaterial').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerprimarymaterial').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerprimarymaterial').style = ''
   document.querySelector('#requiredpartnerprimarymaterial').innerHTML= ''
 
 }
 if(partnerroomtype === ''){
   document.querySelector('.partnerroomtype').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerroomtype').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerroomtype').style = ''
   document.querySelector('#requiredpartnerroomtype').innerHTML= ''
 
 }
 
 if(partnerweight === ''){
   document.querySelector('.partnerprodweight').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerweight').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerprodweight').style = ''
   document.querySelector('#requiredpartnerweight').innerHTML= ''
 
 }
 
 if(partnerwarranty === ''){
   document.querySelector('.partnerprodwarranty').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerwarranty').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerprodwarranty').style = ''
   document.querySelector('#requiredpartnerwarranty').innerHTML= ''
 
 }
 
 if(partnersku === ''){
   document.querySelector('.partnersku').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnersku').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnersku').style = ''
   document.querySelector('#requiredpartnersku').innerHTML= ''
 
 }
 if(partnercategory === ''){
   document.querySelector('#partnercategoryselect').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnercatselect').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('#partnercategoryselect').style = ''
   document.querySelector('#requiredpartnercatselect').innerHTML= ''
 
 }
 
 if(partnersubcatdetails === ''){
   document.querySelector('.partnersubcatdetails').style = 'border: 2px solid red'
   document.querySelector('#requiredmerchantsubcatdetails').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnersubcatdetails').style = ''
   document.querySelector('#requiredmerchantsubcatdetails').innerHTML= ''
 
 }
 
 if(partnertags.length === 0){
   document.querySelector('.partnertags').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnertags').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnertags').style = ''
   document.querySelector('#requiredpartnertags').innerHTML= ''
 
 }
 
 if(partnercolors.length === 0){
   document.querySelector('.partnercolors').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnercolors').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnercolors').style = ''
   document.querySelector('#requiredpartnercolors').innerHTML= ''
 
 }
 
 if(partnerspecification === ''){
   document.querySelector('.partnerspecification').style = 'border: 2px solid red'
   document.querySelector('#requiredmerchantspecification').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerspecification').style = ''
   document.querySelector('#requiredmerchantspecification').innerHTML= ''
 
 }
 if(partnerbrandoverview === ''){
   document.querySelector('.partnerbrandoverview').style = 'border: 2px solid red'
   document.querySelector('#requiredmerchantbrandoverview').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnerbrandoverview').style = ''
   document.querySelector('#requiredmerchantbrandoverview').innerHTML= ''
 
 }
 
 
 if(partnersellerinfo === ''){
   document.querySelector('.partnersellerinfo').style = 'border: 2px solid red'
   document.querySelector('#requiredmerchantsellerinfo').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnersellerinfo').style = ''
   document.querySelector('#requiredmerchantsellerinfo').innerHTML= ''
 
 }
 
 if(partnercare === ''){
   document.querySelector('.partnercare').style = 'border: 2px solid red'
   document.querySelector('#requiredmerchantcare').innerHTML= 'required'
   return
 
 }
 else{
   document.querySelector('.partnercare').style = ''
   document.querySelector('#requiredmerchantcare').innerHTML= ''
 
 }

 const formbody={

 
  merchant_Id: p_id,


  modelno: partnermodelid,
 
 


 
  brand: partnerbrand,
  lengthprod: partnerlength,
  breadthprod: partnerbreadth,
  height: partnerheight,
  formstatus: 'save',

  productname: partnerproduct.toLowerCase(),
 
  mrp : partnermrp,
  offerprice: partnerofferprice,
  collection : partnercollection,
  primarymaterial: partnerprimarymaterial,
  roomtype: partnerroomtype,
  weight: partnerweight,
  warranty: partnerwarranty,
  sku: partnersku,
  discount: discountpartner,
  colorvalue: partnercolors,
  tags: partnertags,
  category: partnercategory,
  subcategory: partnersubcategory,
  Specification: partnerspecification,
  brandoverview: partnerbrandoverview,
  sellerinfo: partnersellerinfo,
  care: partnercare,
 

  currency: partnerCurrency,
  registration_Time: new Date().toString(),
  additional: partneradditional,
  subcatdetail: partnersubcatdetails

 }

 axios.post(saveformdataurl, formbody).then(res=>{
  if(res.status === 200){
    document.querySelector('#saveformimages').innerHTML= 'Saved successfully'
    setTimeout(() => {
    document.querySelector('#saveformimages').innerHTML=''

      
    }, [3000]);
  }
 }).catch(error=>{
  console.log(error)
 })

 


}

let imageupload;


const submitdata=(e)=>{

e.preventDefault();












{
  /*


if(partnerproduct === ''){
  window.scroll(0,0)
  document.querySelector('.partnerproductname').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerproductname').innerHTML= 'required'
  return

}else{
  document.querySelector('.partnerproductname').style = ''
  document.querySelector('#requiredpartnerproductname').innerHTML= ''

}

if(partnerbrand === ''){
  window.scroll(0,0)

  document.querySelector('.partnerbrandname').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerbrandname').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerbrandname').style = ''
  document.querySelector('#requiredpartnerbrandname').innerHTML= ''

}
if(partnermodelid === ''){
  window.scroll(0,0)

  document.querySelector('.partnermodelid').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnermodelid').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnermodelid').style = ''
  document.querySelector('#requiredpartnermodelid').innerHTML= ''

}



if(partnermrp === ''){
  window.scroll(0,0)

 
  document.querySelector('.partnermrpprice').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnermrp').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnermrpprice').style = ''
  document.querySelector('#requiredpartnermrp').innerHTML= ''

}
if(partnerofferprice === ''){
  window.scroll(0,0)

  document.querySelector('.partnerofferprice').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerofferprice').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerofferprice').style = ''
  document.querySelector('#requiredpartnerofferprice').innerHTML= ''

}



if(partnerlength === ''){
  window.scroll(0,0)

  document.querySelector('.partnerlength').style = 'border: 2px solid red'
 

  document.querySelector('.partnerlentext').classList.add('partnerlentextnew')

  document.querySelector('.partnerlentext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerlength').style = ''
  document.querySelector('.partnerlentext').innerHTML= ''

}
if(partnerbreadth === ''){
  window.scroll(0,0)

  document.querySelector('.partnerbreadth').style = 'border: 2px solid red'
  document.querySelector('.partnerbreadthtext').classList.add('partnerbreadthtextnew')
  document.querySelector('.partnerbreadthtext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerbreadth').style = ''

  document.querySelector('.partnerbreadthtext').innerHTML= ''

}
if(partnerheight === ''){
  document.querySelector('.partnerheight').style = 'border: 2px solid red'
  document.querySelector('.partnerheighttext').classList.add('partnerheighttextnew')

  document.querySelector('.partnerheighttext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerheight').style = ''
  document.querySelector('.partnerheighttext').innerHTML= ''

}

if(partnerprimarymaterial === ''){
  document.querySelector('.partnerprimarymaterial').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerprimarymaterial').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerprimarymaterial').style = ''
  document.querySelector('#requiredpartnerprimarymaterial').innerHTML= ''

}
if(partnerroomtype === ''){
  document.querySelector('.partnerroomtype').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerroomtype').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerroomtype').style = ''
  document.querySelector('#requiredpartnerroomtype').innerHTML= ''

}

if(partnerweight === ''){
  document.querySelector('.partnerprodweight').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerweight').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerprodweight').style = ''
  document.querySelector('#requiredpartnerweight').innerHTML= ''

}

if(partnerwarranty === ''){
  document.querySelector('.partnerprodwarranty').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerwarranty').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerprodwarranty').style = ''
  document.querySelector('#requiredpartnerwarranty').innerHTML= ''

}

if(partnersku === ''){
  document.querySelector('.partnersku').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnersku').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnersku').style = ''
  document.querySelector('#requiredpartnersku').innerHTML= ''

}
if(partnercategory === ''){
  document.querySelector('#partnercategoryselect').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnercatselect').innerHTML= 'required'
  return

}
else{
  document.querySelector('#partnercategoryselect').style = ''
  document.querySelector('#requiredpartnercatselect').innerHTML= ''

}

if(partnersubcatdetails === ''){
  document.querySelector('.partnersubcatdetails').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantsubcatdetails').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnersubcatdetails').style = ''
  document.querySelector('#requiredmerchantsubcatdetails').innerHTML= ''

}

if(partnertags.length === 0){
  document.querySelector('.partnertags').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnertags').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnertags').style = ''
  document.querySelector('#requiredpartnertags').innerHTML= ''

}

if(partnercolors.length === 0){
  document.querySelector('.partnercolors').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnercolors').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnercolors').style = ''
  document.querySelector('#requiredpartnercolors').innerHTML= ''

}

if(partnerspecification === ''){
  document.querySelector('.partnerspecification').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantspecification').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerspecification').style = ''
  document.querySelector('#requiredmerchantspecification').innerHTML= ''

}
if(partnerbrandoverview === ''){
  document.querySelector('.partnerbrandoverview').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantbrandoverview').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnerbrandoverview').style = ''
  document.querySelector('#requiredmerchantbrandoverview').innerHTML= ''

}


if(partnersellerinfo === ''){
  document.querySelector('.partnersellerinfo').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantsellerinfo').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnersellerinfo').style = ''
  document.querySelector('#requiredmerchantsellerinfo').innerHTML= ''

}

if(partnercare === ''){
  document.querySelector('.partnercare').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantcare').innerHTML= 'required'
  return

}
else{
  document.querySelector('.partnercare').style = ''
  document.querySelector('#requiredmerchantcare').innerHTML= ''

}


if(images.length < 6){
  document.querySelector('#b1').style = 'border: 2px solid red'
  document.querySelector('#requiredimages').innerHTML= '6 required'
  return

}
else{
  document.querySelector('#b1').style = ''
  document.querySelector('#requiredimages').innerHTML= ''

}

*/}




{
/*

const merchantbody={
  merchant_Id: Number(p_id),
  merchantname: u_id,
  product_Id: lastId,
  registration_Time: new Date().toString(),
}
const deletebody={
  merchant_Id: Number(p_id)
}
axios.post(registerUrl, productdetails).then((res)=>{

}).then(()=>{
  axios.post(imagesendurl, merchantbody).then(res=>{
    if(res){
      setShowPopup(true)
      

    }
  })
}).catch(error=>{
  console.log(error)
})


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

            setNewImageArray((oldArray)=>[...oldArray, imgurl])


             
             
          }
        
         })
         .catch((err)=>console.log(err))
       
     })
     .catch((err)=>console.log(err))


  
    
}




const productdetails= {
  product_Id: lastId,
  merchant_Id: p_id,

  model_Id: '',
  modelno: partnermodelid,
 
 
 
  
  
 

 

 
  brand: partnerbrand,
  lengthprod: partnerlength,
  breadthprod: partnerbreadth,
  height: partnerheight,

  productname: partnerproduct.toLowerCase(),
 
  mrp : Number(partnermrp),
  offerprice: Number(partnerofferprice),
  collection : partnercollection,
  primarymaterial: partnerprimarymaterial,
  roomtype: roomtypetag,
  weight: partnerweight,
  warranty: partnerwarranty,
  sku: partnersku,
  discount: Number(discountpartner),
  colorvalue: colortags,
  tags: tags,
  category: select,
  subcategory: subcatselect,
  Specification: partnerspecification,
  brandoverview: partnerbrandoverview,
  sellerinfo: partnersellerinfo,
  care: partnercare,
  imageurl: newimagearray,

  currency: currencyselect,
  registration_Time: new Date().toString(),
  additional: partneradditional,
  subcatdetail: partnersubcatdetails,
  designstyle: designselect

}


const merchantbody={
  merchant_Id: Number(p_id),
  merchantname: u_id,
  product_Id: lastId,
  registration_Time: new Date().toString(),
}

axios.post(registerUrl, productdetails).then((res)=>{

}).then(()=>{
  axios.post(imagesendurl, merchantbody).then(res=>{
    console.log(res)
  })
})








*/

}

}


const uploadimage= async ()=>{

 setNewImageArray([])

for(let i=0; i<images.length;i++){

   
      
  const url= 'https://g98tqv1tn6.execute-api.ap-south-1.amazonaws.com/default/ImagesUploaderArnxt';
   await fetch(url,{
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

              sendimagedata(imgurl)
              
           

            }

            
        

             
        
         })
         .catch((err)=>console.log(err))
       
     })
     .catch((err)=>console.log(err))


     
    
}




}






  const  handleFormSubmit = async () =>{

   


    if(partnerproduct === '' || 
        partnerbrand === '' ||
        partnermodelid === '' ||
        partnermrp === '' ||
        partnerofferprice === '' ||
        partnerlength === '' ||
        partnerbreadth === '' ||
        partnerheight === '' ||
        unit === '' ||
        weightunit === '' ||
        weightproduct === '' ||
        partnerwarranty ===  '' ||
        select === '' ||
        subcatselect === '' ||
        partnersubcatdetails === ''
    
    )
    
    
  {
       setAccActive(0)
     document.querySelector('.alertpopup').style.display = 'flex '
     document.querySelector('.alerttext').innerHTML = 'All fields are required'

     setTimeout(() => {
     document.querySelector('.alertpopup').style.display = 'none'
      
     }, [3000]);
       
      return
    }

    if(partnersku === ''){
      setAccActive(1)
      document.querySelector('.alertpopup').style.display = 'block'
      document.querySelector('.alerttext').innerHTML = 'Sku is required'
 
      setTimeout(() => {
      document.querySelector('.alertpopup').style.display = 'none'
       
      }, [3000]);
        
       return
     

      
    }
    if(partnerprimarymaterial === ''){
      setAccActive(1)
      document.querySelector('.alertpopup').style.display = 'block'
      document.querySelector('.alerttext').innerHTML = 'Primary material is required'
 
      setTimeout(() => {
      document.querySelector('.alertpopup').style.display = 'none'
       
      }, [3000]);
        
       return
      }

      if(tags.length === 0){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'please select atleast one tag'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
      if(colortags.length === 0){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'please select atleast one color'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
      if(selectedrooms.length === 0){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'Room type is required'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }

      if(partnerspecification === ''){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'Specification is required'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
      if(partnerbrandoverview === ''){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'Brand overview is required'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
      if(partnersellerinfo === ''){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'SellerInfo is required'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
      if(partnercare === ''){
        setAccActive(1)
        document.querySelector('.alertpopup').style.display = 'block'
        document.querySelector('.alerttext').innerHTML = 'Care & Maintenance is required'
   
        setTimeout(() => {
        document.querySelector('.alertpopup').style.display = 'none'
         
        }, [3000]);
          
         return


      }
  await uploadimage()
  
  

    


 }
 let newarrylatest= []

 const sendimagedata =(imgurl)=>{
  newarrylatest =[...newarrylatest]
   newarrylatest.push(imgurl)  
   if(images.length === newarrylatest.length){
    getId()
setProid(lastId)


const productdetails= {
  product_Id: lastId,
  merchant_Id: p_id,

  model_Id: '',
  modelno: partnermodelid,
 
 
 
  
  
 

 

  unit: unit,
  weightunit: weightunit,
  brand: partnerbrand,
  lengthprod: partnerlength,
  breadthprod: partnerbreadth,
  height: partnerheight,

  productname: partnerproduct.toLowerCase(),
 
  mrp : Number(partnermrp),
  offerprice: Number(partnerofferprice),
  collection : partnercollection,
  primarymaterial: partnerprimarymaterial,
  roomtype: selectedrooms,
  weight: weightproduct,
  warranty: partnerwarranty,
  sku: partnersku,
  discount: Number(discountpartner),
  colorvalue: colortags,
  tags: tags,
  category: select,
  subcategory: subcatselect,
  Specification: partnerspecification,
  brandoverview: partnerbrandoverview,
  sellerinfo: partnersellerinfo,
  care: partnercare,
  imageurl: newarrylatest,

  currency: currencyselect,
  registration_Time: new Date().toString(),
  additional: partneradditional,
  subcatdetail: partnersubcatdetails,
  designstyle: designselect

}



const merchantbody={
  merchant_Id: Number(p_id),
  merchantname: u_id,
  product_Id: lastId,
  registration_Time: new Date().toString(),
}
  

document.querySelector('#spinner').style.display = 'inline-flex'
setButtonClick(true)

axios.post(registerUrl, productdetails).then((res)=>{

}).then(()=>{
  axios.post(imagesendurl, merchantbody).then(res=>{
    if(res){
document.querySelector('#spinner').style.display = 'none'

      document.querySelector('.modaldiv').style.display = 'block'
      setTimeout(() => {
      document.querySelector('.modaldiv').style.display = 'none'
        
      }, [5000]);
      
    }
  })
})





   }

 }







let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

const merchantclick=(e)=>{
  document.querySelector('.merchantsub').style.display= 'block'
}

const merchantclickleave=(e)=>{
  document.querySelector('.merchantsub').style.display= 'none'
}




const fbxchangehandler=(e)=>{

       
 let files = Array.from(e.target.files) 
 files.forEach(file => {
  fileToBase64(file, (err, result) => {

    let newval= file.name
 
   
    
    let indx = newval.lastIndexOf(".") + 1;
    let filetype = newval.substr(indx, newval.length).toLowerCase();
   
    if (result) {
      
      
      if( filetype === 'rar' || filetype === 'zip'){
        document.querySelector('#fbxmessage').innerHTML= 'done'

    
     
      }
    else{
      document.querySelector('#fbxmessage').innerHTML= 'upload a zip or rar'
      return
      }

      if( newval.split('.')[0].includes('fbx')){
        document.querySelector('#fbxmessage').innerHTML= 'done'


      }
      else{
      document.querySelector('#fbxmessage').innerHTML= 'upload a fbx zip file'
           return

      }
    

      



       
  
        fetch(urlimagesend,{
          method:'POST',
          body: file.name
        }).then((res)=>res.json()).then((res)=>{
  
       fetch(res.uploadURL, {
        method:'PUT',
        headers: {
          "ContentType": "application/json",
        
        },
  
        body: file
       }).then(res=>  {
  
  
        let resnew= res.url.split('?')
        let imgurl= resnew[0]
        setFbxUrl(imgurl)
        
             })
  
        })
      }
     
  })
 



  

  const reader = new FileReader();


    

  
  reader.readAsDataURL(file)
  
})



}



const glbchangehandler=(e)=>{

       
  let files = Array.from(e.target.files) 
  files.forEach(file => {
   fileToBase64(file, (err, result) => {
 
     let newval= file.name
  
    
     
     let indx = newval.lastIndexOf(".") + 1;
     let filetype = newval.substr(indx, newval.length).toLowerCase();
    
     if (result) {
       
       
       if( filetype === 'rar' || filetype === 'zip'){
         document.querySelector('#glbmessage').innerHTML= 'done'
 
     
      
       }
     else{
       document.querySelector('#glbmessage').innerHTML= 'upload a zip or rar'
       return
       }
 
       if( newval.split('.')[0].includes('glb')){
         document.querySelector('#glbmessage').innerHTML= 'done'
 
 
       }
       else{
       document.querySelector('#glbmessage').innerHTML= 'upload a glb zip file'
            return
 
       }
     
 
       
 
 
 
        
   
         fetch(urlimagesend,{
           method:'POST',
           body: file.name
         }).then((res)=>res.json()).then((res)=>{
   
        fetch(res.uploadURL, {
         method:'PUT',
         headers: {
           "ContentType": "application/json",
         
         },
   
         body: file
        }).then(res=>  {
   
   
         let resnew= res.url.split('?')
         let imgurl= resnew[0]
         
         setGlbUrl(imgurl)
         
              })
   
         })
       }
      
   })
  
 
 
 
   
 
   const reader = new FileReader();
 
 
     
 
   
   reader.readAsDataURL(file)
   
 })
 
 
 
 }


 const gltfchangehandler=(e)=>{

       
  let files = Array.from(e.target.files) 
  files.forEach(file => {
   fileToBase64(file, (err, result) => {
 
     let newval= file.name
  
    
     
     let indx = newval.lastIndexOf(".") + 1;
     let filetype = newval.substr(indx, newval.length).toLowerCase();
    
     if (result) {
       
       
       if( filetype === 'rar' || filetype === 'zip'){
         document.querySelector('#gltfmessage').innerHTML= 'done'
 
     
      
       }
     else{
       document.querySelector('#gltfmessage').innerHTML= 'upload a zip or rar'
       return
       }
 
       if( newval.split('.')[0].includes('gltf')){
         document.querySelector('#gltfmessage').innerHTML= 'done'
 
 
       }
       else{
       document.querySelector('#gltfmessage').innerHTML= 'upload a gltf zip file'
            return
 
       }
     
 
       
 
 
 
        
   
         fetch(urlimagesend,{
           method:'POST',
           body: file.name
         }).then((res)=>res.json()).then((res)=>{
   
        fetch(res.uploadURL, {
         method:'PUT',
         headers: {
           "ContentType": "application/json",
         
         },
   
         body: file
        }).then(res=>  {
   
   
         let resnew= res.url.split('?')
         let imgurl= resnew[0]
         
         setGltfUrl(imgurl)
         
              })
   
         })
       }
      
   })
  
 
 
 
   
 
   const reader = new FileReader();
 
 
     
 
   
   reader.readAsDataURL(file)
   
 })
 
 
 
 }



 const imagechangehandler=(e)=>{

       
  let files = Array.from(e.target.files) 
  files.forEach(file => {
   fileToBase64(file, (err, result) => {
  
 
     let newval= file.name
  
    
     
     let indx = newval.lastIndexOf(".") + 1;
     let filetype = newval.substr(indx, newval.length).toLowerCase();
    
     if (result) {
       
       
       if( filetype === 'png' || filetype === 'jpg' || filetype === 'jpeg'){
         document.querySelector('#imagemessage').innerHTML= 'done'
 
     
      
       }
     else{
       document.querySelector('#imagemessage').innerHTML= 'upload a png,jpeg,jpg'
       return
       }
 
      
     
 
       
 
 
 
        
   
         fetch(urlimagesend,{
           method:'POST',
           body: file.name
         }).then((res)=>res.json()).then((res)=>{
   
        fetch(res.uploadURL, {
         method:'PUT',
         headers: {
           "ContentType": "application/json",
         
         },
   
         body: file
        }).then(res=>  {
   
   
         let resnew= res.url.split('?')
         let imgurl= resnew[0]
         
         setImageUrl(imgurl)
         
              })
   
         })
       }
      
   })
  
 
 
 
   
 
   const reader = new FileReader();
 
 
     
 
   
   reader.readAsDataURL(file)
   
 })
 
 
 
 }

 const saveformupload=(e)=>{
  e.preventDefault();











if(productname === ''){
  window.scroll(0,0)
  document.querySelector('.productname').style = 'border: 2px solid red'
  document.querySelector('#requiredproductname').innerHTML= 'required'
  return

}else{
  document.querySelector('.productname').style = ''
  document.querySelector('#requiredproductname').innerHTML= ''

}

if(brand === ''){
  window.scroll(0,0)

  document.querySelector('.brandname').style = 'border: 2px solid red'
  document.querySelector('#requiredbrandname').innerHTML= 'required'
  return

}
else{
  document.querySelector('.brandname').style = ''
  document.querySelector('#requiredbrandname').innerHTML= ''

}
if(modelid === ''){
  window.scroll(0,0)


  document.querySelector('.modelid').style = 'border: 2px solid red'
  document.querySelector('#requiredmodelid').innerHTML= 'required'
  return

}
else{
  document.querySelector('.modelid').style = ''
  document.querySelector('#requiredmodelid').innerHTML= ''

}



if(mrp === ''){
  window.scroll(0,0)

 
  document.querySelector('.mrpprice').style = 'border: 2px solid red'
  document.querySelector('#requiredmrp').innerHTML= 'required'
  return

}
else{
  document.querySelector('.mrpprice').style = ''
  document.querySelector('#requiredmrp').innerHTML= ''

}
if(offerprice === ''){
  window.scroll(0,0)

  document.querySelector('.offerprice').style = 'border: 2px solid red'
  document.querySelector('#requiredofferprice').innerHTML= 'required'
  return

}
else{
  document.querySelector('.offerprice').style = ''
  document.querySelector('#requiredofferprice').innerHTML= ''

}



if(length === ''){
  window.scroll(0,0)

  document.querySelector('.prodlength').style = 'border: 2px solid red'
 

  document.querySelector('.lentext').classList.add('lentextnew')

  document.querySelector('.lentext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.prodlength').style = ''
  document.querySelector('.lentext').innerHTML= ''

}
if(breadth === ''){
  window.scroll(0,0)

  document.querySelector('.prodbreadth').style = 'border: 2px solid red'
  document.querySelector('.breadthtext').classList.add('breadthtextnew')
  document.querySelector('.breadthtext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.prodbreadth').style = ''

  document.querySelector('.heighttext').innerHTML= ''

}
if(height === ''){
  window.scroll(0,0)

  document.querySelector('.prodheight').style = 'border: 2px solid red'
  document.querySelector('.heighttext').classList.add('heighttextnew')

  document.querySelector('.heighttext').innerHTML= 'required'
  return

}
else{
  document.querySelector('.prodheight').style = ''
  document.querySelector('.heighttext').innerHTML= ''

}

if(primarymaterial === ''){
  window.scroll(0,0)

  document.querySelector('.primarymaterial').style = 'border: 2px solid red'
  document.querySelector('#requiredprimarymaterial').innerHTML= 'required'
  return

}
else{
  document.querySelector('.primarymaterial').style = ''
  document.querySelector('#requiredprimarymaterial').innerHTML= ''

}
if(roomtype === ''){
  window.scroll(0,0)

  document.querySelector('.roomtype').style = 'border: 2px solid red'
  document.querySelector('#requiredroomtype').innerHTML= 'required'
  return

}
else{
  document.querySelector('.roomtype').style = ''
  document.querySelector('#requiredroomtype').innerHTML= ''

}

if(weight === ''){
  window.scroll(0,0)

  document.querySelector('.prodweight').style = 'border: 2px solid red'
  document.querySelector('#requiredweight').innerHTML= 'required'
  return

}
else{
  document.querySelector('.prodweight').style = ''
  document.querySelector('#requiredweight').innerHTML= ''

}

if(warranty === ''){
  window.scroll(0,0)

  document.querySelector('.prodwarranty').style = 'border: 2px solid red'
  document.querySelector('#requiredwarranty').innerHTML= 'required'
  return

}
else{
  document.querySelector('.prodwarranty').style = ''
  document.querySelector('#requiredwarranty').innerHTML= ''

}

if(sku === ''){
  document.querySelector('.sku').style = 'border: 2px solid red'
  document.querySelector('#requiredsku').innerHTML= 'required'
  return

}
else{
  document.querySelector('.sku').style = ''
  document.querySelector('#requiredsku').innerHTML= ''

}
if(pcategory === ''){
  document.querySelector('#countrySelect').style = 'border: 2px solid red'
  document.querySelector('#requiredcategory').innerHTML= 'required'
  return

}
else{
  document.querySelector('#countrySelect').style = ''
  document.querySelector('#requiredcategory').innerHTML= ''

}

if(subcatdetails === ''){
  document.querySelector('.subcatdetails').style = 'border: 2px solid red'
  document.querySelector('#requiredsubcatdetails').innerHTML= 'required'
  return

}
else{
  document.querySelector('.subcatdetails').style = ''
  document.querySelector('#requiredsubcatdetails').innerHTML= ''

}

if(verifytag.length === 0){
  document.querySelector('.tags').style = 'border: 2px solid red'
  document.querySelector('#requiredtags').innerHTML= 'required'
  return

}
else{
  document.querySelector('.tags').style = ''
  document.querySelector('#requiredtags').innerHTML= ''

}

if(colortag.length === 0){
  document.querySelector('.colors').style = 'border: 2px solid red'
  document.querySelector('#requiredcolors').innerHTML= 'required'
  return

}
else{
  document.querySelector('.colors').style = ''
  document.querySelector('#requiredcolors').innerHTML= ''

}

if(Specification === ''){
  document.querySelector('.specification').style = 'border: 2px solid red'
  document.querySelector('#requiredspecification').innerHTML= 'required'
  return

}
else{
  document.querySelector('.specification').style = ''
  document.querySelector('#requiredspecification').innerHTML= ''

}
if(brandoverview === ''){
  document.querySelector('.brandoverview').style = 'border: 2px solid red'
  document.querySelector('#requiredbrandoverview').innerHTML= 'required'
  return

}
else{
  document.querySelector('.brandoverview').style = ''
  document.querySelector('#requiredbrandoverview').innerHTML= ''

}


if(sellerinfo === ''){
  document.querySelector('.sellerinfo').style = 'border: 2px solid red'
  document.querySelector('#requiredsellerinfo').innerHTML= 'required'
  return

}
else{
  document.querySelector('.sellerinfo').style = ''
  document.querySelector('#requiredsellerinfo').innerHTML= ''

}

if(care === ''){
  document.querySelector('.care').style = 'border: 2px solid red'
  document.querySelector('#requiredcare').innerHTML= 'required'
  return

}
else{
  document.querySelector('.care').style = ''
  document.querySelector('#requiredcare').innerHTML= ''

}


const formdatabody={
 
  merchant_Id: p_id,


  modelno: modelid,
 
 
 



  Purchaselink: Purchaselink,
  brand: brand,
  lengthprod: length,
  breadthprod: breadth,
  height: height,

  productname: productname.toLowerCase(),
 
  mrp : mrp,
  offerprice: offerprice,
  collection : collection,
  primarymaterial: primarymaterial,
  roomtype: roomtype,
  weight: weight,
  warranty: warranty,
  sku: sku,
  discount: discountnew,
  colorvalue: colortag,
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
  subcatdetail: subcatdetails


}
axios.post(saveformdataurl, formdatabody).then(res=>{
 if(res.status === 200){
  document.querySelector('#saveformself').innerHTML= 'Saved successfully'
  setTimeout(() => {
  document.querySelector('#saveformself').innerHTML= ''

    
  }, [3000]);

 }
}).catch(error=>{
  console.log(error)
})


 }


 
 
 
const submitselfHandler=(e)=>{
  e.preventDefault();

  setselfmerchant()
   async function setselfmerchant(){




  
  



  
  if(productname === ''){
    window.scroll(0,0)
    document.querySelector('.productname').style = 'border: 2px solid red'
    document.querySelector('#requiredproductname').innerHTML= 'required'
    return
  
  }else{
    document.querySelector('.productname').style = ''
    document.querySelector('#requiredproductname').innerHTML= ''
  
  }
  
  if(brand === ''){
    document.querySelector('.brandname').style = 'border: 2px solid red'
    document.querySelector('#requiredbrandname').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.brandname').style = ''
    document.querySelector('#requiredbrandname').innerHTML= ''
  
  }
  if(modelid === ''){
    document.querySelector('.modelid').style = 'border: 2px solid red'
    document.querySelector('#requiredmodelid').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.modelid').style = ''
    document.querySelector('#requiredmodelid').innerHTML= ''
  
  }
  
  
  
  if(mrp === ''){
   
    document.querySelector('.mrpprice').style = 'border: 2px solid red'
    document.querySelector('#requiredmrp').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.mrpprice').style = ''
    document.querySelector('#requiredmrp').innerHTML= ''
  
  }
  if(offerprice === ''){
    document.querySelector('.offerprice').style = 'border: 2px solid red'
    document.querySelector('#requiredofferprice').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.offerprice').style = ''
    document.querySelector('#requiredofferprice').innerHTML= ''
  
  }
  
  
  
  if(length === ''){
    document.querySelector('.prodlength').style = 'border: 2px solid red'
   
  
    document.querySelector('.lentext').classList.add('lentextnew')
  
    document.querySelector('.lentext').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.prodlength').style = ''
    document.querySelector('.lentext').innerHTML= ''
  
  }
  if(breadth === ''){
    document.querySelector('.prodbreadth').style = 'border: 2px solid red'
    document.querySelector('.breadthtext').classList.add('breadthtextnew')
    document.querySelector('.breadthtext').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.prodbreadth').style = ''
  
    document.querySelector('.heighttext').innerHTML= ''
  
  }
  if(height === ''){
    document.querySelector('.prodheight').style = 'border: 2px solid red'
    document.querySelector('.heighttext').classList.add('heighttextnew')
  
    document.querySelector('.heighttext').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.prodheight').style = ''
    document.querySelector('.heighttext').innerHTML= ''
  
  }
  
  if(primarymaterial === ''){
    document.querySelector('.primarymaterial').style = 'border: 2px solid red'
    document.querySelector('#requiredprimarymaterial').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.primarymaterial').style = ''
    document.querySelector('#requiredprimarymaterial').innerHTML= ''
  
  }
  if(roomtype === ''){
    document.querySelector('.roomtype').style = 'border: 2px solid red'
    document.querySelector('#requiredroomtype').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.roomtype').style = ''
    document.querySelector('#requiredroomtype').innerHTML= ''
  
  }
  
  if(weight === ''){
    document.querySelector('.prodweight').style = 'border: 2px solid red'
    document.querySelector('#requiredweight').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.prodweight').style = ''
    document.querySelector('#requiredweight').innerHTML= ''
  
  }
  
  if(warranty === ''){
    document.querySelector('.prodwarranty').style = 'border: 2px solid red'
    document.querySelector('#requiredwarranty').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.prodwarranty').style = ''
    document.querySelector('#requiredwarranty').innerHTML= ''
  
  }
  
  if(sku === ''){
    document.querySelector('.sku').style = 'border: 2px solid red'
    document.querySelector('#requiredsku').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.sku').style = ''
    document.querySelector('#requiredsku').innerHTML= ''
  
  }
  if(pcategory === ''){
    document.querySelector('#countrySelect').style = 'border: 2px solid red'
    document.querySelector('#requiredcategory').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('#countrySelect').style = ''
    document.querySelector('#requiredcategory').innerHTML= ''
  
  }
  
  if(subcatdetails === ''){
    document.querySelector('.subcatdetails').style = 'border: 2px solid red'
    document.querySelector('#requiredsubcatdetails').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.subcatdetails').style = ''
    document.querySelector('#requiredsubcatdetails').innerHTML= ''
  
  }
  
  if(verifytag.length === 0){
    document.querySelector('.tags').style = 'border: 2px solid red'
    document.querySelector('#requiredtags').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.tags').style = ''
    document.querySelector('#requiredtags').innerHTML= ''
  
  }
  
  if(colortag.length === 0){
    document.querySelector('.colors').style = 'border: 2px solid red'
    document.querySelector('#requiredcolors').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.colors').style = ''
    document.querySelector('#requiredcolors').innerHTML= ''
  
  }
  
  if(Specification === ''){
    document.querySelector('.specification').style = 'border: 2px solid red'
    document.querySelector('#requiredspecification').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.specification').style = ''
    document.querySelector('#requiredspecification').innerHTML= ''
  
  }
  if(brandoverview === ''){
    document.querySelector('.brandoverview').style = 'border: 2px solid red'
    document.querySelector('#requiredbrandoverview').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.brandoverview').style = ''
    document.querySelector('#requiredbrandoverview').innerHTML= ''
  
  }
  
  
  if(sellerinfo === ''){
    document.querySelector('.sellerinfo').style = 'border: 2px solid red'
    document.querySelector('#requiredsellerinfo').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.sellerinfo').style = ''
    document.querySelector('#requiredsellerinfo').innerHTML= ''
  
  }
  
  if(care === ''){
    document.querySelector('.care').style = 'border: 2px solid red'
    document.querySelector('#requiredcare').innerHTML= 'required'
    return
  
  }
  else{
    document.querySelector('.care').style = ''
    document.querySelector('#requiredcare').innerHTML= ''
  
  }
  if(fbxurl === ''){
    document.querySelector('#fbxfile').style = 'border: 2px solid red'
    document.querySelector('#fbxmessage').innerHTML= 'file required'
    return


  }
  else{
    document.querySelector('#fbxmessage').innerHTML= ''
    document.querySelector('#fbxfile').style = ''



  }

  if(glburl === ''){
    document.querySelector('#glbfile').style = 'border: 2px solid red'
    document.querySelector('#glbmessage').innerHTML= 'file required'
    return


  }
  else{
    document.querySelector('#glbmessage').innerHTML= ''
    document.querySelector('#glbfile').style = ''



  }
  if(gltfurl === ''){
    document.querySelector('#gltffile').style = 'border: 2px solid red'
    document.querySelector('#gltfmessage').innerHTML= 'file required'
    return


  }
  else{
    document.querySelector('#gltfmessage').innerHTML= ''
    document.querySelector('#gltffile').style = ''



  }
  if(imageurl === ''){
    document.querySelector('#imagefile').style = 'border: 2px solid red'
    document.querySelector('#imagemessage').innerHTML= 'file required'
    return


  }
  else{
    document.querySelector('#imagemessage').innerHTML= ''
    document.querySelector('#imagefile').style = ''



  }
  
  
  
  
  

 
  getId()
  setProid(lastId)
  
  const productdetails= {
    product_Id: lastId,
    merchant_Id: p_id,
  
    model_Id: '',
    modelno: modelid,
   
   
  

    Purchaselink: Purchaselink,
    brand: brand,
    lengthprod: length,
    breadthprod: breadth,
    height: height,
  
    productname: productname.toLowerCase(),
   
    mrp : mrp,
    offerprice: offerprice,
    collection : collection,
    primarymaterial: primarymaterial,
    roomtype: roomtype,
    weight: weight,
    warranty: warranty,
    sku: sku,
    discount: discountnew,
    colorvalue: colortag,
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
    subcatdetail: subcatdetails
  
  
  
  }
  
  const merchantbody={
    merchant_Id: Number(p_id),
    merchantname: u_id,
    product_Id: lastId,
    registration_Time: new Date().toString(),
  }

  const selfbody={
    merchant_Id: Number(p_id),
   
    product_Id: Number(lastId),
    modeluploaddate: new Date().toString(),
    modelassigndate: '',
    modelername: 'self',
    productname: '',
    statusmod: '',
    verifydate: '',
    fbx: fbxurl,
    glb: glburl,
    gltf: gltfurl,
    imgfile: imageurl

  }
  const deletebody={
    merchant_Id: Number(p_id)
  }
  axios.post(registerUrl, productdetails).then(res=>{
  
    axios.post(imagesendurl, merchantbody ).then(res=>{

      axios.post(selfuploadurl, selfbody).then(res=>{
        axios.post(deletesavedataurl, deletebody).then(res=>{

        }).catch(error=>{
          console.log(error)
        })


        swal({
          title: " Submitted Successfully!",
        
          icon:"success",
         
      
      })
      setTimeout(()=>{
        window.location.reload()
      
      },2000)
      }).catch(error=>{
        console.log(error)
      })
      
    }).catch(error=>{
      console.log(error)
    })
   
   
  
  
  
    
    
    setTimeout(()=>{
      setMessage('')
    },3000)
  
    console.log(res)
  }).catch(error=>{
    console.log(error)
  })
   
  
  
  


   }
}

const setpartnertag=(val)=>{
  let newtest= verifytag.includes(val)
  if(!newtest)
  setVerifyTag((oldArray)=>[...oldArray,val])
}

useEffect(()=>{

  partnersavedata && partnersavedata.map(item=>(
    item.tags.map(it=>(
     setpartnertag(it)

    
     
    ))
  ))
  
},[partnersavedata])


const setnewtag=(val)=>{
  let newtest= partnertags.includes(val)
  if(!newtest)
  setPartnerTags((oldArray)=>[...oldArray,val])
}

useEffect(()=>{

  saveddata && saveddata.map(item=>(
    item.tags.map(it=>(
     setnewtag(it)

    
     
    ))
  ))
  
},[saveddata])

const setpartnercolor=(val)=>{
  let newcolor= colortag.includes(val)
  if(!newcolor){
    setColorTag((oldArray)=>[...oldArray,val])
  }
}


useEffect(()=>{

  partnersavedata && partnersavedata.map(item=>(
    item.colorvalue.map(it=>(

      setpartnercolor(it)
      
    ))
  ))
  
},[partnersavedata])

const setnewcolor=(val)=>{
  let newcolor= partnercolors.includes(val)
  if(!newcolor){
    setPartnerColors((oldArray)=>[...oldArray,val])
  }
}


useEffect(()=>{

  saveddata && saveddata.map(item=>(
    item.colorvalue.map(it=>(

      setnewcolor(it)
      
    ))
  ))
  
},[saveddata])



useEffect(()=>{

  saveddata && saveddata.map(item=>{
 
    setPartnerProduct(item.productname)
    setPartnerBrand(item.brand)
    setPartnerModelid(item.modelno)
    setPartnerMrp(item.mrp)
    setPartnerOfferPrice(item.offerprice)
    setPartnerCurrency(item.currency)
    setPartnerLength(item.lengthprod)
    setPartnerBreadth(item.breadthprod)
    setPartnerHeight(item.height)
    setPartnerSku(item.sku)
    setPartnerWarranty(item.warranty)
    setPartnerAdditional(item.additional)
    setPartnerCategory(item.category)
    setPartnerSubCategory(item.subcategory)
    setPartnerSubCatDetails(item.subcatdetail)
    setPartnerBrandOverview(item.brandoverview)
    setPartnerSpecification(item.Specification)
   
    setPartnerCare(item.care)
    setPartnerCollection(item.collection)
    setPartnerPrimaryMaterial(item.primarymaterial)
   
    setPartnerWeight(item.weight)
    setPartnerRoomType(item.roomtype)
    setPartnerSellerInfo(item.sellerinfo)






   


  })

},[saveddata])

useEffect(()=>{
  partnersavedata && partnersavedata.map(item=>{

    setProductName(item.productname)
    setBrand(item.brand)
    setModelId(item.modelno)
    setMrp(item.mrp)
    setOfferPrice(item.offerprice)
    setCurrency(item.currency)
    setLength(item.lengthprod)
    setBreadth(item.breadthprod)
    setHeight(item.height)
    setSku(item.sku)
    setWarranty(item.warranty)
    setAdditional(item.additional)
    setPcategory(item.category)
    setSubcategory(item.subcategory)
    setSubCatDetails(item.subcatdetail)
    setBrandOverview(item.brandoverview)
    setSpecification(item.Specification)
   
    setCare(item.care)
    setCollection(item.collection)
    setPrimaryMaterial(item.primarymaterial)
    setPurchaseLink(item.Purchaselink)
    setWeight(item.weight)
    setRoomType(item.roomtype)
    setSellerInfo(item.sellerinfo)
  })

},[partnersavedata])


useEffect(()=>{
  merchantprofile && merchantprofile.map(item=>{
    setPartnerName(item.merchantname)
    setPartnerEmail(item.merchantemail)
    setPartnerNo(item.merchantphoneNo)
    setPartnerPin(item.merchantpin)
    setPartnerState(item.merchantstate)
    setPartnerCity(item.merchantcity)
    setPartnerAddress(item.merchantaddress)
    setPartnerNoOfShops(item.shopno)
    setPartnerShopName(item.shopname)
    setPurchaseLink(item.website)
    setIfsc(item.ifsccode)
    setGstNo(item.gstno)
    setBankName(item.bankname)
    setAccountNo(item.accountno)
    setPartnerType(item.merchanttype)


    if(item.merchantaddress === ''){
      document.querySelector('.progbar').style= 'width: 130px'
      document.querySelector('.profilepercent').innerHTML = '50 %'
    }
    if(item.merchantaddress){

      document.querySelector('.progbar').style= 'width: 220px'
      document.querySelector('.profilepercent').innerHTML = '100 %'

    }

  })

  

},[merchantprofile])





const searchmodelHandler=(e)=>{
  e.preventDefault();
  const body={
    modelno: modelsearch
  }


 axios.post(searchmodels, body).then(res=>{

  
    const zipfilebody= {
      zipfilenew: res.data[0].modelglb
    }

    axios.post(zipextracturl, zipfilebody).then(res=>{
      console.log(res)
    }).catch(error=>{
      console.log(error)
    })

 
  
  const modelbody={
    productid: Number(res.data[0].productid)
  }

  if(res){
    axios.post(getoneproducturl, modelbody).then(resnew=>{
        setSearchProductData(resnew.data)
        if(resnew){
          document.querySelector('.tablediv').style.display = 'block'
        }
    }).catch(error=>{
      console.log(error)
    })

  }

  
  setSearchModelData(res.data)
 }).catch(error=>{
  console.log(error)
 })


}





const profileUpdateHandler=(e)=>{
  e.preventDefault()

  
  if( partnername === ''){
    
    document.querySelector('.partnername').style = 'border: 2px solid red'
    document.querySelector('.reqpartnername').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnername').style= ''
    document.querySelector('.reqpartnername').innerHTML = ''



  }
  if( partneremail === ''){
    document.querySelector('.partneremail').style = 'border: 2px solid red'
    document.querySelector('.reqpartneremail').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partneremail').style = ''
    document.querySelector('.reqpartneremail').innerHTML = ''



  }
  if( partnertype === ''){
    document.querySelector('.partnertype').style = 'border: 2px solid red'
    document.querySelector('.reqpartnertype').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnertype').style = 'border: none'

    
    document.querySelector('.reqpartnertype').innerHTML = ''



  }
  if( partneraddress === ''){
    document.querySelector('.partneraddress').style = 'border: 2px solid red'
    document.querySelector('.reqpartneraddress').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partneraddress').style= ''
    document.querySelector('.reqpartneraddress').innerHTML= ''



  }

  if( partnerno === ''){
    document.querySelector('.partnermobile').style = 'border: 2px solid red'
    document.querySelector('.reqpartnermobile').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnermobile').style= ''
    document.querySelector('.reqpartnermobile').innerHTML = ''



  }
  if( partnerstate === ''){
    document.querySelector('.partnerstate').style = 'border: 2px solid red'
    document.querySelector('.reqpartnerstate').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnerstate').style= ''
    document.querySelector('.reqpartnerstate').innerHTML = ''



  }
  if( partnercity === ''){
    document.querySelector('.partnercity').style = 'border: 2px solid red'
    document.querySelector('.reqpartnercity').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnercity').style= ''
    document.querySelector('.reqpartnercity').innerHTML = ''



  }
  if( partnerpin === ''){
    document.querySelector('.partnerpin').style = 'border: 2px solid red'
    document.querySelector('.reqpartnerpin').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnerpin').style= ''
    document.querySelector('.reqpartnerpin').innerHTML = ''



  }
  if( partnernoofshops === ''){
    document.querySelector('.partnernoofshops').style = 'border: 2px solid red'
    document.querySelector('.reqpartnernoofshops').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnernoofshops').style= ''
    document.querySelector('.reqpartnernoofshops').innerHTML = ''



  }
  if( partnershopname === ''){
    document.querySelector('.partnershopname').style = 'border: 2px solid red'
    document.querySelector('.reqpartnershopname').innerHTML= 'required'
    return


  }
  else{
    document.querySelector('.partnershopname').style= ''
    document.querySelector('.reqpartnershopname').innerHTML = ''



  }


  const profilebody={
    userid: p_id,
    username: partnername,
    useremail: partneremail,
    useraddress: partneraddress,
    userphoneno: partnerno,
    userstate: partnerstate,
    usercity: partnercity,
    usertype: partnertype,
    userpin: partnerpin,
    usernoofshops: partnernoofshops,
    usershopsname: partnershopname,
    userwebsite: Purchaselink,
    userbankname: bankname,
    userifsccode: ifsc,
    useraccountno: accountno,
    usergstno: gstno


  }

  axios.post(updatemerchantprofileurl, profilebody ).then(res=>{
    if(res.status === 200){
      swal({
        title: " Updated Successfully!",
      
        icon:"success",
       
    
    })
    setTimeout(()=>{
      window.location.reload()
    
    },2000)
    
    }
  }).catch(error=>{
    console.log(error)
  })











}

const modelManagementHandler=(e)=>{
  e.preventDefault();
  document.querySelector('.sidebarmain').style.display = 'none'
  document.querySelector('.tabsContainer').style.display = 'block'

  document.querySelector('.profilediv').style.display = 'none'

}






createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198"
  },
  background: {
    default: "#002b36"
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF"
  },
  divider: {
    default: "#073642"
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)"
  }
});


const columns= [

  {
    name: "Product name",
    selector: row=> row.productname,
   
    sortable: true
  },
  {
    name: "Brand",
    selector: row=> row.brand,
    sortable: true
  },
  {
    name: "Category",
    selector: row=> row.category,
    sortable: true
  },

  {
    name: "Sub-category",
    selector: row=> row.subcategory,
    sortable: true
  },
  {
    name: "Product length",
    selector: row=> row.lengthprod,
    sortable: true
  },
  {
    name: "Product Breadth",
    selector: row=> row.breadthprod,
    sortable: true
  },
  {
    name: "Product height",
    selector: row=> row.height,
    sortable: true
  }
 
 
 
  


]




const handleFocus=()=>{
  document.querySelector('.placeholder').style.display= 'block'
}

const handleActiveList=(val, len)=>{
    
  let checked = false
  if(document.querySelector(`#checkboxroom_${len}:checked`)){
    checked = true
  }
  else{
    checked = false
  }

  if(checked){
    document.querySelector(`#listselect_${len}`).classList.add('selectcheck')
    setSelectedRooms((oldArray)=> [...oldArray, val])
  }
  if(!checked){
    document.querySelector(`#listselect_${len}`).classList.remove('selectcheck')
     setSelectedRooms(
      (oldArray)=>oldArray.filter((item)=>
      item != val
        )
    
     )

  }
}

const handleRemoveRoom=(val,len)=>{
  setSelectedRooms(
    (oldArray)=>oldArray.filter((item)=>
    item != val
      )
  
   )

   document.querySelector(`#listselect_${len}`).classList.remove('selectcheck')

}


const handleClickRoom=()=>{
  showDesignRoom(!designroom)

  
}



  return (
    <div>
      <div id='navbarnew' className='navbar navbar-expand-lg  navbar-toggleable-md fixed-top  py-3'>

        <div className='navcontainer'>

          <div className='dashboardlogodiv'>
            <div className='logocontainer' >
              <img  src='assets/images/arnxtreg.png' className='imgfluid'/>
            </div>

          </div>
          <div className='dashboardnamediv'>
            <div className='merchantnamecontainer' >
              <h3>Welcome {uidnew && uidnew}</h3>

            </div>

          </div>
          <div className='dashboardstatus' >
            <div className='profilecomplete'> 
            <h5>Your profile compeletion </h5>

            <div className='progbarcontainer' >
             <div className='progbar'>
              <p className='profilepercent' >50 %</p>
             </div>
             


            </div>
            

            </div>

          </div>

          <div className='dashboardlogout' >

            <div className='logoutbuttoncontainer'>
            <button>Logout</button>

            </div>

           
            </div>


        </div>
      </div>


      <div>
     


<div className="sidebar ">
    <div className="logo-details">
     
      <span className="logo_name"></span>
    </div>
    <ul className="nav-links">
    
      {/*

      
      <li>
        <div className="icon-link">
          <a href="#">
            <i className='bx bx-bulb'></i>
            <span className="link_name">Profile</span>
          </a>
          <i className='bx bxs-chevron-down arrow'></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Solutions</a></li>
          <li><a href="#">Payments API</a></li>
          <li><a href="#">Accounts APi</a></li>
          <li><a href="#">Finance API</a></li>
        </ul>
      </li>
      <li>
        <div className="icon-link">
          <a href="#">
            <i className='bx bx-news'></i>
            <span className="link_name">Posts</span>
          </a>
          <i className='bx bxs-chevron-down arrow'></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Posts</a></li>
          <li><a href="#">Recent</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Most Visited</a></li>
        </ul>
      </li>
       <li>
        <div className="icon-link">
          <a href="#">
            <i className='bx bx-file-find'></i>
            <span className="link_name">Insights</span>
          </a>
          <i className='bx bxs-chevron-down arrow'></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Insights</a></li>
          <li><a href="#">Money Movement</a></li>
          <li><a href="#">Enterprise Spotlight</a></li>
          <li><a href="#">Financial Burnout</a></li>
        </ul>
      </li>
  */}
          <li>
        <div className="icon-link">
       
        
        </div>
       
      </li>

      <li>
        <a href="#" onClick= {profileHandler}>
        <i className='bx bxs-user-circle'></i>
          <span className="link_name">Profile</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name"  >Profile</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bxs-credit-card' ></i>
          <span className="link_name">Pricing</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Pricing</a></li>
        </ul>
      </li>
      
      <li>
        <a href="#">
        <i className='bx bxs-offer'></i>
          <span className="link_name">Trial</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Trial</a></li>
        </ul>
      </li>
      <li>
        <a onClick={modelManagementHandler} style={{cursor:'pointer'}} >
          <i className='bx bx-compass'></i>
          <span className="link_name">Model Management</span>
        
        </a>
        {
          /*

            <ul className="merchantsub"  >
          
        
          <li><a href='' onClick={selfuploadHandler} >Self upload</a></li>
          <li><a href='' onClick={merchantHandler}>Send Images</a></li>
          <li><a href="" onClick={selfselectHandler} >Select existing</a></li>

        </ul>
        */
        }
      
      
        
      </li>
      <li>
        <a href="#">
          <i className='bx bx-cog'></i>
          <span className="link_name">Campaign management</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Campaign management</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
        <i class='bx bxs-briefcase-alt'></i>
          <span className="link_name">Plans</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Plans</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
        <i className='bx bx-analyse'></i>
          <span className="link_name">Analytics</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Analytics</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-chat'></i>
          <span className="link_name">Merchant guide</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Merchant guide</a></li>
        </ul>
      </li>
    
    </ul>
  </div>

    <div className='alertpopup'>
     <span className='alertsymbol' ><FaExclamationCircle  style={{color:'red'}} /></span>  <p className='alerttext' ></p>
    </div>

  <div className='tabsContainer' >
            <div className="btnContainer">
                <button className={`tabs ${isActive === 1 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(1)}>Search Models</button>
                <button className={`tabs ${isActive === 2 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(2)}>Upload Images</button>
                <button className={`tabs ${isActive === 3 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(3)}>Upload Models</button>
            </div>
            {isActive === 1 && <div className="tabData">
                <div className="tabContent">
                    <h5>"Perhaps Some Guys": Pat Cummins' 
                        Brutal Take After Loss Against India In 2nd Test
                    </h5>
                    <p>Updated: February 19, 2023</p>
                </div>
            </div>}
            {isActive === 2 && <div className="tabData">
                <div className="tabContent">
                <div className='accordionContainer'>

                
            {
                accordionData.map((acc, index) => {
                    return (
                        <div className="accordion"
                          >
                            <div className='accordionHeading'    onClick={() => handleActiveAccord(index)} >

                                <span className="addIcon"
                                    style={{
                                        transform: `${accActive === index ? 'rotate(45deg)' :
                                            'rotate(0deg)'}`
                                    }}>
                                  <RiAddLine size={25} />
                                </span>
                                <h3>{acc.title}</h3>
                            </div>
                            {
                                accActive === index ? <div className="accordionContent">
                                    {
                                      acc.accordionContent === 'productdetails' ? 
                                      <div>

                                         <div className='productdetailsdiv' >
                                          <div  className='input-group'>
                                            <input  type='text' value={partnerproduct}  onChange={(e)=>setPartnerProduct(e.target.value)} className='input' placeholder='product name'  />
                                            <label className='placeholder'
                                            >Product name <span className='required-field'></span> </label>
                                              <p className='errorproduct'></p>


                                          </div>
                                         
                                   

                                          <div  className='input-group'>
                                            <input  type='text' list='brand' value={partnerbrand} onChange={(e)=>setPartnerBrand(e.target.value)} className='input' placeholder='brand'  />
                                            <label className='placeholder'
                                            >Brand <span className='required-field'></span> </label>
                                               <datalist class="" id="brand">    
                        <option value="Vimani"/>
                          <option value="Sternhagen Germany"/>
                         <option value="Nitco"/>
                         <option value="LightBerry"/>
                          <option value="ottomate"/>
                         <option value="wall fashion"/>
                         <option value="johnson"/>
                          <option value="excel"/>
                         <option value="nexion"/>
                         <option value="lasvagas"/>
                          <option value="jaquar"/>
                         <option value="jaldhi"/>
                         <option value="agl"/>
                         <option value="hometown"/>
                         <option value="intradings"/>
                          <option value="nikamal"/>
                         <option value="havells"/>
                         <option value="schneider electric"/>
                         <option value="simero"/>
                         <option value="iifb"/>
                         <option value="marshalls"/>
                          <option value="century"/>
                         <option value="bajaj"/>
                         <option value="LG"/>
                         <option value="Samsung"/>
                         <option value="godrej"/>
                          <option value="simpolo"/>
                        
                               </datalist>



                                          </div>
                                          
                                        
                                          <div  className='input-group'>
                                            <input  type='text' value={partnermodelid} onChange={(e)=>setPartnerModelid(e.target.value)}  className='input' placeholder='model id'  />
                                            <label className='placeholder'
                                            >Model id <span className='required-field'></span> </label>



                                          </div>
                                        
                                          <div  className='input-group'>
                                            <input  type='number' value={partnermrp} onChange={(e)=>setPartnerMrp(e.target.value)} className='input' placeholder='MRP'  />
                                            <label className='placeholder'
                                            >MRP <span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={partnerofferprice} onChange={(e)=>setPartnerOfferPrice(e.target.value)} className='input' placeholder='Offer price'  />
                                            <label className='placeholder'
                                            >Offer price <span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>
                                          <div className='listBoxContainer'>
                                     <button className='listButton'
                                   onBlur={() => showCurrencyDrop(false)}
                                    onFocus={() => showCurrencyDrop(!currencydrop)}>{currencyselect}<IoIosArrowDown
                    style={{
                        transform: currencydrop ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s ease-in-out'
                    }} /></button>
            <ul className='listItems' style={{
                opacity: !currencydrop ? "0" : "1",
                transition: "0.3s ease",
                visibility: !currencydrop ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    currencyarray.map((name, index) => {
                        return (<li className='list' key={index}
                            onClick={() => { setCurrencySelect(name); showCurrencyDrop(false) }}
                            style={{ fontWeight: select === name ? '500' : '400' }}>
                            <span className='checkIcon'>
                                {select === name ? <BiCheck size={25} /> : null}
                            </span>
                           
                            {name}
                        </li>)
                    })
                }
            </ul>
        </div>




                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={partnerlength} onChange={(e)=>setPartnerLength(e.target.value)} className='input' placeholder='Length'  />
                                            <label className='placeholder'
                                            >Length <span className='required-field'></span> <span className='infoblock'  
                                          ><FaInfoCircle  /></span> 
                                              <div className='toolTip'>
                                               <p>Enter 0 in case of 2D Products</p>
                                              </div>
                                            </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={partnerbreadth} onChange={(e)=>setPartnerBreadth(e.target.value)} className='input' placeholder='Breadth'  />
                                            <label className='placeholder'
                                            >Breadth <span className='required-field'></span>
                                            <span className='infoblock'  
                                          ><FaInfoCircle  /></span> 
                                              <div className='toolTip'>
                                               <p>Enter 0 in case of 2D Products</p>
                                              </div>
                                             </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={partnerheight} onChange={(e)=>setPartnerHeight(e.target.value)} className='input' placeholder='Height'  />
                                            <label className='placeholder'
                                            >Height <span className='required-field'></span>
                                            <span className='infoblock'  
                                          ><FaInfoCircle  /></span> 
                                              <div className='toolTip'>
                                               <p>Enter 0 in case of 2D Products</p>
                                              </div>
                                             </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='text' value={unit} onChange={(e)=>setUnit(e.target.value)} className='input' placeholder='Dimension unit'  />
                                            <label className='placeholder'
                                            >Dimension Unit <span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={weightproduct} onChange={(e)=>setWeightProduct(e.target.value)}  className='input' placeholder='weight'  />
                                            <label className='placeholder'
                                            >Weight <span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='text' value={weightunit} onChange={(e)=>setWeightUnit(e.target.value)}  className='input' placeholder='Weight unit'  />
                                            <label className='placeholder'
                                            >Weight Unit<span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='number' value={partnerwarranty} onChange={(e)=>setPartnerWarranty(e.target.value)} className='input' placeholder='warranty'  />
                                            <label className='placeholder'
                                            >Warranty (Years)<span className='required-field'></span> </label>



                                          </div>
                                          <div  className='input-group'>

                                          
                                         


<div className='listBoxContainer'>
            <button className='listButton'
                onBlur={() => showDropDown(false)}
                onFocus={() => showDropDown(!dropDown)}>{select}<IoIosArrowDown
                    style={{
                        transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s ease-in-out'
                    }} /></button>
            <ul className='listItems' style={{
                opacity: !dropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !dropDown ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    namescategory.map((name, index) => {
                        return (<li className='list' key={index}
                            onClick={() => { setSelect(name.categoryitem); showDropDown(false) }}
                            style={{ fontWeight: select === name ? '500' : '400' }}>
                            <span className='checkIcon'>
                                {select === name ? <BiCheck size={25} /> : null}
                            </span>
                           
                            {name.categoryitem}
                        </li>)
                    })
                }
            </ul>
        </div>



                                          </div>
                                          <div  className='input-group'>

                                          <div className='listBoxContainer'>
                              <button className='listButton'
                               onBlur={() => showSubDropDown(false)}
                                onFocus={() => showSubDropDown(!subdropdown)}>{subcatselect}<IoIosArrowDown
                              style={{
                                  transform: subdropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: '0.3s ease-in-out'
                                   }} /></button>
                         <ul className='listItems' style={{
                             opacity: !subdropdown ? "0" : "1",
                              transition: "0.3s ease",
                           visibility: !subdropdown ? "hidden" : "visible",
                             transformOrigin: "top center"
                                   }}>
                            
                 
                 {


                  namescategory.map((name, index) => {

                    if(name.categoryitem === select){

                  

                      
                      return (
                      name.subcategory.map((item,ind)=>(


                        <li className='list' key={ind}
                        onClick={() => { setSubCatSelect(item); showDropDown(false) }}
                        style={{ fontWeight: select === item ? '500' : '400' }}>
                        <span className='checkIcon'>
                            {select === item ? <BiCheck size={25} /> : null}
                        </span>
                       
                        {
                         
                         item
                        }
                    </li>

                      ))
                      
                   ) 



                    }

                   
                  })
              }
                    
                
            </ul>
        </div>

                                           



                                          </div>
                                          <div  className='input-group'>
                                            <input  type='text'  value={partnersubcatdetails} onChange={(e)=>setPartnerSubCatDetails(e.target.value)} className='input' placeholder='Subcatdetails'  />
                                            <label className='placeholder'
                                            >Sub-category details <span className='required-field'></span> </label>



                                          </div>
                                          <div>


                                            </div>




                                          </div>
                                        </div> :<div></div>

                                       }


                                       {
                                      acc.accordionContent === 'materialdetails' ? 
                                      <div>
                                        <div className='productdetailsdiv'>

                                          
                                        <div  className='input-group'>
                                            <input  type='text' value={partnersku} onChange={(e)=>setPartnerSku(e.target.value)} className='input' placeholder='SKU'  />
                                            <label className='placeholder'
                                            >SKU <span className='required-field'></span> </label>



                                          </div>
                                          
                                          <div  className='input-group'>
                                            <input  type='text'  value={partnercollection} onChange={(e)=>setPartnerCollection(e.target.value)} list='collection'  className='input' placeholder='Collection'  />
                                            <label className='placeholder'
                                            >Collection  </label>
                                               <datalist class="" id="collection">    
                        <option value="Crystal"/>
                          <option value="lyra"/>
                         <option value="inspire"/>
                         <option value="biba"/>
                          <option value="jenica"/>
                         <option value="evolution3"/>
                         <option value="gravity"/>
                          <option value="funtime"/>
                         <option value="pinaka"/>
                               </datalist>



                                          </div>


                                        <div  className='input-group'>
                                            <input  type='text' list='material' value={partnerprimarymaterial} onChange={(e)=>setPartnerPrimaryMaterial(e.target.value)} className='input' placeholder='Primary material'  />
                                            <label className='placeholder'
                                            >Primary material <span className='required-field'></span> </label>
                                            <datalist class="" id="material">    
                        <option value="Fabric"/>
                          <option value="Leatherette"/>
                         <option value="Solid Wood"/>
                         <option value="Leather"/>
                          <option value="Cann"/>
                         <option value="Engineered wood"/>
                         <option value="Metal"/>
                          <option value="Plastic"/>
                         <option value="Glass"/>
                         <option value="stone"/>
                          <option value="marble"/>
                     
                               </datalist>

                                           



                                          </div>
                                          

                                          <div  className='input-group'>
                                           
                                           

                                           

                    <div className='AddTagContainer'>
            <div className="addTagBox">
           
              
                <div className="addTagInput">

                  <div className='tagscontainer'>
                  {
                       selectedrooms && selectedrooms.map((tag, index) => {
                            return (
                                <div className="tags" key={index}>
                                    <span>{tag}</span>
                                    <div className="crossIcon"
                                        onClick={() => handleRemoveRoom(tag,index)}>
                                        <RxCross2 />
                                    </div>

                                </div>
                            )
                        })
                      }


                    </div>
               

                    <div className='listBoxContainer'>
                                     <button className='listButtonMaterial'
                                     onClick={handleClickRoom}
                                    
                                    >{roomsdrop}<IoIosArrowDown
                                    
                    style={{
                        transform: designroom ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s ease-in-out'

                    }} /></button>
            <ul className='listItemsMaterial' style={{
                opacity: !designroom ? "0" : "1",
                transition: "0.3s ease",
                visibility: !designroom ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    roomTypeArray.map((name, index) => {
                        return (
                            <li key={index} className='listrooms' id={`listselect_${index}`} 
                              >
                           
                           
                            
                            
                              <label>
                                <div  className='listitems' id={`roomselect_${index}`}  >
                                  <input type='checkbox' id= {`checkboxroom_${index}`} value={name} onClick={()=> handleActiveList(name, index)} />
                                  <p>{name}</p>
                                </div>
                              </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
                   
                </div>
            </div>
        </div>

                   

                                          </div>
                                                                       <div  className='input-group'>

                                          <div className='listBoxContainer'>
                                     <button className='listButtonMaterial'
                                   onBlur={() => showDesignDrop(false)}
                                    onFocus={() => showDesignDrop(!desgindrop)}>{designselect}<IoIosArrowDown
                    style={{
                        transform: desgindrop ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s ease-in-out'
                    }} /></button>
            <ul className='listItemsMaterial' style={{
                opacity: !desgindrop ? "0" : "1",
                transition: "0.3s ease",
                visibility: !desgindrop ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    designstylearray.map((name, index) => {
                        return (<li className='list' key={index}
                            onClick={() => { setDesignSelect(name); showDesignDrop(false) }}
                            style={{ fontWeight: select === name ? '500' : '400' }}>
                            <span className='checkIcon'>
                                {select === name ? <BiCheck size={25} /> : null}
                            </span>
                           
                            {name}
                        </li>)
                    })
                }
            </ul>
        </div>
                                           


                                          </div> 


                                                                   
                                          <div  className='input-group'>
                                        
                                       
                                          <div className='AddTagContainer'>
            <div className="addTagBox">
          
              
                <div className="addTagInput">
                <div  className='tagscontainer'>
                    {

                     
                        tags.map((tag, index) => {
                            return (  

                               
                                          <div className="tags" key={index}>
                                    <span>{tag}</span>
                                    <div className="crossIcon"
                                        onClick={() => handleDeleteTag(index)}>
                                        <RxCross2 />
                                    </div>

                                </div>
                                
                          
                            )
                        })
                        
                      }
                     
                      </div>

                    <input className='inputtag' type="text" autoFocus
                     placeholder='Add tags'
                        value={tagText}
                        onKeyUpCapture={(e) => { handleAddTag(e) }}
                        onChange={(e) => setTagText(e.target.value)}
                    />
                     <label className='placeholder'
                                            >Add tags <span className='required-field'></span> </label>
                </div>
            </div>
        </div>




                                          </div>

                                          
                                  
 

                                          <div  className='input-group'>
                                          <div className='AddTagContainer'>
            <div className="addTagBox">
              
                <div className="addTagInput">
                  <div className='tagscontainer'>
                  {
                        colortags.map((tag, index) => {
                            return (
                                <div className="tags" key={index}>
                                    <span>{tag}</span>
                                    <div className="crossIcon"
                                        onClick={() => handleColorDeleteTag(index)}>
                                        <RxCross2 />
                                    </div>

                                </div>
                            )
                        })
                      }

                    </div>
                 


                    <input className='inputtag' type="text" autoFocus
                     placeholder='Add Colors'
                        value={tagcolor}
                        onKeyUpCapture={(e) => { handleAddColorTag(e) }}
                        onChange={(e) => setTagColor(e.target.value)}
                    />
                     <label className='placeholder'
                                            >Add Colors <span className='required-field'></span> </label>
                </div>
            </div>
        </div>




                                          </div>

                                                                       

                                        
                                          

                                          <div  className='input-group'>
                                            <div className='textareadiv'>
                                            <textarea  type='textarea' value={partnerspecification} onChange={(e)=>setPartnerSpecification(e.target.value)}  className='input' placeholder='Specification'/>
                                            <label className='placeholder'
                                            >Specification <span className='required-field'></span> </label>

                                              </div>
                                        



                                          </div>
                                          <div  className='input-group'>

                                            <div className='textareadiv'>
                                            <textarea  type='textarea' value={partnerbrandoverview} onChange={(e)=>setPartnerBrandOverview(e.target.value)} className='input' placeholder='Brand Overview '  />
                                            <label className='placeholder'
                                            >Brand Overview <span className='required-field'></span> </label>
                                              </div>
                                          



                                          </div>
                                          <div  className='input-group'>
                                            <div className='textareadiv'>
                                            <textarea  type='textarea'  value={partnersellerinfo} onChange={(e)=>setPartnerSellerInfo(e.target.value)} className='input' placeholder='Seller Info'  />
                                            <label className='placeholder'
                                            >Seller Info <span className='required-field'></span> </label>

                                              </div>
                                        



                                          </div>
                                          <div  className='input-group'>
                                            <div className='textareadiv'>
                                            <textarea  type='textarea' value={partnercare} onChange={(e)=>setPartnerCare(e.target.value)} className='input' placeholder='Care & Maintenance'  />
                                            <label className='placeholder'
                                            >Care & Maintenance <span className='required-field'></span>  </label>

                                              </div>
                                         
                                        

                                          </div>
                                          <div  className='input-group'>
                                            <div className='textareadiv'>
                                            <textarea  type='text' value={partneradditional} onChange={(e)=>setPartnerAdditional(e.target.value)} className='input' placeholder='Additional Info'  />
                                            <label className='placeholder'
                                            >Additional Info </label>
                                              </div>
                                          



                                          </div>
                                      
             
                                     


                                  
                                     



                                          </div>

                                      




                                        </div> :<div></div>
                                         }
                                           {
                                      acc.accordionContent === 'imagedetails' ? 
                                      <div>
                                         <div className='toolTipimages' >
             <p>If you are uploading images for model creation, ensure that you have uploaded atleast 6 images including(top view, front view, bottom view and side view).</p>
             </div>

<div>
          <div className='' style={{marginTop:'20px'}}>
            <label>Images <span className="required-field"></span><span id='requiredimages'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span>
           
           
            </label>
           
            <input type='file'  id='b1' onChange={imagefilechange}  accept= "image/*" multiple/>
            <p  style={{color:'red'}}>{message && message}</p>

          </div>
        
        </div>
        <div></div>

        <div>
          <div className='imagedivcontainer'> 
          {images && images.map(img=>
       
       <div >

 <img src= {URL.createObjectURL(img)} key={img} alt='image preview'  style={{width:'100%', height:' 100%',marginRight:'',
    borderRadius:'10px'}}  />
<span  > <h5 onClick={()=>removeImage(img)} className=''><FaTimes  style={{color:'red', cursor:'pointer', border:'1px solid blue', borderRadius:'5px'}}/></h5>  </span>
     </div>


       )
        }

           <div></div>
          </div>
        </div>

      

       
         
                       <div  className='modaldiv'>

                       <div class="modal">		
	      	<div class="modal-wrap">
                <span className='closemodal'  >
                    
                    </span>	
			   <span>
               <div>
               <div class="circle-loader">
    <div class="checkmark draw"></div>
</div>
     
</div>
<p class="success">Congratulations!</p>
                </span>	
	      		<p className='dataupload'> Data Uploaded Successfully.</p>	          		
	      	</div>			          		
      	</div>	
                        </div>

   

     

                                       
                                        </div> :<div></div>

                                         }
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>

        <div className='updatebtn' >
            <button type='submit'  disabled = {buttonclick ? true : false} onClick={handleFormSubmit} >Submit    
              
            <div class="spinner-border" id='spinner'  role="status"  >
  <span class="visually-hidden"></span>
</div>
             </button>
          </div>

        
                </div>
            </div>}
            {isActive === 3 && <div className="tabData">
                <div className="tabContent">
                    <h5>Watch: R Ashwin Rattles Steve Smith At Non-Striker's End, 
                        Virat Kohli's Reaction Can't Be Missed
                    </h5>
                    <p>Updated: February 19, 2023</p>
                </div>
            </div>}
        </div>

        





  <div className='homemaincontainer' >

    <div className='sidebarmain'>
      <div id='tabbar1' >
        <div className='searchproductstab' >
          <p onClick={selfselectHandler} >Search Products</p>

        </div>
       
     
      </div>
    
      <div id='tabbar2' >
      <div className='searchproductstab' >
          <p onClick={merchantHandler} >Upload Images</p>

        </div>
      </div>
      <div id='tabbar3'>
      <div className='searchproductstab' >
          <p onClick={selfuploadHandler} >Upload Models</p>

        </div>
      </div>


    </div>
  
    

      <div className='selfcontainer'>
      <div className='merchantdivcontainer'>
     
      
     
    
     
    
        <div>
        <div  className='productalldetails'>
            <label>Product name <span className="required-field"></span><span id='requiredproductname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text'className='productname' value={productname} onChange={(e)=>setProductName(e.target.value)} />
          </div>
        </div>
        <div>

        <div className='productalldetails' >
                            <label  >Brand <span className="required-field"></span><span id='requiredbrandname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="brand" name="brandname" className='brandname'
                            value={brand}
                            onChange={(e)=>setBrand(e.target.value)} />
                       <datalist class="" id="brand">    
                        <option value="Vimani"/>
                          <option value="Sternhagen Germany"/>
                         <option value="Nitco"/>
                         <option value="LightBerry"/>
                          <option value="ottomate"/>
                         <option value="wall fashion"/>
                         <option value="johnson"/>
                          <option value="excel"/>
                         <option value="nexion"/>
                         <option value="lasvagas"/>
                          <option value="jaquar"/>
                         <option value="jaldhi"/>
                         <option value="agl"/>
                         <option value="hometown"/>
                         <option value="intradings"/>
                          <option value="nikamal"/>
                         <option value="havells"/>
                         <option value="schneider electric"/>
                         <option value="simero"/>
                         <option value="iifb"/>
                         <option value="marshalls"/>
                          <option value="century"/>
                         <option value="bajaj"/>
                         <option value="LG"/>
                         <option value="Samsung"/>
                         <option value="godrej"/>
                          <option value="simpolo"/>
                        
                               </datalist>
                           </div>

        </div>
        <div>
        <div  className='productalldetails'>
            <label> Model Id <span className="required-field"></span> <span id='requiredmodelid'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={modelid} className='modelid' onChange={(e)=> setModelId(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>MRP (₹) <span className="required-field"></span> <span id='requiredmrp'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' value={mrp} className='mrpprice' onChange={(e)=> setMrp(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Offer price (₹)<span className="required-field"></span><span id='requiredofferprice'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input  type='number' value={offerprice} className='offerprice' onChange={(e)=> setOfferPrice(e.target.value)} />
          </div>
        </div>
        <div>
        <div className='productalldetails'>
                            <label  >Currency <span className="required-field"></span></label>
                            <select id="" 
                             value={currency}
                            onChange={event=> setCurrency(event.target.value)}>
                               <option selected id='curvalue' value="₹ INR" >₹ INR</option>
                         <option   value='usd'>$ USD</option>
      
                          <option value='euro' > EURO</option>
     

                            </select>

                            </div>
        </div>
        <div>
        <div  className='productalldetails'>
          <div className='lensidediv' >
            <div className='lensidedivfirst' >
             
                <label  >
                    Length (Inch) <span className="required-field"></span>

                </label>

           
         


            </div>
          
          <div className='lensidedivsecond'>
          <p className='lentext'  ></p>
        



          </div>


          </div>
            <input type='number' value={length} className='prodlength' onChange={(e)=>setLength(e.target.value)} onFocus={lengthdisplay}  />
           
          </div>

        </div>
        <div>
        <div  className='productalldetails'>
           
            <div className='lensidediv' >
            <div className='lensidedivfirst'>
          <label> Breadth (Inch) <span className="required-field"></span> </label>


            </div>
          
          <div className='lensidedivsecond'>
          <p className='breadthtext' ></p>


          </div>


          </div>

            <input value={breadth} type='number' className='prodbreadth' onChange={(e)=>setBreadth(e.target.value)} onFocus={breadthdisplay}  />
           

          </div>
        </div>
        <div>
        <div  className='productalldetails'>
        <div className='lensidediv' >
            <div className='lensidedivfirst'>
          <label> Height (Inch)<span className="required-field"></span><span id='requiredheight'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span> </label>


            </div>
          
          <div className='lensidedivsecond'>
          <p className='heighttext'></p>


          </div>


          </div>

            <input  value={height} type='number'className='prodheight' onChange={(e)=>setHeight(e.target.value)}  onFocus={heightdisplay}  />
          

          </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Collection</label>
                            <input list="collection" name="collection"
                            value={collection} onChange={(e)=>setCollection(e.target.value)} />
                       <datalist class="" id="collection">    
                        <option value="Crystal"/>
                          <option value="lyra"/>
                         <option value="inspire"/>
                         <option value="biba"/>
                          <option value="jenica"/>
                         <option value="evolution3"/>
                         <option value="gravity"/>
                          <option value="funtime"/>
                         <option value="pinaka"/>
                               </datalist>
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Primary Material <span className="required-field"></span><span id='requiredprimarymaterial'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="material" name="material" 
                            value={primarymaterial}
                            className='primarymaterial' onChange={(e)=>setPrimaryMaterial(e.target.value)} />
                        
                       <datalist class="" id="material">    
                        <option value="Fabric"/>
                          <option value="Leatherette"/>
                         <option value="Solid Wood"/>
                         <option value="Leather"/>
                          <option value="Cann"/>
                         <option value="Engineered wood"/>
                         <option value="Metal"/>
                          <option value="Plastic"/>
                         <option value="Glass"/>
                         <option value="stone"/>
                          <option value="marble"/>
                         <option value="Solid Wood"/>
                               </datalist>
                           </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Room type <span className="required-field"></span><span id='requiredroomtype'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="room" name="room" 
                            value={roomtype}
                            className='roomtype' onChange={(e)=>setRoomType(e.target.value)} />
                       <datalist class="" id="room">    
                        <option value="Living Room"/>
                          <option value="kitchen"/>
                         <option value="Bed Room"/>
                         <option value="Bathroom"/>

                               </datalist>
                           </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Product weight (Kg) <span className="required-field"></span><span id='requiredweight'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' value={weight} className='prodweight' onChange={(e)=>setWeight(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Product warranty (years) <span className="required-field"></span><span id='requiredwarranty'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' value={warranty} className='prodwarranty' onChange={(e)=>setWarranty(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label> SKU <span className="required-field"></span><span id='requiredsku'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={sku} className='sku' onChange={(e)=>setSku(e.target.value)} />
          </div>
        </div>
      
               
     
       
        <div>
        <div className='productalldetails' >
                            <label  >Category <span className="required-field"></span><span id='requiredcategory'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <select  className='productcurrency' id="countrySelect" size="1"
                            value={pcategory} onChange={(e)=>makeSubmenu(e.target.value)} >
                            <option value='' selected="selected" className='optiongot' >Choose</option>
                            <option value="Furniture" id='catoption' >Furniture</option>
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
        <div className='productalldetails'>
                            <label  >Sub Category <span className="required-field"></span></label>
                            <select 
                             onChange={(e)=>setSubcategory(e.target.value)}
                              className='' id="citySelect" size="1" >
                              
                
                               <option value={subcategory} id='subcatvalue'  >{subcategory}</option>
                    
                        </select>
                           


                            </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label> Sub Category details <span className="required-field"></span><span id='requiredsubcatdetails'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input value={subcatdetails}  className='subcatdetails' onChange={(e)=>setSubCatDetails(e.target.value)} />
          </div>
          
        </div>
        <div>
        <div  className='productalldetails'>
      
            <label> Tags <span className="required-field"></span><span id='requiredtags'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <div className='suggestdivdashboard' >
                            {
                                verifytag.map(item=>(
                                  <p >{item}<span onClick= {()=>removeSuggest(item)}   style={{marginRight:'10px'}}><FaTimes style={{color:'red', cursor:'pointer'}}/></span></p>
                                ))
                              }


                            </div>
           

                         
                         
<input list="tags" className="tags"  onChange={(e)=>tagsChange(e.target.value)}   />
<datalist class="" id="tags"  > 

{
tagsoptions.map(item=>(
<option value={item}  />

))
}   






   </datalist>
          </div>
        </div>

        <div>
        <div  className='productalldetails'>
            <label> Colors <span className="required-field"></span><span id='requiredcolors'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>

            <div className='suggestcolordiv' >
                            {
                                colortag.map(item=>(
                                  <p>{item}<span onClick= {()=>removeColor(item)}   style={{marginRight:'10px'}}><FaTimes style={{color:'red', cursor:'pointer'}}/></span></p>
                                ))
                              }


                            </div>
           

                         
                         
<input list="colors" className="colors" onChange={(e)=>colorChange(e.target.value)}   />
<datalist class="" id="colors"  > 

{
coloroptions.map(item=>(
<option value={item}  />

))
}   






   </datalist>
          
          </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Specification <span className="required-field"></span><span id='requiredspecification'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={Specification} className='specification' onChange={(e)=>setSpecification(e.target.value)} />
                           </div>

        </div>

        <div>
        <div className='productalldetails' >
                            <label  >Brand Overview <span className="required-field"></span><span id='requiredbrandoverview'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={brandoverview} className='brandoverview' onChange={(e)=>setBrandOverview(e.target.value)}  />
                           </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Seller Info <span className="required-field"></span><span id='requiredsellerinfo'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={sellerinfo} className='sellerinfo' onChange={(e)=>setSellerInfo(e.target.value)}  />
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Care & Maintenance <span className="required-field"></span><span id='requiredcare'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={care} className='care' onChange={(e)=>setCare(e.target.value)}  />
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Additional Info </label>
                            <textarea type='text' value={additional} onChange={(e)=>setAdditional(e.target.value)}   />
                           </div>
        </div>
        <div></div>
      
      
  

        


         



      </div>

      <div>
        
        <div className='uploadbuttoncontainer'> 
      
        <div>
        <div class="upload-btn-wrapper">
<button className="btnnew">Upload fbx<i class='bx bx-export' style={{padding:'10px'}}></i></button>
<input type="file" name="myfile" id='fbxfile'  onChange={fbxchangehandler} />
<p id='fbxmessage' style={{color:'red'}}></p>


</div>


        </div>

        
      

      <div>
      <div class="upload-btn-wrapper">
<button className="btnnew">Upload glb<i class='bx bx-export' style={{padding:'10px'}}></i></button>
<input type="file" name="myfile" id='glbfile' onChange={glbchangehandler} />
<p id='glbmessage' style={{color:'red'}}></p>

</div>


      </div>


        
        
        <div>
        <div class="upload-btn-wrapper">
<button className="btnnew">Upload gltf<i class='bx bx-export' style={{padding:'10px'}}></i></button>
<input type="file" name="myfile" id='gltffile' onChange={gltfchangehandler} />
<p id='gltfmessage' style={{color:'red'}}></p>

</div>


        </div>


      
      <div>
      <div class="upload-btn-wrapper">
<button className="btnneww">Upload image<i class='bx bx-export' style={{padding:'10px'}}></i></button>
<input type="file" name="myfile" id='imagefile' onChange={imagechangehandler} />
<p id='imagemessage' style={{color:'red'}}></p>

</div>


      </div>


      

     



        </div>

      
    </div>
      <div>
        <div className='divbutton' >
        <div className='updatebtn' >
            <button type='submit' onClick={submitselfHandler}  >Submit</button>
          </div>
          <div className='updatebtn' style={{marginLeft:'50px'}} >
            <button type='submit' onClick={saveformupload}  >Save draft</button>
          </div>

        </div>
      

      </div>
      <p style={{color:'green', fontSize:'18px', fontFamily:'Manrope, sans-serif'}} id='saveformself'></p>


    </div>




    


  
    <div className='merchantdiv'>
      <div className='merchantdivcontainer'>
    
     
     
       
      
      
        <div>
        <div  className='productalldetails'>
            <label>Product name <span className="required-field"></span><span id='requiredpartnerproductname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text'className='partnerproductname' value={ partnerproduct} onChange={(e)=>setPartnerProduct(e.target.value)} />
          </div>
        </div>
        <div>

        <div className='productalldetails' >
                            <label  >Brand <span className="required-field"></span><span id='requiredpartnerbrandname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="brand" name="brandname" className='partnerbrandname' value={ partnerbrand} onChange={(e)=>setPartnerBrand(e.target.value)} />
                       <datalist class="" id="brand">    
                        <option value="Vimani"/>
                          <option value="Sternhagen Germany"/>
                         <option value="Nitco"/>
                         <option value="LightBerry"/>
                          <option value="ottomate"/>
                         <option value="wall fashion"/>
                         <option value="johnson"/>
                          <option value="excel"/>
                         <option value="nexion"/>
                         <option value="lasvagas"/>
                          <option value="jaquar"/>
                         <option value="jaldhi"/>
                         <option value="agl"/>
                         <option value="hometown"/>
                         <option value="intradings"/>
                          <option value="nikamal"/>
                         <option value="havells"/>
                         <option value="schneider electric"/>
                         <option value="simero"/>
                         <option value="iifb"/>
                         <option value="marshalls"/>
                          <option value="century"/>
                         <option value="bajaj"/>
                         <option value="LG"/>
                         <option value="Samsung"/>
                         <option value="godrej"/>
                          <option value="simpolo"/>
                        
                               </datalist>
                           </div>

        </div>
        <div>
        <div  className='productalldetails'>
            <label> Model Id <span className="required-field"></span> <span id='requiredpartnermodelid'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={ partnermodelid} className='partnermodelid' onChange={(e)=> setPartnerModelid(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>MRP (₹) <span className="required-field"></span> <span id='requiredpartnermrp'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' value={ partnermrp} className='partnermrpprice' onChange={(e)=> setPartnerMrp(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Offer price (₹)<span className="required-field"></span><span id='requiredpartnerofferprice'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input  type='number' value={ partnerofferprice} className='partnerofferprice' onChange={(e)=> setPartnerOfferPrice(e.target.value)} />
          </div>
        </div>
        <div>
        <div className='productalldetails'>
                            <label  >Currency <span className="required-field"></span></label>
                            <select id="" 
                             value={ partnerCurrency}
                            onChange={event=> setPartnerCurrency(event.target.value)}>
                               <option selected id='curvalue' value="₹ INR" >₹ INR</option>
                         <option   value='usd'>$ USD</option>
      
                          <option value='euro' > EURO</option>
     

                            </select>

                            </div>
        </div>
        <div>
        <div  className='productalldetails'>
          <div className='lensidediv' >
            <div className='lensidedivfirst' >
             
                <label  >
                    Length (Inch) <span className="required-field"></span>

                </label>

           
         


            </div>
          
          <div className='lensidedivsecond'>
          <p className='partnerlentext'  ></p>
        



          </div>


          </div>
            <input type='number' value={ partnerlength} className='partnerlength' onChange={(e)=>setPartnerLength(e.target.value)} onFocus={partnerlengthdisplay}  />
           
          </div>

        </div>
        <div>
        <div  className='productalldetails'>
           
            <div className='lensidediv' >
            <div className='lensidedivfirst'>
          <label> Breadth (Inch) <span className="required-field"></span> </label>


            </div>
          
          <div className='lensidedivsecond'>
          <p className='partnerbreadthtext' ></p>


          </div>


          </div>

            <input value={ partnerbreadth} type='number' className='partnerbreadth' onChange={(e)=>setPartnerBreadth(e.target.value)} onFocus={partnerbreadthdisplay}  />
           

          </div>
        </div>
        <div>
        <div  className='productalldetails'>
        <div className='lensidediv' >
            <div className='lensidedivfirst'>
          <label> Height (Inch)<span className="required-field"></span> </label>


            </div>
          
          <div className='lensidedivsecond'>
          <p className='partnerheighttext'></p>


          </div>


          </div>

            <input  value={ partnerheight} type='number'className='partnerheight' onChange={(e)=>setPartnerHeight(e.target.value)}  onFocus={partnerheightdisplay}  />
          

          </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Collection</label>
                            <input list="collection" name="collection" value={ partnercollection} onChange={(e)=>setPartnerCollection(e.target.value)} />
                       <datalist class="" id="collection">    
                        <option value="Crystal"/>
                          <option value="lyra"/>
                         <option value="inspire"/>
                         <option value="biba"/>
                          <option value="jenica"/>
                         <option value="evolution3"/>
                         <option value="gravity"/>
                          <option value="funtime"/>
                         <option value="pinaka"/>
                               </datalist>
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Primary Material <span className="required-field"></span><span id='requiredpartnerprimarymaterial'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="material" name="material" value={ partnerprimarymaterial}
                             className='partnerprimarymaterial' onChange={(e)=>setPartnerPrimaryMaterial(e.target.value)} />
                        
                       <datalist class="" id="material">    
                        <option value="Fabric"/>
                          <option value="Leatherette"/>
                         <option value="Solid Wood"/>
                         <option value="Leather"/>
                          <option value="Cann"/>
                         <option value="Engineered wood"/>
                         <option value="Metal"/>
                          <option value="Plastic"/>
                         <option value="Glass"/>
                         <option value="stone"/>
                          <option value="marble"/>
                         <option value="Solid Wood"/>
                               </datalist>
                           </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Room type <span className="required-field"></span><span id='requiredpartnerroomtype'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <input list="room" name="room" className='partnerroomtype' value={ partnerroomtype}
                            onChange={(e)=>setPartnerRoomType(e.target.value)} />
                       <datalist class="" id="room">    
                        <option value="Living Room"/>
                          <option value="kitchen"/>
                         <option value="Bed Room"/>
                         <option value="Bathroom"/>

                               </datalist>
                           </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Product weight (Kg) <span className="required-field"></span><span id='requiredpartnerweight'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' className='partnerprodweight' value={ partnerweight} onChange={(e)=>setPartnerWeight(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Product warranty (years) <span className="required-field"></span><span id='requiredpartnerwarranty'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number' className='partnerprodwarranty'
             value={ partnerwarranty} onChange={(e)=>setPartnerWarranty(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label> SKU <span className="required-field"></span><span id='requiredpartnersku'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' className='partnersku' value={ partnersku} onChange={(e)=>setPartnerSku(e.target.value)} />
          </div>
        </div>
     

     
       
        <div>
        <div className='productalldetails' >
                            <label  >Category <span className="required-field"></span><span id='requiredpartnercatselect'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <select  className='partnerproductcurrency' id="partnercategoryselect" size="1" value={ partnercategory}
                             onChange={(e)=>makeSubmenuPartner(e.target.value)} >
                            <option value='' selected="selected" className='optiongot' >Choose</option>
                            <option value="Furniture" id='catoption' >Furniture</option>
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
        <div className='productalldetails'>
                            <label  >Sub Category <span className="required-field"></span></label>
                            <select 
                            value= { partnersubcategory}
                             onChange={(e)=>setPartnerSubCategory(e.target.value)}
                              className='' id="partnersubcatselect"  >
                              
                
                             <option value={ partnersubcategory} >{ partnersubcategory}</option>
                    
                        </select>
                           


                            </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label> Sub Category details <span className="required-field"></span><span id='requiredmerchantsubcatdetails'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input value={ partnersubcatdetails}  className='partnersubcatdetails' onChange={(e)=>setPartnerSubCatDetails(e.target.value)} />
          </div>
          
        </div>
        <div>
        <div  className='productalldetails'>
      
            <label> Tags <span className="required-field"></span><span id='requiredpartnertags'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <div className='suggestdivdashboard' >
                            {
                             


                                partnertags.map(item=>(
                                  <p >{item}<span onClick= {()=>removepartnertags(item)}   style={{marginRight:'10px'}}><FaTimes style={{color:'red', cursor:'pointer'}}/></span></p>
                                ))
                              }


                            </div>
           

                         
                         
<input list="tags" className="partnertags"  onChange={(e)=>partnertagsChange(e.target.value)}   />
<datalist class="" id="tags"  > 

{
tagsoptions.map(item=>(
<option value={item}  />

))
}   






   </datalist>
          </div>
        </div>

        <div>
        <div  className='productalldetails'>
            <label> Colors <span className="required-field"></span><span id='requiredpartnercolors'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>

            <div className='suggestcolordiv' >
                            {

                          
                                partnercolors.map(item=>(
                                  <p>{item}<span onClick= {()=>removepartnercolor(item)}   style={{marginRight:'10px'}}><FaTimes style={{color:'red', cursor:'pointer'}}/></span></p>
                                ))
                              }


                            </div>
           

                         
                         
<input list="colors" className="partnercolors" onChange={(e)=>partnercolorChange(e.target.value)}   />
<datalist class="" id="colors"  > 

{
coloroptions.map(item=>(
<option value={item}  />

))
}   






   </datalist>
          
          </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Specification <span className="required-field"></span><span id='requiredmerchantspecification'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={ partnerspecification} className='partnerspecification' onChange={(e)=>setPartnerSpecification(e.target.value)} />
                           </div>

        </div>

        <div>
        <div className='productalldetails' >
                            <label  >Brand Overview <span className="required-field"></span><span id='requiredmerchantbrandoverview'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={ partnerbrandoverview} className='partnerbrandoverview' onChange={(e)=>setPartnerBrandOverview(e.target.value)}  />
                           </div>
        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Seller Info <span className="required-field"></span><span id='requiredmerchantsellerinfo'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={ partnersellerinfo} className='partnersellerinfo' onChange={(e)=>setPartnerSellerInfo(e.target.value)}  />
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Care & Maintenance <span className="required-field"></span><span id='requiredmerchantcare'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
                            <textarea type='text' value={ partnercare} className='partnercare' onChange={(e)=>setPartnerCare(e.target.value)}  />
                           </div>

        </div>
        <div>
        <div className='productalldetails' >
                            <label  >Additional Info </label>
                            <textarea type='text' value={partneradditional}  onChange={(e)=>setPartnerAdditional(e.target.value)}   />
                           </div>
        </div>
        <div>
          <div className='productalldetails'>
            <label>Images <span className="required-field"></span><span id='requiredimages'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='file'  id='b1' onChange={imagefilechange}  accept= "image/*" multiple/>
            <p  style={{color:'red'}}>{message && message}</p>

          </div>
        </div>
        <div></div>

        <div>
          <div className='imagedivcontainer'> 
          {images && images.map(img=>
       
       <div >

 <img src= {URL.createObjectURL(img)} key={img} alt='image preview'  style={{width:'100%', height:' 100%',marginRight:'',
    borderRadius:'10px'}}  />
<span  > <h5 onClick={()=>removeImage(img)} className=''><FaTimes  style={{color:'red', cursor:'pointer', border:'1px solid blue', borderRadius:'5px'}}/></h5>  </span>
     </div>


       )
        }

           <div></div>
          </div>
        </div>


         



      </div>
      <div>
        <div className='divbutton' >
        <div className='updatebtn' >
            <button type='submit' onClick={submitdata} >Submit</button>
          </div>

          <div className='updatebtn' style={{marginLeft:'50px'}} >
            <button type='submit' onClick={saveform} >Save draft</button>
          </div>

         

        </div>
       
      

      </div>
      <p style={{color:'green', fontSize:'18px', fontFamily:'Manrope, sans-serif'}} id='saveformimages'></p>

    </div>



 
      <div className= 'searchmodeldiv' >
        <div className='searchmodelcontainer'>
          <input type='text' onChange={(e)=>setModelSearch(e.target.value)} />
          <button type='submit' onClick={searchmodelHandler} >search</button>

      
                  
        </div>
        <div>
        <div  className='tablediv' style={{marginTop:'60px'}}>
           <DataTable

       
        title="Product data"
        columns={columns}
        data={searchproductdata && searchproductdata}
      
        highlightOnHover
        selectableRows
        fixedHeader
        customStyles={tableCustomStyles}
      
       
      />
      </div>
          </div>
          <div style={{display:'none'}} >
            <model-viewer
            

                    src= 'https://arnxt-models-webar.s3.ap-south-1.amazonaws.com/Euro_Bed.glb'
                    ar
                    modes="scene-viewer quick-look webxr"
                   
                  
                    auto-rotate
                    camera-controls
                    style={{ width: "100vw", height: "90vh" , marginTop:'-80px', marginLeft:'-90px'}}
            
           
             ref={modelRef.current}
            
            >

            </model-viewer>
          </div>
       

      </div>

   


    <div className='profilediv' >
      <div className='profileinput'>
        <div>
          <div className='profiledetails'>
            <div className='productalldetails' >
            <label>Name<span className="required-field"  ></span><span className='reqpartnername'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text'  className='partnername'  value={partnername} onChange={(e)=>setPartnerName(e.target.value)} />

            </div>
          

          </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Email<span className="required-field"></span><span className='reqpartneremail'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='email' value={partneremail} className='partneremail' onChange={(e)=>setPartnerEmail(e.target.value)} />

            </div>

             </div>

        </div>
        <div>
          <div className='profiledetails'>
          <div  className='productalldetails'>
            <label>Partner type <span className="required-field"></span><span className='reqpartnertype'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <select  
              className='partnertype'  value={ partnertype} onChange={event=>setPartnerType(event.target.value)}
            >
            <option value='' selected="selected" className='optiongot' >Choose..</option>
            <option>Manufacturer</option>
             <option>Distributer</option>
             <option>Retailer</option>
             <option>Exporter</option>
             <option>Importer</option>
            </select>
          </div>

          </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Address<span className="required-field"></span><span className='reqpartneraddress'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={partneraddress} className='partneraddress' onChange={(e)=>setPartnerAddress(e.target.value)} />

            </div>

            </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Mobile No<span className="required-field"></span><span className='reqpartnermobile'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text'  value={partnerno} className='partnermobile' onChange={(e)=>setPartnerNo(e.target.value)} />

            </div>

            </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>State<span className="required-field"></span><span  className='reqpartnerstate'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={partnerstate} className='partnerstate' onChange={(e)=>setPartnerState(e.target.value)} />

            </div>

            </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>City<span className="required-field"></span><span className='reqpartnercity'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={partnercity} className='partnercity' onChange={(e)=>setPartnerCity(e.target.value)} />

            </div>

             </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Pin<span className="required-field"></span><span className='reqpartnerpin'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' value={partnerpin} className='partnerpin'  onChange={(e)=>setPartnerPin(e.target.value)} />

            </div>

             </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>No of shops<span className="required-field"></span><span className='reqpartnernoofshops'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='number'  value={partnernoofshops} className='partnernoofshops'  onChange={(e)=>setPartnerNoOfShops(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Shop name<span className="required-field"></span><span className='reqpartnershopname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' className='partnershopname' value={partnershopname}  onChange={(e)=>setPartnerShopName(e.target.value)}  />

            </div>

           </div>
        </div>
     
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Website</label>
            <input type='text' value={Purchaselink}  onChange={(e)=>setPurchaseLink(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>GST</label>
            <input type='text'  value={gstno} onChange={(e)=>setGstNo(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Bank name</label>
            <input type='text' value={bankname} onChange={(e)=>setBankName(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>IFSC code</label>
            <input type='text'  value={ifsc} onChange={(e)=>setIfsc(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <div className='productalldetails' >
            <label>Bank account no</label>
            <input type='number'  value={accountno} onChange={(e)=>setAccountNo(e.target.value)} />

            </div>

           </div>
        </div>
        <div>
          <div className='updatebtn' >
            <button type='submit' onClick={profileUpdateHandler} >Update</button>
          </div>
        </div>


      </div>
      <div className='mytransaction' >
        <h3>My Transactions</h3>
      </div>

      <div  className='transactiondiv'>
        
       
      <table  >
  <tr>
    <th>Date</th>
    <th>Transaction Id</th>
    <th>Subscription details</th>
    <th>Total amount</th>


  </tr>
  <tr>
    <td><p>25 feb</p></td>
    <td><p>IND144587</p></td>
    <td><p>Yearly plan</p></td>
    <td><p>39000</p></td>

  </tr>
  <tr>
  <td><p>25 feb</p></td>
    <td><p>IND144587</p></td>
    <td><p>Yearly plan</p></td>
    <td><p>39000</p></td>
  </tr>
</table>

    </div>
    </div>


 

   
   
  </div>
      </div>
        
      
    </div>
  )
}

export default Dashboard
