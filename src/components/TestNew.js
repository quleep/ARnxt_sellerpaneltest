import React from 'react'
import { FaTimes } from 'react-icons/fa'

const TestNew = () => {

  
  return (
    <div>
              	<div class="modal">		
	      	<div class="modal-wrap">
                <span className='closemodal'  >
                    <FaTimes style={{height:'30px' ,width:'30px', color:'red'}}/>
                    </span>	
			   <span>
               <div>
               <div class="circle-loader">
    <div class="checkmark draw"></div>
</div>
     
</div>
<p class="success">Congratulations!</p>
                </span>	
	      		<p> Data Uploaded Successfully.</p>	          		
	      	</div>			          		
      	</div>	
      
    </div>
  )
}

export default TestNew
