import React from 'react'
import { Metadata } from '../layout/MetaData';

const Blognew = () => {
  return (
    <div>
      <Metadata  title={'Blogs'}/>
        <div className='blogdiv'>
            <div>
            <div className="cardblog">
  <img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
  <div className="card-body1">
    <h5 className="card-title">Opportunities for AR in Retail Market</h5>
    <p className="card-text">Retailers are instead turning to AR to help customers digitally test out thousands of beauty products to assist in buying decisions.......</p>
    <a href="/blog" className="btn btn-primary">Read more.</a>
  </div>
</div>
            </div>
            <div>
            <div className="cardblog" >
  <img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
  <div className="card-body1">
    <h5 className="card-title">Augmented reality stating the technology as differentiator, its use case specifically towards Retail.</h5>
    <p className="card-text">What Is Virtual Reality (VR)?.......</p>
    <a href="/blogsecond" className="btn btn-primary">Read more.</a>
  </div>
</div>
            </div>
            
            <div>
            <div className="cardblog" >
  <img src="/assets/images/blogimage1.jpg"  style={{}} className="card-img-top" alt="..."/>
  <div className="card-body1">
    <h5 className="card-title">Augmented reality</h5>
    <p className="card-text">  Augmented reality in our surroundings. To have a better understanding of this technology we need to know .....</p>
    <a href="/blogthird" className="btn btn-primary">Read more.</a>
  </div>
</div>
            </div>
            
            



        </div>
 
      
    </div>
  )
}

export default Blognew;
