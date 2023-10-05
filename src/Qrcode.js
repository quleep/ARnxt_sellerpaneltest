import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';




const Qrcode = () => {
  const pid = '1682314986253'

  const [imagefile, setImageFile] = useState()

  let x = Math.floor(Math.random()*10000)
  const fileName = `image${x}.jpeg`; 
const fileType = "image/png";

const uploadimage= async (imagedata )=>{


     const url= 'https://g98tqv1tn6.execute-api.ap-south-1.amazonaws.com/default/ImagesUploaderArnxt';
      await fetch(url,{
       method: "POST",
       body: imagedata.name
     
     }).then((res)=>res.json())
        .then((res)=>{
         
       fetch(res.uploadURL, {
           
           method: "PUT",
           headers: {
             "ContentType": "image/jpeg",
           
           },
     
         body: imagedata
         
     
         })
            .then((res)=>{
           
               if(res.status === 200){
   
                 let resnew= res.url.split('?')
                 let imgurl= resnew[0]
   
                 console.log(imgurl)
               
               }
   
            })
            .catch((err)=>console.log(err))
          
        })
        .catch((err)=>console.log(err))
     
   
   
   }

  function base64ToImageFile(base64String, fileName, fileType) {
  
    const base64Data = base64String.replace(/^data:[^;]+;base64,/, '');
  
 
    const binaryData = atob(base64Data);
  
  
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
  
   
    const blob = new Blob([arrayBuffer], { type: fileType });
  
  
    const objectURL = URL.createObjectURL(blob);
  
 
    const img = new Image();
  
    img.onload = function () {
    
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
  
     
      ctx.drawImage(img, 0, 0);
  
      canvas.toBlob(function (blob) {
       
        const file = new File([blob], fileName, { type: fileType });
     
       setImageFile(file)
      }, fileType);
    };
   
  
   
    img.src = objectURL;
  }
 

  useEffect(()=>{
    const qrcodevalue = document.getElementById('qrvalue')
    if(qrcodevalue){
      htmlToImage.toJpeg(qrcodevalue).then((url)=>{
       base64ToImageFile(url, fileName, fileType)
      })
    }

  },[])
  


  return (

    
    <div>
        <div  id='qrvalue'  className='qrcodecontainer'>
            <QRCode  size={100}  viewBox='0 0 200 200' value={`arnxt.com/view?id=${pid}`} />
          </div>
      
    </div>
  )
}

export default Qrcode
