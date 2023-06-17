import React from 'react'
import { FaTicketAlt, FaTimesCircle } from 'react-icons/fa'

const Test = () => {
  return (
    <div>

   {
    /*

  <div className="footer bg-gray"  style={{backgroundColor:'#001E6C'}}>
          <div className="container"   style={{}}>
            <div className="">
              <div className="col-lg-12">
               <div  className='footermaindiv' >
             
                <div  className='footerdiv_1' style={{}}>
                  <div className='footerimage_div'>
                  <img  src='/assets/images/quleeplogomain.png' className='footerimage'/>
                  </div>
                  <div className='footer_comdiv1'>
                    <div className='comdiv_header1'>
                    
                    
                      <p  className='footercompanyp'>Company</p>
                      <div className='logom'>
                        <img   src='/assets/images/quleeplogomain.png' className='logoimagem' />

                      </div>
                        
                     

                    </div>
                    <div className='comdiv_content1'>
                      <p  className='footercompanytext'>
                        
                      Quleep is a leading innovation-driven technology company having the advantage of building next-generation technology products / services for modern industries, enterprises, and businesses. Quleep specialises in developing B2B2C Augmented reality product for business across the Globe. We are expert in creating immersive and outstanding visual delight that intensify human interaction through emerging technologies.  Lets help you to create experiential solutions to accelerate business with customer delight.

                      </p>

                    </div>

                  </div>
          

                </div>

                <div className='footerdiv_2' style={{}}>
                  <div  style={{border:'', width:'350px', height:'100%'}}>
                  <div className='footer_comdiv2'>
                    <div className='comdiv_header2'>
                    
                      <p  style={{ fontSize:'18px', fontFamily:'Manrope, san-serif', color:'white'}} >Contact us</p>
                        
                     

                    </div>
                    <div className='comdiv_content2' >
                      <p    className='footercontacttext'>
                        
                          
                      Noida - Serenia, IHDP Business Park,

                            Sector 127, Noida-201303 

                            
                               </p>

                                </div>
                                <div className='comdiv_content3'> 
                                <p    className='footercontacttext'>
                                Kolkata - 11th floor Kamdhenu Building

                                   75C, Park Street, Kolkata-700016 .
                               
                                </p>

                                </div>
                                <div className='comdiv_content3'> 
                                <p    className='footercontacttext'>
                                +91 9883019518
                                </p>

                                </div>
                                <div className='comdiv_content4'>
                                <p  className='footercontacttext'>
                                reach us at care@arnxt.com
                                </p>
                                  
                                </div>

                            
                                

                  

                  </div>

                  </div>

                </div>
             
        
                <div className='footerlogo_div'>
                  <div className='logodiv1'>
                  <a href="https://play.google.com/store/apps/details?id=com.quleep.ARnxt" target="blank" ><img className="" 
                  style={{width:'120px', height:'50px'}}
                   src="assets/images/playstorefinal.png"  alt="playstore" /></a>
                 
                 
               


                  </div>
                 
                  <div className='logodiv2'>
                  <a href="https://apps.apple.com/in/app/arnxt/id1598795711" target="blank" > <img className=""
                  style={{width:'120px', height:'50px'}}
                   src="assets/images/applestorelogo.jpg"  alt="apple" /> </a>
                    
                

                
                   </div>

                </div>

               
                



               </div>
               
                <div className="social-container">
                  <span className="fa-stack">
                    <a href="https://www.facebook.com/ARNXT/" target="blank">
                      <i className="fas fa-circle fa-stack-2x"></i> 
                      <img className="footer-image" src="assets/images/facebook.png" alt="" />
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="https://twitter.com/ARNXT1" target="blank">
                    <img className="footer-image-twitter" src="assets/images/twitter.png" alt="" />
                       <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i> 
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.linkedin.com/company/arnxt"
                      target="blank"
                    >
                      <img className="footer-image" src="assets/images/linkedin.png" alt="" />
                       <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-linkedin fa-stack-1x"></i> 
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.instagram.com/arnxt2021/"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/instagram.png" alt="" />
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-instagram fa-stack-1x"></i> 
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/youtube.png" alt="" />
                     <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-youtube fa-stack-1x"></i> 
                    </a>
                  </span>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-center mx-auto">
                  <div  className='copyright_div'    style={{marginTop:''}}>
                  <p className="p-small statement">
                    Copyright @ 2023, Quleep. All Right Reserved
                    <Link to="/"></Link>
                  </p>
                  </div>
               
                </div>
                

               
                <div className='footer_newsletter'>
               
                  <div className='footer_newslettercontent' >
                    <h5 className='footernews_h' style={{fontFamily:'Manrope, san-serif'}}>Subscribe to the arnxt weekly and enjoy seven days of<br/> augmented reality news in one newsletter</h5>

                  </div>
                  <div  style={{display:'flex'}}>
                  <div className='footer_newsletteremail'>

                    < input type='email' 
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                    
                    className=' input_email'  placeholder='Email' required />
                    <button className='btnfooter'  onClick={submithandler}>Subscribe</button>
                         </div>

                       
                         
 

                  </div>
                  <p style={{}} >{ message && <p  className='messagefooter' > <FaExclamationCircle/>   {message}   </p>}</p>
                 

                </div>
               
              
                </div>
              </div>
          
          </div>
     



       </div>
       

      
        <button id="myBtn">
          <img src="assets/images/up-arrow.png" alt="alternative" />
        </button>

   



         <div>
       <div className="cardblog">
<img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
<div className="card-body1">
<h5 className="card-title">Opportunities for AR in Retail Market</h5>
<p className="card-text">Retailers are instead turning to AR to help customers digitally test out thousands of beauty products to assist in buying decisions.......</p>
<a href="/blog" className="btn btn-primary">Read more.</a>
</div>
</div>
       </div>
       <div>
       <div className="cardblog" >
<img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
<div className="card-body1">
<h5 className="card-title">Augmented reality stating the technology as differentiator, its use case specifically towards Retail.</h5>
<p className="card-text">What Is Virtual Reality (VR)?.......</p>
<a href="/blogsecond" className="btn btn-primary">Read more.</a>
</div>
</div>
       </div>
       
       <div>
       <div className="cardblog" >
<img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
<div className="card-body1">
<h5 className="card-title">Augmented reality</h5>
<p className="card-text">  Augmented reality in our surroundings. To have a better understanding of this technology we need to know .....</p>
<a href="/blogthird" className="btn btn-primary">Read more.</a>
</div>
</div>
       </div>
       <div>
       <div className="cardblog" >
<img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
<div className="card-body1">
<h5 className="card-title">What is Augmented Reality (AR) and how it can be used</h5>
<p className="card-text">  Augmented Reality is an enhanced and interactive experience in which  .....</p>
<a href="/blogthird" className="btn btn-primary">Read more.</a>
</div>
</div>
       </div>
       
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
                          <option value="Rak"/>

    

    */

   }

</div>


      
   
  )
}

export default Test
