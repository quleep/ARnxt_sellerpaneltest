import React, { useState, useEffect } from 'react'
import url from '../serverURL';



import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    NavLink
} from 'reactstrap';



// importing images
import logo from "../img/logo.png"

 
function Navbartest() {

  
    const colors = [
        '#50C878',
        
        '#3EB489',
        '#3CB371',
        '#7C9D8E',
        '#78866B',
        '#848B79',
        '#617C58',
        '#728C00',
        '#6B8E23',
      ];
  

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [secDropdownOpen, setsecDropdownOpen] = useState(false);

    const [obj, setObj] = useState({ name: '', user: null, admin: false });

    const toggle = () => setIsOpen(!isOpen);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const secToggleDropdown = () => setsecDropdownOpen(prevState => !prevState);

    const { name, user, admin } = obj;
    const [email, setEmail] = useState(false);
    const [value, setValue]= useState(0)

  



    //------------------Animation fuctions
    const drawerAnimatorUserBox = e => {
        let flag = document.getElementById('userbox__items').classList.toggle('drawer-down');
        function offFocus(e)
        {
            document.getElementById('userbox__items').classList.remove('drawer-down');
            window.removeEventListener("click",offFocus);
        }
        if(flag)setTimeout(() => window.addEventListener('click', offFocus), 1); 
    };


    const drawerAnimatorMerchBox = e => {
        let flag = document.getElementById('merchbox__items').classList.toggle('drawer-down');
        function offFocus(e) {
            document.getElementById('merchbox__items').classList.remove('drawer-down');
            window.removeEventListener("click", offFocus);
        }
        if (flag) setTimeout(() => window.addEventListener('click', offFocus), 1);
    };


    const dropDownAnimator = e => {

        let flag = document.getElementById('dropDownNav').classList.toggle('dropDownNavToggleAni');
        function offFocus(e) {
            document.getElementById('dropDownNav').classList.remove('dropDownNavToggleAni');
            window.removeEventListener("click", offFocus);
        }
        if (flag) setTimeout(() => window.addEventListener('click', offFocus), 1);

    }
    //-----------------------------


    let token;
    if (typeof sessionStorage.getItem('token') === "string") {
        token = sessionStorage.getItem('token');
    }
    else {
        token = null;
    }
   let seller;
   if(typeof sessionStorage.getItem('user') === "string"){
     seller = sessionStorage.getItem('user');

   }else{
    seller =null;
   }
  

   let newuser;

    useEffect(() => {

      
        const interval = setInterval(() => {
            setValue((v) => (v === 9 ? 0 : v + 1));
      
            
          }, 2000);

     
   
        if (typeof sessionStorage.getItem('token') === "string") {
          
          

            axios.get(`${url}/user/profile/${token}`).then(resp => {
                if (resp.data.user) {
                    setObj({ name: resp.data.name, user: true, admin: false })
                }
                else {
                    if (resp.data.admin) {
                        setObj({ name: '', user: null, admin: true })
                    }
                    else {
                        if (!resp.data.uploadLimit) {
                            setObj({ name: resp.data.name, user: false, admin: false })
                        }
                        else {
                            setObj({ name: resp.data.name, user: false, admin: false })
                        }
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        }

        else {
            setObj({ name: '', user: null, admin: false })
        }

    }, [token,seller])




 

    
    const [navi, setNavi]= useState(false);
    const open= document.querySelector('#navbaropen');
    const close= document.querySelector('#navbar')

    const handleClickopen= (e)=>{
        e.preventDefault();

      setNavi(true);
      close.style.display= 'block'

    }
    const handleClickclose= (e)=>{
      e.preventDefault();
      if(close){
        close.style.display= 'none'
        setNavi(false);
      }
     
    }
      
   

     
   
  


   
    if (typeof sessionStorage.getItem('token') === "string" && user === false) {
        return (



            <div className='' style={{backgroundColor:''}}>
                <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-dark py-3" aria-label="Main navigation"  style={{backgroundColor:'#C5B6F0'}}>
                <div className="container" >
    
                  
                
                     <Link className="navbar-brand logo-text" to="/"> <img className="img-fluid" style={{height:'60px'}} src="assets/images/logo.png" alt="alternative" /> </Link>
    
    
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"   >
                        <div  style={{marginLeft:'180px'}}>
                        <ul className="navbar-nav ms-auto navbar-nav-scroll"  >
                        
                           
                       
           
                          
                           
                             <div className='merch_div'>
                             <div className='merch_divcontent'>
                                <li className="nav-item">
                                    <a className='merch_navlink' href='/merchant_profile' >
                                {name}

                                    </a>
                            </li>

                                </div>
                           
                                <div className='merch_divcontent'>
                                <li className="nav-item">
                                    <a className='merch_navlink' href='/plans'>
                                Plans

                                    </a>
                            </li>

                                </div>
                           
                        
                             <div className='merch_divcontent' >
                             <li className="nav-item">
                                <a className='merch_navlink'  href='/models'>
                                Models


                                </a>
                                
                            </li>

                             </div>

                             
                                 <div className='merch_divcontent' >
                                 <li className="nav-item">
                                    <a className='merch_navlink' href='/transaction_history'>
                                Transaction History
                                         
                                    </a>
                            </li>
                           

                                </div>
                                <div className='merch_divcontent' >
                                <li className="nav-item"  >
                                    <a className='merch_navlink'  href='/merch_guide'>
                                      Merchant Guide

                                    </a>
                               
                            </li>

                                </div>
                                <div className='merch_divcontent' >
                                <li className="nav-item"  >
                                    <a className='merch_navlink' href='/request_Demo'>
                               
                                      RequestDemo

                                    </a>
                            </li>

                                </div>
                             
                           


                                
                                  <div className='merch_divcontent' >
                                  <li className="nav-item" >
                                    <a className='merch_navlink' href='/logout'>
                               
                                     Logout  

                                    </a>
                            </li>
                                </div>
                           
                            
                          
                                
                                </div>   
                         
                        
                         
        
                        </ul>
                        </div>
                      
                    </div> 
        
                </div> 
            </nav>
            </div>
        )
   




    }
    

 


    return (

         

        <div className='' style={{backgroundColor:''}}>

            <div    >

           
            <nav id="navbarExample" className="navbar navbar-expand-lg  navbar-toggleable-md fixed-top navbar-dark py-3" aria-label="Main navigation" 
          
            >
              

                
            <div className="container-fluid"  >

           

              
            
                 <Link className="navbar-brand logo-text" to="/"> <img className="imgfluid"
                  src="assets/images/arnxtreg.png" alt="alternative" /> </Link>

                 
                      
               <button className="navbar-toggler navbar-toggler-right collapsed" data-bs-toggle="collapse" data-bs-target="#navbar"
               aria-controls='navbar' aria-expanded='false' aria-label='Toggle Navigation'>

               <span    id='navbarclose' onClick={handleClickclose} className=' my-1 mx-2 close  '   style={ navi ? {display:'block'}: {display:'none'}} >X</span>
                  <span  id='navbaropen' onClick={handleClickopen} className="navbar-toggler-icon"  style={ navi ? {display:'none'}: {display:'block'}}></span>
                    </button>
  


   
                  

                 
                <div className="collapse navbar-collapse" id="navbar" >
                    <div  style={{}}>
                    <ul className=" navbar-nav"  >
                       <div  style={{marginRight:'50px'}}>
                       <li className="nav-item"  >
                            <Link className="nav-link" to="/productshome" style={{color:'white',fontFamily:'Manrope, san-serif',fontSize:'15px'}}>PRODUCTS</Link>
                        </li>


                       </div>
                       
                     <div style={{marginRight:'50px'}}>
                     <li className="nav-item">
                            <Link className="nav-link" to="/price" style={{color:'white',fontFamily:'Manrope, san-serif',fontSize:'15px'}}>PRICING</Link>
                        </li>

                     </div>
                     <div style={{marginRight:'50px'}}>
                     <li className="nav-item">
                            
 
                     <div className="dropdownresources">
  <a className="nav-item">
  <Link className="nav-link" to="#" style={{color:'white',fontFamily:'Manrope, san-serif', fontSize:'15px'}}>RESOURCES</Link>

  </a>
  <div className="dropdown-content">
  <a href="/contactusnew">Career</a>
    <a href="/blognew">Blogs</a>
    <a href="/contactusnew">Contact Us</a>
   

    <a href="/privacypolicy">Privacy Policy</a>
    <a href="/terms&conditions">Terms and Conditions</a>

  
  </div>
</div>

                        </li>
                        

                     </div>
                      
                       
                         <div className='aboutusmob'>
                         <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{color:'white', fontFamily:'Manrope, san-serif',fontSize:'15px'}}>ABOUT US</Link>
                        </li>
                    
                            
                            </div>   
                            <div  className='navbar_login2'>
                            <li className=""  style={{marginLeft:'-50px'}}>
                            
                            <Link className="nav-link" to="/loginnew"  >LOGIN</Link>
                        </li>
                        
       
                  
            
                        <li className="nav-item" style={{marginLeft:'-50px'}} >
                            <Link className="nav-link" to="/registernew"   >REGISTER</Link>
                        </li>
                       
                  
                    </div>
                    
                     
    
                    </ul>
                    </div>
                  
                </div> 
                <div  className='navbar_login'>
                <div className="dropdownlogin">
                    
            <button  className='btnall'>
            <Link className="" to="/loginnew"  style={{color:'black', fontWeight:'bold'}}>Login</Link>
            </button>
           
  
</div>
<div className="dropdownregister">
<button  className='btnall'>
<Link className="" to="/registernew" style={{color:'black', fontWeight:'bold'}} >Register</Link>
</button>
  
 
</div>


                  

                        
                
                    </div>
            </div> 
            
        </nav>
        </div>
        </div>
    )
    
}

export default Navbartest;
