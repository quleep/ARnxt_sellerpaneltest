import React from 'react'

const ProductTest = () => {


    const clickbtn =()=>{
   

        document.querySelector('.shadesdiv').style.display= 'block'
       }

       const clickwall =()=>{
   

        document.querySelector('.shadesdiv_wall').style.display= 'block'
       }
       const clickfirst=()=>{
        document.querySelector('.mainimage2').style.display= 'block'
        document.querySelector('.mainimage1').style.display= 'none'
    
        document.querySelector('.mainimage3').style.display= 'none'
    
        document.querySelector('.mainimage4').style.display= 'none'
    
       }
       const clicksecond=()=>{
        document.querySelector('.mainimage2').style.display= 'none'
        document.querySelector('.mainimage1').style.display= 'block'
    
        document.querySelector('.mainimage3').style.display= 'none'
    
        document.querySelector('.mainimage4').style.display= 'none'
    
        
       }
      
       const clickthird=()=>{
        document.querySelector('.mainimage2').style.display= 'none'
        document.querySelector('.mainimage1').style.display= 'none'
    
        document.querySelector('.mainimage3').style.display= 'block'
    
        document.querySelector('.mainimage4').style.display= 'none'
        
       }
       const clickfourth=()=>{
        document.querySelector('.mainimage2').style.display= 'none'
        document.querySelector('.mainimage1').style.display= 'none'
    
        document.querySelector('.mainimage3').style.display= 'none'
    
        document.querySelector('.mainimage4').style.display= 'block'
        
       }
    
       const closeclick=()=>{
        document.querySelector('.shadesdiv').style.display = 'none'
       }

   
      



  return (
    <div>


     

  
  <div  className='hm'>





  

     <div className='btndivblink'>
      
        <div className='btnblink'  >
        <div className="circlenew"  onClick={clickbtn}></div>
         
        </div>
     

        

      

     <div className='shadesdiv'>

     <div className='shades'>
          <div>
            <img style={{cursor:'pointer', width:'100px', height:'50px'}}  onClick={clickfirst} src='/images/pic1.PNG' />
          </div>
          <div>
          <img  style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic5.PNG' onClick={clicksecond} />
          </div>
  
          <div>
          <img  style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic3.PNG' onClick={clickthird}/>
          </div>
  
          <div>
          <img style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic4.PNG' onClick={clickfourth}/>
          </div>
  
  
        </div>

        <div  className='closebutton'>
        <span style={{color:'red', cursor:'pointer'}} onClick={closeclick}>X</span>

        </div>
       



     </div>
      
  
      </div>
  
      <div  className='imagediv'>
    
   
  
    <img src='/images/Desk B.png' className='mainimage1' id='mainimage1'
     style={{height:'100%', width:'100%'}}  />
  
  <img src='/images/Desk E.png' className='mainimage2' id='mainimage2'
     style={{height:'100%', width:'100%'}}  />
      <img src='/images/Desk C.png' className='mainimage3'  id='mainimage3'
     style={{height:'100%', width:'100%'}}  />
      <img src='/images/Desk D.png' className='mainimage4' id='mainimage4'
     style={{height:'100%', width:'100%'}}  />
   
  
  </div>



 
       
 
  
  </div>
      
    </div>
  )
}

export default ProductTest
