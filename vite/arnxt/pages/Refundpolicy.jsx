import React from 'react'
import Navbarhome from '../components/Navbarhome'
import { Helmet } from 'react-helmet'
import Footercomponent from '../components/Footercomponent'

const Refundpolicy = () => {
  return (
    <div>
            <Navbarhome />
      <Helmet>
        <title>
          Arnxt - Refund policy | Augmented Reality | Metaverse{" "}
        </title>
        <meta
          name="description"
          content="Please read our terms and conditions carefully before using this website. "
        />
        <meta
          name="keywords"
          content="
          
          Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
          
          
          
          "
        />
      </Helmet>

      <div className='container'  style={{marginTop:'50px', display:'flex', flexDirection:'column', marginBottom:'300px'}}>

      <div name="description" className=" container-fluid"  >
          <h3 style={{marginLeft:'30px', marginTop:'10px'}}>
            Our Refund Policy
          </h3>
          </div>

          <div style={{marginTop:'80px', textAlign:'justify'}}>

            <ul style={{listStyleType:'disc'}}>

                <li>
                In order to avail our refund policy, the refund request should be requested within 15 days after receiving the subscription.
                </li>
                <li>
                On receipt of the refund request, it goes through a formal backend-check.
                </li>
                <li>
                If the checking is successfull, we will initiate the refund process and you will receive the amount within 5-7 days.
                </li>

            </ul>

            <p>
        
            </p>
            </div>

      </div>

      <Footercomponent/>
      
    </div>
  )
}

export default Refundpolicy
