import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footertest from './Footertest'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useHistory, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaGreaterThan } from 'react-icons/fa';

const ViewAR = () => {
    const productdetailsurl= 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getproducttable'
    const categoryurl = 'https://eh16rizdbi.execute-api.ap-south-1.amazonaws.com/production/allcategory'
    const fetchsubcat = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsubcategoryitems'
    const fetchtagdata = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/gettags'
    const [allproducts, setAllProducts] = useState()
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const [offsetvalue, setOffsetValue] = useState();
    const [activepagevalue, setActivePagevalue] = useState(0)
    const [categorydata, setCategoryData] = useState()
    const [subcatvalue, setSubCatValue] = useState('')
    const [subcategoryitems, setSubCategoryItems] = useState()

    const location = useLocation()

    useEffect(()=>{
      if(location.state && location.state.arviewreturn === 'true' && location.state.offsetvalue > 10){
         setActivePagevalue(location.state.offsetvalue/10)
        setOffset(location.state.offsetvalue)
      }else{
        setOffset(0)
        setActivePagevalue(0)

      }

    },[])

    useEffect(()=>{
     let newarr =[]
      axios.get(categoryurl).then(res=>{
         for (let i =0 ; i< res.data.length ; i++){
          if (res.data [i].category === 'Furniture'){
            newarr[0] = res.data[i]
          }
          if (res.data [i].category === 'Bathroom'){
            newarr[1] = res.data[i]
          }
          if (res.data [i].category === 'Furnishing'){
            newarr[2] = res.data[i]
          }
          if (res.data [i].category === 'Electrical'){
            newarr[3] = res.data[i]
          }
          if (res.data [i].category === 'Electronics'){
            newarr[4] = res.data[i]
          }
          if (res.data [i].category === 'Decorative'){
            newarr[5] = res.data[i]
          }
          if (res.data [i].category === 'Walls'){
            newarr[6] = res.data[i]
          }
          if (res.data [i].category === 'Floors'){
            newarr[7] = res.data[i]
          }
         }
        setCategoryData(newarr)
         
      }).catch(error=>{
        console.log(error)
      })

    },[])

   
      
   const history = useHistory()
    useEffect(()=>{
      axios.get(productdetailsurl).then(res=>{
        setAllProducts(res.data)
      
        setPageCount(Math.ceil(res.data.length / perPage))
       
      }).catch(error=>{
        console.log(error)
      })  

    },[])
 


    const slice = allproducts && allproducts.slice(offset, offset + perPage)

  

    
    const handlePageClick=(e)=>{
      window.scrollTo(0,0)
        
        const selectedPage = e.selected;
        
        setOffsetValue(e.selected)
        setOffset(selectedPage*10)

       
    }

   
    const handleDetails=(item)=>{

        if(item.modelrequired === 'true'){
            history.push({
                pathname: '/details',
                state: {
                  id: item.product_Id,
                  offsetvalue: offsetvalue*10
                }
            })
        }
      if(item.modelrequired === 'false'){
        history.push({
            pathname: '/webdetails',
            state: {
              id: item,
              offsetvalue: offsetvalue*10
            }
        })
      }
    }

   const handlemodalclick =()=>{
    document.querySelector('.modalnew').style.display ='block'
   }
   const handleclosemodal = ()=>{
    document.querySelector('.modalnew').style.display ='none'

   }
   let tempsub;
   const handlecategoryclick = (val)=>{
      setSubCatValue(val)
      document.querySelector('.subcategorydiv').style.display = 'block'
      document.querySelector('.tagsdiv').style.display = 'none'
      document.querySelector('.categorydiv').style.display = 'none'

   }

   const handlegoback =(e)=>{
    e.preventDefault()
    document.querySelector('.subcategorydiv').style.display = 'none'
    document.querySelector('.tagsdiv').style.display = 'block'
    document.querySelector('.categorydiv').style.display = 'block'
   }

   const handlesubcatclick =(val)=>{
     const body= {
       subcategory: val
     }
     axios.post(fetchsubcat, body).then(res=>{
       if(res.data.length === 0){
        window.scrollTo(0,0)
        document.querySelector('.nodatapopup').style.display = 'flex'
       }
       if(res.data.length > 0){
        document.querySelector('.nodatapopup').style.display = 'none'

       }
       setOffset(0)
       setAllProducts(res.data)
       setPageCount(Math.ceil(res.data.length / perPage))
    document.querySelector('.modalnew').style.display ='none'

     }).catch(error=>{
      console.log(error)
     })
   }

   const handletagsdata = ()=>{
      const body = {
        tags : "New"
      }
      axios.post(fetchtagdata, body).then(res=>{
          if(res.data.length > 0){
            window.scrollTo(0,0)
        document.querySelector('.nodatapopup').style.display = 'none'

          }
       setOffset(0)
          
          setAllProducts(res.data)
          setPageCount(Math.ceil(res.data.length / perPage))
    document.querySelector('.modalnew').style.display ='none'

      }).catch(error=>{
        console.log(error)
      })
   }

   const handletagsdatalatest = ()=>{
    const body = {
      tags : "Top Picks"
    }
    axios.post(fetchtagdata, body).then(res=>{
      if(res.data.length > 0){
        window.scrollTo(0,0)
        document.querySelector('.nodatapopup').style.display = 'none'

          }
       setOffset(0)

       setAllProducts(res.data)
       setPageCount(Math.ceil(res.data.length / perPage))
    document.querySelector('.modalnew').style.display ='none'

    }).catch(error=>{
      console.log(error)
    })
 }

 const handletagsdatafeatured = ()=>{
  const body = {
    tags : "Featured"
  }
  axios.post(fetchtagdata, body).then(res=>{
    if(res.data.length > 0){
      window.scrollTo(0,0)
      document.querySelector('.nodatapopup').style.display = 'none'

        }
       setOffset(0)

     setAllProducts(res.data)
     setPageCount(Math.ceil(res.data.length / perPage))
    document.querySelector('.modalnew').style.display ='none'

  }).catch(error=>{
    console.log(error)
  })
}
const handlebackproduct =()=>{
  document.querySelector('.modalnew').style.display ='block'
  document.querySelector('.subcategorydiv').style.display = 'block'
  document.querySelector('.tagsdiv').style.display = 'none'
  document.querySelector('.categorydiv').style.display = 'none'

}

  
  return (
    <div>
       <Navbar/>

       
       <div className='modelbuttoncontainer'>
        <div className='hamfilterbutton'  onClick={handlemodalclick}>
        <span className='linesfilter'></span>
        <span className='linesfilter'></span>
        <span className='linesfilter'></span>
         
        </div>
          

       <p id="openModalButton " > All data</p>
       </div>
       <div className='nodatapopup'>
        <div className='popupdata'>
          <p>Remodelling to perfection</p>
          <button  onClick={handlebackproduct} >Go back</button>
        </div>
       </div>
      
    <div id="modal" class="modalnew">
        <div class="modal-content">
            <span class="close" id="closeModalButton" onClick={handleclosemodal}>&times;</span>
            <div className='modaldata'>
              <div className='tagsdiv'>
                <h2>Trending</h2>
                 <ul>
                  <li onClick={handletagsdata}>
                    <p>New</p>
                  </li>
                  <li>
                    <p onClick={handletagsdatalatest} >Top Picks</p>
                  </li>
                  <li onClick={handletagsdatafeatured}>
                    <p>Featured</p>
                  </li>
                 </ul>

              </div>
              <div className='categorydiv'>
              <h2> Category Items</h2>
                 <ul>
                  {
                    categorydata && categorydata.map((item,index) =>(

                          
                      <li  onClick={()=>handlecategoryclick(item.category)}>
                       <p>{item.category}  <FaGreaterThan style={{float:'right', margin:'5px'}} /> </p> 
                      
                      </li>
                    ))
                  }
                 
               
                 </ul>
              </div>
              <div className='subcategorydiv'>

                <button  type='submit' onClick={handlegoback} > <FaArrowLeft/> Go back</button>
              <h2>Subcategory Items</h2>
                 <ul>
                   {
                    categorydata && categorydata.map(item=>(
                      item.category === subcatvalue ?
                         item.subcategory.map(itemnew=>(
                          <li  onClick={()=>handlesubcatclick(itemnew)} ><p>{itemnew}</p></li>
                         )) : ''
                    ))
                   }
                 </ul>
              </div>
             

            </div>
        </div>
    </div>

        <div className='arviewcontainer'>
            <div className='arproductscontainer'>
                {
                    slice && slice.map(item=>(
                        <div>
                        <div className='arproductcard'>
                               
                           <img src={item.imageurl && item.imageurl[0]}/>
    
                             <button onClick={()=>handleDetails(item)}>View Details</button>
         
                           
    
                        </div>
       
                    </div>
                    

                    ))
                    
                }
              
          
                
              


            </div>
            <div className='paginationcontainer'>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    forcePage={activepagevalue}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"paginationar"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
       
      

        </div>
        <Footertest/> 
      
    </div>
  )
}

export default ViewAR
