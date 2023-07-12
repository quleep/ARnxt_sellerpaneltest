import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footertest from './Footertest'
import { useHistory, useLocation } from 'react-router-dom'
import Webcam from 'react-webcam'
import { FaCross, FaTimes } from 'react-icons/fa'
import axios from 'axios'



const Wallchange = () => {
    let tryimage1 = '/assets/images/31.jpg'
    let tryimage2 = '/assets/images/32.jpg'
    let tryimage3 = '/assets/images/33.jpg'
    const webcamRef = useRef(null);

    const [imageurl, setImageUrl] = useState('')
    const [walldistance, setWallDistance] = useState('')
    const location = useLocation()
     console.log(location.state)

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
      
      
        }) 
      }
      const handleTryImageTwo=()=>{
        getBase64FromUrl(tryimage2).then(res=>{
    
          setImageUrl(res)
      
      
        }) 
      }
      const handleTryImageThree=()=>{
        getBase64FromUrl(tryimage3).then(res=>{
    
          setImageUrl(res)
      
      
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

     const handleclick=(val)=>{
        let checked = false


        if(document.querySelector('#checksingle:checked')){
          checked = true;
        } 
        else{
          checked = false;
        }
        if(walldistance === ''){
            document.querySelector('.inputwall').style= 'border: 1px solid red'
            document.querySelector('.inputmessage').innerHTML = 'Distance is required'
            setTimeout(() => {
            document.querySelector('.inputmessage').innerHTML = ''
                 
            }, 3000);
            return
        }else{
            document.querySelector('.inputwall').style= 'border: 2px solid rgb(211, 201, 201) '

        }
      
        if(checked){
            document.querySelector('.loadcontainer').style.display= 'block'
            document.querySelector('#checkboxsingle').classList.add('checkboxadd')
            document.querySelector('.defaultinsidetext').style.display= 'none'

              
    const body={
        image: imageurl,
        distance: walldistance,
        url:  val
       
      }
      axios.post('http://13.233.124.197:5000/segment', body).then(res=>{
        setImageUrl(res.data.segmented_image_url)
        document.querySelector('.loadcontainer').style.display= 'none'

      }).catch(error=>{
        console.log(error)
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
  return (
    <div>
        <Navbar/>
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
              
              <input type='checkbox'   className='checkinput' id= 'checksingle'  onClick={()=>handleclick(location.state.imageurl[0])} />
              
              
              </label>
              <img src={location.state.imageurl[0]}/>
                
            </div>

            </label>
        
            </div> 
            <div className='wallchangeshow'> 
        
       
            <div className='wallchangedisplay'>
            <div className='defaultinsidetext' >
            <p>Capture your space or upload it’s image</p>
             
            </div>
            <img src={imageurl} className='imgdisplay'/>
            
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
                   <input placeholder='distance from wall e.g = 8' className='inputwall' onChange={(e)=>setWallDistance(e.target.value)} type='number'/>
               <p className='inputmessage' style={{color:'red'}}></p>
                  
                </div>
             
               
            </div>
           
                </div>   
        
        </div>
        <Footertest/>
      
    </div>
  )
}

export default Wallchange
