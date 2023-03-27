import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSortNumericUpAlt } from "react-icons/bs";
import url from "../Url";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { PopupButton } from "react-calendly";
import { Metadata } from "../layout/MetaData";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Pricing() {
  // scrolled to top when redirected from a page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function displayError(){
    this.setState({
      error: "Error occured while adding subscription",
    });
  };

  function displaySuccess(id){
    const { planId } = this.state;
    if (!planId) {
      this.setState({
        success: "Subscription added",
        transition: "ready",
        loader: true,
      });
    } else {
      this.setState({
        transitionUpdated: "ready",
        subLoader: true,
        funcId: () => {
          console.log(this);
          this.setState({
            success: "Subscription updated",
            planId: id,
          });
        },
      });
    }
  };

  const [check, setCheck]= useState(true)

  async function displayRazorpay(id, limit) {
    const token = sessionStorage.getItem("token");
    // const res = await loadScript("https://api.razorpay.com/v1/subscriptions");
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      this.setState({
        error: "Razorpay SDK failed to load",
      });
    } else {
      try {
        const data = await fetch(
          `${url}/razorpay/subscription?plan=${id}&token=${token}&limit=${limit}`,
          { method: "POST" }
        ).then((t) => t.json());

        if (data.error) {
          this.setState({
            error: data.error,
          });
        } else {
          const displayError = this.displayError;
          const displaySuccess = this.displaySuccess;
          console.log(data);
          let options = {
            key: data.key,
            subscription_id: data.id,
            name: "ARnxt",
            description: "Monthly Test Plan",
            image: `${url}/razorpay/logo`,
            handler: async function (response) {
              if (typeof response.razorpay_payment_id === "undefined") {
                displayError();
              } else {
                displaySuccess(id);
              }
            },
            prefill: {
              name: data.merchantData.name,
              email: data.merchantData.email,
              contact: data.merchantData.phone,
              company: data.merchantData.company,
            },
            notes: { id: data.merchantData.hex },
            theme: {
              color: "#F37254",
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        }
      } catch (err) {
        this.setState({
          error: "Could not add subscriptions",
        });
      }
    }
  };

  const checkboxfun =()=>{
    if(check === true){
          
    setCheck(false);
        }
        else{
          setCheck(true)
        }

  }

  return (
    <div className="pricetable_div"  >
      <Metadata title={'Price'}/>
      <section id="pricing" className="py-5" style={{backgroundColor:'white'}}>
        <div className=""  >
          <div className="" style={{}} >
            <div className="py-4" >
              <div className="" >
                <div className="headingprice"  >
                  <h1  className="h2-heading" style={{color: 'black', textDecoration: 'underline', fontFamily:'Manrope, san-serif'}}>Plans</h1>
                  <br />
                 
                  <div className="switchbutton" >
                    <div  style={{marginLeft:'-250px', marginBottom:'-40px'}}><h4 style={{color:'rgb(32, 184, 163)', fontFamily:'Manrope, san-serif', fontWeight:'bold'}}>   Quarterly</h4></div>
                    <label className="switch" style={{marginLeft:'-50px'}}>
                  
                      <input type="checkbox" className=""   style={{}} onClick={checkboxfun} />
                      

                      <span className="slider round"  style={{}}></span>
                 
                    </label>
                    <div className="annual_div" >
                      <h4 style={{color:'blue', fontFamily: 'Manrope, san-serif', marginRight:'10px', fontWeight:'bold'}}>Annually</h4>
                      <h4 style={ check ? {color:'blue', fontFamily: 'Manrope, san-serif'}: 
                      {color:'red',fontWeight:'bold', fontFamily: 'Manrope, san-serif'}}></h4>
                      </div>
                  </div>
                 

                  <br />
                </div>
              </div>
            </div>
            <div className="pricetable"  style={{border:''}} >
          
            <table className="table table-bordered table-light"  style={{}}>
             
              <thead  >
                <tr>
                  <th style={{ width: "900px" }} scope="col">
                    <h2 className=""  style={{fontFamily:'Manrope, san-serif'}}>Features</h2>{" "}
                  </th>

                  <th scope="col" style={{width:'600px'}}>
                  <button className="btnall"  style={{width:'180px', marginBottom:'10px'}}>
                  <a href="/registernew">Start 14 day trial</a> 
                    </button>
                    <h4 className="plan-text">Basic</h4>
                    <div style={{display:'flex', border:'', marginLeft:'10px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}} >
                   
                      <div  style={ check ? {flex:'3', border:'', width:'70px', marginLeft:'40px', marginRight:''} :{flex:'3', border:'', width:'70px', marginLeft:'20px', marginRight:''}}> 
                      <div  style={{display:'flex'}}>
                      <h5 style={{marginRight:'5px'}}  className="plan-text" >INR</h5>
                      <h5  className="price-text" style={ check ?  {fontSize:'20px', textDecoration:'',marginLeft:'',marginRight:'5px', marginTop:''}:
                       {fontSize:'15px', textDecoration:'line-through',marginLeft:'',marginRight:'5px', marginTop:'3px'}} >
                        {check? '8999': '35988'}</h5>
                        <h5  className="price-text" style={{fontSize:'20px' }} > {check ? '': '29999'} </h5>
                        <h5 className="year-text" style={{fontSize:'20px'}}>/-</h5>

                      </div>
                  
                     

                      </div>
                    

                         

                    </div>
                 
                  
                  
                    {/* <a className="btn-solid-reg" href="#contact">Start 14 day trail</a> */}
                   
                  </th>
                  <th scope="col" style={{width:'800px'}}>
                  <button className="btnall"  style={{width:'180px', marginBottom:'10px'}}>
                  <a href="/registernew">Start 14 day trial</a> 
                    </button>
                    <h4 className="plan-text">Premium</h4>
                    <div style={{display:'flex', border:'', marginLeft:'-5px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}} >
                   
                   <div  style={ check ? {flex:'3', border:'', width:'70px', marginLeft:'50px', marginRight:''} : {flex:'3', border:'', width:'70px', marginLeft:'20px', marginRight:''}}> 
                   <div  style={{display:'flex'}}>
                   <h5 style={{marginRight:'5px'}}  className="plan-text" >INR</h5>
                   <h5  className="price-text" style={ check ?  {fontSize:'20px', textDecoration:'',marginLeft:'',marginRight:'5px', marginTop:''}:
                    {fontSize:'15px', textDecoration:'line-through',marginLeft:'',marginRight:'5px', marginTop:'3px'}} >
                     {check? '35999': '143996'}</h5>
                     <h5  className="price-text" style={{fontSize:'20px' }} > {check ? '': '129999'} </h5>
                     <h5 className="year-text" style={{fontSize:'20px'}}>/-</h5>

                   </div>
               
                  

                   </div>
                 

                      

                 </div>
                
                  
                    {/* <a className="btn-solid-reg" href="#contact">Start 14 day trail</a> */}
                    
                  </th>

                  <th scope="col" style={{width:'1000px'}}>
                  <button className="btnall"  style={{width:'180px', marginBottom:'10px'}} >
                  <a href="/registernew">Start 14 day trial</a> 
                    </button>
                    <h4 className="plan-text">Business Pro</h4>
                    <div style={ check ? {display:'flex', border:'', marginLeft:'40px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}:
                    {display:'flex', border:'', marginLeft:'10px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}} >
                   
                   <div  style={{flex:'3', border:'', width:'70px', marginLeft:'5px', marginRight:''}}> 
                   <div  style={{display:'flex'}}>
                   <h5 style={{marginRight:'5px'}}  className="plan-text" >INR</h5>
                   <h5  className="price-text" style={ check ?  {fontSize:'20px', textDecoration:'',marginLeft:'',marginRight:'5px', marginTop:''}:
                    {fontSize:'15px', textDecoration:'line-through',marginLeft:'',marginRight:'5px', marginTop:'3px'}} >
                     {check? '99999': '399996'}</h5>
                     <h5  className="price-text" style={{fontSize:'20px' }} > {check ? '': '369999'} </h5>
                     <h5 className="year-text" style={{fontSize:'20px'}}>/-</h5>

                   </div>
               
                  

                   </div>
                 

                      

                 </div>
                    
                  
                  </th>

                  <th scope="col"  style={{width:'600px'}}>
                  <button className="btnall" style={{width:'180px', marginBottom:'10px'}}>
                     <a href="/registernew">Start 14 day trial</a> 
                    </button>
                    <h4 className="plan-text">Enterprise</h4>
                    <div style={ check ? {display:'flex', border:'', marginLeft:'50px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}: 
                    {display:'flex', border:'', marginLeft:'50px', width:'100%', height:'60px', flexDirection:'row',paddingBottom:'0px'}} >
                   
                   <div  style={{flex:'3', border:'', width:'70px', marginLeft:'5px', marginRight:''}}> 
                   <div  style={{display:'flex'}}>
                   <h5 style={{marginRight:'5px'}}  className="plan-text" ></h5>
                   <h5  className="price-text" style={ {fontSize:'20px', textDecoration:'',marginLeft:'',marginRight:'5px', marginTop:''}}
                   >
                       Custom</h5>
                    
                    

                   </div>
               
                  

                   </div>
                 

                      

                 </div>
                  
                   
                   
                  </th>
                </tr>
              </thead>

              <tbody style={{}} >
                <tr  style={{}}>
                  <th scope="row" style={{fontFamily:'Manrope, san-serif', fontSize:'15px'}}>Number of Products</th>
                  <td   style={{fontWeight:'bold'}}>10 </td>
                  <td  style={{fontWeight:'bold'}}>100</td>
                  <td style={{fontWeight:'bold'}}>500</td>
                  <td style={{fontWeight:'bold'}}>Enterprise</td>
                </tr>

                <tr>
                  <th scope="row" style={{fontFamily:'Manrope, san-serif', fontSize:'15px'}}>Number of 3D views/month</th>
                  <td style={{fontWeight:'bold'}}>{check ? '10000':'50,000'}</td>
                  <td style={{fontWeight:'bold'}}>{check ? '50,000':'2,50,000'}</td>
                  <td style={{fontWeight:'bold'}}>Unlimited</td>
                  <td style={{fontWeight:'bold'}}>Unlimited</td>
                </tr>

     

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>3D asset management</th>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>Product variant support</th>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>Dimension visualisation</th>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>QR Code Access to AR</th>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>

           

          

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>White label 3D Viewer</th>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>Manage Multiple Accounts</th>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>Dedicated account manager</th>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-close"><FaTimes/></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fas fa-check"></i>
                  </td>
                </tr>

             

              
                <tr>
                  <th scope="row"style={{fontFamily:'Manrope, san-serif'}}>3D Viewer API</th>
                  <td>
                    Coming Soon
                  </td>
                  <td>
                  Coming Soon
                  </td>
                  <td> Coming Soon</td>
                  <td> Coming Soon</td>
                </tr>
                <tr>
                  <th scope="row" style={{fontFamily:'Manrope, san-serif'}}>
                     Browser based AR application
                  </th>
                  <td>
                    {" "}
                   Coming Soon
                  </td>
                  <td>
                    {" "}
                    Coming Soon
                  </td>
                  <td>
                    {" "}
                    Coming Soon
                  </td>
                  <td>
                    {" "}
                    Coming Soon
                  </td>
                </tr>
              </tbody>
           
             
            </table>
            <div  className="astric_div" style={{marginTop:'60px'}}>
             
             <div className="addonsdiv">
              <div className="addoninsidediv">
              <p  className="" style={{fontSize:'20px', fontWeight:'bold', color:'black'}}>Add-ons available</p>

              </div>
              <div style={{display:'flex', width:'1000px',height:'100%', marginTop:'-40px'}}>
                

                <p  style={{fontFamily:'Manrope, san-serif', marginTop:'30px', marginLeft:'5px', fontWeight:'bold'}}>
                   We have add-ons available for additional views of products. Get in touch with us to upgrade.  </p>
                   <PopupButton
                
                  className="contactusaddon"
              
              url="https://calendly.com/arnxt-meet/30min"
            
              rootElement={document.getElementById("root")}
              text="Contact us"  
            /> 

              </div>

             </div>



             </div>
            </div>
            <div className="contactus_div">
              <div  className="pricingcontact_div">
                <p className="pricingp" >Couldn't decide which plan to choose ? Contact us to get our expertise.</p>


             

              </div>
              <div style={{marginBottom:'100px'}} >
              <PopupButton
                  styles={{ height:'60px'}}
                  className="btnall"
              
              url="https://calendly.com/arnxt-meet/30min"
            
              rootElement={document.getElementById("root")}
              text="Contact us"  
            /> 

              </div>

         

             
              


     
           

             </div>
           
            
          </div>
        </div>
      </section>
   
    </div>
    

  
  );
}

export default Pricing;
