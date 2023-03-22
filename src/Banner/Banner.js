import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"
import React from 'react'
import reactLogo1 from "./bob.jpg"
import reactLogo2 from "./Health.jpg"
import reactLogo3 from "./kitchen.jpg"
import reactLogo4 from "./kurtaset.jpg"
function Banner() {
    return (
      <div>
      <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        
                  <div className='Banner'>
                      <img className="Bannerimg" src={reactLogo1} alt="" />
                      
                  </div>
                  <div className='Banner'>
                      <img  className="Bannerimg"  src={reactLogo2}  alt="" />
                      
                  </div>
                  <div className='Banner'>
                      <img  className="Bannerimg"  src={reactLogo3} alt="" />
                  </div>
                  <div className='Banner'>
                      <img  className="Bannerimg"  src={reactLogo4} alt="" />
                  </div>
              </Carousel>
              
              </div>
      // <div className='Banner'>
      //     <img src={reactLogo}/>
      // </div>
    )
  }
  
  export default Banner;