import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logotip from "../Logo/isuzu.png"
import Daf from '../Logo/daf.png'
import Hino from '../Logo/Hino.png'
// import Hyndai from '../Logo/Hyundai.gif'
import Iveco from '../Logo/iveco.png'


const Logo = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="container">
    <AliceCarousel 
    autoPlayInterval={3000}
    autoPlay={true}
    fadeOutAnimation={true}
    mouseDragEnabled={true}
    disableAutoPlayOnAction={true}
     >
      <img width="50%" height="50%" src={Logotip} onDragStart={handleOnDragStart}  />
      <img width="50%" height="50%" src={Daf} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img width="50%" height="50%" src={Hino} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img width="50%" height="50%" src={Logotip} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img width="50%" height="50%" src={Iveco} onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
    </div>
  )
}
export default Logo;