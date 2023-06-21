import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';








function Navbar() {

 const history = useHistory()

  const userEmail= sessionStorage.getItem('user')
if(userEmail){
  const emailID= JSON.parse(userEmail)
  let p_id= emailID.userid
  const u_id =emailID.name
}

  let hamburger = document.querySelector('.hamburger');
  let navlinks = document.getElementById('nav-links');
  let links = document.querySelectorAll('.links');
 
   hamburger && hamburger.addEventListener('click', ()=>{
  navlinks && navlinks.classList.toggle('hide');
  hamburger && hamburger.classList.toggle('lines-rotate');
  })
 
  for(let i=0; i< links.length; i++){
   links[i].addEventListener('click', ()=>{
     navlinks.classList.toggle('hide')
   })
  }


 const dropdownview=()=>{
  document.querySelector('.dropdownnavbar').style.display= 'block'

 } 

 const removedropdown= ()=>{
  document.querySelector('.dropdownnavbar').style.display= 'none'

 }

  return (
  <div >
  <div className='navbarmain' >
  <div class="logo"  style={{cursor:'pointer'}}>
  
    <a href='/'>
    <img src= '/assets/images/arnxtreg.png' /> </a>
  
   
  </div>
    <div className='hamburger'>
      <span className='lines'></span>
      <span className='lines'></span>
      <span className='lines'></span>
     </div>
     <ul id='nav-links'>
       
     

       <li  onMouseOver={removedropdown}><a href='/product' className='links'>Product</a></li>
       <li  onMouseOver={removedropdown}><a href='/price' className='links'>Pricing</a></li>
       <li  className= 'resource' onMouseOver={dropdownview} ><a className='links'>Resources</a>  </li>
       <div className='dropdownnavbar'  onMouseLeave={removedropdown}   >
         <a href='/career'>Career</a>
         <a href='/blog'>Blogs</a>
         <a href='/contact'>Contact Us</a>
         <a href='/privacypolicy'>Privacy policy</a>
         <a href='/terms&conditions'>Terms & Conditions</a>

        
        </div>

       <li  onMouseOver={removedropdown}><a href='/about' className='links'>About Us</a></li>
   
       <button className='loginnavbar' type='submit'   ><a style={{cursor:'pointer'}} href='/login'>Login</a></button>

     </ul>

    </div> 
</div>

  ) 
  
 
}

export default Navbar;