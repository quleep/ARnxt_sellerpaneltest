import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';








function Navbar() {
  const [loginuser, setLoginUser] = useState(false)

 const history = useHistory()

  const userEmail= sessionStorage.getItem('user')
if(userEmail){
  
  const emailID= JSON.parse(userEmail)
  let p_id= emailID.userid
  const u_id =emailID.name
}

  let hamburger = document.querySelector('.hamburgerall');
  let crossburger = document.querySelector('.hamburgercross');
  let navlinks = document.getElementById('navmain');
  let links = document.querySelectorAll('.links');
 
   hamburger && hamburger.addEventListener('click', ()=>{
    console.log('hellow')
    
    document.querySelector('#navmain').classList.remove('hamlist')
    document.querySelector('#navmain').classList.add('hamlistmob')
    document.querySelector('.hamburgerall').style.display = 'none'
    document.querySelector('.hamburgercross').style.display = 'flex'
 
  })
  crossburger && crossburger.addEventListener('click', ()=>{
    console.log('hellow')
    
    document.querySelector('#navmain').classList.remove('hamlistmob')
    document.querySelector('#navmain').classList.add('hamlist')
    document.querySelector('.hamburgerall').style.display = 'flex'
    document.querySelector('.hamburgercross').style.display = 'none'
 
  })
 
  for(let i=0; i< links.length; i++){
   links[i].addEventListener('click', ()=>{
     navlinks.classList.toggle('hidenavbar')
   })
  }


 const dropdownview=()=>{
  document.querySelector('.dropdownnavbar').style.display= 'block'

 } 

 const removedropdown= ()=>{
  document.querySelector('.dropdownnavbar').style.display= 'none'

 }
 const logouthandler =()=>{
  sessionStorage.removeItem('user')
  sessionStorage.removeItem('token')
 }
 const handleimageclick =()=>{
    history.push('/')
 }

  return (
  <div >
  <div className='navbarmain' >
  <div class="logo"  style={{cursor:'pointer'}} onClick={handleimageclick} >
  
  
    <img src= '/assets/images/arnxt logo.png' /> 
  
   
  </div>
    <div className='hamburgerall'>
      <span className='linesall'></span>
      <span className='linesall'></span>

     
      <span className='linesall'></span>
     </div>
     <div className='hamburgercross'>
      <span className='linesnew'></span>
      <span className='linesnewcross'></span>

     
      
     </div>
     <ul className='hamlist' id='navmain'>
       
     
       {
          typeof sessionStorage.getItem('user') === 'string' ?
          <li  onMouseOver={removedropdown}><a href='/dashboard' className='links'  >Dashboard</a></li> :
          <p></p>
       } 
       <li  onMouseOver={removedropdown}><a href='/product' className='links'>Product</a></li>
       <li  onMouseOver={removedropdown}><a href='/price' className='links'>Pricing</a></li>
       <li  onMouseOver={removedropdown}><a href='/arview' className='links'>View in AR</a></li>

       <li  className= 'resource' onMouseOver={dropdownview} ><a className='links'>Resources</a>  </li>
       <div className='dropdownnavbar'  onMouseLeave={removedropdown}   >
        
         <a href='/blog'>Blogs</a>
         <a href='/contact'>Contact Us</a>
         <a href='/privacypolicy'>Privacy policy</a>
         <a href='/terms&conditions'>Terms & Conditions</a>

        
        </div>

       <li  onMouseOver={removedropdown}><a href='/about' className='links'>About Us</a></li>
       {
        typeof sessionStorage.getItem('user') === 'string' ?
       <button className= 'logoutnav' type='submit'   ><a style={{cursor:'pointer'}} href='/login' onClick={logouthandler} >Logout</a></button>
       :
       <button className= 'loginnavbar' type='submit'   ><a style={{cursor:'pointer'}} href='/login'>Login</a></button>



       }

     </ul>

    </div> 
</div>

  ) 
  
 
}

export default Navbar;