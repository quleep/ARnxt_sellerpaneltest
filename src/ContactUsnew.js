
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { FaExclamationCircle } from 'react-icons/fa';
import { Metadata } from './layout/MetaData';
import Navbartest from './components/Navbartest';
import { Helmet } from 'react-helmet';
import Footertest from './components/Footertest';

const queryurl= 'https://adtzd6cy7j.execute-api.ap-south-1.amazonaws.com/production/query';



const ContactUsnew = () => {

    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[companyname, setCompanyName] = useState('');
    const[email, setEmail] = useState('');
    const[number, setNumber] = useState('');
    const[query, setQuery] = useState('');
    const [reference, setReference] = useState('')
    const [message, setMessage]= useState('')
  
  
    const submithandler =(event)=>{
        event.preventDefault();

        if(firstname === '' || lastname === '' ||
        companyname === '' || email === '' ||
        email ==='' || number ==='' ||
        query === '' || reference ===''){

            setMessage( ` All fields are Required`);
            setTimeout(()=>{
              setMessage('')
            },3000)
            return

        }
        const requestBody={
            fistname: firstname,
            lastname: lastname,
            companyname: companyname,
            email: email,
            number: number,
            query: query,
            reference: reference

        }
        axios.post(queryurl, requestBody).then(response=>{

            swal({
                title: " Query Submitted will getback to you soon",
              
                icon:"success",
               
        
            })

        }).catch(error=>{

            if(error.response.status=== 401 || error.response.status === 403){
                setMessage(error.response.data.message)
              }else{
                setMessage('sorry backend server is down');
              }
            
        })

        
      
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  

  return (
    <div>
      <Navbartest/>
      <Helmet>
       <title>Contact Arnxt | Augmented Reality MarketPlace </title>
       <meta 
          name='description'
          content='Get in touch with us to create experiential solutions for accelerating your business with customer delight.'
          />
          <meta name='keywords' content='
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
          
          
          
          ' />
       
     </Helmet>
   

<div id="contact" className="contact">
        <div className="container">
          <div className="contactdiv" >
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title"></div>
                <div className='textcontact' >

               
                <h1>We are always open to help you with your questions about our services. <br/> Write to us here!</h1>
                

                
                <p> Can't find what you are looking for?
                  Call us or send us an email. <br/> We will get back to you as soon
                  as possible. Thanks!!
                </p>
                <h2>+91 9883019518  | care@arnxt.com</h2>
              </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={submithandler}>
                
                <div className="form-group">
                  <input
                  value={firstname}
                    onChange={event=>setFirstName(event.target.value)}
                    type="text"
                    className="form-control-input"
                    placeholder="First Name"
                    
                  />
                </div>
                <div className="form-group">
                  <input
                  value={lastname}
                  onChange={event=> setLastName(event.target.value)}
                    type="text"
                    className="form-control-input"
                    placeholder="Last Name"
                
                  />
                </div>

                <div className="form-group">
                  <input
                  value={companyname}
                  onChange={event=>setCompanyName(event.target.value)}
                    type="text"
                    className="form-control-input"
                    placeholder="Company Name"
            
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={event=> setEmail(event.target.value)}
                    className="form-control-input"
                    placeholder="Email"
                
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    value={number}
                    onChange={event=> setNumber(event.target.value)}
                    className="form-control-input"
                    placeholder="Contact Number"
                    
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={query}
                    onChange={event=> setQuery(event.target.value)}
                    className="form-control-input"
                    placeholder="Type Your Queries Here"
            
                  />
                </div>
                <div className="form-group"  style={{}}>
                
                 
               <select className='dropdowncontact'
               style={{}}
                value={reference}
                onChange={event=>setReference(event.target.value)}
               >

                       <option value='' selected="selected" className='optiongot' >Got to know us from</option>
                        
                       <option value='socialmedia' >Social media</option>
                     <option value='friends' >Friends</option>
                      <option value='ads'> Ads</option>
                         <option value='starupcommunity'> Startup community</option> 
                         <option value='others'> Others</option> 

               </select>

                  
                </div>

                <div className="form-group">
                  <button type="submit" className="form-control-submit-button"  >
                    Submit
                  </button>
                </div>
              </form>

              <p style={{}} >{ message && <p style={{color:'red', marginLeft:'50px', fontSize:'20px'}} > <FaExclamationCircle/>   {message}   </p>}</p>
            </div>
          </div>
        </div>
      </div>
    <Footertest/>  
    </div>
  )
}

export default ContactUsnew
