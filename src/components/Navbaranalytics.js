import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Navbaranalytics = () => {

    const [brandimageurl, setBrandImageUrl] = useState()

const branddetailsurl= 'https://3ef9gn5kk2.execute-api.ap-south-1.amazonaws.com/arnxt_prod/brands/details'

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  useEffect(()=>{

     const loginclient = sessionStorage.getItem('client')
     let newbrandvalue;
    if(loginclient === null){
      history.push('/loginanalytics')
    }else{
      newbrandvalue =   capitalizeFirstLetter(loginclient)
    }

    const brandvalue = "Excel"
    const brandbody={
      
        brandID: newbrandvalue
      }
    
      Axios.post(branddetailsurl, brandbody).then(res=>{
       setBrandImageUrl(res.data.iconUrl)
        
      }).catch(error=>{
        console.log(error)
      })

  },[])
  const history = useHistory()
  const handlelogout = ()=>{
    sessionStorage.removeItem('client')
    history.push('/loginanalytics')
  }

  return (
    <div>
          <div className="navbaranalytics">
      <div className="logoanalytics">
        <img src={brandimageurl && brandimageurl} alt="Logo" />
      </div>
      <div className="logoutanalytics">
        <button onClick={handlelogout}>Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Navbaranalytics
