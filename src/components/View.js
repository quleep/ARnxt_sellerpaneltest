import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const View = () => {
    const modelRef =  useRef();
    const itemdetails= 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsingleitemdetails'
    const params= new URLSearchParams(window.location.search)
    const pid= params.get('id')
    const [glburl, setGlbUrl] = useState()
    
    useEffect(()=>{
        axios.post(itemdetails, pid ).then(res=>{
            
         setGlbUrl(res.data)
        }).catch(error=>{
            console.log(error)
        })
     },[])

  return (
    
    <div>

        <div className='viewcontainer'>
        <div className='modalcontainerar'>
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

        </div>
      
    </div>
  )
}

export default View
