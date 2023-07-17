import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const Plan = () => {
    const paymenturl= 'https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/order';
const verifyurl='https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment';

    const [pricecheckbasic, setPriceCheckBasic] = useState(false)
    const [pricecheckpremium, setPriceCheckPremium] = useState(false)
    const [pricecheckpro, setPriceCheckPro] = useState(false)


    const handleToggleClickBasic= ()=>{
        setPriceCheckBasic(!pricecheckbasic)
    }
    const handleToggleClickPremium= ()=>{
        setPriceCheckPremium(!pricecheckpremium)
      }
      const handleToggleClickPro= ()=>{
        setPriceCheckPro(!pricecheckpro)
      }
    const handleBuyBasic =(value)=>{
        let subsid= 'Sub8999'
        let planid= 'Plan8999'
        let plan_name= 'Basic plan'
        let desc= 'Basic plan (6 months)'

        const requestbody={
            amount: value,
            plan_Id: planid,
            subscription_Id: subsid,
            planname: plan_name,
            desc: desc
           

        }
        axios.post(paymenturl, requestbody).then(response=>{
            
        
        let options = {
            key: "rzp_test_l5Zne5v6xWk2I1",
            amount: value, 
            currency: "INR",
            name: "Arnxt.com", 
            description: "Payment for Basic plan",
            image: 'https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/arnxtreg.png',
            order_id: response.data.id,
            callback_url: "https://1t4lfd0rz7.execute-api.ap-south-1.amazonaws.com/razorpay/verifypayment",
            prefill: {
                name: "", 
                email: "",
                contact: ""
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        let rzp1 = new window.Razorpay(options);

          rzp1.open();
    
                 
              
             
        }).catch(error=>{
            console.log(error);
        })


  
      
    
    }   
   
  return (
    <div>
        <Navbar/>
        <div class="section-prices">
<h2 class="section-header">Our Pricing</h2>
<div class="list-boxs">
	<div class="card starter">
    <div class="head">
    

    <div className="pricechangedashboard" >
  <div  className="">

    <p  >Quarterly</p>
  </div>
  <div className="toggleswitch">

<input type="checkbox" className=""   onClick={handleToggleClickBasic} />

  </div>

  <div className="">
    <p  >Annually</p>
  </div>


 

</div> 
		</div>
		<div class="head">
			Starter
		</div>
		<div class="ticket" style={ pricecheckbasic ? {backgroundColor:'#275e3e'}: {backgroundColor:'rgb(44, 62, 224)'}}>{pricecheckbasic ? '₹ 29,999' : '₹ 8,999' }</div>
		<div class="body">
			<p>
			 No of Products : 10 <br/>
             Number of 3D views/month : {pricecheckbasic ? '50,000' : '10,000' }

			</p>
			<button class="btn"   onClick={()=>handleBuyBasic(pricecheckbasic ? '1' : '1')}>Buy Now</button>
		</div>
	</div>
	<div class="card standard">
        <div className='head'>
        <div className="pricechangedashboard" >
  <div  className="">

    <p  >Quarterly</p>
  </div>
  <div className="toggleswitch">

<input type="checkbox" className=""   onClick={handleToggleClickPremium} />

  </div>

  <div className="">
    <p  >Annually</p>
  </div>


 

</div> 
            </div>
		<div class="head">
		   Basic
		</div>
		<div class="ticket" style={ pricecheckpremium ? {backgroundColor:'#275e3e'}: {backgroundColor:'rgb(44, 62, 224)'}}   >{pricecheckpremium ? '₹ 1,29,999' : '₹ 35,999'}</div>
		<div class="body">
			<p>
            No of Products : 100<br/>
             Number of 3D views/month : {pricecheckpremium ? '2,50,000' : '50,000'}
			</p>
			<button class="btn">Buy Now</button>
		</div>
	</div>
	<div class="card premium">
        <div className='head'>
        <div className="pricechangedashboard" >
  <div  className="">

    <p  >Quarterly</p>
  </div>
  <div className="toggleswitch">

<input type="checkbox" className=""   onClick={handleToggleClickPro} />

  </div>

  <div className="">
    <p  >Annually</p>
  </div>


 

</div> 

        </div>
		<div class="head">
			Premium
		</div>
		<div class="ticket" style={ pricecheckpro ? {backgroundColor:'#275e3e'}: {backgroundColor:'rgb(44, 62, 224)'}}>{pricecheckpro ? '₹ 3,69,999' : '₹ 99,999'}</div>
		<div class="body">
			<p>
            No of Products : 500 <br/>
             Number of 3D views/month : Unlimited
			</p>
			<button class="btn">Buy Now</button>
		</div>
	</div>
</div>
</div>
      
    </div>
  )
}

export default Plan
