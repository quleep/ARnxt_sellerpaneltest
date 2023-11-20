import React, { useEffect, useState } from 'react'
import Navbarhome from './Navbarhome'
import axios from 'axios'
import Footercomponent from './Footercomponent'
import { PopupButton } from "react-calendly";

const Homepagenew = () => {

    useEffect(()=>{
        window.scroll(0,0)
   },[])
   
   const [brandsdata, setBrandsData] = useState()
   document.addEventListener('DOMContentLoaded', function () {
     const section2div = document.getElementById('section2divheading');
     const section3div = document.getElementById('section3divheading');
 
     const section4div = document.getElementById('section4divheading');
     const section2imagediv = document.getElementById('section2imagecontainer')
     const section3imagediv = document.getElementById('section3imagecontainer')
     const section4imagediv = document.getElementById('section4imagecontainer')
 
   
 
  
   
     function isElementInViewport(el) {
       const rect = el.getBoundingClientRect();
       
       return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       );
     }
   
     function handleScroll() {
       if (isElementInViewport(section2div)) {
        
         section2div.style.opacity = '1';
        
         section2div.style.transform = 'translateX(0)';
         section2imagediv.style.opacity = '1' 
       section2imagediv.style.transform = 'scale(1)' 
 
 
       }
       if (isElementInViewport(section3div)) {
       
         section3div.style.opacity = '1';
        
         section3div.style.transform = 'translateX(0)';
         section3imagediv.style.opacity = '1' 
         section3imagediv.style.transform = 'scale(1)' 
       }
       if (isElementInViewport(section4div)) {
         section4div.style.opacity = '1';
        
         section4div.style.transform = 'translateX(0)';
         section4imagediv.style.opacity = '1' 
         section4imagediv.style.transform = 'scale(1)' 
       }
     }
   
     // Initial check in case the element is already in the viewport
     handleScroll();
   
     // Attach the scroll event listener
     window.addEventListener('scroll', handleScroll);
   });
 
 
 
   const shuffleArray = (array) => {
     const shuffledArray = [...array];
     for (let i = shuffledArray.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [shuffledArray[i], shuffledArray[j]] = [
         shuffledArray[j],
         shuffledArray[i],
       ];
     }
     return shuffledArray;
   };
 
   useEffect(()=>{
     const brands = async () => {
       try {
         const response = await axios.get(
           "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getbrandtable"
         );
         const response1 = await axios.get(
           "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getallbrands"
         );
   
         const brandFilter = response1.data; 
   
         const filteredData = response.data.filter((item) =>
           brandFilter.includes(item["brandId"].toLowerCase())
         );
         const shuffledData = shuffleArray(filteredData);
         setBrandsData(shuffledData);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
      brands()
 
   },[])
 
   

    
  return (
    <div>
         <Navbarhome/>

<div className='mainbodyhomepage'>
    <div className='sectiononehome'>
        <div className='sectiononehomeinside'>
            <div className='sectiononehomeheading' >
               <h1>Step into a new age of product <h2>visualisation </h2>with <h2>ArNXT</h2></h1>
                <p>
                ArNXT is poised to transform our shopping experience, blending convenience, instant access, immersive and personal touch into one seamless mix.

                </p>
               
                <PopupButton
                
               className='sectiononehomecalendlybutton'
            
            url="https://calendly.com/arnxt-meet/30min"
          
            rootElement={document.getElementById("root")}
            text="Schedule Demo Call"  
          /> 
              

            </div>
             <div className='sectiononehomegifcontainer'>
             <img src= '/assets/images/giphy.gif' /> 

             </div>
        </div>

    </div>
    <div className='sectiontwohome'>
    <div className='sectiononehomeinside'>
          
             <div className='sectiontwohomegifcontainer' id ='section2imagecontainer'>
             <img src= '/assets/images/wallpaperchange.gif' /> 

             </div>
             <div className='sectiontwohomeheading' id= 'section2divheading' >
               <h1 >Visualise, Personalise & Redefine your walls.</h1>
                <p >
                Imagine effortlessly visualising different wallpaper designs in your space before making a decision.

                </p>
                <p>
                Select a perfect wall design with ArNXT wall visualiser.
                </p>
                <h3>
                  LOVE WHERE YOU LIVE

                </h3>
                    
                <PopupButton
                
               className='sectiononehomecalendlybutton'
            
            url="https://calendly.com/arnxt-meet/30min"
          
            rootElement={document.getElementById("root")}
            text="Schedule Demo Call"  
          /> 
              

            </div>
        </div>

</div>

<div className='sectionthreehome'>
<div className='sectiononehomeinside'>
            <div className='sectionthreehomeheading' id='section3divheading' >
               <h1><h2>Flooring</h2> Redefined: See Try Transform</h1> 
                <p >
                Picture trying out different flooring styles without lifting a tile. 
                Visualise, experiment, and experience different floor aesthetics. 

                </p>
                    
                <PopupButton
                
               className='sectiononehomecalendlybutton'
            
            url="https://calendly.com/arnxt-meet/30min"
          
            rootElement={document.getElementById("root")}
            text="Schedule Demo Call"  
          /> 
              

            </div>
             <div className='sectionthreehomegifcontainer' id ='section3imagecontainer'>
             <img src= '/assets/images/floorchange.gif' /> 

             </div>
        </div>

</div>

<div className='sectionfourhome'>
<div className='sectiononehomeinside'>
          
          <div className='sectionfourhomegifcontainer' id ='section4imagecontainer'>
          <img src= '/assets/images/upholstry.gif' /> 

          </div>
          <div className='sectionfourhomeheading'  id ='section4divheading'>
            <h1>Design comes to life with ArNXT upholstery</h1>
             <p>
             Immerse yourself in the joy of visualising, customising, and experiencing varied upholstery styles within your home's comfort.

             </p>
             <p>
             Select a perfect fabric with ArNXT upholstery.
             </p>
          
                
             <PopupButton
                
                className='sectiononehomecalendlybutton'
             
             url="https://calendly.com/arnxt-meet/30min"
           
             rootElement={document.getElementById("root")}
             text="Schedule Demo Call"  
           /> 
               

         </div>
     </div>

</div>

<div className='sectionsixhome'>
<div className='sectionsixhomeinside'>
<div className='sectionsixhomeheading' >
               <h1>Why <h2> ArNXT </h2>?</h1>
                <ul>
                  <li> <h4>One stop solution for all visualisation</h4>
                  
                   </li>
                   <p>One platform for the brands, products and users</p>
                   <li> <h4>Seamless Multi-Channel Integration</h4>
                  
                  </li>
                  <p>A 2 step solution to Blend ArNXT into your existing tech stack</p>
                  <li> <h4>Cost-efficient marketing solutions</h4>
                  
                  </li>
                  <p>We provide visualisation both in web and app</p>
                  <li> <h4>Enhance User Experience</h4>
                  
                  </li>
                  <p>Unmatched immersive experience across the domain.</p>
                   
                

                </ul>
            </div>
             <div className='sectionsixhomegifcontainer'>
              <img src= '/assets/images/testimonials.png' />
            

             </div>

</div>

</div>
<div className='sectionfivehome'>
<div className='sectionfivehomeinside'>
<div className='sectionfivehomeheading'>
<h1>ArNXT is <p>trusted</p> by world <p>leaders</p></h1>
</div>
<div className='sectionfivehomebrandsdiv'>
<div className='sectionfivehomebrandsdivinside'> 
{
brandsdata?.map(item=>(
<div className='' >
  <img src={item.iconUrl}/>
  

  </div>
))
}



<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>







</div>

</div>

</div>

</div>

<Footercomponent/>
</div>

      
    </div>
  )
}

export default Homepagenew
