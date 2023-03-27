import React, { useState, useEffect } from 'react'
import { FaTimes,FaSignOutAlt } from 'react-icons/fa';
import '../css/header.css';
import url from '../serverURL';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';
import axios from 'axios';


// importing images
import logo from "../img/logo.png"



// component block start

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [secDropdownOpen, setsecDropdownOpen] = useState(false);

    const [obj, setObj] = useState({ name: '', user: null, admin: false });

    const toggle = () => setIsOpen(!isOpen);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const secToggleDropdown = () => setsecDropdownOpen(prevState => !prevState);

    const { name, user, admin } = obj;
    const [email, setEmail] = useState(false);

  



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


    // component jsx return block

    if ( typeof sessionStorage.getItem('user') === "string")   {
        return (
        
            <div className=''  >

                {/* On request submit alert */}
                <h1 className='contact__alert' id='contactAlert'>
                    Your message is submitted. We will be in touch with you soon.
                </h1>

                <NavLink tag={Link} to="/" className="userPage__brand">
                    <img src={logo} style={{height:'60px'}} alt="arnxt-logo" />
                </NavLink>

                <div className="burger" onClick={dropDownAnimator}>
                    <div className="burger__area"></div>
                </div>

                <div className="dropDownNav userPage__dropDownNav" id='dropDownNav' >
                   
                    <NavLink tag={Link} to="/logoutuser" className="dropDownNav__link">
                        Logout
                    </NavLink>
                </div>

                
                <div className="userPage__links"  style={{marginRight:'-550px'}}>
                   
                    <NavLink tag={Link} className="userPage__link" to="/logoutuser">
                        Logout        <FaSignOutAlt/>
                    </NavLink>
                </div>

            </div>
        )
    }

    if (typeof sessionStorage.getItem('token') === "string" && user === false) {
        return (
          <div className="merchPage__header">
            <NavLink tag={Link} to="/" className="merchPage__brand">
              <img src={logo} style={{height:'60px'}}alt="arnxt-logo" />
            </NavLink>

            {/* On request submit alert */}
            <h1 className="request__alert" id="requestAlert">
              Your request is submitted. We will be in touch with you soon.
            </h1>

            <div className="burger" onClick={dropDownAnimator}>
              <div className="burger__area"></div>
            </div>

            <div
              className="dropDownNav merchPage__dropDownNav"
              id="dropDownNav"
            
            >
              <NavLink
                tag={Link}
                to="/merchant_profile"
                className="dropDownNav__link"
              >
                {name}
              </NavLink>
              <NavLink tag={Link} to="/plans" className="dropDownNav__link">
                Plans
              </NavLink>
              <NavLink tag={Link} to="/models" className="dropDownNav__link">
                Models
              </NavLink>
              <NavLink
                tag={Link}
                to="/transaction_history"
                className="dropDownNav__link"
              >
                Transaction History
              </NavLink>
              <NavLink
                tag={Link}
                to="/merch_guide"
                className="dropDownNav__link"
              >
                Merchant Guide
              </NavLink>
              <NavLink
                tag={Link}
                to="/requestDemo"
                className="dropDownNav__link"
              >
                Request Demo
              </NavLink>
              <NavLink tag={Link} to="/logout" className="dropDownNav__link">
                Logout
              </NavLink>
            </div>

            <div className="merchPage__links" >
              <NavLink
                tag={Link}
                to="/merchant_profile"
                className="merchPage__link merchPage__profileName"
              >
                {name}
              </NavLink>

              <NavLink className="merchPage__link" tag={Link} to="/plans">
                Plans
              </NavLink>
              <NavLink tag={Link} className="merchPage__link" to="/models">
                Models
              </NavLink>
              <NavLink
                tag={Link}
                className="merchPage__link"
                to="/transaction_history"
              >
                Transaction History
              </NavLink>
              <NavLink tag={Link} to="/merch_guide" className="merchPage__link">
                Merchant Guide
              </NavLink>
              <NavLink tag={Link} to="/requestDemo" className="merchPage__link">
                Request Demo
              </NavLink>
              <NavLink tag={Link} className="merchPage__link" to="/logout">
                Logout
              </NavLink>
            </div>
          </div>
        );
    }

    if (typeof sessionStorage.getItem('token') === "string" && admin === true) {

        return (
          <div className="adminPage__header">
            <NavLink tag={Link} to="/" className="adminPage__brand">
              <img src={logo} style={{ height: "60px" }} alt="arnxt-logo" />
            </NavLink>

            <div className="burger" onClick={dropDownAnimator}>
              <div className="burger__area"></div>
            </div>

            <div
              className="dropDownNav adminPage__dropDownNav"
              id="dropDownNav"
            >
              <NavLink tag={Link} to="/approvemodels" className="dropDownNav__link">
                Approve Models
              </NavLink>
              <NavLink tag={Link} to="/addtag" className="dropDownNav__link">
                Add Tag
              </NavLink>
              <NavLink tag={Link} to="/users" className="dropDownNav__link">
                Users
              </NavLink>
              <NavLink tag={Link} to="/merchants" className="dropDownNav__link">
                Merchants
              </NavLink>
              <NavLink tag={Link} to="/logout" className="dropDownNav__link">
                Logout
              </NavLink>
            </div>

            <div className="adminPage__links">
              <NavLink tag={Link} className="adminPage__link" to="/users">
                Users
              </NavLink>
              <NavLink tag={Link} className="adminPage__link" to="/merchants">
                Merchants
              </NavLink>
              <NavLink tag={Link} to="/approvemodels" className="adminPage__link">
                Approve Models
              </NavLink>
              <NavLink tag={Link} to="/addtag" className="adminPage__link">
                Add Tag
              </NavLink>
              <NavLink tag={Link} className="adminPage__link" to="/logout">
                Logout
              </NavLink>
            </div>
          </div>
        );
    }

    if (typeof sessionStorage.getItem('token') === "string"  && admin === false) {
        return (
            null
        )
    }

    if (typeof sessionStorage.getItem('token') !== "string") {

        return (
          <div className='' >
          <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-dark py-3" aria-label="Main navigation">
          <div className="container">

            
          
               <Link className="navbar-brand logo-text" to="/"> <img className="img-fluid" style={{height:'60px'}} src="assets/images/logo.png" alt="alternative" /> </Link>


              <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"   >
                  <div  style={{marginLeft:'180px'}}>
                  <ul className="navbar-nav ms-auto navbar-nav-scroll"  >
                     <div  style={{marginRight:'50px'}}>
                     <li className="nav-item"  >
                          <Link className="nav-link" to="/products">PRODUCTS</Link>
                      </li>


                     </div>
                     
                   <div style={{marginRight:'50px'}}>
                   <li className="nav-item">
                          <Link className="nav-link" to="/price">PRICING</Link>
                      </li>

                   </div>
                   <div style={{marginRight:'50px'}}>
                   <li className="nav-item">
                          

                   <div className="dropdownresources">
<a className="nav-item">
<Link className="nav-link" to="">RESOURCES</Link>

</a>
<div className="dropdown-content">
  <a href="/blog">Blogs</a>
  <a href="/contact">Contact Us</a>
  <a href="/privacypolicy">Privacy Policy</a>
  <a href="/terms&conditions">Terms and Conditions</a>


</div>
</div>

                      </li>
                      

                   </div>
                    
                     
                       <div style={{marginRight:'50px'}}>
                       <li className="nav-item">
                          <Link className="nav-link" to="/about">ABOUT US</Link>
                      </li>
                  
                          
                          </div>   
                          <div  className='navbar_login2'>
                          <li className="nav-item"  style={{marginLeft:'-50px'}}>
                          
                          <Link className="nav-link" to="/login"  >LOGIN</Link>
                      </li>
                      
     
                
          
                      <li className="nav-item" style={{marginLeft:'-50px'}} >
                          <Link className="nav-link" to="/register">REGISTER</Link>
                      </li>
                     
                
                  </div>
                  
                   
  
                  </ul>
                  </div>
                
              </div> 
              <div  className='navbar_login'>
              <div className="dropdownlogin">
<button className="btn-solid-lg">Login</button>
<div className="dropdown-content">
  <a href="/login">Freemium Login</a>
  <a href="/merchant_login">Premium Login</a>

</div>
</div>
<div className="dropdownregister">
<button class="btn-solid-lg">Register</button>
<div className="dropdown-content">
  <a href="/register">Freemium Register</a>
  <a href="/merchant_register">Premium Register</a>

</div>
</div>


                

                      
              
                  </div>
          </div> 
      </nav>
      </div>
         
        );
    }

}

export default Navbar;