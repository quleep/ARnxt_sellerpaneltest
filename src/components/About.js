import React, {useEffect} from 'react';
import Fade from "react-reveal/Fade"
import { VscTools } from "react-icons/vsc";
import { IoLayersOutline } from "react-icons/io5";
import { BsSpeedometer } from "react-icons/bs";
import { Metadata } from '../layout/MetaData';

function About() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Metadata title={'About'}/>
   
      <div  className='aboutdivmain' >

      
     <div className='aboutdiv'>
     <div  className='aboutheader'>
      <h4>About us</h4>

      </div>
      
      <p>
      We are Quleep, a Made in India  company, working in the area of Metaverse with Global Class Products.
      </p>
      <p>
      We have two products :-
      </p>
      <p>
      1.<b style={{fontFamily:'Manrope, san-serif', fontSize:'18px',fontWeight:'bold' }} > Arnxt</b> - India’s first Augmented reality market place where the company’s stand-out feature is its DIY(Do-It-Yourself) features.
                           Now, you can design your complete house by choosing from widest range of categories like Furniture, Flooring elements,
                            Wall Paints, Wall Papers, Bathroom accessories, Decorative and many more. All from the comfort of your phone.
      </p>
      <p>
      2.<b style={{fontFamily:'Manrope, san-serif', fontSize:'18px', fontWeight:'bold'}} >  Festemverse</b>- India's first Festive Metaverse Universe highlighting India's rich Culture, Heritage,
                          Events & Festivals. Extending Global experience into futuristic technology, providing an unmatched experience throughout.
      </p>

     </div>
     </div>
      
      <div id="services" className="cards-1 bg-gray"  style={{}}>
        <div className="container">
          <div className="">
            <div className="col-lg-12">
              
            </div>
          </div>
          <div className="">
            <div className="col-lg-12">
              <Fade distance="50px" duration="1500" up>
                <div className="card">
                  <div className="card-icon mx-auto">
                   
                   <img  src='assets/images/analysis.png' style={{width:'60px', height:'60px',}}/>
                      
                      
                  
                     
                  
                  </div>
                  <div className="card-bodyabout">
                    <h5 className="card-title"  style={{fontFamily:'Manrope, san-serif', fontSize:'25px', fontWeight:'bold'}} >Vision</h5>
                    <p  style={{fontFamily:'Manrope, san-serif', fontSize:'20px', fontWeight:'bold'}} >
                    "Create a reliable shopping experience."
                    </p>
                    {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                  </div>
                </div>
              </Fade>

              <Fade distance="50px" duration="1500" up>
                <div className="card">
                  <div className=" mx-auto "  style={{marginBottom:'35px'}}>
                  <img  src='assets/images/missionnew.png' style={{width:'60px', height:'60px'}}/>
                   
                  </div>
                  <div className="card-bodyabout">
                    <h5 className="card-title"   style={{fontFamily:'Manrope, san-serif',fontSize:'25px', fontWeight:'bold'}}>Mission</h5>
                    <p   style={{fontFamily:'Manrope, san-serif',fontSize:'20px', fontWeight:'bold'}}>
                    " Become the best experiential commerce platform"
                    </p>
                    {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                  </div>
                </div>
              </Fade>
              <Fade distance="50px" duration="1500" up>
                <div className="card">
                  <div className="card-icon mx-auto green">
                  <img  src='assets/images/values.png' style={{width:'60px', height:'60px'}}/>
                  
                  </div>
                  <div className="card-bodyabout">
                    <h5 className="card-title"   style={{fontFamily:'Manrope, san-serif',fontSize:'25px', fontWeight:'bold'}}>Principle!</h5>
                    <p   style={{textAlign:'justify',fontFamily:'Manrope, san-serif',fontSize:'20px', fontWeight:'bold', marginLeft:'90px'}}>
                    Simplify to  think big.
                    </p>
                    {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
     { /*
      <div style={{width:'100%', height:'10px', backgrounColor:'white'}}></div>
        <div><h1  style={{color:'rgb(172,146,146)',fontFamily:'Manrope, san-serif'}}>Our Teams</h1></div>
      <div className='team_div'>
        <div>
          <div className="team-image-div">
            <div className='imagecont' >
              <img src='assets/images/viveksir.PNG' style={{border:'', width:'150px', height:'160px', backgroundColor:'', borderRadius:'50%'}} />
            </div>
            <div className='imagetitle' >
              <h3>vivek Jha <span style={{}} ><a href='' ><img src='assets/images/linkedin.png' style={{height:'25px', width:'25px', marginTop:'-8px'} }/></a></span> </h3>
              

            </div>
            <div className='imagelink' >
              <p style={{fontSize:'20px'}}>Founder</p>

            </div>
          </div>
        </div>
        <div></div>

        <div></div>

        


      </div> */}


      <div className='hiring_div ' >
        <div className='hiring_content'>
          <h2 className=''> Come join us !</h2>
        

        </div>
        <div className='joinus'>
        <button className='btnaboutus' > View openings</button>


        </div>

      </div>

      {/*
      <div style={{width:'100%', height:'10px', backgrounColor:'white'}}></div>
      <div><h1  style={{color:'rgb(172,146,146)',fontFamily:'Manrope, san-serif'}}>Our Mentors</h1></div>
      <div className='team_divmen'>
        <div>
          <div className="team-image-divmen">
            <div className='imagecontmen' >
              <img src='assets/images/amrishjain.jfif' style={{border:'', width:'150px', height:'160px', backgroundColor:'', borderRadius:'50%'}} />
            </div>
            <div className='imagetitlemen' >
              <h3>Ambrish Jain<span style={{}} ><a href='https://www.linkedin.com/in/ambrish-jain-331b95228' ><img src='assets/images/linkedin.png' style={{height:'25px', marginLeft:'3px',
               width:'25px', marginTop:'-8px'} }/></a></span> </h3>
              

            </div>
            <div className='imagelinkmen' >
              <p style={{fontSize:'20px'}}>Mentor</p>

            </div>
          </div>
        </div>
        
        <div>
   
        <div className="team-image-divmen">
            <div className='imagecont' >
              <img src='assets/images/amrishjain.jfif' style={{border:'', width:'150px', height:'160px', backgroundColor:'', borderRadius:'50%'}} />
            </div>
            <div className='imagetitlemen' >
              <h3>Ambrish Jain<span style={{}} ><a href='https://www.linkedin.com/in/ambrish-jain-331b95228' ><img src='assets/images/linkedin.png' style={{height:'25px', marginLeft:'3px',
               width:'25px', marginTop:'-8px'} }/></a></span> </h3>
              

            </div>
            <div className='imagelinkmen' >
              <p style={{fontSize:'20px'}}>Mentor</p>

            </div>
          </div>

        </div>

       

        


      </div> 

      */}




    </div>
  );
}

export default About;
