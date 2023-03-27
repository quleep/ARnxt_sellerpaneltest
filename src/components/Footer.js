import React from "react";

// importing images
import footerClipart from "../img/footer-clipart.png";
import IndianFlag from "../img/Indian-flag.png";

// importing styles
import "../css/footer.css";

// importing link
import { Link } from "react-router-dom";

// importing icons
import { FaStar } from "react-icons/fa";

// component block
function Footer() {
  // JSX block
  return (
    
    <div  className="footer_div"  >
      
      {/* <div className="ar-footer-before-bg ar-footer-before-font-size ar-font-600">
        <div className="col-10 mx-auto">
          
          <div className="d-flex flex-column ar-grey-font pb-5 mb-5 text-center">
            
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="d-flex flex-column ar-grey-font">
            <p className="ar-font-size-3rem ar-black-font">
              Start your Seller Journey
            </p>
            <p className="wor-wrap my-4">
              Most of the sellers choose ARnxt.com to reach out to millions of
              customers.
            </p>
            <div>
              <Link to="/merchant_register">
                <button
                  type="button"
                  class="btn ar-btn-font-size ar-font-900 ar-drk-pink-bg ar-border-none btn-primary"
                  on
                >
                  Start Selling
                </button>
              </Link>
            </div>
            <p className="my-2">
              It takes only 10 minutes to setup your account
            </p>
          </div>
          <img src={footerClipart} alt="footer illustration" />
        </div>
      </div> */}
      {/* ---  footer section  --- */}
      <div className="px-5 d-flex flex-column pt-5 pb-3 ar-footer-bg">
        <div className="py-2 mb-5 ar-white-bg rounded text-center ar-footer-color-font">
          <p className="my-0 ar-font-800">
            Find out how ARnxt.com is unlocking infinite possibilities for a
            Digital India
          </p>
        </div>
        <hr
          className="ar-footer-line-bg my-4"
          style={{ paddingBottom: "1px", width: "100%" }}
        />
        <div className="d-flex align-items-center justify-content-end mx-5">
          {/* <button
            type="button"
            class="btn ar-sm-btn-font-size ar-font-700 mx-3 ar-drk-pink-bg ar-border-none btn-primary"
          >
            English
          </button> */}
          {/* <button
            type="button"
            class="btn ar-sm-btn-font-size ar-font-700 mx-3 ar-drk-pink-bg ar-border-none btn-primary"
          >
            Hindi
          </button> */}

          <div className="mx-3">
            <img src={IndianFlag} alt="india" />
            <span className="mx-2 ar-white-font">India</span>
          </div>
          <div className="mx-1">
            <FaStar className="ar-white-font mb-1" />
            <span className="mx-2 ar-white-font">Feedback</span>
          </div>
        </div>
        <div>
        
        </div>
        
        <hr
          className="ar-footer-line-bg my-4"
          style={{ paddingBottom: "3px", width: "100%" }}
        />
        <div className="d-flex ar-white-font justify-content-between list-style-none">
          <div  className="footer_content" >
          <div className="mx-3 ar-font-700 ar-font-size-1.9rem " >Selling on ARnxt
           <br/>
           <br/>
          <li className="ar-grey-font" >Requirements to Sell</li>
          <a href="https://www.arnxt.com/pricing"><li className="ar-grey-font">Fees & Pricing</li></a>
          
          <li className="ar-grey-font">Beginners Guide</li>
          <li className="ar-grey-font">Try & Buy </li>
          </div>
          </div>
          <div className="footer_content" >
          <div className="mx-3 ar-font-700 ar-font-size-1.9rem">Grow your Business
          <br/>
           <br/>
          <li className="ar-grey-font">Become a Seller </li>
          <li className="ar-grey-font">Tools to help you grow</li>
          <li className="ar-grey-font">Selling Programs</li>
          <li className="ar-grey-font">Service Provider Network</li>
          
          </div>
          </div>
          <div className="footer_content" >
          <div className="mx-3 ar-font-700 ar-font-size-1.9rem">Seller Resources
          <br/>
           <br/>
          <li  className="ar-grey-font" >Start Selling Guide (PDF)</li>
          <li  className="ar-grey-font">Seller Events</li>
          <li  className="ar-grey-font">Success Stories</li>
          <li  className="ar-grey-font">A to Z GST Guide</li>
          <a href="https://www.arnxt.com/contact"><li  className="ar-grey-font">Contact Us</li></a>
          
          </div>
          </div>
          <div className="footer_content" >
          <div className="mx-3 ar-font-700 ar-font-size-1.9rem">For Registered Sellers
          <br/>
           <br/>
          <li className="ar-grey-font"  >Login to Seller Central</li>
          <li className="ar-grey-font" >Selling Programs</li>
          <li className="ar-grey-font" >Refer a friend to Sell & Earn </li>
          </div>
          </div>
          <div className="footer_content" >
          <div className="mx-3 ar-font-700 ar-font-size-1.9rem">Find us on Social Media 
          <br/>
           <br/>
          <a href="https://www.facebook.com/ARNXT/" target="blank"><li className="ar-grey-font" >Facebook</li></a>
          <a href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A" target="blank"><li className="ar-grey-font">YouTube</li></a>
          <a href="https://www.instagram.com/arnxt2021/" target="blank"><li className="ar-grey-font">Instagram</li></a>
          <a href="https://twitter.com/ARNXT1" target="blank"><li className="ar-grey-font">Twitter</li></a>
          <a href="https://www.linkedin.com/company/arnxt" target="blank"><li className="ar-grey-font">LinkedIn</li></a>
          </div>
          </div>
        </div>
        

        
              <div className="d-flex py-5">
                  
        </div>

        
        <hr
          className="ar-footer-line-bg my-5"
          style={{ paddingBottom: "3px", width: "100%" }}
        />
        
        <div className="d-flex ar-white-font justify-content-between">
          <a href="https://www.arnxt.com/" target="blank"><div className="mx-3 ar-font-900 ar-font-size-2rem">ARnxt.com</div></a>
          
          <ul className="d-flex list-style-none align-items-center ar-font-300">
            <div className="priv_div">
            <a href="https://www.arnxt.com/privacy-policy"><li className="mx-4">Privacy Policy</li></a>

            </div>
            <div className="priv_div" >
            <a href="https://www.arnxt.com/termsandconditions"><li className="mx-4">Terms of Use</li></a>
                
            </div>
            <div className="priv_div" >
            <li className="mx-4">Cookies</li>
            </div>
          </ul>
        </div>
    
      </div>
    </div>
  );
}

export default Footer;
