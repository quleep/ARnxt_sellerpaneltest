import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footertest from './Footertest'
import { useHistory, useLocation } from 'react-router-dom'
import Webcam from 'react-webcam'
import { FaArrowLeft, FaCross, FaTimes } from 'react-icons/fa'
import axios from 'axios'
import Footercomponent from './Footercomponent'
import Navbarhome from './Navbarhome'



const Wallchange = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

    const [segmentimage, setSegmentImage] = useState(false)
    const [processimage, setProcessImage] = useState()
    const [imageclick, setImageClick] = useState(false)
    let tryimage1 = '/assets/images/31.jpg'
    let tryimage2 = '/assets/images/32.jpg'
    let tryimage3 = '/assets/images/33.jpg'
    const webcamRef = useRef(null);

    const history = useHistory()

    const [imageurl, setImageUrl] = useState('')
    const [walldistance, setWallDistance] = useState('')
    const [type, setType] = useState('')
    const location = useLocation()
   

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
      

     const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = () => {
            const base64data = reader.result;   
            resolve(base64data);
          }
        });
      }
      const handleTryImageOne=()=>{
        getBase64FromUrl(tryimage1).then(res=>{
    
          setImageUrl(res)
          setSegmentImage(false)
          setImageClick(true)
      
        }) 
      }
      const handleTryImageTwo=()=>{
        getBase64FromUrl(tryimage2).then(res=>{
    
          setImageUrl(res)
          setSegmentImage(false)
          setImageClick(true)


      
      
        }) 
      }
      const handleTryImageThree=()=>{
        getBase64FromUrl(tryimage3).then(res=>{
    
          setImageUrl(res)
          setSegmentImage(false)
          setImageClick(true)


      
      
        }) 
      }
      useEffect(()=>{
         if(imageurl === ''){
            document.querySelector('.imgdisplay').style.display= 'none'
         }
         if(imageurl !== '' ){
            document.querySelector('.imgdisplay').style.display= 'block'
            document.querySelector('.defaultinsidetext').style.display= 'none'


         }

      },[imageurl])

      const  resizeImage = async (val)=>{
        let maxWidth 
        let maxHeight 
      
        return new Promise((resolve)=>{
            const img = new Image();
       
        img.src = val+ '?r=' + Math.floor(Math.random()*100000);
          img.setAttribute('crossOrigin', 'Anonymous');
       
        img.onload = function () {
        let resizedDataURL;
        let newWidth, newHeight;
      
        maxWidth = img.width*18/100 
        maxHeight = img.height*18/100
      
        if (img.width > img.height) {
          
          newWidth = maxWidth;
          newHeight = (maxWidth * img.height) / img.width;
        } else {
         
          newHeight = maxHeight;
          newWidth = (maxHeight * img.width) / img.height;
        }
      
          const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
        
      
         canvas.width = newWidth;
        canvas.height = newHeight;
        
             ctx.drawImage(img, 0, 0, newWidth, newHeight);
         
       
          resizedDataURL = canvas.toDataURL('image/jpeg')
      
         resolve(resizedDataURL)
      }
      
        })
      
      }

      let wallchangeimage;

     

     const handleclick= async (val)=>{

       if(!imageclick){
        window.alert('please select an image ')
        return
       }
        let checked = false
       let newres;

        if(document.querySelector('#checksingle:checked')){
          checked = true;
        } 
        else{
          checked = false;
        }
        await  getBase64FromUrl(imageurl).then(res=>{
          wallchangeimage = res
        })
        await  resizeImage(val).then(res=>{
          newres = res
         })
          let detectmode;
         if(type === ''){
          detectmode = 'walls'
         }else{
          detectmode = type
         }
      
        if(checked){
            document.querySelector('.loadcontainer').style.display= 'block'
            document.querySelector('#checkboxsingle').classList.add('checkboxadd')
            document.querySelector('.defaultinsidetext').style.display= 'none'
            const body={
              wallimg: wallchangeimage,
              designimg: newres,
               detectionmode: detectmode
            }
           
            const config = {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'auth-token': 'c0110aa4490cd8a4e5c024c4779d976f6927b6b0e4b12c2675e9558a453e933c'
              },
            };
              
 
      axios.post('https://wallserver.arnxt.com/api/v1/infer', body, config).then(res=>{
        setSegmentImage(true)
        setProcessImage(res.data)
        document.querySelector('.loadcontainer').style.display= 'none'

      }).catch(error=>{
        window.alert('Sorry! please try again')
        
      })
      
        }
        if(!checked){
           
            document.querySelector('.loadcontainer').style.display= 'none'
           
            document.querySelector('#checkboxsingle').classList.remove('checkboxadd')
        
        
          }
     }

     const handlePictureClick= ()=>{
        const imgsrc= webcamRef.current.getScreenshot()
        document.querySelector('.cameradiv').style.display= 'none'

        setImageUrl(imgsrc)
        setSegmentImage(false)
     }
     const uploadfile = (e)=>{
       
     
       let val= document.getElementById('fileinput').value;
       let indx = val.lastIndexOf(".") + 1;
       let filetype = val.substr(indx, val.length).toLowerCase();
     
       if(filetype === "jpg"  || filetype === "png" || filetype === "jpeg" ){
     
         let files = Array.from(e.target.files) 
     
      
         files.forEach(file => {
          fileToBase64(file, (err, result) => {
            if (result) {
           
            setImageUrl(result)
        document.querySelector('.cameradiv').style.display= 'none'

          setSegmentImage(false) 
     
            
          }
      })
         
        
          const reader = new FileReader();
        
          reader.onload = () => {
              
          }
           
          reader.readAsDataURL(file)
          
        })
     
       }
     
    
     }
     const handleOpenCamera=()=>{
        document.querySelector('.cameradiv').style.display= 'flex'
     }
     const handleCloseCamera= ()=>{
        document.querySelector('.cameradiv').style.display= 'none'

     }
     useEffect(()=>{
      window.scrollTo(0,0)
   },[])

   const handleBackClick=()=>{
    history.push({
      pathname: '/arview',
      state: {
       
        offsetvalue: location.state.offsetvalue,
        arviewreturn: 'true'
      }
  })
  }
  
 
  return (
    <div>
        <Navbarhome/>
        <div className='wallchangecontainer'>
      
            <div className='loadcontainer'>
                <div className='load'>

                </div>

            </div>
        <div className='cameradiv' >
              <div>
                <FaTimes style={{color: 'red', cursor:'pointer', border:'1px solid red', borderRadius:'50%'}} onClick={handleCloseCamera}/>
              </div>
                 
                 <Webcam ref= {webcamRef} 
               
               mirrored={true}
               screenshotFormat='image/jpeg'
               screenshotQuality={1}
               
               />
               <button onClick={handlePictureClick}>click picture</button>
                    </div>
         <div className='wallchangeimage'>
            <label  className=''>
            <div className='wallchangeinside'>
                
                <label className='filtercheckbox' id='checkboxsingle'  >
              
              <input type='checkbox'   className='checkinput' id= 'checksingle'  onClick={()=>handleclick(location.state.id.imageurl[0])} />
              
              
              </label>
              <img  src=  {  location.state.id.imageurl[0] }/>
             
                
            </div>

            </label>
            
        
            </div> 
            <div className='wallchangeshow'> 
        
       
            <div className='wallchangedisplay'>
            <div className='defaultinsidetext' >
            <p>Capture your space or upload it’s image</p>
             
            </div>
            <img src={segmentimage ? `data:image/png;base64, ${processimage}` : imageurl } className='imgdisplay'/>
            
            </div>
            <div className='defaultimages'>
                <div>
                    <label onClick={()=>handleTryImageOne(tryimage1)}>
                        <img src='/assets/images/31.jpg'/>
                    </label>
                </div>
                <div>
                    <label onClick={()=>handleTryImageTwo(tryimage2)}>
                        <img src='/assets/images/32.jpg'/>
                    </label>
                </div>
                <div>
                    <label onClick={()=>handleTryImageThree(tryimage3)}>
                       <img src='/assets/images/33.jpg'/>
                    </label>
                </div>


            </div>
            <div className='wallchangebuttons'>
                <div>
                    <button  type='submit' className='cambutton' onClick={handleOpenCamera}>
                        Click picture
                    </button>
                </div>
                <div>
                <div class="upload-btn-wrapper">
               <button class="btn">Upload Image</button>
                 <input type="file"  id='fileinput' name="myfile"  onChange={uploadfile}  />
               <p className='filemessage'></p>
                 </div>
                </div>
                <div className='inputcamdiv'>
                   <select className='dropdownwall' onChange={(e)=>setType(e.target.value)} >
                    <option  style={{display:' none'}}>Select</option>
                    <option value= 'walls' selected >Wall</option>
                    <option value= 'floors'>Floor</option>

                    </select>
              
                  
                </div>
            
             
               
            </div>
            <div className='backbutton'>
            <button onClick={handleBackClick}> <FaArrowLeft/> Go back</button>
            </div>
          
       
           
                </div>   
        
        </div>
        <Footercomponent/>
      
    </div>
  )
}

export default Wallchange
