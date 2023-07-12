import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footertest from './Footertest'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import QRCode from "react-qr-code";
import { FaTimes } from 'react-icons/fa'

const ARdetails = () => {
    const location = useLocation()
    const itemdetails= 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsingleitemdetails'
    const [glburl, setGlbUrl] = useState()

    const modelRef =  useRef();
     useEffect(()=>{
        axios.post(itemdetails, location.state).then(res=>{
            
          setGlbUrl(res.data)
        }).catch(error=>{
            console.log(error)
        })
     },[])

     console.log(glburl)
     const handlemodalclose =()=>{
      document.querySelector('.modalscan').style.display= 'none'
     }
const openqrcode = ()=>{
  document.querySelector('.modalscan').style.display= 'block'

}
   

  return (
    <div>
        <Navbar/>
        <div className='ardetails' >
          
        <div class="modalscan">		
	      	<div class="modal-wrapscan">
                <span className='closemodalscan' onClick={handlemodalclose}   >
                     <FaTimes style={{color:'red', fontSize:'20px'}}/>
                    </span>	
			   <span>
               <div>

            </div>
         <QRCode value= {`http://ec2-65-2-79-127.ap-south-1.compute.amazonaws.com:3000/view?id=${location.state}`}/>

                </span>	
	      		<p className='dataupload'> Scan the QR code with your mobile device to view the product in your space.</p>	          		
	      	</div>			          		
      	</div>	
            <div className='arviewmodelcontainer'>
            <model-viewer
           
           src= {glburl && glburl.modeldetails[0].glb}
                  
                  modes="scene-viewer quick-look webxr"
                  
                  auto-rotate ar
                  camera-controls
                  shadow-intensity="1"
              ref={modelRef.current}
              style={{width:'100%', height:'100%',padding:'10px'}}
              
           />

            </div>
            <div className='arviewdetailscontainer'>
                <div>
                    <div  className='productdetailsinside'>
                      <label>Product name: </label>
                      <p>{glburl && glburl.productdetails[0].productname}</p>
                    </div>
                </div>
                <div>
                <div  className='productdetailsinside'>
                      <label>Dimension: </label>
                      <p>{`${glburl && glburl.productdetails[0].lengthprod} * ${glburl && glburl.productdetails[0].breadthprod} * ${glburl && glburl.productdetails[0].height} (L*B*H) `}</p>
                    </div>
                </div>
                <div>
                <div  className='productdetailsinside'>
                      <label>Specification: </label>
                      <p>{glburl && glburl.productdetails[0].specification}</p>
                    </div>
                </div>
                <div>
                <div  className='productdetailsinside'>
                      <label>Price: </label>
                      <p>{`₹ ${glburl && glburl.productdetails[0].mrp}`}</p>
                    </div> 
                  <div className='productdetailsinside'>
                    <div className='buttonqrcode'>
                    <button  onClick={openqrcode}>
                AR QR code
               </button>
                      </div>
             
                    </div>
                </div>
               

            </div>

        </div>
        <Footertest/>
      
    </div>
  )
}

export default ARdetails
