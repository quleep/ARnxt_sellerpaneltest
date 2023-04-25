import React, { useEffect, useState } from 'react'
import { FaTimes,FaExclamationCircle,FaInfoCircle, FaCheck } from 'react-icons/fa';
import validator from 'validator';
import swal from 'sweetalert';
import axios from 'axios';


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



const Dashboard = () => {

  const [saveddata, setSavedData] = useState();

  const [searchmodeldata, setSearchModelData] = useState();

  const [modelsearch, setModelSearch] = useState();

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

           

              setImagesArray((oldArray)=>[...oldArray, imgurl])

          
                
           
      
              }
          
           })
           .catch((err)=>console.log(err))
         
       })
       .catch((err)=>console.log(err))
      
      
  
  

  


}
  


},[images])




   
imagesarray &&
 imagesarray.map(item=>{
     if(!newarray.includes(item))
     setNewArray([...newarray, item])
  
 })


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
  document.querySelector('.merchantdiv').style.display= 'none'
  document.querySelector('.selfcontainer').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'none'


}

const merchantHandler=(e)=>{
  e.preventDefault()

  
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

  document.querySelector('.profilediv').style.display= 'none'
  document.querySelector('.merchantdiv').style.display= 'none'
  document.querySelector('.selfcontainer').style.display= 'none'
  document.querySelector('.searchmodeldiv').style.display= 'block'



}


const selfuploadHandler=(e)=>{
  e.preventDefault()

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
  setPartnerCurrency('₹ INR')
}

const saveform=(e)=>{
  e.preventDefault();


  if(partnername === ''){
    window.scroll(0,0);
     
     document.querySelector('.merchantname').style = 'border: 2px solid red'
     document.querySelector('#requiredmerchantname').innerHTML='required'
     return
   }
   else{
     document.querySelector('.merchantname').style = ''
     document.querySelector('#requiredmerchantname').innerHTML=''
 
   }
   if(partnershopsno === ''){
    window.scroll(0,0);
 
     document.querySelector('.partnershopno').style = 'border: 2px solid red'
     document.querySelector('#requiredmerchantshopno').innerHTML='required'
     return
 
   }
   else{
     document.querySelector('.partnershopno').style = ''
     document.querySelector('#requiredmerchantshopno').innerHTML=''
 
   }
   if(partneremail === '' ){
    window.scroll(0,0);
 
        document.querySelector('.merchantemail').style = 'border: 2px solid red'
     document.querySelector('#requiredpartneremail').innerHTML= 'required'
     return
 
   }
   else{
     document.querySelector('.merchantemail').style = ''
     document.querySelector('#requiredpartneremail').innerHTML= ''
 
   }
 
   if(!validator.isEmail(partneremail)){
    window.scroll(0,0);
 
     document.querySelector('.merchantemail').style = 'border: 2px solid red'
     document.querySelector('#requiredpartneremail').innerHTML= 'Not valid'
     return
     
   }
   else{
     document.querySelector('.merchantemail').style = ''
     document.querySelector('#requiredpartneremail').innerHTML= ''
 
   }
 
 
 if(partneraddress === ''){
   window.scroll(0,0);
 
   document.querySelector('.merchantaddress').style = 'border: 2px solid red'
   document.querySelector('#requiredpartneraddress').innerHTML= 'required'
   return
   
 } 
 else{
   document.querySelector('.merchantaddress').style = ''
   document.querySelector('#requiredpartneraddress').innerHTML= ''
 
 }
 if(partnertype === ''){
   document.querySelector('.merchanttype').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnertype').innerHTML= 'required'
   return
   
 } 
 else{
   document.querySelector('.merchanttype').style = ''
   document.querySelector('#requiredpartnertype').innerHTML= ''
 
 }
 if(partnerno === ''){
  
   document.querySelector('.merchantno').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerno').innerHTML= 'required'
   return
   
 } 
 else{
   document.querySelector('.merchantno').style = ''
   document.querySelector('#requiredpartnerno').innerHTML= ''
 
 }
 if(!partnerno.match(validphone)){
 
 
   document.querySelector('.merchantno').style = 'border: 2px solid red'
   document.querySelector('#requiredpartnerno').innerHTML= 'need 10 digit'
   return
 
 } else{
   document.querySelector('.merchantno').style = ''
   document.querySelector('#requiredpartnerno').innerHTML= ''
 
 }
 
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
 
 
  merchantName: partnername,
  Shopsno: partnershopsno,
  MerchantPhNo: partnerno,
  Merchantaddress:  partneraddress,

  Merchantemail: partneremail,
  Merchanttype: partnertype,
  Purchaselink: partnerwebsite,
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




const submitdata=(e)=>{

e.preventDefault();


  if(partnername === ''){
   window.scroll(0,0);
    
    document.querySelector('.merchantname').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantname').innerHTML='required'
    return
  }
  else{
    document.querySelector('.merchantname').style = ''
    document.querySelector('#requiredmerchantname').innerHTML=''

  }
  if(partnershopsno === ''){
   window.scroll(0,0);

    document.querySelector('.partnershopno').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantshopno').innerHTML='required'
    return

  }
  else{
    document.querySelector('.partnershopno').style = ''
    document.querySelector('#requiredmerchantshopno').innerHTML=''

  }
  if(partneremail === '' ){
   window.scroll(0,0);

       document.querySelector('.merchantemail').style = 'border: 2px solid red'
    document.querySelector('#requiredpartneremail').innerHTML= 'required'
    return

  }
  else{
    document.querySelector('.merchantemail').style = ''
    document.querySelector('#requiredpartneremail').innerHTML= ''

  }

  if(!validator.isEmail(partneremail)){
   window.scroll(0,0);

    document.querySelector('.merchantemail').style = 'border: 2px solid red'
    document.querySelector('#requiredpartneremail').innerHTML= 'Not valid'
    return
    
  }
  else{
    document.querySelector('.merchantemail').style = ''
    document.querySelector('#requiredpartneremail').innerHTML= ''

  }


if(partneraddress === ''){
  window.scroll(0,0);

  document.querySelector('.merchantaddress').style = 'border: 2px solid red'
  document.querySelector('#requiredpartneraddress').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.merchantaddress').style = ''
  document.querySelector('#requiredpartneraddress').innerHTML= ''

}
if(partnertype === ''){
  document.querySelector('.merchanttype').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnertype').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.merchanttype').style = ''
  document.querySelector('#requiredpartnertype').innerHTML= ''

}
if(partnerno === ''){
 
  document.querySelector('.merchantno').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerno').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.merchantno').style = ''
  document.querySelector('#requiredpartnerno').innerHTML= ''

}
if(!partnerno.match(validphone)){


  document.querySelector('.merchantno').style = 'border: 2px solid red'
  document.querySelector('#requiredpartnerno').innerHTML= 'need 10 digit'
  return

} else{
  document.querySelector('.merchantno').style = ''
  document.querySelector('#requiredpartnerno').innerHTML= ''

}

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


if(images.length < 6){
  document.querySelector('#b1').style = 'border: 2px solid red'
  document.querySelector('#requiredimages').innerHTML= '6 required'
  return

}
else{
  document.querySelector('#b1').style = ''
  document.querySelector('#requiredimages').innerHTML= ''

}

getId()
setProid(lastId)

const productdetails= {
  product_Id: lastId,
  merchant_Id: p_id,

  model_Id: '',
  modelno: partnermodelid,
 
 
  merchantName: partnername,
  Shopsno: partnershopsno,
  MerchantPhNo: partnerno,
  Merchantaddress:  partneraddress,

  Merchantemail: partneremail,
  Merchanttype: partnertype,
  Purchaselink: partnerwebsite,
  brand: partnerbrand,
  lengthprod: partnerlength,
  breadthprod: partnerbreadth,
  height: partnerheight,

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
  imageurl: newarray,

  currency: partnerCurrency,
  registration_Time: new Date().toString(),
  additional: partneradditional,
  subcatdetail: partnersubcatdetails



}

const merchantbody={
  merchant_Id: Number(p_id),
  merchantname: u_id,
  product_Id: lastId,
  registration_Time: new Date().toString(),
}
const deletebody={
  merchant_Id: Number(p_id)
}
axios.post(registerUrl, productdetails).then(res=>{

  axios.post(imagesendurl,merchantbody ).then(res=>{

    axios.post(deletesavedataurl,deletebody).then(res=>{
      console.log(res)
    }).catch(error=>{
      console.log(error)
    })
    
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



  
  
  setTimeout(()=>{
    setMessage('')
  },3000)

  console.log(res)
}).catch(error=>{
  console.log(error)
})
 








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

  if(merchantName === ''){
    
    document.querySelector('.partnername').style = 'border: 2px solid red'
    document.querySelector('#requiredname').innerHTML='required'
    return
  }
  else{
    document.querySelector('.partnername').style = ''
    document.querySelector('#requiredname').innerHTML=''

  }
  if(Shopsno === ''){
    document.querySelector('.shopno').style = 'border: 2px solid red'
    document.querySelector('#requiredshopno').innerHTML='required'
    return

  }
  else{
    document.querySelector('.shopno').style = ''
    document.querySelector('#requiredshopno').innerHTML=''

  }
  if(Merchantemail === '' ){
       document.querySelector('.partneremail').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantemail').innerHTML= 'required'
    return

  }
  else{
    document.querySelector('.partneremail').style = ''
    document.querySelector('#requiredmerchantemail').innerHTML= ''

  }

  if(!validator.isEmail(Merchantemail)){
    document.querySelector('.partneremail').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantemail').innerHTML= 'Not valid'
    return
    
  }
  else{
    document.querySelector('.partneremail').style = ''
    document.querySelector('#requiredmerchantemail').innerHTML= ''

  }


if(Merchantaddress === ''){
  document.querySelector('.partneraddress').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantaddress').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.partneraddress').style = ''
  document.querySelector('#requiredmerchantaddress').innerHTML= ''

}
if(Merchanttype === ''){
  document.querySelector('.partnertype').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchanttype').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.partnertype').style = ''
  document.querySelector('#requiredmerchanttype').innerHTML= ''

}
if(MerchantPhNo === ''){
  document.querySelector('.partnerno').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantno').innerHTML= 'required'
  return
  
} 
else{
  document.querySelector('.partnerno').style = ''
  document.querySelector('#requiredmerchantno').innerHTML= ''

}
if(!MerchantPhNo.match(phn)){
  document.querySelector('.partnerno').style = 'border: 2px solid red'
  document.querySelector('#requiredmerchantno').innerHTML= 'need 10 digit'
  return

} else{
  document.querySelector('.partnerno').style = ''
  document.querySelector('#requiredmerchantno').innerHTML= ''

}

if(productname === ''){
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


const formdatabody={
 
  merchant_Id: p_id,


  modelno: modelid,
 
 
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
    if(merchantName === ''){
    
      document.querySelector('.partnername').style = 'border: 2px solid red'
      document.querySelector('#requiredname').innerHTML='required'
      return
    }
    else{
      document.querySelector('.partnername').style = ''
      document.querySelector('#requiredname').innerHTML=''
  
    }
    if(Shopsno === ''){
      document.querySelector('.shopno').style = 'border: 2px solid red'
      document.querySelector('#requiredshopno').innerHTML='required'
      return
  
    }
    else{
      document.querySelector('.shopno').style = ''
      document.querySelector('#requiredshopno').innerHTML=''
  
    }
    if(Merchantemail === '' ){
         document.querySelector('.partneremail').style = 'border: 2px solid red'
      document.querySelector('#requiredmerchantemail').innerHTML= 'required'
      return
  
    }
    else{
      document.querySelector('.partneremail').style = ''
      document.querySelector('#requiredmerchantemail').innerHTML= ''
  
    }
  
    if(!validator.isEmail(Merchantemail)){
      document.querySelector('.partneremail').style = 'border: 2px solid red'
      document.querySelector('#requiredmerchantemail').innerHTML= 'Not valid'
      return
      
    }
    else{
      document.querySelector('.partneremail').style = ''
      document.querySelector('#requiredmerchantemail').innerHTML= ''
  
    }
  
  
  if(Merchantaddress === ''){
    document.querySelector('.partneraddress').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantaddress').innerHTML= 'required'
    return
    
  } 
  else{
    document.querySelector('.partneraddress').style = ''
    document.querySelector('#requiredmerchantaddress').innerHTML= ''
  
  }
  if(Merchanttype === ''){
    document.querySelector('.partnertype').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchanttype').innerHTML= 'required'
    return
    
  } 
  else{
    document.querySelector('.partnertype').style = ''
    document.querySelector('#requiredmerchanttype').innerHTML= ''
  
  }
  if(MerchantPhNo === ''){
    document.querySelector('.partnerno').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantno').innerHTML= 'required'
    return
    
  } 
  else{
    document.querySelector('.partnerno').style = ''
    document.querySelector('#requiredmerchantno').innerHTML= ''
  
  }
  if(!MerchantPhNo.match(phn)){
    document.querySelector('.partnerno').style = 'border: 2px solid red'
    document.querySelector('#requiredmerchantno').innerHTML= 'need 10 digit'
    return
  
  } else{
    document.querySelector('.partnerno').style = ''
    document.querySelector('#requiredmerchantno').innerHTML= ''
  
  }
  
  if(productname === ''){
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
    setPartnerName(item.merchantName)
    setPartnerShopNO(item.Shopsno)
    setPartnerEmail(item.Merchantemail)
    setPartnerAddress(item.Merchantaddress)
    setPartnerType(item.Merchanttype)
    setPartnerNo(item.MerchantPhNo)
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
    setPartnerWebsite(item.Purchaselink)
    setPartnerWeight(item.weight)
    setPartnerRoomType(item.roomtype)
    setPartnerSellerInfo(item.sellerinfo)






   


  })

},[saveddata])

useEffect(()=>{
  partnersavedata && partnersavedata.map(item=>{
    setMerchantName(item.merchantName)
    setShopsNo(item.Shopsno)
    setMerchantEmail(item.Merchantemail)
    setMerchantAddress(item.Merchantaddress)
    setMerchantType(item.Merchanttype)
    setMerchantPhNo(item.MerchantPhNo)
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



const searchmodelHandler=(e)=>{
  e.preventDefault();
  const body={
    modelno: modelsearch
  }
 axios.post(searchmodels, body).then(res=>{
  setSearchModelData(res.data)
 }).catch(error=>{
  console.log(error)
 })


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
              <h3>Welcome Merchant Name</h3>

            </div>

          </div>
          <div className='dashboardstatus' >
            <div className='profilecomplete'> 
            <h5>Your profile compeletion </h5>
             <div className='progbar'></div>

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
        <a onMouseOver={merchantclick}  onMouseOut={merchantclickleave} style={{cursor:'pointer'}} >
          <i className='bx bx-compass'></i>
          <span className="link_name">Model Management</span>
          <p className='bx bxs-chevron-down ' style={{color:'white', paddingTop:'20px', paddingLeft:'10px'}}></p>
        </a>
        <ul className="merchantsub" onMouseOver={merchantclick}  onMouseOut={merchantclickleave} >
          
        
          <li><a href='' onClick={selfuploadHandler} >Self upload</a></li>
          <li><a href='' onClick={merchantHandler}>Send Images</a></li>
          <li><a href="" onClick={selfselectHandler} >Select existing</a></li>

        </ul>
      
        
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
      <li>
        <div className="profile-details">
          <div className="profile-content">
            <img src="https://github.com/Sacsam005/dropdown-menu/blob/master/image/profile.png?raw=true" alt="profileImg"/>
          </div>
          <div className="name-job">
            <div className="profile_name">User Name</div>
            <div className="job">User Email</div>
          </div>
          <i className='bx bx-log-out'></i>
        </div>
      </li>
    </ul>
  </div>
  <section className="home-section">

    

      <div className='selfcontainer'>
      <div className='merchantdivcontainer'>
        <div>
          <div  className='productalldetails'>
            <label>Partner(Shop) name <span className="required-field"></span><span id='requiredname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' className='partnername'  value={merchantName} onChange={(e)=>setMerchantName(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>No of shops <span className="required-field"></span><span id='requiredshopno'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="number" className='shopno'  value={Shopsno} onChange={event=> setShopsNo(event.target.value) } />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner email <span className="required-field"></span><span id='requiredmerchantemail'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="email"  className='partneremail' value={Merchantemail} onChange={event=> setMerchantEmail(event.target.value) }/>
          </div>

        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner address <span className="required-field"></span><span id='requiredmerchantaddress'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="text" className='partneraddress' value={Merchantaddress} onChange={event=> setMerchantAddress(event.target.value) } />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner type <span className="required-field"></span><span id='requiredmerchanttype'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <select  
              className='partnertype'
              value={Merchanttype} onChange={event=>setMerchantType(event.target.value)}
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
        <div>
        <div  className='productalldetails'>
            <label>Contact No <span className="required-field"></span><span id='requiredmerchantno'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type= 'number' maxLength= '10' className='partnerno'  value= {MerchantPhNo} onChange={event=> setMerchantPhNo(event.target.value)}   />
          </div>
        </div>
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
          <div className='productalldetails'>
          <label> website </label>
          <input type='text' value={Purchaselink} onChange={(e)=>setPurchaseLink(e.target.value)} />


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
        <div>

        </div>
        <div>
          <div className='productalldetails'>
            <div className='uploadbuttoncontainer'> 
            <div>

            <div class="upload-btn-wrapper">
  <button className="btnnew">Upload fbx<i class='bx bx-export' style={{padding:'10px'}}></i></button>
  <input type="file" name="myfile" id='fbxfile'  onChange={fbxchangehandler} />
  
</div>
<p id='fbxmessage' style={{color:'red'}}></p>
            </div>
            <div>
            <div class="upload-btn-wrapper">
  <button className="btnnew">Upload glb<i class='bx bx-export' style={{padding:'10px'}}></i></button>
  <input type="file" name="myfile" id='glbfile' onChange={glbchangehandler} />
</div>
<p id='glbmessage' style={{color:'red'}}></p>

            </div>
            <div>
            <div class="upload-btn-wrapper">
  <button className="btnnew">Upload gltf<i class='bx bx-export' style={{padding:'10px'}}></i></button>
  <input type="file" name="myfile" id='gltffile' onChange={gltfchangehandler} />
</div>
<p id='gltfmessage' style={{color:'red'}}></p>

            </div>
            <div>
            <div class="upload-btn-wrapper">
  <button className="btnneww">Upload image<i class='bx bx-export' style={{padding:'10px'}}></i></button>
  <input type="file" name="myfile" id='imagefile' onChange={imagechangehandler} />
</div>
<p id='imagemessage' style={{color:'red'}}></p>

            </div>


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
            <label>Partner(Shop) name <span className="required-field"></span><span id='requiredmerchantname'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type='text' className='merchantname' id='inputpartnerproductname' value={ partnername} onChange={(e)=>setPartnerName(e.target.value)} />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>No of shops <span className="required-field"></span><span id='requiredmerchantshopno'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="number" className='partnershopno'  value={ partnershopsno} onChange={event=> setPartnerShopNO(event.target.value) } />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner email <span className="required-field"></span><span id='requiredpartneremail'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="email"  className='merchantemail' value={ partneremail} onChange={event=> setPartnerEmail(event.target.value) }/>
          </div>

        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner address <span className="required-field"></span><span id='requiredpartneraddress'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type="text" className='merchantaddress' value={ partneraddress} onChange={event=> setPartnerAddress(event.target.value) } />
          </div>
        </div>
        <div>
        <div  className='productalldetails'>
            <label>Partner type <span className="required-field"></span><span id='requiredpartnertype'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <select  
              className='merchanttype'  value={ partnertype} onChange={event=>setPartnerType(event.target.value)}
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
        <div>
        <div  className='productalldetails'>
            <label>Contact No <span className="required-field"></span><span id='requiredpartnerno'  style={{color:'red', fontSize:'15px', marginLeft:'5px'}}></span></label>
            <input type= 'number' maxLength= '10' className='merchantno'  value= { partnerno} onChange={event=> setPartnerNo(event.target.value)}   />
          </div>
        </div>
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
          <div className='productalldetails'>
          <label> website </label>
          <input type='text' value={ partnerwebsite} onChange={(e)=>setPartnerWebsite(e.target.value)} />


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



 
      <div className='searchmodeldiv' >
        <div className='searchmodelcontainer'>
          <input type='text' onChange={(e)=>setModelSearch(e.target.value)} />
          <button type='submit' onClick={searchmodelHandler} >search</button>

      
                  
        </div>
        <div>
            {
              searchmodeldata && searchmodeldata.map(item=>(
                <div className='modeldetailsdiv' >
                    <p>{item.model_Id}</p>
                <p>{item.productname}</p>


                  </div>
              

              ))
            }
          </div>
       

      </div>

   




    <div className='profilediv' >
      <div className='profileinput'>
        <div>
          <div className='profiledetails'>
            <label>Name</label>
            <input type='text' />

          </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Email</label>
            <input type='text' />

             </div>

        </div>
        <div>
        <div className='profiledetails'>
        <label>Mobile No</label>
            <input type='number'/>

            </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>State</label>
            <input type='text'/>

            </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>City</label>
            <input  type='text'/>

             </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Pin code</label>
            <input type='number' />

             </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>No of Shops</label>
            <input  type='number'/>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Shop name</label>
            <input type='text'/>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Type</label>
            <input type='text' />

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Website</label>
            <input type='text' />

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>GST</label>
            <input type='text'/>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Bank name</label>
            <input type='text'/>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>IFSC code</label>
            <input type='text'/>

           </div>
        </div>
        <div>
        <div className='profiledetails'>
        <label>Bank account no</label>
            <input type='number' />

           </div>
        </div>
        <div>
          <div className='updatebtn' >
            <button>Update</button>
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


 

   
   
  </section>
      </div>
        
      
    </div>
  )
}

export default Dashboard
