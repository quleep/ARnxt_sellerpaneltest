import React from 'react'
import { FaAlignJustify, FaLine, FaRegWindowClose } from 'react-icons/fa'

const Navbarhome = () => {
    const handleclick = ()=>{
        
        document.getElementById('newmodal').classList.add('active')
     }
     const handlemodalclose= ()=>{
 
      
         document.getElementById('newmodal').classList.remove('active')
     
         
     }
  return (
    <div>
        <div className='mainnavbarcontainer' >
            <div className='mainnavbarlogocontainer'>
                <div className='mainnavbarlogoinsidediv'>
                <a href='/'><img src= '/assets/images/arNXTnew.png' /> </a>  

                </div>
                </div>
                <div className='mainnavbarcontentcontainer'>
                    <div className='mainnavbarcontentinsidediv'> 
                      <ul>
                        <li><a href='product'>PRODUCTS</a> </li>
                        <li><a href='/price'> PRICING</a></li>
                        <li><a href='/blog'>BLOGS</a></li>
                        <li><a href='/arview'>VIEW IN ROOM</a></li>

                        <li><a href='/contact'>CONTACT US</a></li>

                      </ul>

                    </div>
                      
                </div>
                <div className='mainnavbarlogincontainer'>
                   <div className='mainnavbarlogincontainerinside'>
                        <a href='/login'>
                            LOG IN
                        </a>

                        <a href='/arview'><button> FREE TRIAL</button></a> 

                   </div>

                </div>

        </div>
        <div className='mainnavbarcontainermobile' >
            <div className='mainnavbarlogocontainermobile'>
                <div className='mainnavbarlogoinsidediv'>
                <a href='/'><img src= '/assets/images/arNXTnew.png' /> </a>  

                </div>
                </div>
                <div className='mainnavbarcontentcontainermobile'>
                 
                      
                </div>
                <div className='mainnavbarlogincontainermobile'>
                <div className='mainnavbarlogincontainerinside'>
                        <a href='/login'>
                            LOG IN
                        </a>

                        <button> FREE TRIAL</button>
                        <FaAlignJustify onClick={handleclick} className='mainnavbarcontainericon' />

                   </div>

                </div>
                <div className='modalmainnavbarmobile' id='newmodal'>
                    <div className='modal-contentmainnavbarmobile'>

             <div className='mainnavbarcontainermobile' >
               <div className='mainnavbarlogocontainermobile'>
                <div className='mainnavbarlogoinsidediv'>
                <a href='/'><img src= '/assets/images/arNXTnew.png' /> </a>  

                </div>
                </div>
                <div className='mainnavbarcontentcontainermobile'>
                 
                      
                </div>
                <div className='mainnavbarlogincontainermobile'>
                <div className='mainnavbarlogincontainerinside'>
                        <a href='/login'>
                            LOG IN
                        </a>

                        <button> FREE TRIAL</button>
                      
                        <FaRegWindowClose onClick={handlemodalclose} className='mainnavbarcontainericon' />

                   </div>

                </div>
             

        </div>
        <div className='mainnavbardropdowncontainer'> 
                    <ul>
                    <li><a href='product'>PRODUCTS</a> </li>
                        <li><a href='/price'> PRICING</a></li>
                        <li><a href='/blog'>BLOGS</a></li>
                        <li><a href='/arview'>VIEW IN ROOM</a></li>

                        <li><a href='/contact'>CONTACT US</a></li>

                      </ul>

                    </div>
                    </div>

               

                </div>

        </div>
      
      
    </div>
  )
}

export default Navbarhome
