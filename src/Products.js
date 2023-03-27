
import React, { useEffect, useState } from 'react'
import { FaTimes,FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios'
import { Metadata } from './layout/MetaData';import {
  NavLink
} from 'reactstrap';


import swal from 'sweetalert';





import { Link } from 'react-router-dom';
import logo from '../src/img/logo.png'



const Products = ({history}) => {
    

  

   
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
  const registerUrl= 'https://7ufiupng0k.execute-api.ap-south-1.amazonaws.com/sellerupload/productsadd';
  const [ file, setFile ] = useState(null)
  const [ fileName, setFileName ] = useState(null)

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [imageArray, setImageArray]= useState([]);
  const [imageupload, setImageUpload] =useState(false)

  const userEmail= sessionStorage.getItem('user')
  const emailID= JSON.parse(userEmail)
  const p_id= emailID.email
  

  let date = new Date();
     
  let acquiredDate= ''
  

  
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


  
   


  const fs= require('fs')
  const removeItem=(img)=>{
    
    
    setImages((oldArray)=>oldArray.filter((item)=> item !== img))
    

  
    


  
   
    
    

    
    

  }




 
  
  const submitHandler=(event)=>{
    event.preventDefault();

    if(!imageupload){
      setMessage('Please send the Images first')
      setTimeout(()=>{
        setMessage('')
      },3000)
      return
    }

    if(productname===''
     || productdescription=== '' 
     || productprice==='' 
     || currency==='' 
      || Shopsno === ''
      || dimension === ''
      || MerchantPhNo === ''  
      || Merchantaddress === ''  
      || Merchantemail === ''  
      || Merchanttype === '' 
      || Merchantcategory === ''   
      || brand === ''  
      || Purchaselink === '' 
      || merchantName === '' 
      )
         {
      setMessage('All fields are Required');
      setTimeout(()=>{
        setMessage('')
      },3000)
      return
    }
    const requestConfig={
      headers:{
        'Content-Type':'Application/json'
      }
    }
  
   
  
    let id = new Date();
    let sec= id.getMilliseconds();
    const requestBody={
      merchantName: merchantName,
      Shopsno: Shopsno,
      MerchantPhNo: MerchantPhNo,
      Merchantaddress:  Merchantaddress,
      Merchantcategory: Merchantcategory,
      Merchantemail: Merchantemail,
      Merchanttype: Merchanttype,
      Purchaselink: Purchaselink,
      brand: brand,
      dimension: dimension,

      productname: productname,
      productdescription: productdescription,
      productprice: productprice,
      currency: currency,
      acquiredDate: date,
      product_id: p_id.toString()
      
    }
    axios.post(registerUrl,requestBody).then((response) => {
      swal({
        title: "Registration Successful!",
        text: response.data.message,
        icon:"success",
        button:'OK!'

    })

    }).catch(error=>{
      if(error.response.status=== 401 || error.response.status === 403){
        setMessage(error.response.data.message)
      }else{
        setMessage('sorry backend server is down');
      }
    })
    

  }

  
 


 
  






 

  const onChange = e => {
    
    let val= document.getElementById('b1').value;
    let indx = val.lastIndexOf(".") + 1;
    let filetype = val.substr(indx, val.length).toLowerCase();
    
    if(filetype === "jpg"  || filetype === "png" || filetype === "jpeg" )
    {
  
    
    
   
    
   const files = Array.from(e.target.files) 
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








  function uploadImages(e) {
    


    
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
              setImageUpload(true);
              setMessage('Images Uploaded Successfully');
              setTimeout(()=>{
                setMessage('')
              },3000)
            
            
            }
           })
           .catch((err)=>console.log(err))
         
       })
       .catch((err)=>console.log(err))
      
      
  }

      
    }  
   
    
    
   
 
 
const logoutHandler=()=>{
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  history.push('/login');
}




  return (
    <div  className='productmain_div' >
      <Metadata title={'Submit Details'}/>
       

    
    <div className='productmain_container'>
  
      
     

        <div>
        <div className='productheading' >
                <h4 style={{fontSize:'25px', color:'#65f7ef'}}>Please Add Your Products</h4>
            </div>
       
         <div className='productsdiv'  >
           
            
           <div  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           

          
            <form className= 'formbody'   onSubmit={submitHandler} >

            <div  className='formdiv' style={{display:'flex',height:'auto',width:'auto',
        alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'column',
        margin:' 20px', marginBottom:' 20px' }}>
            <div className="" style={{marginBottom:'20px'}}>
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="">Partner (Shop) Name <span style={{color:'red',
     marginLeft: '-5px', 
     fontSize:'30px'}}>*</span> </label>

     


    </div>
   
   
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={merchantName} onChange={event=> setMerchantName(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>


  <div className="products_field" >
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="">No of Branch/ shops (Partner) <span style={{color:'red',
     fontSize:'30px'}}>*</span> </label>

     


    </div>
   
   
    <input type="number" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={Shopsno} onChange={event=> setShopsNo(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  
  <div className=""style={{marginBottom:'20px'}}>
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Partner Email <span style={{color:'red',
     fontSize:'30px'}}>*</span> </label>


    </div>
   
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={Merchantemail} onChange={event=> setMerchantEmail(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div className="products_field">
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Partner Phone No <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
   
    <input type="tel" maxLength= '10' style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={MerchantPhNo} onChange={event=> setMerchantPhNo(event.target.value) } 
    className="form-control" id="inputEmail4"/>
  
  </div>
  
  <div className=""style={{marginBottom:'30px'}}>
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Partner address (Pl put Area/Road name) <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <textarea type="text" style={{width:'270px', height:'80px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={Merchantaddress} onChange={event=> setMerchantAddress(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div className="products_field2">
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Partner Category <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={Merchantcategory} onChange={event=> setMerchantCategory(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div className="" style={{marginBottom:'20px'}}>
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Brand <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={brand} onChange={event=> setBrand(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div className="products_field" >
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Product Name <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={productname} onChange={event=> setProductName(event.target.value) } 
    className="form-control" id="inputEmail4"/>
    
  </div>
  <div className="" style={{marginBottom:'20px'}}>
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Dimensions(Length x Breadth x Height inches) <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <input type="number" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={dimension} onChange={event=> setDimension(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div className="products_field3">
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Purchase URL (Website/Email id of partner) <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    </div>
    <input type="email" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={Purchaselink} onChange={event=> setPurchaseLink(event.target.value) } 
    className="form-control" id="inputEmail4"/>
    
  </div>

  <div className="" style={{marginBottom:'20px'}}>
    <div style={{ display:' flex'}}>
    <label for="inputEmail4" style={{color:'white'}} className="form-label" >Price<span style={{color:'red',
     fontSize:'30px'}}>*</span></label>



    </div>
    <input type="number" value={productprice} style={{border:'2px solid rgb(219, 189, 189)', borderRadius:'20px',width:'120px'}}
    onChange={event=>setProductPrice(event.target.value)} className="form-control" id="inputEmail4"/>
    
  </div>
  <div className="currency_div" >
    
    <label for="inputState" className="form-label" style={{marginLeft:'-30px', color:'white'}}>Currency
    <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    
    <select id="inputState" value={currency} onChange={event=>setCurrency(event.target.value)}
     className="form-select" style={{width:'110px', height:'38px',border:'2px solid rgb(219, 189, 189)',color:'gray',
     marginTop:'',
     borderRadius:'20px'}}>
      <option  selected>Choose...</option>
      <option>$ USD</option>
      <option>₹ INR</option>
      <option> EURO</option>
      <option> USD</option>

    </select>
  </div>


  <div className="products_fielddesc" >
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
      className="form-label">Description   <span style={{color:'red',
      fontSize:'30px'}}>*</span></label>
  



    </div>
    <div style={{}} >
    <textarea type="text"   value={productdescription}
     onChange={event=> setProductDescription(event.target.value)} style={{width: '270px', height:'80px',
     borderRadius:'20px',
     border:'2px solid rgb(219, 189, 189)'}} className="form-control" id="inputEmail4"  />

    </div>
   
  </div>
 


 
  <div className="products_fieldcat" >
    
    <label for="inputState" className="form-label" style={{marginRight:' 5px',color:'white', marginTop:'-25px'}}>Partner Type
    <span style={{color:'red',
     fontSize:'30px'}}>*</span></label>


    
    <select id="inputState"  value={Merchanttype} onChange={event=>setMerchantType(event.target.value)}
     className="form-select" style={{width:'150px',border:'2px solid rgb(219, 189, 189)',color:'gray',
     marginTop:'25px',
     height:'40px',
     marginLeft:'-110px',
     borderRadius:'20px'}}>
      <option  selected>Choose...</option>
      <option>Manufacturer</option>
      <option>Distributer</option>
      <option>Retailer</option>
      

    </select>
  </div>

  <div className="products_fieldremark" >
    <div style={{display:'flex'}}>
    <label htmlFor="inputEmail4" style={{color:'white'}}
     className="form-label">Any Additional Remarks </label>


    </div>
    <input type="text" style={{width:'270px',
    borderRadius:'20px', border:'2px solid rgb(219, 189, 189)'}} value={remarks} onChange={event=> setRemarks(event.target.value) } 
    className="form-control" id="inputEmail4"/>
   
  </div>
  <div style={{marginLeft:'',marginBottom:'15px'}} >
  <div style={{ display:' flex'}}>
   


    </div>
    <div className='fileinput'>
   
  <label htmlFor='b1' className='select_images' >
      Select Images
    <input type="file"  onChange={onChange} name="upfile" id="b1"  accept= "image/*"  multiple/>
  </label>

    </div>
   
  </div>
  <div className='productimage' style={imageupload ? {display:'none'}: {}} >
    
    
  {images.map(img=>
     
    <div className='imagespreview_div' >

<img src= {URL.createObjectURL(img)} key={img} alt='image preview'  style={{width:'80px', height:' 120px',marginRight:'-15px',
      borderRadius:'10px'}}  />
        <span onClick={()=>removeItem(img)} className='closebutton' style={{fontSize:'18px',cursor:'pointer',fontSize:'18px',
        fontWeight:'bold'
   , color:'red', float:'left',
   border:'', backgroundColor:'', paddingLeft:'2px', width:'20px', height:'25px',marginLeft:'-6px'}}><FaTimes/></span>
    </div>
    
    
    )
  }

  
      
 

    

  </div>
 

  

  <div style={{}} >
   

  </div>
  

  <div className="button_submit" >

    <button type="submit" className="btn btn-success">Submit</button>
  </div>
  <div   className='send_images' style={images.length >= 2 ?{display:'flex', marginLeft:'10px', marginTop:'-70px' }: {display:'none'} }>
              <button   className='btn btn-success' onClick={uploadImages} style={imageupload ? {display:'none'}:{backgroundColor: '',
              width:'120px', height:'40px',padding:'0px'
              }} >SendImages</button>
            </div>

  <div style={{marginLeft:'150px', marginTop:'50px'}} >
 
  <p style={{}} >{ message && <p style={{color:'red', marginLeft:'50px', fontSize:'20px'}} > <FaExclamationCircle/>   {message}   </p>}</p>


  </div>
  </div>
 
  </form>

  
 
  </div>
  
   

            </div>
           
     
           




        </div>
       
       

    </div>
 
 
    <div>
    
   
    </div>
 

    
  
    </div>
  )
}

export default Products