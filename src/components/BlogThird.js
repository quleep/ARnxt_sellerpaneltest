import React from 'react'
import { useEffect } from 'react';
import { Metadata } from '../layout/MetaData';

const BlogThird = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      
      return (
          <div>
            <Metadata title={'Blogs'}/>
            <div
            id="privacy"
            className="section section-padding offwhite-bg mt-5 p-5"
          >
            <div className="container text-start">
              {/* heading start */}
              <div className="">
                <h3 className="text-center">Blogs</h3>
                <br/>
                <br/>
                <h3 className="text-center">Augmented reality.</h3>
              </div>
              {/* heading end */}
              {/* description start */}
              <div name="description">
                <p className="section-subtext">

                 

                Augmented Reality

                Augmented reality in our surroundings. To have a better understanding of this technology we need to know about Immersive Technology. What is immersive technology? This might be the query that strikes you now. Immersive Technology is the technology where a user is taken into the virtual world or computer world. The immersive world is divided into three kinds, they are V.R(virtual reality), A.R(augmented reality), M.R(mixed reality).
Past
Virtual Reality, firstly the meaning of the word “virtual” is not real or not fact. So the name itself tells us that it’s an unreal thing. V.R takes to the virtual world by creating computer-generated graphics. It’s completely a computer world. Where every single object is made by the processor with great details. The roots of this technology were from the machine invented by Morton Heiling in the 1950s. His machine Sensorama is embedded with multiple senses like sight, sound, smell, and touch. Virtual reality allows the user an immersive experience where one can go round the world from the place he’s sitting. It’s a revolutionary technology used in many sectors for many uses.
Present
Augmented Reality is similar to virtual reality but again there exist many differences between these two. Virtual reality is a computer world. We get immersed in the computer-generated world. While Augmented reality is a combination of both the virtual and real world. Here real objects are combined with virtual objects. We can find virtual objects in our real world. So, Augmented reality connects the virtual and real world. This technology works similarly to the human brain. It creates 3D maps on real-world surfaces and objects similar to human senses. And then creates virtual objects accordingly on the surface or beside the real-world objects. It uses cameras to perceive objects and surfaces similar to human eyes. It was invented in the 90s by U.S . Air Force for immersive training of pilots. Later it is being used for various purposes and the virtual experience is better than virtual reality since there is a connection with the natural objects. It is being used in many segments in our day-to-day life and various departments like education, medical and defense systems. few examples: 
Google maps use augmented reality to overlay virtual routes on the real road for navigation.
During football, cricket matches, A.R is used to illustrate the pitch and player hits and directions.
IKEA app uses this technology to find the perfect furniture for our place.
Games like Pokemon go use this technology.
Social media also uses A.R, Snapchat filters use this technology.
In Archaeological department, for virtual construction of ruined structures.

Future
Mixed reality is a step forward to Augmented reality, hence also termed as A.R 2.0. Intel explains that it “provides the ability to have one foot (or hand) in the real world, and the other in an imaginary place.” regarding the M.R technology. This technology is in the initial stage of its development.

Hand-stitched by Jayanth Roy     

                      

               </p>
                
                  
                </div>
              </div>
        
            </div>
          </div>
    
    
          
        )
    }
    
export default BlogThird
