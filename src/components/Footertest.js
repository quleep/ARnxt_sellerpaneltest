import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios'
import swal from 'sweetalert';
import { FaExclamationCircle } from 'react-icons/fa';

const newsletterurl= 'https://adtzd6cy7j.execute-api.ap-south-1.amazonaws.com/production/newsletter'

function Footertest() {

const [email, setEmail] = useState('')
const [message, setMessage] = useState('')


const submithandler=(event)=>{

  if(email === ''){
    setMessage( `Please give your email`);
    setTimeout(()=>{
      setMessage('')
    },3000)
    return
  }
  event.preventDefault();

  const requestBody={
    email : email
  }

  axios.post(newsletterurl, requestBody).then(response=>{

    swal({
      title: " Thanks for subscribing to ARnxt weekly ",
    
      icon: "success",
     

  })

  }).catch(error=>{
    if(error.response.status=== 401 || error.response.status === 403){
      setMessage(error.response.data.message)
    }else{
      setMessage('sorry backend server is down');
    }
  
  })

  
}

    return (
      <div>  

        <div className='footermainbody'>
        <div className='footerbody'> 
        <div>
          <div className='companycontainer'>
            <div className='companyimagecontainer'>
             <div className='companyimage'>
             <img  src= '/assets/images/quleeplogomain.png'/>

              </div> 
              <div className='companyname'>
             <h3>Company</h3>
                
              </div>
            </div>
            <div  className='companycontentcontainer'>
             
              <p>
              Quleep is a leading innovation-driven technology company having the advantage of building next-generation technology products / services for modern industries, enterprises, and businesses. Quleep specialises in developing B2B2C Augmented reality product for business across the Globe. We are expert in creating immersive and outstanding visual delight that intensify human interaction through emerging technologies.  Lets help you to create experiential solutions to accelerate business with customer delight.
              </p>

            </div>

          </div>
        </div>
        <div>
          <div className='contactuscontainer'>
            <div className='contactusname'> 
            <h3>Contact Us</h3>
            </div>
            <div className='contactuscontentone'>
              <p>
              Noida - Serenia, IHDP Business Park,

Sector 127, Noida-201303 
              </p>

            </div>
            <div className='contactuscontenttwo'>
              <p>
              Kolkata - 11th floor Kamdhenu Building

75C, Park Street, Kolkata-700016 .
              </p>

            </div>
            <div className='contactuscontentthree'>
              <p>
              +91 9883019518
              </p>

            </div>
            <div className='contactuscontentfour'>
              <p>
              reach us at care@arnxt.com
              </p>
              </div>

          </div>
        </div>
        <div>
          <div className='logocontainer'>
            <div className='logocontainerone'>
              <div className='logoimageone'>
              <a href="https://play.google.com/store/apps/details?id=com.quleep.ARnxt" target="blank" ><img className="" 
                  
                   src="assets/images/playstorefinal.png"  alt="playstore" /></a>
              
              </div>

            </div>
            <div className='logocontainertwo'>
            <div className='logoimagetwo'>
            <a href="https://apps.apple.com/in/app/arnxt/id1598795711" target="blank" > <img className=""
                 
                   src="assets/images/applestorelogo.jpg"  alt="apple" /> </a>
                 
              </div>
</div>
<div className='logocontainerthree'>
  
    <div className='footer_newsletteremail'>
    < input type='email' 
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                    
                    className=' input_email'  placeholder='Email' required />
                    <button className='btnfooter'  onClick={submithandler}>Subscribe</button>
      
    </div>
    <p style={{}} >{ message && <p  className='messagefooter' > <FaExclamationCircle/>   {message}   </p>}</p>


</div>


          </div>
        </div>
        
       

        </div>

        <div className='socialiconcontainer'>
          <div className='iconscontainer'>
            <p>  Copyright @ 2023, Quleep. All Right Reserved</p>
            <div className='iconimages'>

              <div>

                <div className='iconimageinside'>
                <a
                      href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/youtube.png" alt="" />
                    
                    </a>

                </div>
          
              </div>
              <div>
              <div className='iconimageinside'>
              <a
                      href="https://www.instagram.com/arnxt2021/"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/instagram.png" alt="" />
                    
                    </a>

                </div>
              </div>
              <div>
              <div className='iconimageinside'>
              <a
                      href="https://www.linkedin.com/company/arnxt"
                      target="blank"
                    >
                      <img className="footer-image" src="assets/images/linkedin.png" alt="" />
                     
                    </a>

                </div>

              </div>
              <div>
              <div className='iconimageinside'>
              <a href="https://twitter.com/ARNXT1" target="blank">
                    <img className="footer-image-twitter" src="assets/images/twitter.png" alt="" />
                     
                    </a>

                </div>
              </div>
              <div>
                <div className='iconimageinside'>
                <a href="https://www.facebook.com/ARNXT/" target="blank">
                     
                      <img className="footer-image" src="assets/images/facebook.png" alt="" />
                    </a>

                </div>
              </div>




         

            </div>

          </div>

        </div>


        </div>
      
       

      </div>
    );
}

export default Footertest;
