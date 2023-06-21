import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom'

import { setUserSession } from '../service/AuthService';
import { Metadata } from '../layout/MetaData';
import Navbartest from './Navbartest';
import Footertest from './Footertest';
import Navbar from './Navbar';





const loginUrl= 'https://4xuh6eqvr6.execute-api.ap-south-1.amazonaws.com/production/login'

const LoginNew = ({history}) => {

  const [res, setRes]= useState('');

  useEffect(()=>{
      if(res === 200){
          history.push('/dashboard')
        
        
      }
  },[history,res])


  const [email, setEmail]= useState('');  
  const [password, setPassword]= useState('');  
  const [message, setMessage] = useState(null);
  

  const submitHandler=(event)=>{
      event.preventDefault();
      if( email==='' || password===''){
          setMessage('Email and Password are required')
          setTimeout(()=>{
            setMessage('')
          },3000)
          return
      }
      

      const requestBody={
          email: email,
          password: password
      }
      axios.post(loginUrl, requestBody).then(response=>{
          
          setUserSession(response.data.user, response.data.token)
          setRes(response.status)
          

      }).catch(error=>{
          if(error.response.status ===401 || error.response.status === 403){
              setMessage(error.response.data.message)
              setTimeout(()=>{
                  setMessage('')
                },3000)
          }else{
              setMessage('sorry server busy please try after some time')
          }
      })
  }


  return (
  

<section className="h-100 " style={{backgroundColor:'#eee'}}>
  <Navbar/>
  
  <div className="container py-5 h-100"   >
  <Metadata title={'Login'}/>
    <div className="loginmaindiv">
      <div className="col-xl-10 col-sm-6">
        <div className="card5 rounded-3 text-black">
          <div className="logincontainer">
            <div className="col-lg-6  ">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center"  style={{marginBottom:'20px'}}>
                  <img src="/assets/images/logo.png"
                
                    style={{width:'185px'}} alt="logo"/>
                  
                </div>

                <form  onSubmit={submitHandler}>
                  <p style={{marginBottom:'20px', fontSize:'18px', color:'black', fontFamily:'Manrope, san-serif', fontWeight:'bold'}} >Please login to your account</p>

                  <div className="form-outline mb-4">
                    <div className='labellogin1' >
                  <label className="form_label " for="form2Example11"  >Email Id</label>


                    </div>

                    <input type="email"
                     onChange={event=> setEmail(event.target.value)} id="form2Example11" className="form-control"
                      placeholder=" " />
                  </div>

                  <div className="form-outline mb-4">

                    <div className='labellogin2' >
                  <label className="form_label" for="form2Example22"  >Password</label>



                    </div>

                    <input type="password"
                    onChange={event=> setPassword(event.target.value)} id="form2Example22" className="form-control" />
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btnall" type="submit">Log
                      in</button>
                   
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4 "  >
                    <p className="mb-0 me-2" style={{fontFamily:'Manrope, san-serif', fontWeight:'bold'}}>Don't have an account?</p>
                    <button type="button" className="btnlogin">
                    <Link className="" to="/register"  style={{color:'black'}}>Create new</Link>

                    </button>
                  </div>

                </form>
                {message && <p  style={{color:'red'}} >{message}</p>}

              </div>
            </div>
           
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ height:'660px', marginTop:'-60px'}}>
              <div className='imagelogin' >
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="" style={{fontFamily:'Manrope, san-serif', fontSize:'30px', fontWeight:'bold', marginBottom:'20px'}}>We are more than just a company</h4>
                <p className=""style={{fontFamily:'Manrope, san-serif', fontSize:'20px', fontWeight:'bold'}}> 
                Partner with us to build an experiential marketplace for your customers.</p>
              </div>

              </div>
            
            </div>

          
           
          </div>
        </div>
      </div>
    </div>
 
  </div>
 <Footertest/> 
</section>

      
    
  )
}

export default LoginNew;
