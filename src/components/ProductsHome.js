import React from 'react'

import {FaUserCircle, FaShareAltSquare, FaPlus, FaPlusSquare} from 'react-icons/fa';
import ReactPlayer from 'react-player'
import { PopupButton } from "react-calendly";
import { Metadata } from '../layout/MetaData';
import Navbartest from './Navbartest';

const ProductsHome = () => {
    

const click1= ()=>{
  document.querySelector('.div1').style.display= 'block';
  document.querySelector('#div1').classList.add('fade-in1');
   
    document.querySelector('.div2').style.display= 'none';
    document.querySelector('.div3').style.display= 'none';
}
 
const click2= ()=>{
    document.querySelector('.div2').style.display= 'block';
    document.querySelector('#div2').classList.add('fade-in1');
    document.querySelector('.div1').style.display= 'none';
    document.querySelector('.div3').style.display= 'none';
}
 
const click3= ()=>{
    document.querySelector('.div3').style.display= 'block';
    document.querySelector('#div3').classList.add('fade-in1');

   
    document.querySelector('.div2').style.display= 'none';
    document.querySelector('.div1').style.display= 'none';
}
 
  
 







    
     return (
   <div   className='productspage'  >
    <Navbartest/>
      <Metadata title={'Products'}/>
  
    <div className='productsheader' >
    <div class="waviy">
   <span  style={{"--i":'1'}}>K</span>
   <span style={{"--i":'2'}}>n</span>
   <span style={{"--i":'3'}}>o</span>
   <span  style={{"--i":'4', marginRight:'10px'}}>w</span>
   <span style={{"--i":'5'}}>o</span>
   <span  style={{"--i":'5'}}>u</span>
   <span style={{"--i":'7', marginRight:'10px'}}>r</span>
   <span  style={{"--i":'8'}}>p</span>
   <span  style={{"--i":'9'}}>r</span>
   <span  style={{"--i":'10'}}>o</span>
   <span  style={{"--i":'11'}}>d</span>
   <span  style={{"--i":'12'}}>u</span>
   <span  style={{"--i":'13'}}>c</span>
   <span  style={{"--i":'14'}}>t</span>



  </div>
    

    </div>

    <div  style={{display:'flex', flexDirection:'row', border:''}}>
    
   <div className='productslogo_div' >

        

  
    
       
<div >
  <div className='productscontent_div' >
  <img  src='/assets/images/consumerapplogo.png'  onMouseOver={click1} style={{height:'50px', width:'50px'}}  />
  </div>
</div>

<div class="wrapper">
  <div class="arrow">
    <div class="arrow-head"></div>
    <div class="arrow-body"></div>
  </div> 

  <div class="arrow">
    <div class="arrow-body"></div>
    <div class="down-arrow-head">    </div>
  </div>  
</div> 



<div>
  <div className='productscontent_div'>
  <img src='/assets/images/businessapplogo.png' onMouseOver={click2} style={{height:'50px', width:'50px'}}/>


  </div>

</div>
<div class="wrapper">
  <div class="arrow">
    <div class="arrow-head"></div>
    <div class="arrow-body"></div>
  </div> 

  <div class="arrow">
    <div class="arrow-body"></div>
    <div class="down-arrow-head">    </div>
  </div>  
</div> 


<div>
<div className='productscontent_div'>
<img    src='/assets/images/dashboardlogo.png' onMouseOver={click3} style={{height:'50px', width:'50px'}}/>


</div  >
</div>




</div>

    <div  style={{marginTop:'80px', display:'flex', border:'', width:'100%', marginLeft:'', height:'100%'}} >

  



    <div id='div1' className='div1' style={{display:'flex'}} >
        <div className='imagediv1'  >
       <div className='consumerdiv_heading' >
         <h2  >An app which will be an experiential marketplace for your products. </h2>
       </div>


       <div className='consumer_div' >
      
       <div className='consumerdiv1' >  
       <img  className='gifimagediv' src='/assets/images/feature-dashboard.gif' />
       
       </div>
       <div  className='consumerdiv2'>
       <div className='consumerinsideheading'>

           <h4>Here's how it works</h4>
           </div>
               <div className='consumercontent'>
                <div>
                  <div className='qrcodediv'>
                    <div className='qrcodedivhead' >  
                    <h2> Download App </h2>

                    </div>
                    <div className='qrcodedivbody' >  
                    <img  className='qrcodeimage' src='/assets/images/arnxtqrcode.png'/>

                     </div>
                     <div className='qrcodedivfoot' > 
                     <h2> Scan the QR </h2> 

                     </div>

                  </div>

                </div>
                <div>
                <div className='searchcategorydiv'> 
                <div className='searchcatdivhead'>
                  <h2>Search Product</h2>

                </div>
              
                   <div className='searchcatdivfoot' >
                   <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-7" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-7">
        
       


       
        
      Furnitures
      
      <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
         <ul className='categorylist' >
          <li><p>Bar stools</p></li>
          <li><p>Cabinets</p></li>
          <li><p>Wardrobes</p></li>
          <li><p>Sidetable</p></li>
          <li><p>Dining table</p></li>
          <li><p>Coffee table</p></li>
          <li><p>Chair</p></li>
          <li><p>Bed</p></li>
          <li><p>Sideboard</p></li>
          <li><p>Centre Table</p></li>
          <li><p>Bedside Table</p></li>
          <li><p>Stool</p></li>
          <li><p>Bean bag</p></li>
          <li><p>Sofa</p></li>
          <li><p>Bookshelf</p></li>
          <li><p>Study table</p></li>
          <li><p>Bench</p></li>
          <li><p>Table</p></li>


         </ul>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-8" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-8">
           Bathroom  
           <span className='plussymdiv' ><FaPlusSquare/></span>
           
         
      </label>

     
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
        <ul className='categorylist' >
          <li><p>Commode</p></li>
          <li><p>Shower</p></li>
          <li><p>Faucet</p></li>
          <li><p>Bath tub</p></li>
          <li><p>Basin</p></li>
          </ul>
         
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-9" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-9">
     
       Furnishing
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
        <ul className='categorylist'>
          <li><p>Rugs</p></li>
          <li><p>Blinds</p></li>
          <li><p>Quilts</p></li>
          <li><p>Bedsheets</p></li>
         
          </ul>
         
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-10" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-10">
     
      
       Electrical
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
        <ul className='categorylist' >
          <li><p>Light</p></li>
          <li><p>Chandelier</p></li>
          <li><p>Switch</p></li>
          <li><p>Floor lamp</p></li>
          <li><p>Fan</p></li>
          <li><p>Water filter</p></li>

         
          </ul>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-11" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-11">
    
       Electronics
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
       
        <ul className='categorylist' >
          <li><p>Ac</p></li>
          <li><p>Microwave</p></li>
          <li><p>Washing machine</p></li>
          <li><p>Refrigerator</p></li>
          <li><p>Tv</p></li>
         

         
          </ul>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-12" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-12">
      
       Decoratives
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <ul className='categorylist'> 
          <li><p>Metal art</p></li>
          <li><p>Painting</p></li>

          </ul>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-13" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-13">
   
       Walls
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
        <ul className='categorylist' >
          <li><p>Animal wallpapers</p></li>
          <li><p>Abstract</p></li>
          <li><p>Botanical</p></li>
          <li><p>Floral</p></li>
          <li><p>Geometric</p></li>
          <li><p>Kids</p></li>

          <li><p>Modern</p></li>

         

         
          </ul>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-14" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-14">
      
       Floors
       <span className='plussymdiv' ><FaPlusSquare/></span>
       </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
        <ul className='categorylist' >
          <li><p>Bathroom floor tiles</p></li>
          <li><p>Kitchen floor tiles</p></li>
          <li><p>Outdoor floor tiles</p></li>
          <li><p>Living Room floor tiles</p></li>
          <li><p>Bedroom floor tiles</p></li>
          <li><p>Floor tiles for commercial spaces</p></li>

          <li><p>Modern</p></li>

         

         
          </ul>
        </div>
      </div>
    </div>

                   </div>

                </div>

                </div>

                <div>

                  <div className='viewindiv'>
                   <div className='viewindivhead'>
                    <h2>View in your space</h2>

                   </div>
                   <div className='viewindivbody'>

                   <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">
        
         <span className="fas fa-object-group" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>


       
        
      Place Objects 
      <span className='plussymdiv' ><FaPlusSquare/></span>
      </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext'>
          Place furniture, Appliances etc. from an large collection. 
          </p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">
      <span className="fas fa-cut" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>
          Customise
          <span className='plussymdiv' ><FaPlusSquare/></span>
      </label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext' >
          Change position, rotation or scale of your product in
                      realtime
          </p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">
      <span className="fas fa-border-all" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>
      Change your wall colors
      <span className='plussymdiv' ><FaPlusSquare/></span></label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext'> 
          Tryout vast collection of wallpapers or tiles
          </p>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-4">
      <span className="fas fa-share-alt-square" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>
      
       Save and Share
       <span className='plussymdiv' ><FaPlusSquare/></span></label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext'>
          Save your designs and share with others
          </p>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-5">
      <span className="fas fa-shopping-cart" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>
       Buy Directly
       <span className='plussymdiv' ><FaPlusSquare/></span></label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext'>
          Purchase products directly from the app
          </p>
        </div>
      </div>
    </div>
    <div class="faq-drawer">
      <input class="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-6">
      <span className="fas fa-exchange-alt" style={{backgroundColor:'yellow', marginRight:'10px'}} ></span>
       Change floor tiles
       <span className='plussymdiv' ><FaPlusSquare/></span></label>
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p className='productstext'>
          Change tiles on your floors
          </p>
        </div>
      </div>
    </div>



                   </div>

                  </div>
                </div>


               </div>
 

       </div>
      
     
          


         

         {/*
         <div style={{width:'100%', height:'100%', border:''}} >

           <div className='consumerarrow_div'>
            <div style={{flex:'1', marginTop:'200px', width:'200px', height:'200px'}}>
           <div  className='circle'>
                <h3   className='textcircle'>Features</h3>

             </div>



<div className='arrow_divdash1' >
<div  className='arrowline1' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Place objects</h5>

  </div>


</div>
<div className='arrow_divdash2'>
<div  className='arrowline2' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify'}} className='textfeatures'>Customize</h5>

  </div>


</div>
<div className='arrow_divdash3'>
<div  className='arrowline3' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Change wall colors</h5>

  </div>


</div>
<div className='arrow_divdash4'>
<div  className='arrowline4' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Save and share</h5>

  </div>


</div>
<div className='arrow_divdash5'>
<div  className='arrowline5' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Compare</h5>

  </div>


</div>
<div className='arrow_divdash6'>
<div  className='arrowline6' style={{}}  ></div>
<div className='' style={{border: '', width:'50px', height:'50px'}} >
<div  className='triangle-right'></div>


   </div>
   <div style={{}} >
    <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Change floors</h5>

  </div>


</div>




</div>

</div>

      </div> 

      */}



       </div>

          


        </div>
    </div>
    <div id='div2'  className='div2'  style={{marginLeft:'300px', height:'100%', marginBottom:'80px'}}>
    <div className='imagediv2' style={{}}>
    <div className='consumerdiv2_heading'>
         <h2 className='business_heading'  >Have some exclusive designs only for your clients ?</h2>
         <h2 className='business_heading'> OR </h2>
         <h2 className='business_heading' >Need white label solutions to grow your revenue ? </h2>

         
       </div>
       <div className='bussiness_container'>
       <img  src='/assets/images/arnxtBapp.png' className='bussiness_image'  />
     <div  className='bussiness_subcontainer'>
        <div className='bussinesslogodiv'>
          <h5  className='textfeatures'>
        For further details
      </h5>

        </div>
        <div  className='btnprod'>
        <PopupButton
                
                
                className="btnproducts"
               
            
            url="https://calendly.com/arnxt-meet/30min"
          
            rootElement={document.getElementById("root")}
            text="Contact us"  
          /> 



        </div>
      
      

     </div>



       </div>

   


</div>
        
    </div>
    <div  id='div3' className='div3'    style={{
     marginLeft:'20px', height:'100%',  width: '100%', marginBottom:'80px', border:''}}>
      <div className='businessapp_headingdiv'>
         <h2 className='businessapp_heading'>Manage your products and get all the data you need to boost your sales</h2>
       </div>
    <div className='imagediv3'>
    
    <img  src='/assets/images/dashboard.png' className='dashboard_image'   />

              <div style={{width:'100%', height:'100%', border:''}} >

              <div className='dashboardarrow_div'>
         <div style={{flex:'1', marginTop:'200px', border:'', width:'200px', height:'200px'}}>
            <div  className='circledash' style={{marginLeft:'20px'}}>
               <p   className='textcircledash'  >Analytics</p>

            </div>

        
          
            <div className='arrow_proddash1'>
             <div  className='arrowprodline1' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Brand comparison</h5>

                </div>


             </div>
             <div className='arrow_proddash2'>
             <div  className='arrowprodline2' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'> Category Specific Reports</h5>

                </div>


             </div>
             <div className='arrow_proddash3'>
             <div  className='arrowprodline3' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Enquiry Report</h5>

                </div>


             </div>
             <div className='arrow_proddash4'>
             <div  className='arrowprodline4' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Product Specific Report</h5>

                </div>


             </div>
             <div className='arrow_proddash5'>
             <div  className='arrowprodline5' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Competitve Analysis</h5>

                </div>


             </div>
             <div className='arrow_proddash6'>
             <div  className='arrowprodline6' style={{}}  ></div>
             <div className='' style={{border: '', width:'50px', height:'50px'}} >
              <div  className='triangle-right'></div>


                 </div>
                 <div style={{}} >
                  <h5 style={{textAlign:'justify', fontWeight:''}} className='textfeatures'>Top competitors</h5>

                </div>


             </div>
     
     
     

         </div>

        </div>

                    </div> 
          </div>
              
  

    </div>

     
   </div>
   </div>





      
    </div>
     )
  
}

export default ProductsHome;
